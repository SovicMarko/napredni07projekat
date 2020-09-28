export default {
    methods: {
        formatPrice: function (price) {
            let p = price.toFixed(0);
            p = p.toString().split("").reverse();
            if (p.length > 3) {
                p.splice(3, 0, ".");
            }
            if (p.length > 7) {
                p.splice(7, 0, ".");
            }
            let f = p.reverse().join("");
            return f;
        }
    }
}