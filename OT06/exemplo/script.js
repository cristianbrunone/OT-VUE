var app = new Vue({
    el: '#app',
    methods: {
        mostrarAlerta() {
            alert('Botão clicado!');
        },
        mudarCor() {
            console.log('O mouse passou sobre o elemento');
        },
        mostrarTecla(event) {
            console.log("Tecla pressionada", event.key);
        },
        cumprimentar(mensagem) {
            alert(mensagem);
        },
        mostrarCoordenadas(event) {
            console.log('Posição do clique', event.clientX, event.clientY); // Correção aqui
        }
    }
});
