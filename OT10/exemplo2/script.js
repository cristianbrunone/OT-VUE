//Definindo um componente reutilizavel
Vue.component('button-component', {
    props: ['text'],
    template: '<button @click="emitClick">{{ text }}</button>',
    methods: {
        emitClick(){
            this.$emit('clicked');
        }
    }
});

//Instancia principal Vue
new Vue({
    el: '#app'
});
