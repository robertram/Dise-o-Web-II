/*const util = require('./util');
const os = require('os');
const fs = require('fs');

concat('Robert', 'Sturat');

const array = [1, 2, 2];


util.multiplicar(array)
//console.log(util.sumarArrayFor(array));


console.log('Plataforma: ' + os.platform() + '. OS: ' + os.release());

//console.log(bytesToSize(os.totalmem()));
const json = {
    'nombre': 'Robert',
    'apellido': 'Ramirez'
}

fs.writeFile('./PrimerArchivo.txt', 'Hola mundo', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Archivo creado');
    }
});
console.log('Fin de linea');


fs.readFile('./PrimerArchivo.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});*/


const http = require('http');
const colors= require('colors');
/*
http.createServer((req, res) => {
    res.writeHead(404, {'Content-type':'text/html'});
    res.write('<h1>Bienvenido al mundo de NodeJS</h1>');
    res.end();
}).listen(3000);
*/

const controladorServidor= (req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Bienvenido al mundo de NodeJS...</h1>');
    res.end();
}

const server= http.createServer(controladorServidor);
server.listen(3000, ()=>{
    console.log('Servidor activo'.green);
});






