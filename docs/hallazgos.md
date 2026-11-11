# Registro de hallazgos de la inspección

**Unidad:** 1 — evaluación estática.  
**Módulo original:** `evidencias/codigo-inicial.js.txt` (copia exacta del caso suministrado).  
**Origen:** `ESLint (regla configurada)` cuando un patrón de código está cubierto por una regla; `Inspección humana` para riesgos que requieren razonamiento sobre requisitos.  
**Nota sobre las evidencias:** los hallazgos de reglas están identificados por lectura del código y **deben corroborarse con la salida auténtica** de `npm run evidencias`. No se afirma que ESLint se haya ejecutado en la preparación del ZIP.

## Escala de severidad

- **Alta:** puede generar importes incorrectos, incumplimiento de reglas del negocio o daños financieros.
- **Media:** incertidumbre significativa de datos, comportamiento o mantenimiento.
- **Baja:** cuestión de estilo o legibilidad cuya corrección reduce defectos futuros.

## Tabla de hallazgos

| ID | Severidad | Origen | Evidencia en código inicial | Acción | Estado |
| --- | --- | --- | --- | --- | --- |
| H-01 | Baja | ESLint `no-var` | Líneas 2 y 5: `var descuento`, `var total`. | Sustituir por `let` y `const` de acuerdo con la mutabilidad. | Corregido técnicamente; verificar lint final |
| H-02 | Media | ESLint `eqeqeq` | Línea 3: `esVip == true`. | Emplear `esVip === true` para el contrato booleano previsto y documentar el supuesto. | Corregido técnicamente; contrato de entrada pendiente |
| H-03 | Baja | ESLint `curly` | Líneas 3 y 4: ambos `if` sin llaves. | Añadir llaves en los dos bloques. | Corregido técnicamente; verificar lint final |
| H-04 | Alta | Inspección humana | Línea 4: se imprime una alerta con `porcentaje > 100`, pero línea 5 calcula el total de todas formas. | Acordar rechazo o tratamiento de porcentajes inválidos. | Pendiente de negocio |
| H-05 | Alta | Inspección humana | Línea 3: descuento VIP suma `10` sin unidad ni respaldo en R-02. | Definir monto, tipo, elegibilidad y acumulación. | Pendiente de negocio |
| H-06 | Alta | Inspección humana | Líneas 1–2: no hay validación visible de `precio`, `porcentaje` ni `esVip`. | Precisar tipos, rangos y comportamiento frente a errores. | Pendiente de negocio |
| H-07 | Alta | Inspección humana | Líneas 2–5: el descuento acumulado puede superar el precio; no hay indicador de promoción. | Resolver excepción comercial y el límite de descuento. | Pendiente de negocio |
| H-08 | Media | Inspección humana | Línea 6: se devuelve `total`; R-04 solicita «mostrar el resultado» sin precisar salida o capa. | Acordar contrato de salida, precisión y responsable de presentación. | Pendiente de negocio |

## Análisis de causa y decisión preventiva

### H-01 — Variables mutables / inmutables

Se observa que `descuento` es reasignado cuando existe beneficio VIP y `total` no cambia después de definirse. Se propone `let descuento` y `const total`, sin modificar la fórmula.

### H-02 — Igualdad no estricta

`==` permite conversiones implícitas. La intención aparente es un parámetro booleano, pero no se documenta en los requisitos. Se adopta `=== true` como regla preventiva; **la decisión debe revisarse si el negocio admite otros tipos para `esVip`**.

### H-03 — Ausencia de llaves

Los dos condicionales usan una instrucción por rama. ESLint puede detectar la infracción de `curly`. La incorporación de llaves no cambia las ramas para las mismas condiciones.

### H-04 — Mensaje sin control de flujo

La advertencia no evita que la función termine devolviendo un total. El defecto es **semántico**, no una infracción de las reglas ESLint seleccionadas. No se cambia hasta disponer de criterio de negocio.

### H-05 — Bono VIP no especificado

El valor `10` es una constante mágica que podría representar moneda o porcentaje. Cambiarlo sin confirmación puede causar un cálculo distinto al requerido.

### H-06 — Entradas sin contrato

No se establece qué hacer con negativos, `NaN`, cadenas o valores ausentes. La ausencia de un contrato comprobable impide decidir una validación correcta.

### H-07 — Tope e identificación de promociones

La fórmula permite un descuento superior al precio y no recibe un indicador de promoción. No sería correcto imponer un máximo universal porque R-03 reconoce excepciones sin definirlas.

### H-08 — Cálculo frente a visualización

El módulo JavaScript no presenta una interfaz visual: retorna un número. Debe especificarse si el requerimiento de «mostrar» corresponde a la función o a un componente externo.

## Resultado de la inspección documental

- **8 hallazgos documentados** (3 categorías detectables por reglas estáticas y 5 de revisión humana).
- **3 categorías con corrección técnica propuesta y aplicada en el archivo final** (H-01, H-02, H-03).
- **5 hallazgos pendientes de aclaración de negocio** (H-04 a H-08).
- **Validación de ESLint y revisión real de pares:** todavía no acreditadas hasta completar las evidencias y el acta.
