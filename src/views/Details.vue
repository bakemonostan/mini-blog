<template>
  <h2>User Details</h2>
  <p v-if="post">{{ post.email }}</p>
  <p v-if="!post">Loading...</p>
</template>

<script>
import getPost from '@/composables/getPost';

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error, load };
  },
};
</script>

<style></style>
