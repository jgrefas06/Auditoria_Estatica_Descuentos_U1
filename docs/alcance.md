# Alcance y método de la auditoría estática

## Propósito

Inspeccionar el módulo de descuentos facilitado en la consigna de la Unidad 1 antes de realizar pruebas funcionales. Se busca identificar defectos sintácticos, problemas de calidad de código y ambigüedades de los requisitos.

## Método

1. Transcribir el módulo inicial sin modificarlo.
2. Revisar individualmente R-01 a R-04 y registrar cuestiones pendientes de negocio.
3. Aplicar un checklist de inspección humana.
4. Obtener un análisis inicial con ESLint.
5. Corregir solamente los aspectos comprobados y acotados a las reglas de estilo.
6. Obtener el análisis final con ESLint y comparar los resultados.
7. Solicitar una revisión real de pares y registrar las observaciones auténticas.

## Límites

- No se ejecutan pruebas funcionales de `calcularDescuento` durante esta actividad.
- Un análisis de ESLint sin errores no demuestra la corrección del cálculo.
- Las decisiones sobre descuentos VIP, promociones, porcentajes inválidos, formato monetario y tiempos de respuesta requieren confirmación del negocio.
- No se debe presentar una plantilla de revisión como revisión real ejecutada.

## Origen

Actividad de Unidad 1: «Auditoría estática de un módulo JavaScript: requisitos, inspección por pares y detección temprana de defectos».
