import { Serie } from "./Serie.js";
import { Rol } from "./Rol.js";

export class Episodio{

    nombre:string;
    resumen:string;
    duracion:string;
    serie:Serie;
    director:Rol;
    actores:Rol[];

    constructor(nombre:string,resumen:string,duracion:string,serie:Serie,director:Rol){
        this.nombre=nombre;
        this.resumen=resumen;
        this.duracion=duracion;
        this.serie=serie;
        this.director=director;
        this.actores=[];
    }

    Detalles(){
        console.log(this.actores.length);
        
    }
}