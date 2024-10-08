var app = new Vue({
    el: '#app',
    data: {
        isRed: true,
        isGreen: false,
        fontSize: 16
    },
    methods: {
        toggleClass() {
            this.isRed = !this.isRed;
            this.isGreen = !this.isGreen;
        },
        increaseFontSize() {
            this.fontSize += 2;
        }
    }
});


