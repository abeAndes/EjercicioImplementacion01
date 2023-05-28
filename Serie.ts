
import { Episodio } from "./Episodio.js";
import { Categoria } from "./Categoria.js";
import { Plataforma } from "./Plataforma.js";

export class Serie{

    todas:string[]=[];
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
        this.todas.push(this.nombre);

    }

    Detalles (){
        console.table("nombre: "+this.nombre+"\n imagen: "+this.imagen+"\n Cantidad de episodios: "+this.episodios.length+"\n Categorías: "+this.categorias.length+"\n Plataformas: "+this.plataformas.length);
       
    }
    
}
