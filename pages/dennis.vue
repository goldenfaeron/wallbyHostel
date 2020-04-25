<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Stuff for {{name}}</h1>

		<v-container grid-list-lg>
			<!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/HWj0XkS091g?autoplay=1"></iframe> -->
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 mr-5>
					<v-card v-for="(item, index) in [...instagram]" :key="index">
						<v-card-title primary-title>{{item.fullName}}</v-card-title>
						<v-img :src="item.profilePicUrlHD"></v-img>

						<v-card-text>
							<h4>
								<v-icon large>mdi-account-arrow-left</v-icon>
								{{item.followsCount}} Follows
							</h4>
							<h4>
								<v-icon large>mdi-account-arrow-right</v-icon>
								{{item.followersCount}} Followers
							</h4>
							<h4>
								<v-icon large>mdi-note-plus</v-icon>
								{{item.postsCount}} Posts
							</h4>
						</v-card-text>

						<v-card-actions>
							<v-icon large>mdi-instagram</v-icon>
							<a :href="'https://www.instagram.com/'+ item.username +'/'">Instagram</a>
						</v-card-actions>
						<v-card>
							<googleMap :props="'Saranda'"></googleMap>
						</v-card>
					</v-card>
				</v-flex>

				<v-flex xs1 sm12 md6 lg32>
					<MiroDialog :props="'https://miro.com/app/embed/o9J_kt_5_XU=/?'"></MiroDialog>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		googleMap: () => import("@/components/googleMap"),
		MiroDialog: () => import("@/components/MiroDialog")
	},
	data() {
		return {
			name: "Dennis"
		};
	},

	computed: {
		instagram() {
			return JSON.parse(
				'{"id": "13992240910","username": "denis_allushi1234","fullName": "Denis_Allushi","biography": "","externalUrl": null,"externalUrlShimmed": null,"followersCount": 241,"followsCount": 383,"hasChannel": false,"highlightReelCount": 0,"isBusinessAccount": false,"joinedRecently": false,"businessCategoryName": null,"private": true,"verified": false,"profilePicUrl": "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/s150x150/85259095_894570424297283_8516260471056105472_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=dvlIbIA-moIAX_xNc36&oh=60aa47477174c8bb61e64e53d69bd7a6&oe=5ECC42CB","profilePicUrlHD": "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/s320x320/85259095_894570424297283_8516260471056105472_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=dvlIbIA-moIAX_xNc36&oh=53bc2389066645052aefb78f780e8448&oe=5ECCBABB","facebookPage": null,"igtvVideoCount": 0,"latestIgtvVideos": [],"postsCount": 1,"latestPosts": []}'
			);
		}
	}
};
</script>

