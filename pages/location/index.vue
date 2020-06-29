<template>
    <div>
        
  <HotelLocation :props="map"></HotelLocation> 
    			<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img height="100%" :src="asset + index.image1.path">
					</v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #000000; height: 100%;">
						<v-container
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
										<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{index.block1_title}}</p>
											<div
												v-html="index.block1_text"
												:class="this.resize.bigText  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
			</v-layout>
		</v-container>

              
    </div>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	middleware: "location",
    data() {
        return {
            	index: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
        }
    },
    components:{
      
		HotelServices: () => import("@/components/containers/HotelServices"),
		HotelAbout: () => import("@/components/containers/HotelAbout"),
		HotelLocation: () => import("@/components/containers/HotelLocation"),
    }
}
</script>