<template>
	<v-container grid-list-md>
		<v-responsive class="mx-auto" width="56">
			<v-icon large>mdi-search-web</v-icon>
		</v-responsive>
		<h2 class="secondary--text" style="text-align: center;">{{props.length}} results from Booking.com</h2>

		<!-- List buttons -->
		<v-layout row wrap justify-center>
			<v-btn class="d-flex" text color="success" @click="listFull=false">
				<v-icon>mdi-format-list-bulleted</v-icon>
			</v-btn>
			<v-btn class="d-flex" text color="success" @click="listFull=true">
				<v-icon>mdi-view-comfy</v-icon>
			</v-btn>
		</v-layout>

		<!-- pagination -->
		<v-container grid-list-xs v-if="pagination">
			<v-layout row align-center justify-center>
				<v-flex xs12>
					<div class="text-xs-center">
						<v-pagination v-model="page" @input="next(page)" :length="pagination"></v-pagination>
					</div>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Full view -->
		<v-layout row wrap class="my-5" v-if="listFull">
			<v-flex xs6 sm4 lg3 v-for="(item, index) in props" :key="index">
				<CardHotel class="hidden-xs-only" :props="item" :index="index" :route="route"></CardHotel>
				<CardHotelMobile class="hidden-sm-and-up" :props="item" :index="index"></CardHotelMobile>
			</v-flex>
		</v-layout>

		<!-- List view -->
		<v-layout row wrap v-else>
			<v-flex xs4 md3 lg2 v-for="(item,index) in props" :key="index">
				<v-layout my-5 column align-center>
					<v-avatar size="40" color="primary">
						<img :src="item.image" />
					</v-avatar>
					<nuxt-link :to="'/booking/'+route+item.slug">
						<div class="heading" style="text-align: center">{{item.name}}</div>
					</nuxt-link>
					<v-rating x-small color="primary lighten-2" :value="item.rating/2" half-increments readonly></v-rating>
				</v-layout>
			</v-flex>
		</v-layout>

		<!-- pagination -->
		<v-container grid-list-xs v-if="pagination">
			<v-layout row align-center justify-center>
				<v-flex xs12>
					<div class="text-xs-center">
						<v-pagination v-model="page" @input="next(page)" :length="pagination"></v-pagination>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</v-container>
</template>

<script>
export default {
	props: ["props", "route", "paginate", "collection"],
	data() {
		return {
			listFull: true,
			skip: 20,
			page: 1
		};
	},

	computed: {
		pagination() {
			return Math.round(this.paginate / this.skip);
		}
	},

	methods: {
		async next(skip) {
			let resolveSkip = this.skip * skip;
			await this.$axios
				.post(
					this.$store.state.webRoot +
						"/api/collections/get/" +
						this.collection +
						"?token=" +
						this.$store.state.collectionsToken +
						"&rspc=1",
					{ fields: { features: 0, rooms: 0 }, limit: 20, skip: resolveSkip }
				)
				.then(res => {
					this.props = res.data.entries;
				});
		}
	},

	components: {
		CardHotelMobile: () => import("@/components/cards/CardHotelMobile"),
		CardHotel: () => import("@/components/cards/CardHotel")
	}
};
</script>

<style>
</style>