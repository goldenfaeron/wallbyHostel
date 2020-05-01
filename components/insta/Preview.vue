<template>
	<div>
		<Instagram></Instagram>
		<v-layout row justify-center>
			<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
				<template v-slot:activator="{ on }">
					<v-btn color="primary" dark v-on="on">See more</v-btn>
				</template>
				<v-card>
					<v-toolbar dark color="primary">
						<v-btn icon dark @click="dialog = false">
							<v-icon>mdi-close</v-icon>
						</v-btn>
						<v-toolbar-title>{{$store.state.city}} Instagram</v-toolbar-title>
					</v-toolbar>
					<v-container grid-list-lg>
						<!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/HWj0XkS091g?autoplay=1"></iframe> -->
						<v-layout row wrap>
							<v-flex
								xs12
								sm12
								md6
								lg3
								v-for="(item, index) in $store.state.borshInstagram[0]"
								:key="index"
							>
								<v-card height="100%">
									<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

									<v-img height="200px" :src="item.imageUrl"></v-img>

									<v-card-text>
										{{item.firstComment}}
										<br />
										<v-icon color="red">mdi-cards-heart</v-icon>
										{{item.likesCount}}
									</v-card-text>
									<v-card-actions>
										<a
											target="#"
											:href="'https://www.instagram.com/'+item.ownerUsername"
										>{{item.ownerUsername}}</a>
									</v-card-actions>

									<!-- v-if="!item.inCart" -->
									<v-card-actions></v-card-actions>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-dialog>
		</v-layout>
	</div>
</template>
<script>
import instagram from "~/components/Instagram.vue";
export default {
	components: {
		Instagram: () => import("@/components/Instagram")
	},
	data() {
		return {
			dialog: false
		};
	}
};
</script>