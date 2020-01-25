

(function () {
    window.lec01 = {
        boton: {},
        text: {},
        init: function () {
            this.boton = document.getElementById("btnMensaje");
            this.text = document.getElementById("name");
            this.bind(); //
        },
        bind: function () {
            this.boton.onclick = this.mostrarMensaje;
        },
        mostrarMensaje: function () {
            console.log(`Hola ${lec01.text.value}`)
        }
    }
    lec01.init();
})()



(function () {
    window.robert={
        name: {}, 
        lastname:{}, 
        asignName:function(){
            this.boton = document.getElementById("btnName");
            this.name= "Robert";
        }, 
        showname:function(){
            this.asignName;
            console.log(`Bienvenido ${robert.name}`)
        }, bind:function(){
            this.boton.onclick = this.showname;
        },
        init:function(){
            this.showname();
        }
    }
    robert.init();
})()


/*

*/ 



