<template>
  <h1>Welcome</h1>
  <h3 v-if="error">{{ error }}</h3>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>loading...</div>
</template>

<script>
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList.vue';

export default {
  components: { PostList },
  name: ' Home',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style></style>
