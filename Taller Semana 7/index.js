/*
1.	Busque la función anímate, y cree una página que tenga un 
div en como un cuadrado y que se mueva de izquierda a derecha, 
el cuadrado tanto en colores como en tamaño queda a su creatividad 5 puntos
*/
(function () {
    window.lec01 = {
        div: {},
        text: {},
        init: function () {
            this.div = document.getElementById("animate");
            this.bind(); //
        },
        bind: function () {
            this.div.animate([
                // keyframes
                { transform: 'translateY(10px)' },
                { transform: 'translateY(-300px)' }
            ], {
                // timing options
                duration: 100,
                iterations: Infinity
            });
        }
    }
    lec01.init();
})()




