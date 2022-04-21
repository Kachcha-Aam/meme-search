<template>
  <el-row :gutter="12">
    <el-col :span="10">
      <el-input @input="$emit('text', $event.target.value)" placeholder="Text"/>
    </el-col>
    <el-col :span="14">
      <el-input
        @input="$emit('link', $event.target.value)"
        placeholder="Image Link"
        type="url"
      />
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['text', 'link'],
  emits: ['text', 'link'],
  data: () => ({
    dataText: '',
    dataLink: '',
  }),
};
</script>
