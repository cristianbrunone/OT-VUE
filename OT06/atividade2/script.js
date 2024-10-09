var app = new Vue({
    el: '#app',
    data: {
        nome: ''
    },
    methods: {
        enviarFormulario() {
            alert('Formulario enviado com o nome ' + this.nome)
        }
    }
});
