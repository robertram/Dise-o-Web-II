(function () {
    cargarDatos = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then((json) => {
                json.forEach((e, i) => {
                    const resultado = document.getElementById('usuariosDiv2');
                    resultado.innerHTML +=
                        `<tr>
                    <td>${e.postId}</td>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.email}</td>
                    <td>${e.body}</td>
                <tr>`;
                    //console.log(e.id, e.name);
                });
            })
    }

    //Json
    const jsonbody = {
        postId: "14",
        id: "100",
        name: "Juan",
        email: "Juan@gmail.com",
        body: "Hola soy Juan"
    }; //Guardar los inputs en un json y mostrarlos

    //Array de jsons
    const arrPersona=[{postId: "14",
    id: "110",
    name: "Maria",
    email: "maria@gmail.com",
    body: "Hola soy Maria"}, 
    {postId: "14",
    id: "100",
    name: "Jose",
    email: "jose@gmail.com",
    body: "Hola soy Jose"}, jsonbody];
    
    //inserta en la tabla el array de jsons
    cargarDatosArrayJSON = (arrPersona) => {

        arrPersona.forEach((e, i) => {
            const resultado = document.getElementById('usuariosDiv2');
            resultado.innerHTML +=
                `<tr>
                <td>${e.postId}</td>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.body}</td>
        <tr>`;
            
        });
    }

    //agrega en la tabla un json
    cargarDatosJSON = (jsonbody) => {

        const resultado = document.getElementById('usuariosDiv2');
        resultado.innerHTML +=
            `<tr>
                    <td>${jsonbody.postId}</td>
                    <td>${jsonbody.id}</td>
                    <td>${jsonbody.name}</td>
                    <td>${jsonbody.email}</td>
                    <td>${jsonbody.body}</td>
                <tr>`;
        console.log(jsonbody.id, jsonbody.name);
    }
    
    //--------Arreglos--------

    //Botones
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnEliminar');

    cargar = () => {
        btnAgregar.onclick = agregarElementoArreglo;
        btnEliminar.onclick = eliminarElementoArreglo;
    }
    agregarElementoArreglo = () => {
        //Inputs a variables
        const input_post_id = document.getElementById('post-id').value;
        const input_id = document.getElementById('id').value;
        const input_name = document.getElementById('nombre').value;
        const input_email = document.getElementById('email').value;
        const input_body = document.getElementById('comentario').value;

        var temp = new Object();
        temp["postId"] = input_post_id;
        temp["id"] = input_id;
        temp["name"] = input_name;
        temp["email"] = input_email;
        temp["body"] = input_body;

        //Agregar la variable Temp al array de JSONs
        arrPersona.push(temp);
        console.log(temp);

        cargarDatosArrayJSON(arrPersona);

        //Eliminar el texto de los inputs. Se puso todo el código en vez de la variable porque con variable no funcionaba
        document.getElementById('post-id').value = '';
        document.getElementById('id').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('email').value= '';
        document.getElementById('comentario').value= '';
    }
    eliminarElementoArreglo = () => {
        arrPersona.pop();
        cargarDatosArrayJSON(arrPersona);
    }

    cargarDatos(); //Carga el API
    cargarDatosArrayJSON(arrPersona); //Carga el array de jsons
    cargar(); //Carga los botones

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