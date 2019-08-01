<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Hello, I'm Mark. I like to make things.
					</h1>
				</div>
			</div>
		</section>
		<section class="section">
			<h2 class="title is-3 has-text-weight-merdium has-text-centered">
				What I Have
			</h2>
			<div class="columns">
				<div class="column">
					<div class="box">
						<h3 class="title is-4 has-text-weight-merdium">
							Front End Focus
						</h3>
						<p>
							Focused on building user interfaces with JS (Vue, Angular, ES6), HTML, and CSS (Sass) that are well designed and functional.
						</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-4 has-text-weight-merdium">
							Full Stack Experience
						</h3>
						<p>
							Exposure working across the application stack using APIs, Node, Mongo, and Firebase and Heroku to deliver full production applications.
						</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-4 has-text-weight-merdium">
							Broad Business Exposure
						</h3>
						<p>
							6 years of startup experience with direct involvemnet in user experience, marketing, service, and operations.
						</p>
					</div>
				</div>
				
			</div>
			</section>
			<section class="section">
			<h2 class="title is-3 has-text-weight-merdium has-text-centered">
				Where I Come From
			</h2>
			<div class="columns is-centered">
				<div class="column is-two-thirds">
				  <p>
				    In 2013, I co-founded Knotty Tie Co, a custom tie manufacturer built from the ground up to employ resettling refugees. I built technology and processes for design, sales, service, marketing, and manufacturing that helped us put nearly 100,000 products in our customers' hands and spurred growth to 23 employees and $1.6 million in annual revenue.
				  </p>
				</div>
			</div>
		</section>
	</div>
</template>

<style type="text/css">

</style>

<script>
	import ProjectsService from '@/services/ProjectsService'
	export default {
		name: "projects",
		mounted: function () {
			console.log("here 1")
			async function getProjects() {
				try{
					console.log("here")
			  		const response = await ProjectsService.getProjects()
			  		console.log(response)
			  	}catch(err){
			  		console.log(err)
			  	}
			  	}
			  	getProjects()
			  	
	 	}
	};

</script>