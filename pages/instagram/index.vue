<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Borsh on Instagram</h1>
		<welcome></welcome>
		<!-- <h1>{{$store.state.borshHotels[0][0].order}}</h1> -->
		<!-- {{$store.state.borshHotels}} -->
		<!--<v-container grid-list-lg>
			 <iframe width="420" height="315" src="https://www.youtube.com/embed/HWj0XkS091g?autoplay=1"></iframe> 
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshInstagram[0]" :key="index">
					<v-card height="100%">
						 <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> 

						<v-img height="200px" :src="item.imageUrl"></v-img>

						<v-card-text>
							{{item.firstComment}}
							<br />
							<v-icon color="red">mdi-cards-heart</v-icon>
							{{item.likesCount}}
						</v-card-text>

						 v-if="!item.inCart"
						<v-card-actions></v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>-->
	</div>
</template>

<script>
export default {
	components: {
		Welcome: () => import("@/components/insta/Welcome")
	}
};
</script>