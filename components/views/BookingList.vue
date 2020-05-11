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

		<!-- Full view -->
		<v-layout row wrap class="my-5" v-if="listFull">
			<v-flex xs6 sm4 lg3 v-for="(item, index) in props" :key="index">
				<CardHotel class="hidden-xs-only" :props="item" :index="index"></CardHotel>
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
					<nuxt-link :to="'/props/'+item.slug">
						<div class="heading" style="text-align: center">{{item.name}}</div>
					</nuxt-link>
					<v-rating x-small color="primary lighten-2" :value="item.rating/2" half-increments readonly></v-rating>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			listFull: true
		};
	},

	components: {
		CardHotelMobile: () => import("@/components/CardHotelMobile"),
		CardHotel: () => import("@/components/CardHotel")
	}
};
</script>

<style>
</style>