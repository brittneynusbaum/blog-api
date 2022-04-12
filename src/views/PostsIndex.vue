<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All blog posts",
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
    <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
      <a class="navbar-brand" href="#">Blog contents</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Cross-platform interactive instruction set</a>
        <a class="nav-link" href="#item-2">Function-based zero administration installation</a>
        <a class="nav-link" href="#item-3">Digitized discrete knowledge user</a>
        <a class="nav-link" href="#item-4">Digitized system-worthy project</a>
        <a class="nav-link" href="#item-5">Re-contextualized radical portal</a>
        <a class="nav-link" href="#item-6">Intuitive value-added installation</a>
        <a class="nav-link" href="#item-7">Seamless empowering process improvement</a>
        <a class="nav-link" href="#item-8">Realigned optimizing portal</a>
      </nav>
    </nav>
    <div v-for="post in posts" v-bind:key="post.id">
      <!-- {{ post.title }} -->
      <!-- <br />
      <img v-bind:src="post.image" />
      <hr /> -->

      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
        <h4 id="item-1"> {{ post.title }}</h4>
        <p>
          <img v-bind:src="post.image" />
        </p>
        <!-- <h4 id="item-2">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p>
        <h4 id="item-3">{{ post.title }}</h4>
        <p>...</p> -->
      </div>
      <router-link v-bind:to="`/posts/${post.id}`">Post info</router-link>

    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>