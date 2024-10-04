
var vm = new Vue({
    el: "#app",
    data: {

    },

    methods: {
        eventClick: function (value, event) {
            if (event) event.preventDefault()
            alert("clicked " + value)
        }
    }


});
