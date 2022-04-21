<template>
  <!-- <el-button class="add-meme" @click="show = true" >Add Meme</el-button> -->
  <add-meme v-if="show" @close="show = false" />
  <router-view />
</template>

<script>
import AddMeme from '@/components/AddMeme.vue';

export default {
  components: { AddMeme },
  data: () => ({ show: false }),
};
</script>

<style>
body {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.add-meme {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
