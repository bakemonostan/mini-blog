<template>
  <div class="post-list">
    <h2>Post Lists</h2>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';
export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {},
};
</script>

<style></style>
