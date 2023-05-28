export var todasP = [];
export class Plataforma {
    constructor(nombre, URL) {
        this.URL = URL;
        this.nombre = nombre;
        this.planes = [];
        this.series = [];
        todasP.push(nombre);
    }
    Detalles() {
        let plan = this.planes.map((Plan => " ¡" + Plan.nombre + " " + Plan.descripcion + " " + Plan.precio + "! "));
        let Serie = this.series.map((Serie => " " + Serie.nombre));
        console.log("nombre: " + this.nombre + "\n Acceso: " + this.URL + "\n Planes: " + plan + "\n Series: " + Serie);
    }
}
//# sourceMappingURL=Plataforma.js.map