//Definindo um componente reutilizavel
Vue.component('button-component', {
    props: ['text', 'color'],
    template: '<button :style="{ backgroundColor: color}">{{ text }}</button>'
});

//Instancia principal Vue
new Vue({
    el: '#app'
});
