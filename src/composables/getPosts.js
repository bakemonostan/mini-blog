import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    // Try Catch
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');

      //if error
      if (!response.ok) {
        throw Error('Data Unavaliable');
      }

      //else
      posts.value = await response.json();

      // catch error
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
