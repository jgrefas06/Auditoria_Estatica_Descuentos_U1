# Matriz de problemas, impactos y trazabilidad

**Convenciones de estado:** `Propuesto` (sin aprobación), `Corregido técnicamente` (cambio estático realizado), `Pendiente de negocio` (no se modifica la funcionalidad sin confirmación).

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
| --- | --- | --- | --- | --- | --- |
| MT-01 / R-01 | «Rápidamente» sin medida. | Imposible establecer aceptación objetiva. | RF-01: definir tiempo y entorno medible. | `docs/requisitos.md`, RF-01 | Propuesto |
| MT-02 / R-02 | VIP y «especial» indefinidos. | Cargos o descuentos inconsistentes. | RF-02: definir elegibilidad y beneficio. | `docs/requisitos.md`, RF-02 | Pendiente de negocio |
| MT-03 / R-03 | Excepciones de promociones ambiguas. | Descuento mayor al precio. | RF-03: tope común y autorización explícita para excepciones. | `docs/requisitos.md`, RF-03 | Pendiente de negocio |
| MT-04 / R-04 | «Resultado correcto» y «mostrar» sin contrato. | Presentación inconsistente y resultados no verificables. | RF-04: salida, precisión y manejo de inválidos. | `docs/requisitos.md`, RF-04 | Propuesto |
| MT-05 / H-01 | Uso de `var`. | Declaraciones más propensas a cambios de alcance. | Emplear `let` y `const`. | `src/descuentos.js`, `eslint.config.cjs` | Corregido técnicamente |
| MT-06 / H-02 | Comparación `==`. | Coerción de tipos no deseada. | Usar `===` para el indicador booleano previsto. | `src/descuentos.js`, `eslint.config.cjs` | Corregido técnicamente* |
| MT-07 / H-03 | `if` sin llaves. | Cambios futuros pueden alterar el flujo por accidente. | Encerrar los cuerpos en llaves. | `src/descuentos.js`, `eslint.config.cjs` | Corregido técnicamente |
| MT-08 / H-04 | Porcentaje >100 solo produce log. | Un total potencialmente negativo. | Definir rechazo y límites conforme a RF-03. | `docs/hallazgos.md`, RF-03 | Pendiente de negocio |
| MT-09 / H-05 | Bonificación VIP fija sin fundamento. | Regla comercial aplicada sin respaldo. | Confirmar origen y tipo de bonificación. | `docs/hallazgos.md`, RF-02 | Pendiente de negocio |
| MT-10 / H-06 | No hay validación de entradas. | Cálculos con números inválidos. | Definir contrato de entrada y tratamiento de errores. | `docs/hallazgos.md`, RF-03/RF-04 | Pendiente de negocio |
| MT-11 / H-07 | Posible total inferior a cero. | Riesgo financiero y de integridad de datos. | Confirmar reglas de promociones y tope permitido. | `docs/hallazgos.md`, RF-03 | Pendiente de negocio |
| MT-12 / H-08 | Retorno distinto de visualización. | El requerimiento no puede asignarse a una capa concreta. | Definir responsabilidad de presentación. | `docs/hallazgos.md`, RF-04 | Pendiente de negocio |

\* **Precaución en MT-06:** sustituir `== true` por `=== true` cambia el tratamiento de valores no booleanos. Esta corrección solo es compatible con el contrato de entrada esperado (`esVip` booleano), cuyo requisito debe aprobar el negocio. Si valores no booleanos fueran válidos, revisar de nuevo la decisión.

## Trazabilidad de requisitos

| Requisito fuente | Requisito propuesto | Pregunta de checklist | Hallazgos relacionados |
| --- | --- | --- | --- |
| R-01 | RF-01 | C-01 | — |
| R-02 | RF-02 | C-02, C-11 | H-02, H-05 |
| R-03 | RF-03 | C-03, C-08, C-09, C-10, C-11 | H-04, H-06, H-07 |
| R-04 | RF-04 | C-04, C-12 | H-08 |
