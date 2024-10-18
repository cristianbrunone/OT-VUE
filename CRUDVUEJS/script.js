new Vue({
    el: '#app',
    data: {
        currentContact: {
            name: '',
            phone: '',
            email: ''
        },
        contacts: [], // Array que armazenará todos os contatos
        editIndex: -1, // Índice para saber se estamos editando um contato
        messageVisible: false, // Controla a visibilidade da mensagem
        messageText: '' // Texto da mensagem
    },
    methods: {
        addContact() {
            if (this.currentContact.name && this.currentContact.phone && this.currentContact.email) {
                this.contacts.push({ ...this.currentContact });
                this.showMessage('Contato adicionado com sucesso!');
                this.resetForm();
            } else {
                this.showMessage('Por favor, preencha todos os campos!');
            }
        },
        editContact(index) {
            this.editIndex = index;
            this.currentContact = { ...this.contacts[index] };
        },
        updateContact() {
            if (this.editIndex !== -1) {
                this.contacts[this.editIndex] = { ...this.currentContact };
                this.showMessage('Contato atualizado com sucesso!');
                this.resetForm();
                this.editIndex = -1;
            }
        },
        deleteContact(index) {
            this.contacts.splice(index, 1);
            this.showMessage('Contato deletado com sucesso!');
        },
        resetForm() {
            this.currentContact = { name: '', phone: '', email: '' };
            this.editIndex = -1;
        },
        showMessage(text) {
            this.messageText = text;
            this.messageVisible = true;
            setTimeout(() => {
                this.messageVisible = false;
            }, 4000);
        }
    }
});
