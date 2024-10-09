var app = new Vue({
    el: '#app',
    data: {
        message: '',
        status: 'Esperando...'
    },
    watch: {
        //observador que escuta mudanças na propriedade message
        message(newValue, oldValue) {
            this.status = `Mensagem mudou de '${oldValue}' para  '${newValue}'`;
            
        }
    }
});

