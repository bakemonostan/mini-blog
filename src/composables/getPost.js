import { ref } from 'vue';

const getPost = (id) => {
  const post = ref();
  const error = ref(null);

  const load = async () => {
    // Try Catch
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/users/' + id
      );

      //if error
      if (!response.ok) {
        throw Error('User Details Unavaliable');
      }

      //else
      post.value = await response.json();

      // catch error
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
