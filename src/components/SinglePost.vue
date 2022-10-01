<template>
  <h4>{{ post.title }}</h4>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...';
    });
    return { snippet };
  },
};
</script>

<style></style>
