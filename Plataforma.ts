import { Plan } from "./Plan.js";
import { Serie } from "./Serie.js";

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

    Detalles(){
        console.log("nombre: "+this.nombre+"\n Acceso: "+this.URL+"\n Planes: "+this.planes.length+"\n Series: "+this.series.length);
        
    }


}