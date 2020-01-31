(function () {
    const arr = ["Robert", "Katherine", "Valeria"];
    const arrid = ["1", "2", "3"];
    const jsonbody = {"id":"sdas", "name":"asdsvdf", "body":"sdgsdf" }; //Guardar los inputs en un json y mostrarlos


    const divArregloString = document.getElementById('arreglosString');
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnEliminar');
    const arrPersona=[{nombre:'Robert', apellido:'Ramírez', ocupacion:'estudiante'}, {nombre:'Katherine', apellido:'Martinez',ocupacion:'desarrolladora'}];

    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
    cargar = () => {
        mostrarArreglo();
        btnAgregar.onclick = agregarElementoArreglo;
        btnEliminar.onclick = eliminarElementoArreglo;
    }
    mostrarArreglo = () => {
        divArregloString.innerHTML = '';
        var lista = document.createElement('ul');
        divArregloString.append(lista);
        //const btnAgregar= document.getElementById('btnAdd');

        
        arrPersona.forEach((e,i)=>{
            var opcion = document.createElement('li');
            opcion.innerHTML = e.nombre +" " +e.apellido+" "+e.ocupacion;
            divArregloString.children[0].append(opcion);
        });


        btnAdd.onclick = agregarElementoArreglo;
    }
    agregarElementoArreglo = () => {
        const nombre = document.getElementById('name');
        const apellido = document.getElementById('apellido');
        const ocupacion = document.getElementById('ocupacion');

        var temp = new Object();
        temp["nombre"] = nombre;
        temp["apellido"] = apellido;
        temp["ocupacion"] = ocupacion;
        console.log(temp);

        arrPersona.push(temp);

        //arr.push(nombre.value);
        mostrarArreglo();
        nombre.value = '';
    }
    eliminarElementoArreglo = () => {
        arr.pop();
        mostrarArreglo();
    }
    cargar();
})()

