<template>
  <h1>Welcome</h1>
  <PostList :posts="posts" />
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  components: { PostList },
  name: ' Home',
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(data);
      } catch (error) {}
    };

    return { posts, error };
  },
  components: { PostList },
};
</script>

<style></style>
