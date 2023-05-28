export class Rol {
    constructor(nombre, rol, persona) {
        this.nombre = nombre;
        this.rol = rol;
        this.persona = persona;
        this.episodios = [];
    }
    Detalles() {
        console.table("nombre: " + this.nombre + "\n Rol: " + this.rol + "\n Datos del individuo: " + this.persona + "\n Episodios en los que ha participado: " + this.episodios.length);
    }
}
//# sourceMappingURL=Rol.js.map