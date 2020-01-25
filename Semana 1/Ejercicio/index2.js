

//alert(`Hola ${ejerc01.name.value} y ${ejerc01.lastname.value} `)

/*
    this.boton2 = document.getElementById('txtname').innerHTML = `${lec01.name.value}`;
*/ 


(function () {
    window.lec01 = {
        boton2: {},
        name: {},
        lastname: {},
        init: function () {
            this.boton2 = document.getElementById("btnCapture2");
            this.name = document.getElementById("name");
            this.lastname = document.getElementById("lastname");
            this.bind(); //
        },
        bind: function () {
            this.boton2.onclick = this.mostrarMensaje;
        },
        mostrarMensaje: function () {
            //alert(`Hola ${lec01.name.value} ${lec01.lastname.value} `)
            document.getElementById('txtname').innerHTML = `${lec01.name.value}`;
            document.getElementById('txtlastname').innerHTML = `${lec01.lastname.value}`;
        }
    }
    lec01.init();
})()