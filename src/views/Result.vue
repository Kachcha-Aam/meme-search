<template>
  <div class="result">
    <el-row :gutter="20" align="middle">
      <el-col :span="3">
        <img class="logo" alt="MemeSearch Logo" src="../assets/logo.jpg">
      </el-col>
      <el-col :span="12"><search-bar /></el-col>
    </el-row>
    <el-divider />
    <meme-results :results="results"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import MemeResults from '@/components/MemeResults.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    MemeResults,
  },

  data: () => ({
    results: [
      {
        image: 'https://indianmemetemplates.com/wp-content/uploads/haan-maloom-hai-chal-apne-baap-ko-mat-sikha.jpg',
        text: 'chal chal apne baap ko mat sikha',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx7mV6TeZkBxatoBgazgAxwvjoozbCsDscQ&usqp=CAU',
        text: 'risk hai',
      },
      {
        image: 'https://i.ytimg.com/vi/vdVMKJ91q70/maxresdefault.jpg',
        text: 'bade harami ho beta',
      },
    ],
  }),
};
</script>

<style scoped>
.logo {
  border-radius: 5px;
  width: 100%;
}
</style>
