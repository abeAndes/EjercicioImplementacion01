import {Persona } from "./Persona.js";
import { Episodio } from "./Episodio.js";

export class Rol{
    nombre:string;
    rol:string;
    persona:Persona;
    episodios:Episodio[];

    constructor(nombre:string,rol:string,persona:Persona){
        this.nombre=nombre;
        this.rol=rol;     
        this.persona=persona;
        this.episodios=[];
    }
    Detalles (){
        console.table("nombre: "+this.nombre+"\n Rol: "+this.rol+"\n Datos del individuo: "+this.persona+"\n Episodios en los que ha participado: "+this.episodios.length);
       
    }
}