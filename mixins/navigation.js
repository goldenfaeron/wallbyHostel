/*owner
home
contact
saranda
location
pub_crawls
*pub-crawls
rooms-and-rates
services-and-facilities
social-areas
23.06.2020 18:26
*/
export const Mixin = {
    computed: {
        nav() {
            return [
                {
                    icon: "mdi-home",
                    title: "About",
                    to: "/about"
                },
                {
                    icon: "mdi-map-legend",
                    title: "Home",
                    to: "/"
                },
                {
                    icon: "mdi-youtube",
                    title: "Rooms and Rates",
                    to: "/roomsAndRates"
                },
                {
                    icon: "mdi-youtube",
                    title: "Services and Facilities",
                    to: "/servicesAndFacilities"
                },
                {
                    icon: "mdi-instagram",
                    title: "Pub crawls",
                    to: "/instagram/posts"
                },
                {
                    icon: "mdi-store",
                    title: "Location",
                    to: "/shops"
                },
                {
                    icon: "mdi-city",
                    title: "Owner",
                    to: "/towns"
                },

                {
                    icon: "mdi-home",
                    title: "Contact",
                    to: "/booking"
                },
                {
                    icon: "mdi-food",
                    title: "Experience Saranda",
                    to: "/bars"
                },
                {
                    icon: "mdi-youtube",
                    title: "Social Areas",
                    to: "/youtube"
                },


                {
                    icon: "mdi-weather-cloudy",

                    title: this.$t("nav.weather") + this.$store.state.city,
                    to: "/weather"
                },

                {
                    icon: "mdi-biohazard",
                    title: this.$t("nav.corona") + this.$store.state.city,
                    to: "/corona"
                },
                {
                    icon: "mdi-account-box",
                    title: this.$store.state.name + this.$t("nav.news"),
                    to: "/news"
                }
            ];
        },
    }
}
