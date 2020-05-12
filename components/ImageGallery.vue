<template>
	<v-container fluid>
		<v-layout column wrap>
			<v-flex align-self-end v-if="galleryMode">
				<v-icon @click="closeGallery()">mdi-close-outline</v-icon>
			</v-flex>
			<v-img
				:contain="displayImageContain"
				:height="displayImageHeight"
				:src="$store.state.webRoot + displayImage"
			></v-img>

			<v-layout v-if="galleryMode" row justify-center>
				<v-btn class="mx-1 my-1" small color="primary lighten" fab @click="shiftImage('left')">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>

				<v-btn class="mx-1 my-1" small color="primary lighten" fab @click="shiftImage('right')">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-layout>

			<v-flex xs12>
				<v-container grid-list-sm>
					<v-layout row wrap :justify-center="galleryMode">
						<v-flex
							v-for="(image, index) in props"
							:key="image"
							xs2
							md1
							@click="clickImg(image.path ,index)"
						>
							<v-img
								style="cursor:pointer"
								:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+image._id+'&w=100&h=50&o=true'"
								:src="$store.state.webRoot + image.path"
								class="grey lighten-2"
								:height="height"
							>
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
			this.displayIndex = index;
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
				this.displayImage = this.props[this.displayIndex].path;
				return;
			}
			if (direction == "left" && i > 0) {
				this.displayIndex -= 1;
				this.displayImage = this.props[this.displayIndex].path;
				return;
			}

			return;
		},

		closeGallery() {
			this.galleryMode = false;
			this.displayImageContain = false;
		}
	},

	data() {
		return {
			displayIndex: "",
			galleryMode: false,
			displayImageContain: false,
			displayImageHeight: [
				this.$vuetify.breakpoint.smAndUp ? "400px" : "200px"
			],
			displayImage: this.props[0].path,
			height: [this.$vuetify.breakpoint.smAndUp ? "70px" : "40px"],
			displayImage: this.props[0].path
		};
	},
	props: ["props"]
};
</script>