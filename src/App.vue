<template>
  <nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Blog App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Blogs
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/posts">View all posts</a></li>
                <li><a class="dropdown-item" href="/posts-new">Add a new post</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Signup/Login
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/signup">Signup</a></li>
                <li><a class="dropdown-item" href="/login">Login</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="logout">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/posts">Posts</router-link>|
    <router-link to="/posts-new">New Post</router-link>|
    <router-link to="/blogposts">Blog Posts</router-link>|
    <router-link to="/contact">Contact</router-link>|
    <router-link to="/signup">Sign Up</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/logout">Log Out</router-link> -->
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
</style>
