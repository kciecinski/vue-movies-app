import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);

const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
const ADD_10_MOVIES = 'ADD_10_MOVIES';
const SET_LOADING = 'SET_LOADING';
const ADD_ACTORS = 'ADD_10_ACTORS';
const SET_TITLE_FILTER = 'SET_TITLE_FILTER';
const SET_YEAR_FROM_FILTER = 'SET_YEAR_FROM_FILTER';
const SET_YEAR_TO_FILTER = 'SET_YEAR_TO_FILTER';
const SET_CAST_FILTER = 'SET_CAST_FILTER';

export default new Vuex.Store({
  state: {
    movies: [],
    moviesLimit: 10,
    loading: false,
    actorsLimit: 10,
    titleFilter: '',
    yearFromFilter: '',
    yearToFilter: '',
    castFilter: '',
  },
  mutations: {
    [GET_ALL_MOVIES](state, movies) {
      state.movies = movies;
    },
    [ADD_10_MOVIES](state, limit) {
      state.moviesLimit += limit;
    },
    [ADD_ACTORS](state, limit) {
      state.actorsLimit += limit;
    },
    [SET_LOADING](state, loading) {
      state.loading = loading;
    },
    [SET_TITLE_FILTER](state, title) {
      state.titleFilter = title;
    },

    [SET_YEAR_FROM_FILTER](state, yearFrom) {
      state.yearFromFilter = yearFrom;
    },

    [SET_YEAR_TO_FILTER](state, yearTo) {
      state.yearToFilter = yearTo;
    },

    [SET_CAST_FILTER](state, castMember) {
      state.castFilter = castMember;
    },
  },
  getters: {
    movies(state) {
      return _.take(
        _.map(
          _.filter(
            state.movies, movie => movie.title.includes(state.titleFilter) && movie.cast.toString().includes(state.castFilter) && (movie.year > state.yearFromFilter || state.yearFromFilter === '') && (movie.year < state.yearToFilter || state.yearToFilter === ''),
          ),
          movie => (_.mapValues(movie, movieVal => _.toString(movieVal))),
        ), state.moviesLimit,
      );
    },
    loading(state) {
      return state.loading;
    },
    genres(state) {
      return _.uniq(_.flatMap(state.movies, movie => movie.genres));
    },
    moviesByGenre: state => genre => _.take(_.filter(state.movies, movie => _.includes(movie.genres, genre)), 5),
    actors(state) {
      return _.take(_.uniq(_.flatMap(state.movies, movie => movie.cast)), state.actorsLimit);
    },
    moviesByActor: state => actor => _.filter(state.movies, movie => _.includes(movie.cast, actor)),
  },
  actions: {
    getMovies({ commit }) {
      commit(SET_LOADING, true);
      return axios.get('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
        .then((responseJSON) => {
          commit(GET_ALL_MOVIES, responseJSON.data);
        })
        .then(() => {
          commit(SET_LOADING, false);
        });
    },
    setLimit({ commit }, limit) {
      commit(ADD_10_MOVIES, limit);
    },
    setActorsLimit({ commit }, limit) {
      commit(ADD_ACTORS, limit);
    },
  },
  modules: {
  },
});
