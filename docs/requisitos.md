# Revisión de requisitos — Unidad 1

**Sistema evaluado:** módulo JavaScript de descuentos para una tienda digital.  
**Estado:** propuestas técnicas pendientes de validación por el responsable del negocio.  
**Método:** análisis de calidad de requisitos previo a la ejecución del software.

## 1. Diagnóstico de los requisitos originales

| ID | Requisito recibido | Defecto de especificación | Riesgo |
| --- | --- | --- | --- |
| R-01 | «El descuento debe calcularse rápidamente». | No especifica límite temporal, volumen ni entorno de medición. | Dos evaluadores pueden llegar a conclusiones opuestas sobre el rendimiento. |
| R-02 | «Los clientes importantes obtendrán un descuento especial». | «Importantes» y «especial» no están definidos; no se aclara si es porcentaje o importe fijo. | Se pueden aplicar descuentos indebidos o inconsistentes. |
| R-03 | «El descuento no puede superar el precio, excepto en promociones». | No define promoción, prioridad de reglas, límite excepcional ni cómo identificarla en el módulo. | Total negativo, pérdida económica o incumplimiento de reglas comerciales. |
| R-04 | «Se debe mostrar el resultado correcto». | No define qué valor se muestra, formato de moneda, redondeo ni errores. | Resultados diferentes entre componentes, aun partiendo del mismo cálculo. |

## 2. Reformulación propuesta, RF-01 a RF-04

Las cuatro formulaciones siguientes son **candidatas verificables**, no políticas de negocio aprobadas. Los valores propuestos en las condiciones de aceptación se incluyen para someterlos a confirmación; no deben implementarse por suposición.

### RF-01 — Tiempo de cálculo

**Propuesta:** Para entradas válidas, el tiempo de cálculo de `calcularDescuento` debe ser menor o igual a **5 milisegundos por invocación**, medidos bajo un entorno de hardware y versión de Node.js predefinidos.

**Criterio de aceptación propuesto:** El 95 % de 1 000 invocaciones en el entorno acordado no supera 5 ms por invocación.  
**Pendiente:** definir entorno, método de medición y umbral real; 5 ms y percentil 95 son referencias propuestas, **no hechos del negocio**.  
**Trazabilidad:** R-01 → RF-01 → C-01.

### RF-02 — Criterio de beneficio VIP

**Propuesta:** Cuando `esVip` sea el booleano `true`, aplicar un beneficio adicional configurable; cuando sea `false`, no aplicarlo.

**Criterio de aceptación propuesto:** Dadas dos entradas equivalentes salvo `esVip`, el descuento de la primera difiere de la segunda exactamente por el beneficio aprobado, y nunca se aplica a `false`.  
**Pendiente:** quién es VIP, tipo de beneficio, monto, acumulación y tratamiento de valores no booleanos. El código inicial agrega **10 unidades monetarias**, pero esto no se considera una regla confirmada.  
**Trazabilidad:** R-02 → RF-02 → C-02.

### RF-03 — Límite del descuento

**Propuesta:** Para operaciones ordinarias, el descuento aplicado debe satisfacer `0 ≤ descuento ≤ precio`. Solo se permitirá una excepción si existe una promoción **explícitamente identificada y aprobada**.

**Criterio de aceptación propuesto:** Para una operación estándar con `precio = 100`, el descuento aplicado no puede superar 100. Si hay promoción válida, la excepción deberá seguir un tope y un identificador acordados.  
**Pendiente:** si el descuento es acumulable, cómo representar promociones (el módulo actual no tiene ese parámetro), cuál es su límite excepcional y qué hacer ante `precio` o `porcentaje` inválidos.  
**Trazabilidad:** R-03 → RF-03 → C-03.

### RF-04 — Resultado observable

**Propuesta:** Para entradas válidas y reglas de descuento confirmadas, el módulo debe devolver un importe final coherente con `total = precio - descuentoAplicado`; la capa de presentación debe mostrar el resultado en la moneda, precisión y formato acordados.

**Criterio de aceptación propuesto:** Sin beneficio VIP ni promociones, `precio = 100` y `porcentaje = 10` generan un total aritmético de 90. El criterio final también debe definir la representación monetaria y las situaciones inválidas.  
**Pendiente:** «mostrar» puede corresponder a otra capa; la función suministrada **devuelve** un valor, pero no lo renderiza. Confirmar redondeo, moneda, mensajes de error y contrato de salida.  
**Trazabilidad:** R-04 → RF-04 → C-04.

## 3. Lista de decisiones de negocio que deben confirmarse

| Pregunta | Decisión requerida | Estado |
| --- | --- | --- |
| P-01 | ¿Qué umbral de respuesta y entorno se consideran aceptables? | Pendiente |
| P-02 | ¿Cómo se determina quién es un cliente VIP? | Pendiente |
| P-03 | ¿El bono VIP es un importe fijo de 10, un porcentaje o algo distinto? | Pendiente |
| P-04 | ¿Se permite acumular el bono VIP con otros descuentos? | Pendiente |
| P-05 | ¿Cómo se identifica y autoriza una promoción excepcional? | Pendiente |
| P-06 | ¿Se admiten precios negativos, porcentajes menores que 0 o mayores que 100? | Pendiente |
| P-07 | ¿Qué comportamiento se exige ante entradas inválidas (error, mensaje, retorno)? | Pendiente |
| P-08 | ¿Qué moneda, precisión y política de redondeo se utilizarán? | Pendiente |
| P-09 | ¿El valor retornado será total a pagar, ahorro obtenido o ambos? | Pendiente |

## 4. Criterio de cierre

Una especificación se considera aprobada cuando un responsable valida cada decisión pendiente, se registra su versión y quedan definidos criterios de aceptación reproducibles. Hasta entonces, las RF son propuestas de mejora y no justifican cambios en la lógica comercial.
