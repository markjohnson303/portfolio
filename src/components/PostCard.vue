<template>
  <div class="post-card">
  	<div class="card">
  	  <div class="card-image">
  	    <figure class="image is-square">
  	      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
  	    </figure>
  	  </div>
  	  <div class="card-content">
  	    <div class="media">
  	      <div class="media-content">
  	        <p class="title is-4">My Second Post</p>
  	        <p class="subtitle is-6">January 15, 2013</p>
  	      </div>
  	    </div>

  	    <div class="content">
  	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  	      Phasellus nec iaculis mauris.
  	    </div>
  	  </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: "Postcard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
