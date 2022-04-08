<script>

import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to new posts!",
      newPost: {}
    };
  },
  created: function () { },
  methods: {
    postsNew: function () {
      console.log('new post');
      axios.post('/posts.json', this.newPost).then(response => {
        console.log(response.data);
        this.newPost = response.data
      }

      )
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      Title:
      <input v-model="this.newPost.title" />
    </p>
    <p>
      Body:
      <input v-model="this.newPost.body" />
    </p>
    <p>
      Image:
      <input v-model="this.newPost.image" />
    </p>
    <p>
      <button v-on:click="postsNew">Create new post</button>
    </p>
  </div>
</template>

<style></style>