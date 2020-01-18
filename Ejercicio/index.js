
(function () {
    window.lec01 = {
        boton: {},
        name: {},
        lastname: {},
        init: function () {
            this.boton = document.getElementById("btnCapture");
            this.name = document.getElementById("name");
            this.lastname = document.getElementById("lastname");
            this.bind(); //
        },
        bind: function () {
            this.boton.onclick = this.mostrarMensaje;
        },
        mostrarMensaje: function () {
            alert(`Hola ${lec01.name.value} ${lec01.lastname.value} `)
        }
    }
    lec01.init();
})()



