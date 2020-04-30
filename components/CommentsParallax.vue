<template>
	<div>
		<section class="container pt-5 px-0 mb-n3 container--fluid" id="highlighted-testimonial">
			<div class="v-parallax" contain style="height: 500px;">
				<div class="v-parallax__image-container">
					<img
						src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/70595506_177075806787446_3686869326248795383_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=CL-v_820hcIAX945II8&oh=6b981da876f643f6172f0934dc665e45&oe=5EBD6BC4"
						alt
						class="v-parallax__image"
						style="display: block; opacity: 1; transform: translate(-50%, 223px);"
					/>
				</div>
				<div class="v-parallax__content">
					<div
						class="v-overlay px-3 v-overlay--absolute v-overlay--active theme--dark"
						style="z-index: 5;"
					>
						<div
							class="v-overlay__scrim"
							style="opacity: 0.8; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);"
						></div>
						<div class="v-overlay__content">
							<v-container>
								<div class="v-testimonial theme--dark">
									<div class="row mb-4">
										<div class="hidden-sm-and-down shrink col">
											<i
												aria-hidden="true"
												class="v-icon notranslate mdi mdi-format-quote-open theme--dark primary--text"
												style="font-size: 40px;"
											></i>
										</div>

										<div class="v-testimonial__blurb body-1 col-md-10 col-12">{{props.comment}}</div>
										<br />
										<div class="text-xs-center">
											<v-rating color="red" value="5" half-increments readonly></v-rating>
										</div>
									</div>
									<footer class="text-right">
										<hr
											role="separator"
											aria-orientation="horizontal"
											class="ml-auto mb-3 v-testimonial__divider v-divider theme--dark white"
										/>
										<h4 class="headline font-weight-medium">{{props.title}}</h4>
										<div class="headline font-weight-light white--text">{{props.subtitle}}</div>
									</footer>
								</div>
							</v-container>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	components: { googleMap: () => import("@/components/googleMap") },
	props: ["props"]
};
</script>