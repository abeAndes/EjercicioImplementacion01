import { Plataforma } from "./Plataforma";

export class Plan{

    nombre:string;
    precio:string;
    descripcion:string;
    plataforma:Plataforma;

    constructor(nombre:string,precio:string,descripcion:string,plataforma:Plataforma){
        this.precio=precio;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.plataforma=plataforma;

    }



}