export class Serie {
    constructor(nombre, imagen) {
        this.todas = [];
        this.imagen = imagen;
        this.nombre = nombre;
        this.episodios = [];
        this.categorias = [];
        this.plataformas = [];
        this.todas.push(this.nombre);
    }
    Detalles() {
        console.table("nombre: " + this.nombre + "\n imagen: " + this.imagen + "\n Cantidad de episodios: " + this.episodios.length + "\n Categorías: " + this.categorias.length + "\n Plataformas: " + this.plataformas.length);
    }
}
//# sourceMappingURL=Serie.js.map