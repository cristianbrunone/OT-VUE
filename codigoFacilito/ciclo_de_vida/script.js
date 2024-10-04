
var vm = new Vue({
    el: "#app",
    data: {
        message: "Hola Mundo"
    },
    beforeCreated: function () {
        console.log("Before Created")
    },
    beforeCreated: function () {
        console.log("Before Created")
    },
    beforeCreated: function () {
        console.log("Before Created")
    },
    updated: function () {
        console.log("Updated")
    },
    destroyed: function () {
        console.log("destroyed")
    }

});
