<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js edit posts!",
      editPostParams: {}
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}.json`).then(response => {
      console.log(response.data);
      this.editPostParams = response.data
    })
  },
  methods: {
    editPost: function () {
      console.log('editing post')
      axios.patch(`/posts/${this.$route.params.id}.json`, this.editPostParams).then(response => {
        console.log(response.data);
        this.$router.push(`/posts/${this.$route.params.id}.json`)
      });
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Title: <input v-model="editPostParams.title"></p>
    <p>Body: <input v-model="editPostParams.body"></p>
    <p>Image: <input v-model="editPostParams.image"></p>
    <p><button v-on:click="editPost()">Edit post</button></p>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>