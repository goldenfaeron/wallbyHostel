export const Mixin = {
    computed: {
        sortReviews() {
            if (this.reviews) {
                let reviewsClone = this.reviews;
                let arr = [];

                //Check if has text and push to new array
                reviewsClone.forEach(element => {
                    if (element.text) {
                        element.text = element.text.replace("(Translated by Google)", "");

                        if (element.text.length > 6) {
                            arr.push(element);
                        }
                    }
                });

                //Sort array by length
                function sortByLength(array) {
                    return array.sort((x, y) => x.text.length - y.text.length);
                }

                const uniqueArray = arr.filter((name, index) => {
                    const _thing = JSON.stringify(name);
                    return (
                        index ===
                        arr.findIndex(obj => {
                            return JSON.stringify(obj) === _thing;
                        })
                    );
                });

                // Logs ["Fashion Designer", "Web Developer", "Web Designer"]
                return sortByLength(uniqueArray).reverse();
            }
        }
    },
}