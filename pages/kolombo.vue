<template>
	<div>
		<!-- 
		-->

		<div class="text-xs-center">
			<v-dialog v-model="dialog" width="100%" height="810px">
				<template v-slot:activator="{ on }">
					<v-container grid-list-lg>
						<v-layout row wrap justify-center=" " align-center>
							<v-flex xs12>
								<v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
							</v-flex>
						</v-layout>
					</v-container>
				</template>

				<v-card>
					<v-card-title class="headline grey lighten-2" primary-title>
						<v-icon>mdi-ghost</v-icon>
						A creative work from
						{{$store.state.developer.name}}
					</v-card-title>

					<v-card-text>
						<br />Graphic Design
						Development and design go hand in hand.
						If you are the creative type then you will want your website, platform or project to unique and expressive. After all, it's your brainchild.
						We teach you the latest design programs, technologies and practice for colorful minds to kick-start their own brands and designs.
						You will be making fly designs in no time which can be transformed into websites, social media, business cards, posters and marketing videos and campaigns.
					</v-card-text>
					<iframe
						src="https://miro.com/app/embed/o9J_kt_5_XU=/?"
						frameborder="0"
						height="800px"
						width="100%"
						scrolling="no"
						allowfullscreen
					></iframe>
					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
		<v-img height="300" width="400" :src="require('@/static/img/putin.jpg')"></v-img>
		<div id="matrix">
			<div class="d1 c1 de" style="left:5px;">
				q8w
				<span>1</span>ertyuioklsdfgh
				<span>j</span>zxc
			</div>
			<div class="d3 f1" style="left:30px;">
				hgd4ldhbc9kpugccsr
				<span>q</span>
			</div>
			<div class="d1 f2 c1" style="left:60px;">
				tr
				<span>z</span>ews0yfkldf4cvgbhj
				<span>n</span>
			</div>
			<div class="d2 f1" style="left:80px;">
				sodhr49wh
				<span>u</span>yfbsrnlepjh
			</div>
			<div class="d4 c3 de" style="left:110px;">
				fue73
				<span>s</span>jf0tbkxpowf
				<span>v</span>n
			</div>
			<div class="d2 c1" style="left:140px;">
				sjdhfgueiwfgivecjowxkwpkpo
				<span>m</span>vcjoeuur
			</div>
			<div class="d3 f2 c1" style="left:170px;">
				tr
				<span>z</span>hfggh
			</div>
			<div class="d1 c1" style="left:185px;">
				thgp
				<span>m</span>srthdvytfv09876t
				<span>q</span>fgv
			</div>
			<div class="d3 de" style="left:200px;">
				dhiwgfdue
				<span>s</span>rjm
			</div>
			<div class="d4 f1" style="left:250px;">
				osadh
				<span>a</span>rshdyfeujm
			</div>
			<div class="d2 de" style="left:290px;">
				fwedjsdjh
				<span>l</span>gmrghftdercwewergjm
			</div>
			<div class="d3 f2" style="left:310px;">
				sodhr49wh
				<span>a</span>yfbsrnlepjh
			</div>
			<div class="d1 f1" style="left:350px;">
				p00oi
				<span>0</span>nf5sujhgdgbrjs36gdr
				<span>g</span>jpo
			</div>
			<div class="d4 c1" style="left:390px;">
				h68kgdetklbf
				<span>b</span>eswk
			</div>
			<div class="d2 de" style="left:410px;">
				dfrttvb
				<span>s</span>cfsr
			</div>
			<div class="d1 c1 de" style="left:430px;">
				sgfy
				<span>b</span>0hfrese
				<span>4</span>kc
			</div>
		</div>
		<!-- <iframe
			height="265"
			style="width: 100%;"
			scrolling="no"
			src="https://codepen.io/igor_agapov/embed/ZEEPRba?height=265&theme-id=light&default-tab=js,result"
			frameborder="no"
			allowtransparency="true"
			allowfullscreen="true"
			loading="lazy"
		></iframe>-->
	</div>
</template>


<script>
export default {
	data() {
		return {
			dialog: false
		};
	}
};
</script>

<style lang="scss">
@font-face {
	font-family: Katakana;
	src: url("https://s.cdpn.io/26175/MoonBeams-katakana_.TTF");
}
#matrix {
	margin: 1em auto;
	font-family: Katakana;
	width: 100%;
	height: 500px;
	overflow: hidden;
	background: #000;
	background-image: -webkit-gradient(
		linear,
		0% 90%,
		0% 100%,
		from(rgba(0, 255, 0, 0)),
		to(rgba(0, 255, 0, 0.1))
	);
	color: rgba(0, 255, 0, 0.7);
	text-shadow: rgba(255, 255, 255, 0.8) 0px 0px 4px;
	position: relative;
}
@-webkit-keyframes fade {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@-webkit-keyframes fall {
	from {
		top: -250px;
	}
	to {
		top: 300px;
	}
}

#matrix div {
	/* writing-mode: tb-rl; - ughh. doesn't work */
	position: absolute;
	top: 0;
	/* arrearance */
	-webkit-transform-origin: 0%;
	-webkit-transform: rotate(90deg);

	/* animation */
	-webkit-animation-name: fall, fade;
	-webkit-animation-iteration-count: infinite; /* use 0 to infinite */
	-webkit-animation-direction: normal; /* default is normal. use 'alternate' to reverse direction */
	-webkit-animation-timing-function: ease-out;
}
#matrix span {
	color: rgb(0, 255, 0);
	text-shadow: rgb(255, 255, 255) 0px 0px 5px;
}
.f1 {
	font-size: 1.2em;
}
.f2 {
	font-size: 0.9em;
}
.c1 {
	color: rgba(0, 255, 0, 0.5);
}
.d1 {
	-webkit-animation-duration: 4s;
}
.d2 {
	-webkit-animation-duration: 6s;
}
.d3 {
	-webkit-animation-duration: 8s;
}
.d4 {
	-webkit-animation-duration: 10s;
}
.de {
	-webkit-animation-delay: 3s;
}
</style>

