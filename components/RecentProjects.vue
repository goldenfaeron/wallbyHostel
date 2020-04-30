<template>
	<section id="recent-projects" class="hide-overflow">
		<v-layout>
			<v-flex xs12 md6 primary text-xs-center pa-5 white--text>
				<basebubble1 style="transform: rotate(180deg) translateX(25%)" />
				<baseheading>Recent Projects</baseheading>

				<basetext class="mb-5">
					Lorem ipsum dolor sit amet, consectetur adipi
					<br />scin elit. Etiam vulputate augue vel felis gravida
					<br />porta. Lorem ipsum dolor sit amet.
				</basetext>

				<v-card color="secondary">
					<v-container grid-list-md pa-2>
						<v-layout wrap>
							<v-flex v-for="project in projects" :key="project" xs12 md6>
								<a href="#">
									<!-- <v-img
                    :src="require(`@/assets/${project}.jpeg`)"
                    height="300"
									/>-->
								</a>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
			<v-flex hidden-sm-and-down md6>
				<!-- <v-img
          :src="require('@/assets/recentprojects.png')"
          height="100%"
				/>-->
			</v-flex>
		</v-layout>
	</section>
</template>

<script>
export default {
	components: {
		basebubble1: () => import("@/components/base/Bubble1"),
		basebubble2: () => import("@/components/base/Bubble2"),
		baseheading: () => import("@/components/base/Heading"),
		basetext: () => import("@/components/base/Text"),
		basebtn: () => import("@/components/base/Btn")
	},
	data: () => ({
		projects: ["project1", "project2", "project3", "project4"]
	})
};
</script>
