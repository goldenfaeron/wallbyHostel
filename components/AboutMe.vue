<template>
	<section id="about" class="hide-overflow">
		<v-layout white>
			<v-flex xs12 md6 pa-5>
				<basebubble1 style="transform: translate(5%, -5%)" />
				<baseheading class="info--text">About Me</baseheading>

				<basetext class="mb-5">
					Lorem ipsum dolor sit amet, consectetur adipi
					<br />scin elit. Etiam vulputate augue vel felis gravida
					<br />porta. Lorem ipsum dolor sit amet.
				</basetext>

				<basesubheading class="info--text">Skills</basesubheading>
				<basetext class="mb-5">
					Lorem ipsum dolor sit amet, consecte tur adipi scin e
					<br />lit. Etiam vulputate augu e vel felis gravida porta.
				</basetext>

				<v-alert outlined color="info">
					<v-layout v-for="(skill, i) in skills" :key="i" style="color: #69A1BB;" wrap>
						<v-flex xs6 text-uppercase v-text="skill.name" />
						<v-flex xs6 text-xs-right v-text="`${skill.value}%`" />
						<v-progress-linear :value="skill.value" color="info" height="8" />
					</v-layout>
				</v-alert>
			</v-flex>
			<v-flex hidden-sm-and-down md6>
				<!-- <v-img
          :src="require('@/assets/aboutme.png')"
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
		skills: [
			{
				name: "Web Design",
				value: 100
			},
			{
				name: "Web Development",
				value: 75
			},
			{
				name: "Web Support",
				value: 90
			}
		]
	})
};
</script>
