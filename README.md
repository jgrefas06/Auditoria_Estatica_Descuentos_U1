# Auditoría estática de un módulo de descuentos

**Verificación y Validación de Software – Unidad 1**

## Descripción del proyecto

En esta actividad trabajé con un módulo de JavaScript que calcula descuentos para una tienda. El objetivo fue revisar el código antes de su uso, identificar posibles errores y documentar qué aspectos se pueden mejorar.

Para realizar la auditoría revisé los requisitos que se entregaron en la actividad, elaboré una lista de verificación y utilicé ESLint para encontrar problemas en el código. También comparé la versión original con una versión corregida. La evaluación se centra en el análisis estático, no en pruebas funcionales.

## Organización del proyecto

```text
Auditoria_Estatica_Descuentos_U1/
├── src/
│   └── descuentos.js
├── docs/
│   ├── alcance.md
│   ├── requisitos.md
│   ├── checklist.md
│   ├── matriz-trazabilidad.md
│   ├── decisiones.md
│   ├── hallazgos.md
│   ├── inspeccion-pares.md
│   ├── comparacion.md
│   └── guia-entrega.md
├── evidencias/
│   ├── codigo-inicial.js.txt
│   ├── lint-inicial.txt
│   └── lint-final.txt
├── scripts/
│   └── generar-evidencias.cjs
├── EJECUTAR_AUDITORIA_WINDOWS.bat
├── eslint.config.cjs
├── package.json
├── .gitignore
└── README.md
```

La carpeta `src` contiene el código revisado. En `docs` están los requisitos, el checklist, la matriz y los hallazgos. En `evidencias` se guardan los resultados del análisis inicial y final.

Los archivos `lint-inicial.txt` y `lint-final.txt` se crean al ejecutar el comando de evidencias; por eso pueden no aparecer en una copia recién descargada.

## Herramientas utilizadas

- Visual Studio Code para revisar los archivos del proyecto.
- JavaScript y Node.js para trabajar con el módulo.
- ESLint para el análisis estático del código.
- Git para organizar los cambios del proyecto.

## Cómo ejecutar el análisis

Primero hay que abrir la carpeta del proyecto en Visual Studio Code y acceder a la terminal. En Windows, desde PowerShell, se pueden utilizar los siguientes comandos:

```powershell
node -v
npm.cmd -v
npm.cmd install
npm.cmd run evidencias
npm.cmd run lint
```

- `npm.cmd install` instala las dependencias del proyecto.
- `npm.cmd run evidencias` genera los resultados del análisis inicial y del código corregido.
- `npm.cmd run lint` revisa el archivo `src/descuentos.js` con ESLint.

También se incluye el archivo `EJECUTAR_AUDITORIA_WINDOWS.bat` para realizar estos pasos de manera automática en Windows.

## Revisión del código

Al revisar el código original encontré varios detalles que podían afectar su calidad o dificultar su mantenimiento. Entre los principales están:

- El uso de `var` en las declaraciones de variables.
- La comparación `==` en lugar de una comparación estricta.
- Las condiciones `if` escritas sin llaves.
- La falta de claridad sobre el descuento adicional para clientes VIP.
- La advertencia que aparece cuando el porcentaje supera 100, aunque el cálculo continúa.

Para el análisis automático configuré las reglas `no-var`, `eqeqeq`, `no-unused-vars`, `curly` y `no-undef`.

En la versión revisada corregí los aspectos de sintaxis y estilo que podían confirmarse. No cambié las reglas de descuento de la tienda porque primero se necesita definir cómo deberían funcionar en los casos especiales. Por ejemplo, todavía debe aclararse si el beneficio VIP consiste en un valor fijo y qué se debe hacer cuando el porcentaje no es válido.

## Resultados obtenidos

Al ejecutar la auditoría en mi computadora, el análisis inicial devolvió un código de salida `1`, porque el código original presenta infracciones de las reglas configuradas. El análisis final devolvió `0` y el comando `npm.cmd run lint` terminó sin mostrar errores.

Los resultados se guardaron en:

- `evidencias/lint-inicial.txt`
- `evidencias/lint-final.txt`

Esto confirma que la versión corregida cumple las reglas de ESLint configuradas. Sin embargo, pasar ESLint no significa que todos los posibles errores del cálculo estén resueltos; por eso también se documentaron las observaciones encontradas mediante revisión humana.

## Documentación y pendientes

En `docs/requisitos.md` se encuentran los requisitos reformulados (RF-01 a RF-04). También se incluye un checklist de 14 preguntas, la matriz de trazabilidad y el registro de ocho hallazgos.

El proyecto cuenta con un historial local de cuatro commits de preparación. Aún queda pendiente publicar el repositorio en GitHub, realizar y documentar una revisión por pares con participación real y elaborar el informe PDF de la actividad.

## Referencias

- Guía didáctica de Verificación y Validación de Software, Unidad 1.
- Consigna de la actividad «Evaluación estática», entregada por el docente.
- ESLint. Documentación oficial: https://eslint.org/docs/latest/use/getting-started
- Fagan, M. E. (1976). *Design and code inspections to reduce errors in program development*.
- Ayewah et al. (2008). *Using static analysis to find bugs*.
- ISTQB (2024). *Certified Tester Foundation Level*, v4.0.1.
