import { Serie } from "./Serie.js";

export var todasC:string[]=[];
export class Categoria{

    nombre:string;
    series:Serie[];

    constructor(nombre:string){
        this.nombre=nombre;
        this.series=[];
        todasC.push(nombre);

    }



}