var app = new Vue({
    el: '#app',
    data: {
        usuario: {
            nome: 'Cristian Brunone',
            bio: 'João é um desenvolvedor apaixonado por tecnologias de frontend e backend, com ampla experiencia'
        }
    },
    filters: {
        capitalize(valor) {
            if (!valor) return '';
            valor = valor.toString();
            return valor.charAt(0).toUpperCase() + valor.slice(1);
        },
        truncate(valor, limite) {
            if (!valor) return '';
            valor = valor.toString();
            return valor.length > limite ? valor.substring(0, limite) + '...' : valor;
        }
    }
});

