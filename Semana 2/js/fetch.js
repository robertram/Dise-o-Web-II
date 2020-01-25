(function(){
    cargarDatos=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
            json.forEach((e,i)=>{
                const resultado= document.getElementById('usuariosDiv');
                resultado.innerHTML+= 
                `<div class="card md-2">
                    <div class="card-header">${e.id}</div>
                    <div class="card-body">${e.name}</div>
                </div>`;
                console.log(e.id, e.name);
            });
        })
    }
    cargarDatos();
})()

/*
console.log(json)
Usar objeto y desplegarlo en una tabla 
Agregar y Eliminar valores específicos (por id)
*/