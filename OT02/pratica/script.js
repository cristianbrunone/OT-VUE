var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Aplicação de Login',
        autenticado: false,
        usuario: {
            nome: 'Cristian'
        },
        username: '',
        password: '',
        erro: false
    },
    methods: {
        login() {
            //Simulação de Login
            if (this.username == 'usuario' && this.password === 'senha') {
                this.autenticado = true;
                this.erro = false;
            } else {
                this.erro = true;
            }
        },
        logout() {
            this.autenticado = false;
            this.username = '';
            this.password = '';
        }
    }
});