<template>
	<div>
		<v-card>
			<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

			<v-card-title primary-title>
				<v-layout align-content-space-between justify-space-between>
					<v-flex>
						<p class="headline d-flex">
							<v-icon class="mr-1">mdi-bed</v-icon>
							{{details.name }}
						</p>
					</v-flex>
				</v-layout>
			</v-card-title>
			<v-carousel height="150" hide-delimiters>
				<v-carousel-item
					:src="$store.state.webRoot + item.path"
					v-for="(item, index) in details.gallery"
					:key="index"
				></v-carousel-item>
			</v-carousel>

			<!-- <v-img :src="$store.state.assetRoot + details.header_image.path" height="100px"></v-img> -->

			<v-card-text>
				<p class="text">
					From
					<b>{{details.price}}</b> Euro per night
				</p>
				<!-- <span v-show="!show">{{details.description | truncate(150)}}...</span>
				<span v-show="show">{{details.description}}</span>
				<span style="margin-left: 45%;">
					<v-btn icon @click="show = !show">
						<v-icon>{{ !show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
					</v-btn>
				</span>
				<br />-->
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: { details: Object, show: Boolean },
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	}
};
</script>