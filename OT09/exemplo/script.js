var app = new Vue({
    el: '#app',
    data: {
        message: "Hola Cristian"
    },
    methods: {
        //Propiedae computad que retorna o nome completo
        changeMessage() {
            this.message = 'Message Update';
        },
        destroyComponent() {
            this.$destroy(); // Destroi o componente manualmente
        }
    },
    // Lifecycle 
    beforeCreate() {
        console.log('beforeCreate: Dados ainda não estão disponiveis')
    },
    created() {
        console.log('Created: Datos já foram inicializados');
    },
    beforeMount() {
        console.log('beforeMount: Componente prestes a ser montado no Dom');
    },
    mounted() {
        console.log('mounted : Componente montado no DOM');
    },
    beforeUpdate() {
        console.log('beforeUpdate: Dados foram alterados, prestes a atualizar o DOM');
    },
    updated() {
        console.log('updated: DOM foi atualizado');
    },
    beforeDestroy() {
        console.log('beforeDestroy: Componente prestes a ser destruído');
    },
    destroyed() {
        console.log('destroyed: Componente foi destruído');
    }

});

