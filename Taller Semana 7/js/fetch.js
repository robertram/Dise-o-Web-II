(function () {
    cargarDatos = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => {
                json.forEach((e, i) => {
                    const resultado = document.getElementById('usuariosDiv2');
                    resultado.innerHTML +=
                        `<tr>
                        <td><button onclick="eliminarDatos()"><i class="material-icons">
                        delete
                        </i></button></td>
                    <td>${e.userId}</td>
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                    <td>${e.body}</td>
                <tr>`;
                    document.getElementById("myTable")
                });
            })
    }
    eliminarDatos = () => {
        $(document).ready(function () {
            $("button").click(function () {
                $(this).closest("tr").remove();
            });
        });
    }


   

    //document.getElementById("myTable").deleteRow(0);

    const arrPersona = [{
            userId: "14",
            id: "110",
            title: "asdas",
            body: "asdhasdjkhagsdjhgakdgsa"
        },
        {
            userId: "14",
            id: "100",
            title: "asdhasdkjasdad",
            body: "asdlkasdlalksjh"
        }
    ];


    /*
    "userId": 1,
    "id": 1,
    "title": "srit",
    "body":*/


    //inserta en la tabla el array de jsons
    cargarDatosArrayJSON = (arrPersona) => {

        arrPersona.forEach((e, i) => {
            const resultado = document.getElementById('usuariosDiv2');
            resultado.innerHTML +=
                `<tr>
                <td><button onclick="eliminarDatos()"><i class="material-icons">
                        delete
                        </i></button></td>
                <td>${e.userId}</td>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.body}</td>
        <tr>`;

        });
    }

    //--------Arreglos--------

    //Botones
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnEliminar');

    cargar = () => {
        btnAgregar.onclick = agregarElementoArreglo;
    }
    agregarElementoArreglo = () => {
        //Inputs a variables
        const input_post_id = document.getElementById('userId').value;
        const input_id = document.getElementById('id').value;
        const input_name = document.getElementById('title').value;
        const input_body = document.getElementById('body').value;

        var temp = new Object();
        temp["userId"] = input_post_id;
        temp["id"] = input_id;
        temp["title"] = input_name;
        temp["body"] = input_body;

        //Agregar la variable Temp al array de JSONs
        arrPersona.push(temp);
        console.log(temp);

        cargarDatosArrayJSON(arrPersona);

        //Eliminar el texto de los inputs. Se puso todo el código en vez de la variable porque con variable no funcionaba
        document.getElementById('userId').value = '';
        document.getElementById('id').value = '';
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
    }
    eliminarElementoArreglo = () => {
        arrPersona.pop();
        cargarDatosArrayJSON(arrPersona);
    }

    cargarDatos(); //Carga el API
    cargarDatosArrayJSON(arrPersona); //Carga el array de jsons
    cargar(); //Carga los botones

})()
