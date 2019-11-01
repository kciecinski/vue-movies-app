<template>
  <div id="app" class="container">
    <Filters />
    <MoviesTable />
    <MoviesByGenre />
    <MoviesByActor />
  </div>
</template>

<script>
import MoviesTable from './components/MoviesTable.vue';
import MoviesByGenre from './components/MoviesByGenreList.vue';
import MoviesByActor from './components/MoviesByActorList.vue';
import Filters from './components/Filters.vue';

export default {
  name: 'app',
  components: {
    MoviesTable,
    MoviesByGenre,
    MoviesByActor,
    Filters,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
