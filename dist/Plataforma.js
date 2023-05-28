export class Plataforma {
    constructor(nombre, URL) {
        this.URL = URL;
        this.nombre = nombre;
        this.planes = [];
        this.series = [];
    }
    Detalles() {
        console.log("nombre: " + this.nombre + "\n Acceso: " + this.URL + "\n Planes: " + this.planes.length + "\n Series: " + this.series.length);
    }
}
//# sourceMappingURL=Plataforma.js.map