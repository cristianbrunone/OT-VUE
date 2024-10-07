var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Aprendendo Vue JS',
        nome: "",
        telefone: "",
        novidades: "",
        interesses: [],
        conheceu: ""
    },
    methods: {
        enviarDados: function () {
            alert(
                "Nome: " + this.nome + "\n" +
                "Telefone: " + this.telefone + "\n" +
                "Novidades: " + this.novidades + "\n" +
                "Interesses: " + this.interesses.join(", ") + "\n" +
                "Como nos conheceu: " + this.conheceu
            );
        }
    }
});


