<template>
  <h1>{{ greet }} {{ name }}, </h1>
  <p>Good to have you here</p>
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

  <br /><br /><br />
  <!-- WORKING WITH COMPUTED VALUES/PROPERTIES -->
  <hr />
  <div class="test2">
    <h3>Computed Properties</h3>
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="names in filteredNames" :key="names">
      <p>{{ names }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const greet = ref('Welcome to the home page');
    const name = ref('Ehis');
    const search = ref('');
    // using refs
    const refTest = ref({
      name: 'BakemonoStan',
      class: 'Monster',
    });

    // using reactive
    const reactiveTest = reactive({ name: 'Stanley', class: 'Beta' });

    // using Computed properties
    const namesArr = ref(['ehis', 'itua', 'omo', 'ediale']);

    const filteredNames = computed(() => {
      return namesArr.value.filter((nameVal) => {
        return nameVal.includes(search.value);
      });
    });

    const handleClick = () => {
      name.value = 'Stanley';
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
      refTest,
      reactiveTest,
      handleRefTest,
      handleReactive,
      namesArr,
      search,
      filteredNames,
    };
  },
};
</script>

<style>
.test {
  text-decoration: line-through;
}

.test2 {
  padding: 1rem 0;
}
</style>
