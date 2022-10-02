<template>
  <h4>{{ post.name }}</h4>
  <p>{{ post.email }}</p>
  <br />
  <router-link :to="{ name: 'Details', params: { id: post.id } }">
    <button>User Details</button></router-link
  >
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    // const snippet = computed(() => {
    //   return props.post.body.substring(0, 100) + '...';
    // });
    return {};
  },
};
</script>

<style></style>
