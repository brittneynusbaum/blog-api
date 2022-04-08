<script>import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to show post!",
      currentPost: {}
    };
  },
  created: function () {
    this.postShow()
  },
  methods: {
    postShow: function () {
      console.log('showing post');
      console.log(this.$route.params.id);
      axios.get(`/posts/1`).then(response => {
        console.log(response.data)
        this.currentPost = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{ currentPost.title }}</p>
    <p>{{ currentPost.body }}</p>
    <img v-bind:src="currentPost.image" />
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>