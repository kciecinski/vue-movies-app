<template>
<div class="container" v-if="!loading">
  <b-menu>
    <b-menu-list label="Filmy wg aktorów">
      <b-menu-item v-for="(actor, index) in actors" :label="`${index}. ${actor}`" :key="_.uniqueId(actor)" :active="isActive" :expanded="isActive">
           <template v-for="movie in moviesByActor(actor)" slot="label" slot-scope="props">
              <b-icon
                  :key="movie.title"
                  class="is-pulled-right"
                  :icon="props.expanded ? 'menu-down' : 'menu-up'">
              </b-icon>
          </template>
          <b-menu-item :key="movie.title" v-for="(movie, index) in moviesByActor(actor)" icon="account" :label="`${index}. ${movie.title}`" />
      </b-menu-item>
    </b-menu-list>
  </b-menu>
    <b-button type="is-primary" @click="showMore">Pokaż wiecej aktorów</b-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'movies-by-actor-list',
  computed: {
    ...mapState(['movies', 'loading']),
    ...mapGetters(['movies', 'actors', 'moviesByActor', 'loading']),
    _() {
      return _;
    },
  },
  methods: {
    ...mapActions(['setActorsLimit']),
    showMore() {
      this.setActorsLimit(5);
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
