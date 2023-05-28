export var todasS = [];
export class Serie {
    constructor(nombre, imagen) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.episodios = [];
        this.categorias = [];
        this.plataformas = [];
        todasS.push(nombre);
    }
    Detalles() {
        let Cat = this.categorias.map((Categoria => " " + Categoria.nombre));
        let Pla = this.plataformas.map((Plataforma => " " + Plataforma.nombre));
        console.table("nombre: " + this.nombre + "\n imagen: " + this.imagen + "\n Cantidad de episodios: " + this.episodios.length + "\n Categorías: " + Cat + "\n Plataformas: " + Pla);
    }
    Reparto() {
        console.log("Nombre: " + this.nombre);
        let directores = this.episodios.map((Epi => +" " + Epi.director.nombre));
        let act = this.episodios.map((Act => " " + Act.actores.map(Acts => Acts.nombre)));
        let cap = this.episodios.map(nom => nom.nombre);
        for (let i = 0; i < cap.length; i++) {
            console.log("El capitulo: " + cap[i] + " Fue dirigido por: " + directores[i] + " Y conto con la actuación de: " + act[i]);
        }
    }
}
//# sourceMappingURL=Serie.js.map