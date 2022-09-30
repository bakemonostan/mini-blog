<template>
  <h1>{{ greet }} {{ name }}, </h1>
  <p ref="p">Good to have you here</p>
  <button @click="handleClick">Le click</button><br />
  <hr /><br />
  <!-- USING REF TO MAKE VALUES REACTIVE-->
  <div>
    <h3>Using Refs</h3>
    <p>{{ refTest.name }} is currently of {{ refTest.class }} class</p>
    <button @click="handleRefTest">Change Class</button> </div
  ><br /><hr />

  <!-- USing REACTIVE TO MAKE VALUES REACTIVE -->
  <div>
    <h3>Using Reactive</h3>
    <p
      >{{ reactiveTest.name }} is currently of {{ reactiveTest.class }} class</p
    >
    <button @click="handleReactive">Change Class</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const p = ref();
    const greet = ref('Welcome to the home page');
    const name = ref('Ehis');

    const refTest = ref({
      name: 'BakemonoStan',
      class: 'Monster',
    });

    const reactiveTest = reactive({ name: 'Stanley', class: 'Beta' });

    const handleClick = () => {
      name.value = 'Stanley';
      console.log(name);
      //   p.value.classList.toggle('test');
    };

    const handleRefTest = () => {
      refTest.value.class = 'Brute';
    };

    const handleReactive = () => {
      reactiveTest.class = 'Alpha';
    };

    return {
      name,
      greet,
      handleClick,
      p,
      refTest,
      reactiveTest,
      handleRefTest,
      handleReactive,
    };
  },
};
</script>

<style>
.test {
  text-decoration: line-through;
}
</style>
