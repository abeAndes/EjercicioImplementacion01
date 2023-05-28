import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";
import { Episodio } from "./Episodio.js";
import { Plataforma } from "./Plataforma.js";
import { Plan } from "./Plan.js";
import { Rol } from "./Rol.js";
import { Categoria } from "./Categoria.js";


//Personas

const davidA = new Persona("David","David","3 años actuando");
const AndreaA = new Persona("Andrea","Andrea","3 años actuando");
const OscarA = new Persona("Oscar","Oscar","3 años actuando");
const LauraA = new Persona("Laura","Laura","3 años actuando");
const PedroA = new Persona("Pedro","Pedro","3 años actuando");

const davidD = new Persona("David","David","3 años dirigiendo");
const AndreaD = new Persona("Andrea","Andrea","3 años dirigiendo");
const OscarD = new Persona("Oscar","Oscar","3 años dirigiendo");
const LauraD = new Persona("Laura","Laura","3 años dirigiendo");
const PedroD = new Persona("Pedro","Pedro","3 años dirigiendo");

//Actores

const davidRA = new Rol("DavidRA","Actor",davidA);
const AndreaRA = new Rol("AndreaRA","Actor",AndreaA);
const OscarRA = new Rol("OscarRA","Actor",OscarA);
const LauraRA = new Rol("LauraRA","Actor",LauraA);
const PedroRA = new Rol("PedroRA","Actor",PedroA);

//Directores

const davidRD = new Rol("davidRD","Director",davidD);
const AndreaRD = new Rol("AndreaRD","Director",AndreaD);
const OscarRD = new Rol("OscarRD","Director",OscarD);
const LauraRD = new Rol("LauraRD","Director",LauraD);
const PedroRD = new Rol("PedroRD","Director",PedroD);

//Series

const HIMYM = new Serie("How i met your mother","Imagen");
const Grey = new Serie("Grey's Anatomy","Imagen");
const Californication = new Serie("Californication","Imagen");
const X = new Serie("X files","Imagen");
const Bad = new Serie("Breaking Bad","Imagen");

//Episodios

const Ted = new Episodio("Ted","Ted se enamora","45 minutos",HIMYM,davidRD);
const Meredith = new Episodio("Doctor","Se muere alguien","45 minutos",Grey,AndreaRD);
const Escritor = new Episodio("Libro","Bloqueo creativo","45 minutos",Californication,OscarRD);
const Murder = new Episodio("Scoly","Aliens","45 minutos",X,LauraRD);
const Walter = new Episodio("White","Metanfetaminas","45 minutos",Bad,PedroRD);

//Plataformas

const Netflix = new Plataforma("Netflix","URL")
const Amazon = new Plataforma("Amazon","URL")
const HBO = new Plataforma("HBO","URL")
const Disney = new Plataforma("Disney","URL")
const Paramount = new Plataforma("Paramount","URL")

//Planes

const EconomicoN = new Plan("Economico","20.000","Una pantalla",Netflix);
const EconomicoA = new Plan("Economico","20.000","Una pantalla",Amazon);
const EconomicoH = new Plan("Economico","20.000","Una pantalla",HBO);
const EconomicoD = new Plan("Economico","20.000","Una pantalla",Disney);
const EconomicoP = new Plan("Economico","20.000","Una pantalla",Paramount);
const ModestoN = new Plan("Modesto","20.000","Una pantalla",Netflix);
const ModestoA = new Plan("Modesto","20.000","Una pantalla",Amazon);
const ModestoH = new Plan("Modesto","20.000","Una pantalla",HBO);
const ModestoD = new Plan("Modesto","20.000","Una pantalla",Disney);
const ModestoP = new Plan("Modesto","20.000","Una pantalla",Paramount);
const RegularN = new Plan("Regular","20.000","Una pantalla",Netflix);
const RegularA = new Plan("Regular","20.000","Una pantalla",Amazon);
const RegularH = new Plan("Regular","20.000","Una pantalla",HBO);
const RegularD = new Plan("Regular","20.000","Una pantalla",Disney);
const RegularP = new Plan("Regular","20.000","Una pantalla",Paramount);
const PremiumN = new Plan("Premium","20.000","Una pantalla",Netflix);
const PremiumA = new Plan("Premium","20.000","Una pantalla",Amazon);
const PremiumH = new Plan("Premium","20.000","Una pantalla",HBO);
const PremiumD = new Plan("Premium","20.000","Una pantalla",Disney);
const PremiumP = new Plan("Premium","20.000","Una pantalla",Paramount);
const UltragoldN = new Plan("Ultragold","20.000","Una pantalla",Netflix);
const UltragoldA = new Plan("Ultragold","20.000","Una pantalla",Amazon);
const UltragoldH = new Plan("Ultragold","20.000","Una pantalla",HBO);
const UltragoldD = new Plan("Ultragold","20.000","Una pantalla",Disney);
const UltragoldP = new Plan("Ultragold","20.000","Una pantalla",Paramount);

//Categorias

const Drama = new Categoria("Drama");
const Terror = new Categoria("Terror");
const Accion = new Categoria("Accion");
const Familiar = new Categoria("Familiar");
const Comedia = new Categoria("Comedia");

