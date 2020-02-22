
concat = (nombre, apellido) => {
    console.log('Bienvenido al mundo de Node ' + nombre + ' ' + apellido);
}

sumar = (num1, num2) => {
    return num1 + num2;
}

sumarArrayFor = (array) => {
    let sumaArray = 0;
    for (i = 0; i < array.length; i++) {
        sumaArray += array[i];
        console.log(sumaArray);
    }
    return sumaArray;
}

restar = (num1, num2) => {
    return num1 - num2;
}

multiplicar = (num1, num2) => {
    return num1 * num2;
}

dividir = (num1, num2) => {
    if (num2 == 0) {
        console.log('No se puede dividir entre 0');
    }
    else {
        return num1 / num2;
    }
}


exports.concat = concat;
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
exports.sumarArrayFor = sumarArrayFor;

