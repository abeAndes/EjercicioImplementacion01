
import { Episodio } from "./Episodio";
import { Categoria } from "./Categoria";
import { Plataforma } from "./Plataforma";

export class Serie{

    nombre:string;
    imagen:string;
    episodios:Episodio[];
    categorias:Categoria[];
    plataformas:Plataforma[];

    constructor(nombre:string,imagen:string){
        this.imagen=imagen;
        this.nombre=nombre;
        this.episodios=[];
        this.categorias=[];
        this.plataformas=[];
    }

}