<template>
	<div>
		<v-carousel cycle hide-delimiters interval="10000" :height="this.windowSize.y-64">
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<div class="display-4 font-weight-bold">
							{{Math.round(weather.daily[0].temp.max)}}°
							<span class="font-weight-thin">|</span>
							<span class="font-weight-light">{{Math.round(weather.daily[0].temp.min)}}°</span>
						</div>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(8,12)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(12,16)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(16,20)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(20,24)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(24,28)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center" justify="center">
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex lg3 v-for="(item, index) in weather.hourly.slice(28,32)" :key="index">
									<v-card color="transparent" flat>
										<v-layout justify-center>
											<v-card-title class="black--text display-1" align-center>{{getTimeString(item.dt)}}</v-card-title>
										</v-layout>
										<v-row align="center" justify="center">
											<img
												height="100px"
												:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
											/>
										</v-row>
										<br />
										<div align="center">
											<p class="display-2 font-weight-bold">{{Math.round(item.temp)}}°</p>
											<p class="display-1 font-weight-light">{{item.clouds}} % overcast</p>
										</div>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>

			<v-carousel-item>
				<v-img :height="this.windowSize.y-64" src="/img/weatherBackground.jpg">
					<div class="title" style="position: absolute; padding-left: 2%; padding-top: 1.5%;">
						<p>
							<span class="font-weight-bold">{{getDayString(weather.daily[0].dt)}}</span>
							<br />
							<span class="font-weight-regular">{{weather.timezone}}</span>
						</p>
						<p></p>
					</div>
					<v-row class="fill-height" align="center">
						<v-container grid-list-lg>
							<v-layout row justify-center>
								<v-flex lg6>
									<div class="display-4 font-weight-bold" align="end">
										{{Math.round(weather.daily[0].temp.max)}}°
										<span class="font-weight-thin">|</span>
									</div>
								</v-flex>
								<v-flex lg6>
									<div class="display-2 font-weight-light">
										Feels like:
										<span class="font-weight-medium">{{Math.round(weather.current.feels_like)}}°</span>
										<br />Wind:
										<span class="font-weight-medium">{{degToCompass(weather.current.wind_deg)}} {{Math.round(weather.current.wind_speed)}} km/h</span>
									</div>
								</v-flex>
							</v-layout>
						</v-container>
					</v-row>
				</v-img>
			</v-carousel-item>
		</v-carousel>
	<!--	<v-container grid-list-lg>
			<v-responsive class="mx-auto" width="56">
				<v-icon x-large>mdi-weather-cloudy</v-icon>
			</v-responsive>
			<h1 class="primary--text main-title" style="text-align: center;">Weather in {{$store.state.city}}</h1>
			<h2 class="secondary--text" style="text-align: center;">7 day forecast</h2>
			<v-layout row wrap mt-5>
				<v-flex x12 v-for="(item, index) in weather.daily" :key="index" v-if="index<7">
					<v-card>
						<v-card-title primary-title>{{getDayString(item.dt)}}</v-card-title>

						<v-img width="100" :src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"></v-img>
						<v-card-text>
							<h2>{{Math.round(item.temp.day)}}°</h2>
							<br />
							{{item.weather[0].description}}
						</v-card-text>
					</v-card>
				</v-flex>

				<v-layout row wrap>
					<v-flex xs4 v-for="(item, index) in weather.daily" :key="index" v-if="index<7">
						<v-card>
							<v-card-title primary-title>{{getDayString(item.dt)}}</v-card-title>
							<v-card-subtitle>{{item.weather[0].description}}</v-card-subtitle>

							<v-card-text>
								<v-img
									width="100"
									:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
								></v-img>
								Day: {{item.temp.day}}
								<br />
								Morning: {{item.temp.morn}}
								<br />
								Evening: {{item.temp.eve}}
								<br />
								(Maximum: {{item.temp.max}}, Minimum: {{item.temp.min}} )
								<br />
								Night: {{item.temp.night}}
								<br />
								Sunrise: {{getTimeString(item.sunrise)}}
								<br />
								Sunset: {{getTimeString(item.sunset)}}
								<br />
								Humidity: {{item.humidity}} %
								<br />
								Clouds: {{item.clouds}} % overcast
								<br />
								UVI: {{item.uvi}}
								<br />
								Wind speed: {{item.wind_speed}} Meter per second
								<br />
								Wind speed: {{degToCompass(item.wind_deg)}}
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-layout>
		</v-container>-->
	</div>
</template>

<script>
export default {
	data: () => ({
		windowSize: {
			x: 0,
			y: 0
		}
	}),
	components: {
		CardHotelMobile: () => import("@/components/CardHotelMobile"),
		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel"),
		CardHotel: () => import("@/components/CardHotel"),
		Assurance: () => import("@/components/Assurance"),
		Mission: () => import("@/components/Mission")
	},

	//Make location dynamic
	async asyncData({ $axios, route, store }) {
		let request1 = await $axios.get(
			"https://api.openweathermap.org/data/2.5/onecall?lat=40.05&lon=19.86&units=metric&appid=" +
				store.state.weatherToken
		);

		return {
			weather: request1.data
			// booking: request2.data.entries.reverse()
		};
	},

	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		},
		getDayString(e) {
			var timestamp = e;
			var a = new Date(timestamp * 1000);
			var days = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			];
			var dayOfWeek = days[a.getDay()];
			return dayOfWeek;
		},
		getTimeString(e) {
			var timestamp = e;
			var a = new Date(timestamp * 1000);

			return a.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
		},

		degToCompass(deg) {
			var val = Math.floor(deg / 22.5 + 0.5);
			var arr = [
				"N",
				"NNE",
				"NE",
				"ENE",
				"E",
				"ESE",
				"SE",
				"SSE",
				"S",
				"SSW",
				"SW",
				"WSW",
				"W",
				"WNW",
				"NW",
				"NNW"
			];
			return arr[val % 16];
		},

		getCardinal(deg) {
			var degToCard = function(deg) {
				if (deg > 11.25 && deg < 33.75) {
					return "NNE";
				} else if (deg > 33.75 && deg < 56.25) {
					return "ENE";
				} else if (deg > 56.25 && deg < 78.75) {
					return "E";
				} else if (deg > 78.75 && deg < 101.25) {
					return "ESE";
				} else if (deg > 101.25 && deg < 123.75) {
					return "ESE";
				} else if (deg > 123.75 && deg < 146.25) {
					return "SE";
				} else if (deg > 146.25 && deg < 168.75) {
					return "SSE";
				} else if (deg > 168.75 && deg < 191.25) {
					return "S";
				} else if (deg > 191.25 && deg < 213.75) {
					return "SSW";
				} else if (deg > 213.75 && deg < 236.25) {
					return "SW";
				} else if (deg > 236.25 && deg < 258.75) {
					return "WSW";
				} else if (deg > 258.75 && deg < 281.25) {
					return "W";
				} else if (deg > 281.25 && deg < 303.75) {
					return "WNW";
				} else if (deg > 303.75 && deg < 326.25) {
					return "NW";
				} else if (deg > 326.25 && deg < 348.75) {
					return "NNW";
				} else {
					return "N";
				}
			};
			return degToCard();
		}
	},
	mounted() {
		this.onResize();
	},
	head() {
		return {
			title: "Hotels in " + this.$store.state.city,
			meta: [
				{
					hid: "Hotels in " + this.$store.state.city,
					name: "Hotels in " + this.$store.state.city,
					content: "Hotels in " + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style lang="css">
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 10;
	position: relative;
	height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 1rem; /* space for ellipsis */
}
.truncate-overflow::before {
	position: absolute;
	content: "";
	inset-block-end: 0; /* "bottom" */
	inset-inline-end: 0; /* "right" */
}
.truncate-overflow::after {
	content: "";
	position: absolute;
	inset-inline-end: 0; /* "right" */
	width: 1rem;
	height: 1rem;
	background: white;
}
</style>
