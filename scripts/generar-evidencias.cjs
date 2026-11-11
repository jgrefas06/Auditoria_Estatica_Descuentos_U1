"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const raiz = path.resolve(__dirname, "..");
const salida = path.join(raiz, "evidencias");
const eslintBin = path.join(raiz, "node_modules", "eslint", "bin", "eslint.js");
const eslintPackage = path.join(raiz, "node_modules", "eslint", "package.json");
const codigoOriginal = path.join(salida, "codigo-inicial.js.txt");
const codigoFinal = path.join(raiz, "src", "descuentos.js");

if (!fs.existsSync(eslintBin)) {
  console.error("No se encontro ESLint instalado en node_modules.");
  console.error("Ejecuta primero: npm install");
  process.exit(1);
}

if (!fs.existsSync(codigoOriginal) || !fs.existsSync(codigoFinal)) {
  console.error("Falta el codigo original o el archivo final del proyecto.");
  process.exit(1);
}

const versionEslint = JSON.parse(fs.readFileSync(eslintPackage, "utf8")).version;
const contenidoOriginal = fs.readFileSync(codigoOriginal, "utf8");

function obtenerReporte({ nombre, tipo, argumentos, entrada, comando }) {
  const resultado = spawnSync(process.execPath, [eslintBin, ...argumentos], {
    cwd: raiz,
    input: entrada,
    encoding: "utf8",
    shell: false,
    windowsHide: true
  });

  if (resultado.error) {
    throw resultado.error;
  }

  const lineas = [
    "EVIDENCIA REAL DE ANALISIS ESTATICO — ESLINT",
    `Analisis: ${tipo}`,
    `Generado (UTC): ${new Date().toISOString()}`,
    `Node.js: ${process.version}`,
    `ESLint: ${versionEslint}`,
    `Configuracion: eslint.config.cjs`,
    `Comando equivalente: ${comando}`,
    `Codigo de salida: ${resultado.status}`,
    "",
    "SALIDA ESTANDAR:",
    resultado.stdout.trimEnd() || "(sin mensajes: no se detectaron infracciones de las reglas configuradas)",
    "",
    "SALIDA DE ERROR:",
    resultado.stderr.trimEnd() || "(sin mensajes)",
    ""
  ];

  fs.writeFileSync(path.join(salida, nombre), lineas.join("\n"), "utf8");
  return resultado.status;
}

const codigoInicial = obtenerReporte({
  nombre: "lint-inicial.txt",
  tipo: "codigo ORIGINAL del enunciado (por entrada estandar)",
  argumentos: ["--stdin", "--stdin-filename", "src/descuentos.js"],
  entrada: contenidoOriginal,
  comando: "npx eslint --stdin --stdin-filename src/descuentos.js < evidencias/codigo-inicial.js.txt"
});

const codigoRevisado = obtenerReporte({
  nombre: "lint-final.txt",
  tipo: "codigo REVISADO del proyecto",
  argumentos: ["src/descuentos.js"],
  entrada: undefined,
  comando: "npx eslint src/descuentos.js"
});

console.log(`lint-inicial.txt: salida ${codigoInicial} (se esperan infracciones del original).`);
console.log(`lint-final.txt: salida ${codigoRevisado} (se espera 0).`);
console.log("Evidencias guardadas en la carpeta evidencias/.");

if (codigoInicial === 0) {
  console.warn("Atencion: el codigo original no produjo infracciones; revisa la configuracion.");
  process.exitCode = 1;
}

if (codigoRevisado !== 0) {
  console.error("El codigo revisado aun contiene problemas segun ESLint.");
  process.exitCode = 1;
}
