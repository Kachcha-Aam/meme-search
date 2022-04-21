<template>
  <div class="home">
    <img alt="MemeSearch Logo" src="../assets/logo.jpg">
    <search-bar @search="showResultPage"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
  },

  methods: {
    showResultPage(query) {
      this.$router.push({
        name: 'Result',
        query: { query },
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 60%;
  margin: auto;
}
</style>
