(function () {
    const arr = ["Robert", "Katherine", "Valeria"];
    const divArregloString = document.getElementById('arreglosString');
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnEliminar');
    const arrPersona=[{nombre:'Robert', apellido:'Ramírez',ocupacion:'estudiante'}, {nombre:'Katherine', apellido:'Martinez',ocupacion:'desarrolladora'}];

    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
    cargar = () => {
        mostrarArreglo();
        btnAgregar.onclick = agregarElementoArreglo;
        btnEliminar.onclick = eliminarElementoArreglo;
        btnCambiar.onclick= cambiarColorFondo;
    }
    mostrarArreglo = () => {
        divArregloString.innerHTML = '';
        var lista = document.createElement('ul');
        divArregloString.append(lista);
        //const btnAgregar= document.getElementById('btnAdd');

        /* */
        arr.forEach((e, i) => { /*elemento, indice, array*/
            var opcion = document.createElement('li');
            opcion.innerHTML = e;
            divArregloString.children[0].append(opcion);
        });
        btnAdd.onclick = agregarElementoArreglo;
    }
    agregarElementoArreglo = () => {
        const nombre = document.getElementById('name');
        arr.push(nombre.value);
        mostrarArreglo();
        nombre.value = '';
    }
    eliminarElementoArreglo = () => {
        arr.pop();
        mostrarArreglo();
    }
    cambiarColorFondo=()=>{
        document.body.style.color='red';
    }
    cargar();
})()

