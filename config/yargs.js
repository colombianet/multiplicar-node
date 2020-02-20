const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

let yargs = require('yargs')
    .command('listar', 'Muestra en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar dependiendo valores ingresados', opts)
    .help()
    .argv;

module.exports = {
    yargs
}