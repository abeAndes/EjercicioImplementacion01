import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";
import { Episodio } from "./Episodio.js";
import { Plataforma } from "./Plataforma.js";
import { Plan } from "./Plan.js";
import { Rol } from "./Rol.js";
import { Categoria } from "./Categoria.js";
import { todasS } from "./Serie.js";
import { todasC } from "./Categoria.js";
import { todasP } from "./Plataforma.js";
//Personas
const davidA = new Persona("David", "David", "3 años actuando");
const AndreaA = new Persona("Andrea", "Andrea", "3 años actuando");
const OscarA = new Persona("Oscar", "Oscar", "3 años actuando");
const LauraA = new Persona("Laura", "Laura", "3 años actuando");
const PedroA = new Persona("Pedro", "Pedro", "3 años actuando");
const davidD = new Persona("David", "David", "3 años dirigiendo");
const AndreaD = new Persona("Andrea", "Andrea", "3 años dirigiendo");
const OscarD = new Persona("Oscar", "Oscar", "3 años dirigiendo");
const LauraD = new Persona("Laura", "Laura", "3 años dirigiendo");
const PedroD = new Persona("Pedro", "Pedro", "3 años dirigiendo");
//Actores
const davidRA = new Rol("DavidRA", "Actor", davidA);
const AndreaRA = new Rol("AndreaRA", "Actor", AndreaA);
const OscarRA = new Rol("OscarRA", "Actor", OscarA);
const LauraRA = new Rol("LauraRA", "Actor", LauraA);
const PedroRA = new Rol("PedroRA", "Actor", PedroA);
//Directores
const davidRD = new Rol("davidRD", "Director", davidD);
const AndreaRD = new Rol("AndreaRD", "Director", AndreaD);
const OscarRD = new Rol("OscarRD", "Director", OscarD);
const LauraRD = new Rol("LauraRD", "Director", LauraD);
const PedroRD = new Rol("PedroRD", "Director", PedroD);
//Actores y directores
const ActorD1 = new Rol("DavidRA", "Director", davidA);
const ActorD2 = new Rol("AndreaRA", "Director", AndreaA);
const ActorD3 = new Rol("OscarRA", "Director", OscarA);
const ActorD4 = new Rol("LauraRA", "Director", LauraA);
const ActorD5 = new Rol("PedroRA", "Director", PedroA);
//Series
const HIMYM = new Serie("How i met your mother", "Imagen");
const Grey = new Serie("Grey's Anatomy", "Imagen");
const Californication = new Serie("Californication", "Imagen");
const X = new Serie("X files", "Imagen");
const Bad = new Serie("Breaking Bad", "Imagen");
//Episodios
const Ted = new Episodio("Ted", "Ted se enamora", "45 minutos", HIMYM, davidRD);
const Robin = new Episodio("Robin", "Ted se enamora", "45 minutos", HIMYM, davidRD);
const Barney = new Episodio("Barney", "Ted se enamora", "45 minutos", HIMYM, davidRD);
const Meredith = new Episodio("Doctor", "Se muere alguien", "45 minutos", Grey, AndreaRD);
const Muerte = new Episodio("Muerte", "Se muere alguien", "45 minutos", Grey, AndreaRD);
const Dolor = new Episodio("Dolor", "Se muere alguien", "45 minutos", Grey, AndreaRD);
const Escritor = new Episodio("Libro", "Bloqueo creativo", "45 minutos", Californication, OscarRD);
const Drogas = new Episodio("Drogas", "Bloqueo creativo", "45 minutos", Californication, OscarRD);
const Sex = new Episodio("Sex", "Bloqueo creativo", "45 minutos", Californication, OscarRD);
const Murder = new Episodio("Scoly", "Aliens", "45 minutos", X, LauraRD);
const Alien = new Episodio("Alien", "Aliens", "45 minutos", X, LauraRD);
const Graffiti = new Episodio("Graffiti", "Aliens", "45 minutos", X, LauraRD);
const Walter = new Episodio("White", "Metanfetaminas", "45 minutos", Bad, PedroRD);
const Jessie = new Episodio("Jessie", "Metanfetaminas", "45 minutos", Bad, PedroRD);
const Meta = new Episodio("Meta", "Metanfetaminas", "45 minutos", Bad, PedroRD);
//Plataformas
const Netflix = new Plataforma("Netflix", "URL");
const Amazon = new Plataforma("Amazon", "URL");
const HBO = new Plataforma("HBO", "URL");
const Disney = new Plataforma("Disney", "URL");
const Paramount = new Plataforma("Paramount", "URL");
//Planes
const EconomicoN = new Plan("Economico", "20.000", "Una pantalla", Netflix);
const EconomicoA = new Plan("Economico", "20.000", "Una pantalla", Amazon);
const EconomicoH = new Plan("Economico", "20.000", "Una pantalla", HBO);
const EconomicoD = new Plan("Economico", "20.000", "Una pantalla", Disney);
const EconomicoP = new Plan("Economico", "20.000", "Una pantalla", Paramount);
const ModestoN = new Plan("Modesto", "30.000", "Una pantalla", Netflix);
const ModestoA = new Plan("Modesto", "30.000", "Una pantalla", Amazon);
const ModestoH = new Plan("Modesto", "30.000", "Una pantalla", HBO);
const ModestoD = new Plan("Modesto", "30.000", "Una pantalla", Disney);
const ModestoP = new Plan("Modesto", "30.000", "Una pantalla", Paramount);
const RegularN = new Plan("Regular", "45.000", "Una pantalla", Netflix);
const RegularA = new Plan("Regular", "45.000", "Una pantalla", Amazon);
const RegularH = new Plan("Regular", "45.000", "Una pantalla", HBO);
const RegularD = new Plan("Regular", "45.000", "Una pantalla", Disney);
const RegularP = new Plan("Regular", "45.000", "Una pantalla", Paramount);
const PremiumN = new Plan("Premium", "50.000", "Una pantalla", Netflix);
const PremiumA = new Plan("Premium", "50.000", "Una pantalla", Amazon);
const PremiumH = new Plan("Premium", "50.000", "Una pantalla", HBO);
const PremiumD = new Plan("Premium", "50.000", "Una pantalla", Disney);
const PremiumP = new Plan("Premium", "50.000", "Una pantalla", Paramount);
const UltragoldN = new Plan("Ultragold", "70.000", "Una pantalla", Netflix);
const UltragoldA = new Plan("Ultragold", "70.000", "Una pantalla", Amazon);
const UltragoldH = new Plan("Ultragold", "70.000", "Una pantalla", HBO);
const UltragoldD = new Plan("Ultragold", "70.000", "Una pantalla", Disney);
const UltragoldP = new Plan("Ultragold", "70.000", "Una pantalla", Paramount);
//Categorias
const Drama = new Categoria("Drama");
const Terror = new Categoria("Terror");
const Accion = new Categoria("Accion");
const Familiar = new Categoria("Familiar");
const Comedia = new Categoria("Comedia");
//Conexiones Series
//Episodios
HIMYM.episodios.push(Ted);
HIMYM.episodios.push(Robin);
HIMYM.episodios.push(Barney);
Grey.episodios.push(Meredith);
Grey.episodios.push(Muerte);
Grey.episodios.push(Dolor);
Californication.episodios.push(Escritor);
Californication.episodios.push(Drogas);
Californication.episodios.push(Sex);
X.episodios.push(Murder);
X.episodios.push(Alien);
X.episodios.push(Graffiti);
Bad.episodios.push(Walter);
Bad.episodios.push(Jessie);
Bad.episodios.push(Meta);
//Categorias
HIMYM.categorias.push(Familiar);
HIMYM.categorias.push(Comedia);
Grey.categorias.push(Drama);
Californication.categorias.push(Drama);
Californication.categorias.push(Accion);
Californication.categorias.push(Comedia);
X.categorias.push(Accion);
X.categorias.push(Drama);
Bad.categorias.push(Drama);
Bad.categorias.push(Accion);
Bad.categorias.push(Comedia);
Bad.categorias.push(Familiar);
Bad.categorias.push(Terror);
//Plataformas
Netflix.series.push(HIMYM);
Netflix.series.push(Grey);
Netflix.series.push(Californication);
Netflix.series.push(X);
Netflix.series.push(Bad);
Amazon.series.push(Grey);
Amazon.series.push(Californication);
Amazon.series.push(X);
HBO.series.push(HIMYM);
HBO.series.push(Grey);
HBO.series.push(Californication);
HBO.series.push(X);
Disney.series.push(Bad);
Paramount.series.push(Bad);
Paramount.series.push(Grey);
HIMYM.plataformas.push(Netflix);
HIMYM.plataformas.push(HBO);
Grey.plataformas.push(Netflix);
Grey.plataformas.push(Amazon);
Grey.plataformas.push(HBO);
Grey.plataformas.push(Paramount);
Californication.plataformas.push(Netflix);
Californication.plataformas.push(Amazon);
Californication.plataformas.push(HBO);
X.plataformas.push(Netflix);
X.plataformas.push(Amazon);
X.plataformas.push(HBO);
Bad.plataformas.push(Netflix);
Bad.plataformas.push(Disney);
Bad.plataformas.push(Paramount);
//Conexiones Episodios
//Actores
Ted.actores.push(davidRA);
Ted.actores.push(AndreaRA);
Ted.actores.push(OscarRA);
Ted.actores.push(LauraRA);
Ted.actores.push(PedroRA);
Robin.actores.push(davidRA);
Robin.actores.push(AndreaRA);
Robin.actores.push(OscarRA);
Robin.actores.push(LauraRA);
Robin.actores.push(PedroRA);
Barney.actores.push(davidRA);
Barney.actores.push(AndreaRA);
Barney.actores.push(OscarRA);
Barney.actores.push(LauraRA);
Barney.actores.push(PedroRA);
Meredith.actores.push(davidRA);
Meredith.actores.push(AndreaRA);
Meredith.actores.push(OscarRA);
Meredith.actores.push(LauraRA);
Meredith.actores.push(PedroRA);
Muerte.actores.push(davidRA);
Muerte.actores.push(AndreaRA);
Muerte.actores.push(OscarRA);
Muerte.actores.push(LauraRA);
Muerte.actores.push(PedroRA);
Dolor.actores.push(davidRA);
Dolor.actores.push(AndreaRA);
Dolor.actores.push(OscarRA);
Dolor.actores.push(LauraRA);
Dolor.actores.push(PedroRA);
Escritor.actores.push(davidRA);
Escritor.actores.push(AndreaRA);
Escritor.actores.push(OscarRA);
Escritor.actores.push(LauraRA);
Escritor.actores.push(PedroRA);
Drogas.actores.push(davidRA);
Drogas.actores.push(AndreaRA);
Drogas.actores.push(OscarRA);
Drogas.actores.push(LauraRA);
Drogas.actores.push(PedroRA);
Sex.actores.push(davidRA);
Sex.actores.push(AndreaRA);
Sex.actores.push(OscarRA);
Sex.actores.push(LauraRA);
Sex.actores.push(PedroRA);
Murder.actores.push(davidRA);
Murder.actores.push(AndreaRA);
Murder.actores.push(OscarRA);
Murder.actores.push(LauraRA);
Murder.actores.push(PedroRA);
Alien.actores.push(davidRA);
Alien.actores.push(AndreaRA);
Alien.actores.push(OscarRA);
Alien.actores.push(LauraRA);
Alien.actores.push(PedroRA);
Graffiti.actores.push(davidRA);
Walter.actores.push(davidRA);
Walter.actores.push(AndreaRA);
Walter.actores.push(OscarRA);
Walter.actores.push(LauraRA);
Walter.actores.push(PedroRA);
Jessie.actores.push(davidRA);
Jessie.actores.push(AndreaRA);
Jessie.actores.push(OscarRA);
Jessie.actores.push(LauraRA);
Jessie.actores.push(PedroRA);
Meta.actores.push(davidRA);
Meta.actores.push(AndreaRA);
Meta.actores.push(OscarRA);
Meta.actores.push(LauraRA);
Meta.actores.push(PedroRA);
AndreaRA.episodios.push(Ted);
davidRA.episodios.push(Ted);
OscarRA.episodios.push(Ted);
LauraRA.episodios.push(Ted);
PedroRA.episodios.push(Ted);
AndreaRA.episodios.push(Robin);
davidRA.episodios.push(Robin);
OscarRA.episodios.push(Robin);
LauraRA.episodios.push(Robin);
PedroRA.episodios.push(Robin);
AndreaRA.episodios.push(Barney);
davidRA.episodios.push(Barney);
OscarRA.episodios.push(Barney);
LauraRA.episodios.push(Barney);
PedroRA.episodios.push(Barney);
AndreaRA.episodios.push(Meredith);
davidRA.episodios.push(Meredith);
OscarRA.episodios.push(Meredith);
LauraRA.episodios.push(Meredith);
PedroRA.episodios.push(Meredith);
AndreaRA.episodios.push(Muerte);
davidRA.episodios.push(Muerte);
OscarRA.episodios.push(Muerte);
LauraRA.episodios.push(Muerte);
PedroRA.episodios.push(Muerte);
AndreaRA.episodios.push(Dolor);
davidRA.episodios.push(Dolor);
OscarRA.episodios.push(Dolor);
LauraRA.episodios.push(Dolor);
PedroRA.episodios.push(Dolor);
AndreaRA.episodios.push(Escritor);
davidRA.episodios.push(Escritor);
OscarRA.episodios.push(Escritor);
LauraRA.episodios.push(Escritor);
PedroRA.episodios.push(Escritor);
AndreaRA.episodios.push(Drogas);
davidRA.episodios.push(Drogas);
OscarRA.episodios.push(Drogas);
LauraRA.episodios.push(Drogas);
PedroRA.episodios.push(Drogas);
AndreaRA.episodios.push(Sex);
davidRA.episodios.push(Sex);
OscarRA.episodios.push(Sex);
LauraRA.episodios.push(Sex);
PedroRA.episodios.push(Sex);
AndreaRA.episodios.push(Murder);
davidRA.episodios.push(Murder);
OscarRA.episodios.push(Murder);
LauraRA.episodios.push(Murder);
PedroRA.episodios.push(Murder);
AndreaRA.episodios.push(Alien);
davidRA.episodios.push(Alien);
OscarRA.episodios.push(Alien);
LauraRA.episodios.push(Alien);
PedroRA.episodios.push(Alien);
davidRA.episodios.push(Graffiti);
AndreaRA.episodios.push(Walter);
davidRA.episodios.push(Walter);
OscarRA.episodios.push(Walter);
LauraRA.episodios.push(Walter);
PedroRA.episodios.push(Walter);
AndreaRA.episodios.push(Jessie);
davidRA.episodios.push(Jessie);
OscarRA.episodios.push(Jessie);
LauraRA.episodios.push(Jessie);
PedroRA.episodios.push(Jessie);
AndreaRA.episodios.push(Meta);
davidRA.episodios.push(Meta);
OscarRA.episodios.push(Meta);
LauraRA.episodios.push(Meta);
PedroRA.episodios.push(Meta);
//Directores
AndreaRD.episodios.push(Meredith);
AndreaRD.episodios.push(Muerte);
AndreaRD.episodios.push(Dolor);
davidRD.episodios.push(Ted);
davidRD.episodios.push(Robin);
davidRD.episodios.push(Barney);
OscarRD.episodios.push(Escritor);
OscarRD.episodios.push(Drogas);
OscarRD.episodios.push(Sex);
LauraRD.episodios.push(Murder);
LauraRD.episodios.push(Alien);
LauraRD.episodios.push(Graffiti);
PedroRD.episodios.push(Walter);
PedroRD.episodios.push(Jessie);
PedroRD.episodios.push(Meta);
//Conexion Plataformas
Netflix.planes.push(EconomicoN);
Netflix.planes.push(ModestoN);
Netflix.planes.push(RegularN);
Netflix.planes.push(PremiumN);
Netflix.planes.push(UltragoldN);
Amazon.planes.push(EconomicoA);
Amazon.planes.push(ModestoA);
Amazon.planes.push(RegularA);
Amazon.planes.push(PremiumA);
Amazon.planes.push(UltragoldA);
HBO.planes.push(EconomicoH);
HBO.planes.push(ModestoH);
HBO.planes.push(RegularH);
HBO.planes.push(PremiumH);
HBO.planes.push(UltragoldH);
Disney.planes.push(EconomicoD);
Disney.planes.push(ModestoD);
Disney.planes.push(RegularD);
Disney.planes.push(PremiumD);
Disney.planes.push(UltragoldD);
Paramount.planes.push(EconomicoP);
Paramount.planes.push(ModestoP);
Paramount.planes.push(RegularP);
Paramount.planes.push(PremiumP);
Paramount.planes.push(UltragoldP);
//llamados
ListarS();
ListarC();
ListarP();
DetallesA();
DetallesD();
DetallesS();
Reparto();
DetallesP();
CrearS("Rick", "Imagen");
CrearC("Psyco");
CrearA("Luis", "Imagen", "Actor", "Recién Nacido");
CrearD("Luis", "Imagen", "Director", "Recién Nacido");
CrearA("Marcos", "Imagen", "Actor", "Recién Nacido");
CrearD("Marcos", "Imagen", "Director", "Recién Nacido");
AgregarC(HIMYM, Terror);
AgregarA(Grey, LauraRA);
AgregarD(Grey, LauraRD);
ListarS();
ListarC();
ListarP();
//Funciones
function DetallesA() {
    davidRA.Detalles();
}
function DetallesD() {
    davidRD.Detalles();
}
function DetallesS() {
    HIMYM.Detalles();
}
function DetallesP() {
    Netflix.Detalles();
}
function Reparto() {
    HIMYM.Reparto();
}
function ListarS() {
    console.log(todasS);
}
function ListarC() {
    console.log(todasC);
}
function ListarP() {
    console.log(todasP);
}
function CrearS(nombre, imagen) {
    const Rick = new Serie(nombre, imagen);
    Rick.Detalles();
    ListarS();
}
function CrearC(nombre) {
    const Psyco = new Categoria(nombre);
    ListarC();
}
function CrearPersona(nombre, imagen, descripcion) {
    const Npersona = new Persona(nombre, imagen, descripcion);
    return Npersona;
}
function CrearA(nombre, imagen, rol, descripcion) {
    let persona = CrearPersona(nombre, imagen, descripcion);
    const Nactor = new Rol(nombre, rol, persona);
    Nactor.Detalles();
}
function CrearD(nombre, imagen, rol, descripcion) {
    let persona = CrearPersona(nombre, imagen, descripcion);
    const NDirector = new Rol(nombre, rol, persona);
    NDirector.Detalles();
}
function AgregarC(serie, Categoria) {
    serie.categorias.push(Categoria);
    serie.Detalles();
}
function AgregarA(serie, Actor) {
    serie.episodios.map(Epi => Epi.actores.push(Actor));
    console.log("Debido a que se agregara el actor a toda la serie su nombre será añadido a todos los episodios");
    serie.Reparto();
}
function AgregarD(serie, Director) {
    serie.episodios.map(Epi => Epi.director.nombre = Director.nombre);
    console.log("Debido a que se agregara el director a toda la serie su nombre será añadido a todos los episodios borrando el nombre de otros directores en el caso de que exista");
    serie.Reparto();
}
//Botones Consulta
let ListarSeries;
ListarSeries = document.getElementById("ListarS");
ListarSeries.onclick = ListarS;
let ListarCategorias;
ListarCategorias = document.getElementById("ListarC");
ListarCategorias.onclick = ListarC;
let ListarPlataformas;
ListarPlataformas = document.getElementById("ListarP");
ListarPlataformas.onclick = ListarP;
let DetallesSeries;
DetallesSeries = document.getElementById("DetallesS");
DetallesSeries.onclick = DetallesS;
let DetallesPlataformas;
DetallesPlataformas = document.getElementById("DetallesP");
DetallesPlataformas.onclick = DetallesP;
let DetallesActores;
DetallesActores = document.getElementById("DetallesA");
DetallesActores.onclick = DetallesA;
let DetallesDirectores;
DetallesDirectores = document.getElementById("DetallesD");
DetallesDirectores.onclick = DetallesD;
let DetallesReparto;
DetallesReparto = document.getElementById("Reparto");
DetallesReparto.onclick = Reparto;
//Botones Creación
//Crear Serie
let CrearSerie;
CrearSerie = document.getElementById("CrearS");
let Nserie;
Nserie = document.getElementById("Nserie");
let ISerie;
ISerie = document.getElementById("ISerie");
CrearSerie.onclick = CrearS(Nserie.value, ISerie.value);
//Crear Categoria
let CrearCategoria;
CrearCategoria = document.getElementById("CrearC");
let NCategoria;
NCategoria = document.getElementById("NCategoria");
CrearCategoria.onclick = CrearC(NCategoria.value);
//Crear Actor
let CrearActor;
CrearActor = document.getElementById("CrearA");
let NActor;
NActor = document.getElementById("NActor");
let IActor;
NActor = document.getElementById("IActor");
let DActor;
NActor = document.getElementById("DActor");
CrearActor.onclick = CrearA(NActor.value, IActor.value, "Actor", DActor.value);
//Crear Director
let CrearDirector;
CrearDirector = document.getElementById("CrearD");
let NDirector;
NDirector = document.getElementById("NDirector");
let IDirector;
IDirector = document.getElementById("IDirector");
let DDirector;
DDirector = document.getElementById("DDirector");
CrearDirector.onclick = CrearA(NDirector.value, IDirector.value, "Director", DDirector.value);
//# sourceMappingURL=main.js.map