<template>
	<div>
		<!-- Welcome -->
		<section id="welcome">
			<v-layout row>
				<v-flex xs12 md6>
					<v-img :src="$store.state.assetRoot + props.profile.path" height="100%" />
				</v-flex>

				<v-flex xs12 md6 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
					<basebubble1 style="transform: rotate(180deg) translateY(25%)" />

					<v-layout align-center justify-center>
						<v-flex xs12 md6>
							<baseheading>{{props.name}}</baseheading>
							<basetext v-html="props.page_title"></basetext>
							<!-- <basebtn class="mt-4">{{props.page_button_0}}</basebtn> -->
						</v-flex>
					</v-layout>

					<basebubble2 style="transform: rotate(180deg) translate(-200px, -15%)" />
				</v-flex>
			</v-layout>
		</section>
		<!-- Welcome end -->

		<!-- Recent Projects -->
		<section id="recent-projects" class="hide-overflow">
			<v-layout>
				<v-flex xs12 md6 primary text-xs-center pa-5 white--text>
					<basebubble1 style="transform: rotate(180deg) translateX(25%)" />
					<baseheading>{{props.page_projects_title}}</baseheading>

					<basetext class="mb-5" v-html="props.page_projects_text"></basetext>

					<v-card color="secondary">
						<v-container grid-list-md pa-2>
							<v-layout wrap>
								<v-flex v-for="image in props.page_projects_gallery" :key="image" xs12 md6>
									<a href="#">
										<v-img :src="$store.state.webRoot+ image.path" height="300" />
									</a>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
				<v-flex xs12 md6>
					<v-img
						hidden-sm-and-down
						:src="$store.state.assetRoot + props.page_projects_image.path"
						height="100%"
					/>
				</v-flex>
			</v-layout>
		</section>
		<!-- Recent Projects End -->

		<!-- Services  -->
		<section id="services" class="hide-overflow">
			<v-layout accent>
				<v-flex xs12 md6 hidden-sm-and-down>
					<v-img :src="$store.state.assetRoot + props.page_services_image.path" height="100%" />
				</v-flex>
				<v-flex xs12 md6 text-xs-center pa-5>
					<v-layout align-center justify-center fill-height wrap>
						<v-flex xs12>
							<basebubble2 style="transform: translateX(55%)" />
							<baseheading class="info--text" v-html="props.page_services_title"></baseheading>

							<basetext class="mb-5" v-html="props.page_services_text"></basetext>
						</v-flex>
						<v-flex v-for="(service, i) in props.page_services" :key="i" md6 text-xs-center mb-3>
							<v-avatar class="elevation-6 mb-2" color="#69A1BB" size="64" tile>
								<v-icon dark size="52">{{service.value.icon}}</v-icon>
							</v-avatar>
							<basetext>
								{{service.value.name}}
								<div class="mb-2">{{service.value.title}}</div>
								<div v-html="service.value.text"></div>
							</basetext>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</section>
		<!-- Services End -->

		<!-- GetInTouch -->
		<section id="about" class="hide-overflow">
			<v-layout white row>
				<v-flex xs12 md6 pa-5>
					<basebubble1 style="transform: translate(5%, -5%)" />
					<baseheading class="info--text">{{props.page_about_title}}</baseheading>

					<basetext class="mb-5">{{props.page_about_text}}</basetext>

					<v-alert outlined color="info">
						<v-layout v-for="(skill, i) in props.page_skills" :key="i" style="color: #69A1BB;" wrap>
							<v-flex xs6 text-uppercase>{{skill.value.skill}}</v-flex>
							<v-flex xs6 text-xs-right>{{skill.value.percent}}%</v-flex>
							<v-progress-linear :value="skill.value.percent" color="info" height="8" />
						</v-layout>
					</v-alert>
				</v-flex>
				<v-flex xs12 md6>
					<v-img :src="$store.state.assetRoot + props.page_about_image.path" height="100%" />
				</v-flex>
			</v-layout>
		</section>
		<!-- GetInTouch end -->

		<!-- <get-in-touch /> -->
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		AboutMe: () => import("@/components/AboutMe"),
		GetInTouch: () => import("@/components/GetInTouch"),
		RecentProjects: () => import("@/components/RecentProjects"),
		Services: () => import("@/components/Services"),
		Welcome: () => import("@/components/Welcome"),

		//from welcome
		basebubble1: () => import("@/components/base/Bubble1"),
		basebubble2: () => import("@/components/base/Bubble2"),
		baseheading: () => import("@/components/base/Heading"),
		basetext: () => import("@/components/base/Text"),
		basebtn: () => import("@/components/base/Btn")
	}
};
</script>
