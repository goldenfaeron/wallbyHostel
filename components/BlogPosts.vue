<template>
	<v-layout column>
		<!-- Blog items called on page load -->
		<BlogPreview v-for="(item, index) in props" :key="index" :content="item"></BlogPreview>

		<!-- Additional blog items saved in store -->

		<div v-for="(item, ind) in ip" :key="ind">
			<BlogPreview v-for="(item, i) in ip[ind]" :key="i" :content="item"></BlogPreview>
		</div>

		<v-layout justify-center align-content-center>
			<v-progress-circular v-if="noLoad == false" :size="70" :width="5" color="info" indeterminate></v-progress-circular>
		</v-layout>
	</v-layout>
</template>

<script>
export default {
	components: {
		BlogPreview: () => import("@/components/BlogPreview")
	},
	props: ["props"],
	data() {
		return {
			ip: [],
			more: 3,
			skip: 3,
			noLoad: false
		};
	},
	methods: {
		async fetch() {
			let collection = "blog";
			const ip = await this.$axios.$post(
				this.$store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					this.$store.state.collectionsToken,
				{
					limit: 3,
					skip: this.skip,
					sort: { _created: -1 }
				}
			);
			this.ip.push(ip.entries);
			this.skip = this.skip + ip.entries.length;
			this.more = ip.entries.length;

			if (ip.entries.length < 3) {
				this.noLoad = true;
			}
		},

		scroll() {
			window.onscroll = () => {
				let bottomOfWindow =
					Math.max(
						window.pageYOffset,
						document.documentElement.scrollTop,
						document.body.scrollTop
					) +
						window.innerHeight ===
					document.documentElement.offsetHeight;

				if (bottomOfWindow && this.noLoad == false) {
					this.fetch();
				}
			};
		}
	},
	mounted() {
		this.scroll();
	}
};
</script>