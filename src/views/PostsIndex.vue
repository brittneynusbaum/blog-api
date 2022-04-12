<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js Posts!",
      posts: []
    };
  },
  created: function () {
    this.popstsIndex()
  },
  methods: {
    popstsIndex: function () {
      console.log('index posts');
      axios.get('/posts.json').then(response => {
        console.log(response.data);
        this.posts = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      {{ post.title }}
      <br />
      <img v-bind:src="post.image" />
      <hr />
      <router-link v-bind:to="`/posts/${post.id}`">Post info</router-link>

    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>