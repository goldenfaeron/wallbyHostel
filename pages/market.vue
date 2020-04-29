<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs6 md4 v-for="(item, index) in 5" :key="index">
					<TransitionCard></TransitionCard>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		TransitionCard: () => import("@/components/TransitionCard")
	}
};
</script>