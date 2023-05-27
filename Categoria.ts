import { Serie } from "./Serie";

export class Categoria{

    nombre:string;
    series:Serie[];

    constructor(nombre:string){
        this.nombre=nombre;
        this.series=[];

    }



}