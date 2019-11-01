<template>
  <div class="container">
    <b-table :striped="true" :hoverable="true" :loading="loading" :data="movies" :columns="columns"></b-table>
    <b-button v-if="!loading" type="is-primary" @click="showMore">Pokaż wiecej</b-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';


export default {

  name: 'MoviesTable',
  computed: {
    ...mapState(['movies', 'loading']),
    ...mapGetters(['movies', 'loading']),
  },
  data() {
    return {
      columns: [
        {
          field: 'cast',
          label: 'Cast',
        },
        {
          field: 'genres',
          label: 'Genres',
        },
        {
          field: 'title',
          label: 'Title',
        },
        {
          field: 'year',
          label: 'Year',
          width: '150',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['setLimit']),
    showMore() {
      this.setLimit(10);
    },
  },

};
</script>

<style>

</style>
