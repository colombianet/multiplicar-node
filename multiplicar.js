const fs = require('fs');


let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El dato introducido ${base} no es un número`);
            return;
        }

        let dato = '';

        for (var i = 1; i <= limite; i++) {
            dato += (`${base} * ${i} = ${base*i}\n`);
        }
        resolve(dato);
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El dato introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (var i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) return reject(err);
            resolve(`tabla-${base}-límite-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}