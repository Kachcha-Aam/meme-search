<template>
  <el-input placeholder="Bade sanskari ho beta" size="large" style="padding: 20px">
    <template #append>
      <el-button size="large" :icon="Search" />
    </template>
  </el-input>
</template>

<script>
import { Search } from '@element-plus/icons-vue';

export default {
  data: () => ({
    Search,
  }),
};
</script>
