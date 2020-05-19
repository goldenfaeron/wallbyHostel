<template>
	<v-container fluid>
		<!-- {{props}} -->

		<v-layout column wrap>
			<v-img :contain="displayImageContain" :height="displayImageHeight" :src="displayImage.imageUrl">
				<v-container grid-list-lg>
					<v-layout column align-content-start>
						<!-- <v-flex align-self-end>
							<v-btn color="primary lighten-3" fab>
								<v-icon>mdi-text</v-icon>
							</v-btn>
						</v-flex>-->
						<v-flex align-self-end v-if="galleryMode">
							<v-btn color="red lighten-2" fab small>
								<v-icon color="secondary " @click="closeGallery()">mdi-close-outline</v-icon>
							</v-btn>
						</v-flex>
					</v-layout>
				</v-container>
			</v-img>

			<!-- {{displayImage}} -->
			<v-responsive>
				<div class="title centered text-center">{{props.length}} Images</div>
			</v-responsive>

			<v-layout v-if="galleryMode" row justify-center>
				<v-btn class="mx-1 my-1" color="primary lighten" @click="shiftImage('left')">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn class="mx-1 my-1" color="primary lighten-2" fab small @click="showInfo = !showInfo">
					<v-icon>mdi-information</v-icon>
				</v-btn>

				<v-btn class="mx-1 my-1" color="primary lighten" @click="shiftImage('right')">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-layout>

			<v-card v-if="showInfo">
				<v-card-text>
					<span v-if="displayImage.alt">
						<v-icon>mdi-text</v-icon>
						{{displayImage.alt}}
						<br />
					</span>
					<span v-if="displayImage.locationName">
						<v-icon>mdi-map-marker</v-icon>
						{{displayImage.locationName}}
						<br />
					</span>
					<span v-if="displayImage.firstComment">
						<v-icon>mdi-comment</v-icon>
						{{displayImage.firstComment}}
						<br />
					</span>
					<span v-if="displayImage.likesCount">
						<v-icon>mdi-heart</v-icon>
						{{displayImage.likesCount}} likes
						<br />
					</span>
					<span v-if="displayImage.ownerUsername">
						<v-icon>mdi-account-outline</v-icon>
						{{displayImage.ownerUsername}}
						<br />
					</span>
					<span v-if="displayImage.ownerUsername">
						<v-icon>mdi-instagram</v-icon>
						<a :href="displayImage.url" target="_blank">View on Instagram</a>
					</span>
				</v-card-text>
			</v-card>

			<v-flex xs12>
				<v-container grid-list-sm>
					<v-layout row wrap :justify-center="galleryMode">
						<v-flex
							v-for="(image, index) in props"
							:key="image"
							xs2
							md1
							@click="clickImg(image ,index)"
							v-if="limit12 && index < 11"
						>
							<v-img style="cursor:pointer" :src="image.imageUrl" class="grey lighten-2" :height="height">
								<template v-slot:placeholder>
									<v-layout fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
									</v-layout>
								</template>
							</v-img>
						</v-flex>
						<v-flex
							v-for="(image, index) in props"
							:key="image"
							xs2
							md1
							@click="clickImg(image ,index)"
							v-if="!limit12"
						>
							<v-img style="cursor:pointer" :src="image.imageUrl" class="grey lighten-2" :height="height">
								<template v-slot:placeholder>
									<v-layout fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
									</v-layout>
								</template>
							</v-img>
						</v-flex>
					</v-layout>
				</v-container>
			</v-flex>
		</v-layout>
	</v-container>
	<!-- 	:gradient="'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"  -->
</template>



<script>
export default {
	methods: {
		clickImg(path, index) {
			(this.limit12 = false), (this.displayIndex = index);
			this.galleryMode = true;
			this.displayImage = path;
			this.displayImageContain = true;
			this.displayImageHeight = [
				this.$vuetify.breakpoint.smAndUp ? "500px" : "400px"
			];
		},

		shiftImage(direction) {
			let l = this.props.length - 1;
			let i = this.displayIndex;

			if (direction == "right" && i < l) {
				this.displayIndex += 1;
				this.displayImage = this.props[this.displayIndex];
				return;
			}
			if (direction == "left" && i > 0) {
				this.displayIndex -= 1;
				this.displayImage = this.props[this.displayIndex];
				return;
			}

			return;
		},

		closeGallery() {
			this.galleryMode = false;
			this.displayImageContain = false;
			this.limit12 = true;
			this.showInfo = false;
		}
	},

	data() {
		return {
			showInfo: false,
			limit12: true,
			displayIndex: "",
			galleryMode: false,
			displayImageContain: false,
			displayImageHeight: [
				this.$vuetify.breakpoint.smAndUp ? "400px" : "200px"
			],
			displayImage: this.props[0],
			height: [this.$vuetify.breakpoint.smAndUp ? "70px" : "40px"],
			displayImage: this.props[
				Math.floor(Math.random() * Math.floor(this.props.length))
			]
		};
	},
	props: ["props"]
};
</script>