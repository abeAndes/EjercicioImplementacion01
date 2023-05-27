import { Serie } from "./Serie";
import { Rol } from "./Rol";

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
}