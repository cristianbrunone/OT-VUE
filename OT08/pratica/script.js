var app = new Vue({
    el: '#app',
    data: {
        firstName: 'John',
        lastName: 'Doe',
        apiResponse: ''
    },
    computed: {
        //Propiedae computad que retorna o nome completo
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    watch: {
        //observa mudanças no fullNmae e faze uma chamada de API fictia
        fullName(newName) {
            this.fakeApiCall(newName)
        }
    },
    methods: {
        fakeApiCall(name) {
            this.apiResponse = `Api chamada com o nome:  ${name}`; 
        }
    }
});

