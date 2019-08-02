<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						{{project.title}}
					</h1>
					<h2 class="subtitle is-4">
						{{project.snippet}}
					</h2>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container is-fluid">
				<div class="columns">
					<div class="column is-two-thirds">
						<vue-simple-markdown :source="project.body"></vue-simple-markdown>
					</div>
					<div class="column is-one-third">
						<div class="columns is-multiline">
							<div class="column is-full" v-for="image in project.images">
								<img :src="image.url"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import ProjectsService from '@/services/ProjectsService'
	export default {
		name: "project",
		data() {
			return{
				airtableResponse: []
			}
		},
		mounted: function () {
			let self = this
			async function getProject() {
				try{
					const response = await ProjectsService.getProject(self.$route.params.slug)
					console.log(response)
					self.airtableResponse = response.data.records

				}catch(err){
					console.log(err)
				}
			}
			getProject()		  	
		},
		computed: {
			project(){
				let self = this
				if (self.airtableResponse[0]){
					let thisProject = {
						title: self.airtableResponse[0].fields.Title,
						snippet: self.airtableResponse[0].fields.Excerpt,
						images: self.airtableResponse[0].fields.Image,
						body: self.airtableResponse[0].fields.Body
					}
					return thisProject
				}
			}
		}
	};
</script>