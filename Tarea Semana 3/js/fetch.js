(function(){
    cargarDatos=()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((json) => {
            json.forEach((e,i)=>{
                const resultado= document.getElementById('usuariosDiv2');
                resultado.innerHTML+= 
                `<tr>
                    <td>${e.postId}</td>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.email}</td>
                    <td>${e.body}</td>
                <tr>`;
                console.log(e.id, e.name);
            });
        })
    }
    cargarDatos();

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
        const nombre = document.getElementById('comentario');
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

/*
console.log(json)
Usar objeto y desplegarlo en una tabla 
Agregar, Eliminar y modificar valores específicos (por id)

Hacer una tabla con los datos del REST API de la direccion  
https://jsonplaceholder.typicode.com/comments puedo 
eliminar el comentario que yo 
desee y debe agregar y modificar

    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium"
*/