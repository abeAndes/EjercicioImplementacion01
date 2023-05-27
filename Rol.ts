import {Persona } from "./Persona";

export class Rol{
    nombre:string;
    rol:string;
    persona:Persona;

    constructor(nombre:string,rol:string,persona:Persona){
        this.nombre=nombre;
        this.rol=rol;     
        this.persona=persona;
    }
}