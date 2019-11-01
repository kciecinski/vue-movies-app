<template>
<div class="container" v-if="!loading">
  <b-menu>
    <b-menu-list label="Filmy wg Gatunku">
      <b-menu-item v-for="(genre, index) in genres" :label="`${index}. ${genre}`" :key="_.uniqueId(genre)" :active="isActive" :expanded="isActive">
           <template v-for="movie in moviesByGenre(genre)" slot="label" slot-scope="props">
              <b-icon
                  :key="movie.title"
                  class="is-pulled-right"
                  :icon="props.expanded ? 'menu-down' : 'menu-up'">
              </b-icon>
          </template>
          <b-menu-item :key="movie.title" v-for="(movie, index) in moviesByGenre(genre)" icon="account" :label="`${index}. ${movie.title}`" />
      </b-menu-item>
    </b-menu-list>
  </b-menu>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'movies-by-genre-list',
  computed: {
    ...mapState(['movies', 'loading']),
    ...mapGetters(['movies', 'genres', 'moviesByGenre', 'loading']),
    _() {
      return _;
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};

</script>

<style>

</style>
