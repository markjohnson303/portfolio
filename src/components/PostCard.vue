<template>
  <div class="post-card">
  	<div class="card">
  	  <div class="card-image">
  	    <figure class="image is-square">
  	      <img :src="image" alt="Placeholder image">
  	    </figure>
  	  </div>
  	  <div class="card-content">
  	    <div class="media">
  	      <div class="media-content">
  	        <p class="title is-4">{{title}}</p>
  	        <p class="subtitle is-6">{{date}}</p>
  	      </div>
  	    </div>

  	    <div class="content">
  	      {{snippet}}
  	    </div>
  	  </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: "Postcard",
  props: {
    title: String,
    date: String,
    isPublished: Boolean,
    snippet: String,
    image: String,
    slug: String
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
