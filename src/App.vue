<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/name-mark.jpg" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
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
    </div>
  </footer>
</div>
</template>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>

<style lang="sass">


$primary: #4c4c6e

.hero-home
  @extend .hero
  background-image: url('./assets/cloud-background.jpg')
  background-size: cover


@import "~bulma/bulma.sass"

</style>
