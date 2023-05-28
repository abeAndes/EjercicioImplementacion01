import { Plan } from "./Plan.js";
import { Serie } from "./Serie.js";

export var todasP:string[]=[];

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
        todasP.push(nombre);

    }

    Detalles(){

    let plan = this.planes.map((Plan=>" ¡"+Plan.nombre+" "+Plan.descripcion+" "+Plan.precio+"! "))
    let Serie = this.series.map((Serie=>" "+Serie.nombre));
        console.log("nombre: "+this.nombre+"\n Acceso: "+this.URL+"\n Planes: "+plan+"\n Series: "+Serie);
        
    }


}