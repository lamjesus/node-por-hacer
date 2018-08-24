//import { fs } from "fs";

const fs = require('fs');


let listadoPorHacer = [];

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        let listadoPorHacer = [];
    }


}

const crear = (descripcion)=>{
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false,
    }
    listadoPorHacer.push(porHacer);
    guardadDb();
    return porHacer

};
const guardadDb = () =>{


    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,err =>{
        if (err) throw  new Error(' El archivo no se ha podido guardar ',err);

    });


}

const getListado = ()=>{
    cargarDb();

    return listadoPorHacer ;



}

const actualizar = (descripcion,completado=true) => {
    cargarDb();
    
    /* busco dentro del arreglo de tareas el indice
    que cohincida con la descripcion que se recibe */ 
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardadDb();
        return true
    }else{
        return false
    }

    
}

const borrar = (descripcion) => {

    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardadDb();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,borrar
}