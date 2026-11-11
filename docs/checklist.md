# Checklist de inspección estática

**Uso:** responder a cada pregunta con Sí / No / No determinado; anotar línea del código o referencia al requisito y registrar un hallazgo si es necesario. Las respuestas siguientes provienen de inspección humana del código original; **no** de pruebas ejecutadas.

| ID | Pregunta de revisión | Observación inicial | Referencia |
| --- | --- | --- | --- |
| C-01 | ¿R-01 define un tiempo máximo medible y un entorno de referencia? | No. «Rápidamente» es ambiguo. | R-01; RF-01 |
| C-02 | ¿Está definido quién es VIP y cuánto recibe? | No. El origen del valor `10` no está justificado. | R-02; línea 3 |
| C-03 | ¿El código evita descuentos superiores al precio fuera de promociones? | No se observa una protección explícita. | R-03; líneas 2–5 |
| C-04 | ¿Está definido el resultado correcto, el formato y el redondeo? | No. La función retorna `total` sin especificación de salida. | R-04; líneas 5–6 |
| C-05 | ¿Se evita `var` al declarar variables? | No. Se utiliza dos veces. | Líneas 2 y 5 |
| C-06 | ¿Se utiliza igualdad estricta para comparar valores? | No. Aparece `esVip == true`. | Línea 3 |
| C-07 | ¿Todos los bloques `if` tienen llaves? | No. Se omiten llaves en dos condiciones. | Líneas 3 y 4 |
| C-08 | ¿Se valida el porcentaje antes de utilizarlo en el cálculo? | No. Primero se calcula y luego se registra un mensaje si es >100. | Líneas 2 y 4 |
| C-09 | ¿Se valida que precio y porcentaje sean números finitos en rangos válidos? | No se observa tal validación. | Líneas 1–2 |
| C-10 | ¿La señalización de un error detiene o controla la operación? | No. `console.log` no interrumpe el flujo. | Líneas 4–6 |
| C-11 | ¿Las operaciones VIP y promociones usan reglas confirmadas? | No determinado. El código usa +10 y no incluye indicador de promoción. | R-02/R-03 |
| C-12 | ¿El módulo y la interfaz distinguen cálculo de presentación? | No determinado. Solo se observa la función que retorna un número. | R-04 |
| C-13 | ¿La configuración de ESLint incluye `no-var`, `eqeqeq`, `no-unused-vars` y `curly`? | Sí, en `eslint.config.cjs`; la ejecución del linter debe verificarse con evidencias. | Configuración |
| C-14 | ¿Hay evidencias iniciales y finales generadas realmente por ESLint? | Pendiente hasta ejecutar `npm install` y `npm run evidencias`. | `evidencias/` |

## Cierre de la lista

Los resultados constituyen una revisión documental y del código fuente. El estado definitivo de los requisitos depende de respuestas de negocio y una revisión efectiva por otras personas.
