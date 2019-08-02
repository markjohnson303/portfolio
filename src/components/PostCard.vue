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
					<p>{{snippet}}</p>
					<router-link :to="'/project/'+slug" class="button is-fullwidth">View Project</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PostCard",
		props: {
			title: String,
			date: String,
			snippet: String,
			image: String,
			slug: String
		}
	};
</script>
