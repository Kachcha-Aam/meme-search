<template>
  <el-row :gutter="12">
    <el-col :span="6" v-for="(meme, i) in memes" :key="i">
      <el-card :body-style="{ padding: '0px' }">
        <el-image class="image" :src="meme.link" fit="contain" :lazy="true"/>
        <el-row :gutter="12" style="padding: 8px 14px" align="middle">
          <el-col :span="20">{{meme.text}}</el-col>
          <el-col :span="4"><el-button :icon="CopyDocument" /></el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { shallowRef } from 'vue';
import { CopyDocument } from '@element-plus/icons-vue';

export default {
  props: ['memes'],
  data: () => ({
    CopyDocument: shallowRef(CopyDocument),
  }),
};
</script>

<style scoped>
.image {
  height: 200px;
  width: 100%;
}
</style>
