<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Projects that I have built
					</h1>
				</div>
			</div>
		</section>
		<section class="section">
			<h2 class="title is-3 has-text-weight-medium has-text-centered">
				What I Bring
			</h2>
			<div class="columns">
				<div class="column">					
					<post-card></post-card>

				</div>
				<div class="column">
						<h3 class="title is-4 has-text-weight-medium">
							Full Stack Experience
						</h3>
						<p>
							Exposure working across the application stack using APIs, Node, Mongo, and Firebase and Heroku to deliver full production applications.
						</p>
				</div>
				<div class="column">
						<h3 class="title is-4 has-text-weight-medium">
							Broad Business Exposure
						</h3>
						<p>
							6 years of startup experience as a co-founder of Knotty Tie Co. I've managed and contributed to development, user experience, marketing, service, and operations.
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
	import PostCard from '@/components/PostCard'
	export default {
		name: "projects",
		components: {
			PostCard
		},
		mounted: function () {
			console.log("here 1")
			async function getProjects() {
				try{
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