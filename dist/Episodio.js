export class Episodio {
    constructor(nombre, resumen, duracion, serie, director) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = serie;
        this.director = director;
        this.actores = [];
    }
    Detalles() {
        console.log(this.actores.length);
    }
}
//# sourceMappingURL=Episodio.js.map