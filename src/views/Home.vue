<template>
  <div class="home">
    <img alt="MemeSearch Logo" src="../assets/logo.jpg">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.home {
  width: 60%;
  margin: auto;
}
</style>
