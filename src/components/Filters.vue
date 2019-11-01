<template>
  <section>
        <b-field label="Tytuł">
          <b-input :value="titleFilter" @input="updateTitle"></b-input>
        </b-field>
        <b-field label="Rok od">
          <b-input :value="yearFromFilter" @input="updateYearFrom"></b-input>
        </b-field>
        <b-field label="Rok do">
          <b-input :value="yearToFilter" @input="updateYearTo"></b-input>
        </b-field>
        <b-field label="Obsada">
          <b-input :value="castFilter" @input="updateCast"></b-input>
        </b-field>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'filters',
  computed: {
    ...mapState(['titleFilter', 'yearFromFilter', 'yearToFilter', 'castFilter']),
  },
  methods: {
    updateTitle(val) {
      this.$store.commit('SET_TITLE_FILTER', val);
    },

    updateYearFrom(val) {
      this.$store.commit('SET_YEAR_FROM_FILTER', val);
    },

    updateYearTo(val) {
      this.$store.commit('SET_YEAR_TO_FILTER', val);
    },

    updateCast(val) {
      this.$store.commit('SET_CAST_FILTER', val);
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
