<template>
  <h1>{{ greet }} {{ name }}, </h1>
  <p>Good to have you here</p>
  <button @click="handleClick">Le click</button>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    let greet = 'Welcome to the home page';
    let name = 'Ehis';

    const handleClick = () => {
      console.log('Le Click de la click');
    };

    return { name, greet, handleClick };
  },
};
</script>

<style></style>
