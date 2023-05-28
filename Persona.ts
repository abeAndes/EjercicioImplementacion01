import { Rol } from "./Rol.js";

export class Persona{

    nombre:string;
    imagen:string;
    descripcion:string;
    roles:Rol[];

    constructor(nombre:string,imagen:string,descripcion:string){
        this.imagen=imagen;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.roles=[];
    }



}