export const Mixin = {
    computed: {
        nav() {
            return [
                {
                    icon: "mdi-home",
                    title: this.$t("nav.about") + this.$store.state.city,
                    to: "/"
                },
                {
                    icon: "mdi-city",
                    title: this.$t("nav.towns") + this.$store.state.city,
                    to: "/towns"
                },
                {
                    icon: "mdi-map-legend",
                    title: this.$t("nav.activities") + this.$store.state.city,
                    to: "/activities"
                },

                {
                    icon: "mdi-home",
                    title: this.$t("nav.booking"),
                    to: "/booking"
                },
                {
                    icon: "mdi-food",
                    title: this.$t("nav.drink"),
                    to: "/bars"
                },
                {
                    icon: "mdi-store",
                    title: this.$t("nav.shops"),
                    to: "/shops"
                },
                {
                    icon: "mdi-instagram",
                    title: this.$t("nav.instagram") + this.$store.state.city,
                    to: "/instagram/posts"
                },
                {
                    icon: "mdi-youtube",
                    title: this.$t("nav.youtube"),
                    to: "/youtube"
                },

                {
                    icon: "",
                    img: "/img/airbnbLogo.png",
                    title: this.$t("nav.airbnbs") + this.$store.state.city,
                    to: "/airbnb"
                },
                {
                    icon: "mdi-airport",

                    title: this.$t("nav.airports") + this.$store.state.city,
                    to: "/airports"
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
                    title: this.$store.state.name + this.$t("nav.team"),
                    to: "/team"
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
