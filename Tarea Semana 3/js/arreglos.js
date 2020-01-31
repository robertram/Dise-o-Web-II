(function () {
    const jsonbody = {nombre:"Jose", apellido:"Hernandez", ocupacion:"Contador" }; //Guardar los inputs en un json y mostrarlos

    const divArregloString = document.getElementById('arreglosString');
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnEliminar');
    const arrPersona=[{nombre:'Robert', apellido:'Ramírez', ocupacion:'estudiante'}, {nombre:'Katherine', apellido:'Martinez',ocupacion:'desarrolladora'}, jsonbody];

    /*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log("JSON "+json))*/
  
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
        //Inputs a variables
        const input_nombre = document.getElementById('name').value;
        const input_apellido = document.getElementById('apellido').value;
        const input_ocupacion = document.getElementById('ocupacion').value;

        var temp = new Object();
        temp["nombre"] = input_nombre;
        temp["apellido"] = input_apellido;
        temp["ocupacion"] = input_ocupacion;

        //Agregar la variable Temp al array de JSONs
        arrPersona.push(temp);

        mostrarArreglo();

        //Eliminar el texto de los inputs. Se puso todo el código en vez de la variable porque con variable no funcionaba
        document.getElementById('name').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('ocupacion').value = '';
    }
    eliminarElementoArreglo = () => {
        arrPersona.pop();
        mostrarArreglo();
    }
    cargar();
})()

