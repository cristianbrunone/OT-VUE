var app = new Vue({
    el: '#app',
    data: {
        contador: 0
    },
    methods: {
        incrementarContador() {
            this.contador++;
        }
    }
});
