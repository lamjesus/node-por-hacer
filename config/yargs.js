


const argv = require('yargs')
                .command('crear','Crear un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                } )
                .command('borrar','Elimina una tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Elimina una tarea '
                    }
                } )
                .command('actualizar','Actualiza un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Actuzliza de la tarea por hacer'
                    },
                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'marca como completado a pendiente la tarea'
                    }
                } )
                .help()
                .argv;

                
module.exports = {
    argv
}

