<template>
	<section id="welcome" class="hide-overflow">
		<v-layout mb-5 row>
			<v-flex xs12 md4>
				<v-img :src="$store.state.assetRoot + props.profile.path" height="50vh" />
			</v-flex>

			<v-flex xs12 md8 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
				<v-layout align-center justify-center>
					<v-flex xs11 md11>
						<baseheading>{{props.name}}</baseheading>
						<basetext v-html="props.page_welcome_text"></basetext>
						<nuxt-link :to="''+props.slug" append>
							<basebtn class="mt-4">{{props.page_button_0}}</basebtn>
						</nuxt-link>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</section>
</template>
<script>
export default {
	props: ["props"],
	components: {
		basebubble1: () => import("@/components/base/Bubble1"),
		basebubble2: () => import("@/components/base/Bubble2"),
		baseheading: () => import("@/components/base/Heading"),
		basetext: () => import("@/components/base/Text"),
		basebtn: () => import("@/components/base/Btn")
	}
};
</script>
