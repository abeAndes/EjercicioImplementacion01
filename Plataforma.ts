import { Plan } from "./Plan";
import { Serie } from "./Serie";

export class Plataforma{

    nombre:string;
    URL:string;
    planes:Plan[];
    series:Serie[];

    constructor(nombre:string,URL:string){
        this.URL=URL;
        this.nombre=nombre;
        this.planes=[];
        this.series=[];

    }



}