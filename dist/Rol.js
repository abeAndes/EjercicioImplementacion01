export class Rol {
    constructor(nombre, rol, persona) {
        this.nombre = nombre;
        this.rol = rol;
        this.persona = persona;
        this.episodios = [];
    }
    Detalles() {
        let Epi = this.episodios.map((Episodio => " " + Episodio.nombre));
        console.table("nombre: " + this.nombre + "\n Rol: " + this.rol + "\n Datos del individuo: " + this.persona.nombre + " " + this.persona.imagen + " " + this.persona.descripcion + " " + this.persona.roles + "\n Episodios en los que ha participado: " + Epi);
    }
}
//# sourceMappingURL=Rol.js.map