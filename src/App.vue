<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/name-mark.jpg" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
           About
          </router-link>
          <router-link to="/projects" class="navbar-item">
           Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
           Contact
          </router-link>
       </div>
     </div>
   </nav>
   <router-view />
   <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Built by Mark Johnson with Vue.js, Bulma, and Airtable.
      </p>
      <p>Want to see how this site was built? <a href="https://dev.to/markjohnson303/building-a-portfolio-site-with-vue-bulma-and-airtable-5a58">Check out my tutorial on dev.to!</a></p>
    </div>
  </footer>
</div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 210px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>

<style lang="sass">


$primary: #72b5db

.hero-home
  @extend .hero
  background-image: url('./assets/cloud-background.png')
  background-size: cover


@import "~bulma/bulma.sass"

</style>
