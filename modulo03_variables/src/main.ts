import "./style.css";

// Definición de variables

const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloTitulo =
  "background-color: green; font-weight:bold; font-size: larger";

interface Grupos {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
}

const grupoA: Grupos = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: `${poprock}`,
};

const grupoB: Grupos = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: `${rock}`,
};

const grupoC: Grupos = {
  nombre: "AC DC",
  año: 1973,
  activo: true,
  genero: `${hardrock}`,
};

const grupoD: Grupos = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: `${clasica}`,
};

const grupoE: Grupos = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: `${rock}`,
};

console.log(
  "%c%s",
  estiloTitulo,
  grupoA.nombre,
  grupoA.año,
  grupoA.activo,
  grupoA.genero
);

console.log(
  "%c%s",
  estiloTitulo,
  grupoB.nombre,
  grupoB.año,
  grupoB.activo,
  grupoB.genero
);
console.log(
  "%c%s",
  estiloTitulo,
  grupoC.nombre,
  grupoC.año,
  grupoC.activo,
  grupoC.genero
);
console.log(
  "%c%s",
  estiloTitulo,
  grupoD.nombre,
  grupoD.año,
  grupoD.activo,
  grupoD.genero
);
console.log(
  "%c%s",
  estiloTitulo,
  grupoE.nombre,
  grupoE.año,
  grupoE.activo,
  grupoE.genero
);
