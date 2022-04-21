<template>
  <div class="result">
    <el-row :gutter="20" align="middle">
      <el-col :span="3">
        <img class="logo" alt="MemeSearch Logo" src="../assets/logo.jpg">
      </el-col>
      <el-col :span="12"><search-bar :query="$route.query.query" @search="showResult"/></el-col>
    </el-row>
    <el-divider />
    <meme-results :memes="memes"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import MemeResults from '@/components/MemeResults.vue';

import api from '../api';

export default {
  name: 'Home',

  components: {
    SearchBar,
    MemeResults,
  },

  data: () => ({
    memes: [],
  }),

  created() {
    const { query } = this.$route.query;
    if (!query) return;
    this.memes = api.search(query);
  },

  methods: {
    showResult(query) {
      this.$router.replace({
        name: 'Result',
        query: { query },
      });

      this.memes = api.search(query);
    },
  },
};
</script>

<style scoped>
.logo {
  border-radius: 5px;
  width: 100%;
}
</style>
