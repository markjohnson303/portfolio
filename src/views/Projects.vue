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
			<div class="container is-fluid">
				<div class="columns is-multiline">
						<div class="column is-one-third" v-for="project in projects" v-if="project.isPublished">
							<post-card v-bind="project"></post-card>
						</div>				
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
		data() {
			return{
				airtableResponse: []
			}
		},
		mounted: function () {
			let self = this
			console.log("here 1")
			async function getProjects() {
				try{
			  		const response = await ProjectsService.getProjects()
			  		console.log(response)
			  		self.airtableResponse = response.data.records

			  	}catch(err){
			  		console.log(err)
			  	}
			  	}
			  	getProjects()
			  	
	 	},
	 	computed: {
	 		projects(){
	 			let self = this
	 			let projectList = []
	 			for (var i = 0; i < self.airtableResponse.length; i++) {
	 				if (self.airtableResponse[i].fields.Published){
		 				let project = {
		 					title: self.airtableResponse[i].fields.Title,
		 					date: self.airtableResponse[i].fields["Date Published"],
		 					isPublished: self.airtableResponse[i].fields.Published,
		 					snippet: self.airtableResponse[i].fields.Excerpt,
		 					image: self.airtableResponse[i].fields.Image[0].url,
		 					slug: self.airtableResponse[i].fields.Slug
		 				}
		 				projectList.push(project)
		 			}
	 			}
	 			return projectList
	 		}
	 	}
	};

</script>