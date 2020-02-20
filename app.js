const yargs = require('./config/yargs').yargs;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar');

let cadena = process.argv[2];
// let base = cadena.split('=')[1];

let comando = yargs._[0];

// console.log('base ' + yargs.base + " limite " + yargs.limite, yargs + '\n' + comando);

switch (comando) {
    case 'listar':
        listar(yargs.base, yargs.limite)
            .then(data => console.log('===============\n'.green +
                `Tabla del ${yargs.base}\n`.green + '===============\n'.green +
                data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(yargs.base, yargs.limite)
            .then(archivo => console.log('Archivo: ' + archivo.green + ' creado'))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}