<template>
  <el-input
    placeholder="Bade sanskari ho beta"
    v-model="searchQuery"
    size="large"
    style="padding: 20px"
    @change="$emit('search', searchQuery)"
  >
    <template #append>
      <el-button size="large" :icon="Search" @click="$emit('search', searchQuery)" />
    </template>
  </el-input>
</template>

<script>
import { shallowRef } from 'vue';
import { Search } from '@element-plus/icons-vue';

export default {
  data: () => ({
    Search: shallowRef(Search),
    searchQuery: '',
  }),
  props: ['query'],
  emits: ['search'],

  created() {
    this.searchQuery = this.query || '';
  },
};
</script>
