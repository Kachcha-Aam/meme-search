<template>
  <section class="popup">
    <div class="modal">
      <div class="header">
        <a class="close" @click="$emit('close')">&#215;</a>
        <p class="text-28 bold">Add Meme</p>
      </div>

      <div class="content">
        <add-meme-input
          v-for="(meme, i) in memes"
          :key="i"
          :text="meme.text"
          :link="meme.link"
        />
        <add-meme-input />
      </div>

      <div class="footer">
        <el-button type="primary" :handler="submitConfig">Add Meme</el-button>
      </div>
    </div>

    <!-- <pre style="position: fixed; right: 0">{{ JSON.stringify(schema, null, 2) }}</pre> -->
  </section>
</template>

<script>
import AddMemeInput from '@/components/AddMemeInput.vue';

export default {
  name: 'AddMeme',
  components: { AddMemeInput },
  emits: ['close'],

  data: () => ({
    memes: [],
  }),

  methods: {},
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  z-index: 9999;
}

.modal {
  margin: auto;
  padding: 24px;
  background-color: white;
  width: 80%;
  height: 80%;
  max-width: 100%;
  border-radius: 3px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

.close {
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 48px;
  height: 48px;
  line-height: 48px;
  background-color: var(--grey);
  text-align: center;
  cursor: pointer;
}

.content {
  margin-top: 25px;
  flex-grow: 1;
}

.footer {
  padding-top: 25px;
}
</style>
