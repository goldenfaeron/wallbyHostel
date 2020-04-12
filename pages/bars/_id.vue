<template>
	<div>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<!-- <v-img :src="data.image"></v-img> -->
					<h1>{{data.title}}</h1>
					<h2>{{data.categoryName}}</h2>
					{{data.address}}
					<div v-for="(item, index) in data.openingHours" :key="index">{{item}}</div>
				</v-flex>
				<v-flex xs12>
					<h2>Reviews</h2>
					<div v-for="(item, index) in data.reviews" :key="index">
						<h3>{{item.name}}</h3>
						<br />
						{{item.text}}
						<br />
						{{item.publishAt}}
						<br />
						<div class="text-xs-center">
							<v-rating color="red" :value="item.stars" half-increments readonly></v-rating>
							<br />
							<br />
						</div>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.borshBars[0][this.$route.params.id]
		};
	}
};
</script>