<template>
	<div class>
		<div class="v-toolbar__content" style="height: 64px;">
			<div
				role="img"
				aria-label="Alpha Construction"
				class="v-responsive v-image shrink"
				style="max-width: 60%;"
			>
				<div class="v-responsive__sizer" style="padding-bottom: 17.6245%;"></div>
				<div
					class="v-image__image v-image__image--cover"
					style="background-image: url(/static/img/bunker.png); background-position: center center;"
				></div>
				<div class="v-responsive__content" style="width: 261px;"></div>
			</div>
			<div class="spacer"></div>
			<div class="v-toolbar__items">
				<a href="/" class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default">
					<span class="v-btn__content">
						<span>Home</span>
					</span>
				</a>
				<a
					href="/services"
					class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
				>
					<span class="v-btn__content">
						<span>Services</span>
					</span>
				</a>
				<a
					href="/projects"
					class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
				>
					<span class="v-btn__content">
						<span>Projects</span>
					</span>
				</a>
				<a
					href="/contact"
					class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
				>
					<span class="v-btn__content">
						<span>Contact</span>
					</span>
				</a>
			</div>
		</div>

		<aside
			class="v-navigation-drawer v-navigation-drawer--close v-navigation-drawer--fixed v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
			data-booted="true"
			style="height: 100%; top: 0px; transform: translateX(100%); width: 256px;"
		>
			<div class="v-navigation-drawer__content">
				<div class="row ma-0 pa-3 flex-no-wrap align-center">
					<div class="v-responsive v-image" style="width: 50px;">
						<div
							class="v-image__image v-image__image--preload v-image__image--contain"
							style="background-position: center center;"
						></div>
						<div class="v-responsive__content"></div>
					</div>
					<button
						type="button"
						class="ml-4 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"
						aria-label="Close"
					>
						<span class="v-btn__content">
							<i aria-hidden="true" class="v-icon notranslate mdi mdi-close theme--light"></i>
						</span>
					</button>
				</div>
				<hr role="separator" aria-orientation="horizontal" class="v-divider theme--light" />
				<div role="list" class="v-list v-sheet v-sheet--tile theme--light">
					<a href="/" class="v-list-item v-list-item--link theme--light" tabindex="0" role="listitem">
						<div class="v-list-item__title">Home</div>
					</a>
					<a
						href="/services"
						class="v-list-item v-list-item--link theme--light"
						tabindex="0"
						role="listitem"
					>
						<div class="v-list-item__title">Services</div>
					</a>
					<a
						href="/projects"
						class="v-list-item v-list-item--link theme--light"
						tabindex="0"
						role="listitem"
					>
						<div class="v-list-item__title">Projects</div>
					</a>
					<a
						href="/contact"
						class="v-list-item v-list-item--link theme--light"
						tabindex="0"
						role="listitem"
					>
						<div class="v-list-item__title">Contact</div>
					</a>
				</div>
			</div>
			<div class="v-navigation-drawer__border"></div>
		</aside>
		<div class="v-sheet v-sheet--tile theme--light primary" style="height: 40vh;">
			<div class="v-responsive v-image" style="height: 100%;">
				<div class="v-responsive__sizer" style="padding-bottom: 31.25%;"></div>
				<div
					class="v-image__image v-image__image--cover"
					style="background-image: linear-gradient(to top, rgba(160, 90, 70, 0.85), rgba(30, 40, 30, 0.85)), url(/static/img/borsh.jpg); background-position: center center;"
				></div>
				<div class="v-responsive__content" style="width: 1600px;">
					<div class="container fill-height white--text">
						<div align="center" justify="center" class="col" style="transform-origin: center top 0px;">
							<h1 class="mb-2 display-3">Building a Culture of Excellence</h1>
							<div
								class="title font-weight-light"
							>Vestibulum volutpat pretium libero. Suspendisse eu ligula.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<main class="v-content py-5" data-booted="true" style="padding: 64px 0px 0px;">
			<div class="v-content__wrap">
				<div id="home">
					<div
						role="alert"
						class="v-alert mt-n5 v-sheet v-sheet--tile theme--dark v-alert--dense primary"
					>
						<div class="v-alert__wrapper">
							<div class="v-alert__content">
								<div class="container py-0">
									<div class="row align-center justify-center">
										<div class="grow hidden-sm-and-down col">
											<h2 class="title font-weight-light">Build your next experience today.</h2>
										</div>
										<div class="shrink col">
											<button
												type="button"
												class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--default"
											>
												<span class="v-btn__content">Get a Quote</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section class="container py-5" id="goals">
						<h2 class="display-1 font-weight-light text-center mb-4">Our Goals</h2>
						<div class="row">
							<div class="d-flex col-sm-6 col-md-4 col-12">
								<div class="v-card v-card--outlined v-sheet theme--light" style="max-width: 100%;">
									<div class="v-responsive v-image">
										<div class="v-responsive__sizer" style="padding-bottom: 40%;"></div>
										<div
											class="v-image__image v-image__image--cover"
											style="background-image: url(&quot;https://alpha-construction.vuetifyjs.com/static/feature1.png&quot;); background-position: center center;"
										></div>
										<div class="v-responsive__content" style="width: 365px;"></div>
									</div>
									<div class="v-card__title align-start" style="min-height: 88px;">Award-winning architecture</div>
									<div
										class="v-card__text pb-5 pt-3"
									>Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.</div>
								</div>
							</div>
							<div class="d-flex col-sm-6 col-md-4 col-12">
								<div class="v-card v-card--outlined v-sheet theme--light" style="max-width: 100%;">
									<div class="v-responsive v-image">
										<div class="v-responsive__sizer" style="padding-bottom: 40.1099%;"></div>
										<div
											class="v-image__image v-image__image--cover"
											style="background-image: url(&quot;https://alpha-construction.vuetifyjs.com/static/feature2.png&quot;); background-position: center center;"
										></div>
										<div class="v-responsive__content" style="width: 364px;"></div>
									</div>
									<div
										class="v-card__title align-start"
										style="min-height: 88px;"
									>Relentless pursuit of your vision</div>
									<div
										class="v-card__text pb-5 pt-3"
									>Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.</div>
								</div>
							</div>
							<div class="d-flex col-sm-6 col-md-4 col-12">
								<div class="v-card v-card--outlined v-sheet theme--light" style="max-width: 100%;">
									<div class="v-responsive v-image">
										<div class="v-responsive__sizer" style="padding-bottom: 40%;"></div>
										<div
											class="v-image__image v-image__image--cover"
											style="background-image: url(&quot;https://alpha-construction.vuetifyjs.com/static/feature3.png&quot;); background-position: center center;"
										></div>
										<div class="v-responsive__content" style="width: 365px;"></div>
									</div>
									<div class="v-card__title align-start" style="min-height: 88px;">Your vision - Our mission</div>
									<div
										class="v-card__text pb-5 pt-3"
									>To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.</div>
								</div>
							</div>
						</div>
					</section>
					<section class="container py-5" id="testimonials">
						<h2 class="display-1 font-weight-light text-center mb-4">Testimonials</h2>
						<div class="row">
							<div class="col-md-6 col-12">
								<div class="v-testimonial theme--light">
									<div class="row mb-4">
										<div class="hidden-sm-and-down shrink col">
											<i
												aria-hidden="true"
												class="v-icon notranslate mdi mdi-format-quote-open theme--light primary--text"
												style="font-size: 40px;"
											></i>
										</div>
										<div
											class="v-testimonial__blurb body-1 col-md-10 col-12"
										>Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
									</div>
									<footer class="text-right">
										<hr
											role="separator"
											aria-orientation="horizontal"
											class="ml-auto mb-3 v-testimonial__divider v-divider theme--light primary"
										/>
										<h4 class="headline font-weight-medium">Nancy Swanson</h4>
										<div
											class="headline font-weight-light grey--text text--darken-1"
										>President, Springfield Country Club</div>
									</footer>
								</div>
							</div>
							<div class="col-md-6 col-12">
								<div class="v-testimonial theme--light">
									<div class="row mb-4">
										<div class="hidden-sm-and-down shrink col">
											<i
												aria-hidden="true"
												class="v-icon notranslate mdi mdi-format-quote-open theme--light primary--text"
												style="font-size: 40px;"
											></i>
										</div>
										<div
											class="v-testimonial__blurb body-1 col-md-10 col-12"
										>Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
									</div>
									<footer class="text-right">
										<hr
											role="separator"
											aria-orientation="horizontal"
											class="ml-auto mb-3 v-testimonial__divider v-divider theme--light primary"
										/>
										<h4 class="headline font-weight-medium">Jason Schraiber</h4>
										<div class="headline font-weight-light grey--text text--darken-1">Mayor, Boca Raton</div>
									</footer>
								</div>
							</div>
						</div>
					</section>
					<section class="container pt-5 px-0 mb-n3 container--fluid" id="highlighted-testimonial">
						<div class="v-parallax" contain style="height: 500px;">
							<div class="v-parallax__image-container">
								<img
									src="/static/home-parallax.png"
									alt
									class="v-parallax__image"
									style="display: block; opacity: 1; transform: translate(-50%, -337px);"
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
										<div class="v-testimonial theme--dark">
											<div class="row mb-4">
												<div class="hidden-sm-and-down shrink col">
													<i
														aria-hidden="true"
														class="v-icon notranslate mdi mdi-format-quote-open theme--dark primary--text"
														style="font-size: 40px;"
													></i>
												</div>
												<div
													class="v-testimonial__blurb body-1 col-md-10 col-12"
												>The complexities and challenges AlphaConstruction successfully overcame on our behalf includes substantial permit obstacles, coordination and selection support of all design and finish materials, and the diffculty of integrating existing and new structures.</div>
											</div>
											<footer class="text-right">
												<hr
													role="separator"
													aria-orientation="horizontal"
													class="ml-auto mb-3 v-testimonial__divider v-divider theme--dark white"
												/>
												<h4 class="headline font-weight-medium">Joe Malonagi</h4>
												<div class="headline font-weight-light white--text">General Manager, Springfield Tower</div>
											</footer>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="container px-3 py-12 mb-n9 grey lighten-3 container--fluid" id="why-us">
						<h2 class="display-1 font-weight-light text-center mb-4">
							Subscribe to our
							<span class="primary--text">Newsletter</span>
						</h2>
						<div class="row justify-center">
							<div class="col-sm-6 col-md-4 col-12">
								<div
									class="v-input v-input--hide-details theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed v-text-field--outlined"
								>
									<div class="v-input__control">
										<div class="v-input__slot">
											<fieldset aria-hidden="true">
												<legend>
													<span>​</span>
												</legend>
											</fieldset>
											<div class="v-text-field__slot">
												<label
													for="input-38"
													class="v-label theme--light"
													style="left: 0px; right: auto; position: absolute;"
												>Email</label>
												<input id="input-38" type="text" />
											</div>
											<div class="v-input__append-inner">
												<button
													type="button"
													class="v-btn v-btn--contained theme--light v-size--default primary"
												>
													<span class="v-btn__content">Subscribe</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
		<footer class="v-footer v-sheet v-sheet--tile theme--dark v-footer--padless" data-booted="true">
			<div class="row ma-0">
				<div class="blue-grey darken-3 pa-5 col-md-3 col-12">
					<h3 class="headline mb-3">Alpha Construction</h3>
					<ul class="body-1 pl-0">
						<li class="mb-3">
							<a href="#" class="transition-swing">Services</a>
						</li>
						<li class="mb-3">
							<a href="#" class="transition-swing">Projects</a>
						</li>
						<li class="mb-3">
							<a href="#" class="transition-swing">Our Team</a>
						</li>
						<li class="mb-3">
							<a href="#" class="transition-swing">Commitment to the Community</a>
						</li>
					</ul>
				</div>
				<div class="blue-grey darken-2 pa-5 col-md-9 col-12">
					<div class="row">
						<div class="col-md-6 col-12">
							<a href="#">Success Stories</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Case Studies</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Testimonials</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Press Room</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Partners</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">JBM Construction</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Macarthy Equipment</a>
						</div>
						<div class="col-md-6 col-12">
							<a href="#">Elite Construction Management</a>
						</div>
					</div>
				</div>
				<div
					class="text-center blue-grey darken-4 pa-3 col col-12"
				>© 2019 Alpha Construction — All Rights reserved.</div>
			</div>
		</footer>
	</div>
</template>