# Comparación estática entre código inicial y revisado

## Alcance

Se comparó la estructura del código proporcionado con la versión corregida de `src/descuentos.js`, sin invocar la función ni ejecutar casos funcionales.

| Aspecto | Código inicial (consigna) | Código revisado | Justificación |
| --- | --- | --- | --- |
| Declaración de descuento | `var descuento` | `let descuento` | `descuento` se reasigna si VIP es verdadero. |
| Declaración del total | `var total` | `const total` | La referencia no se reasigna después del cálculo. |
| Comparación VIP | `esVip == true` | `esVip === true` | Evita coerción; requiere confirmar contrato booleano. |
| Primer condicional | Sin llaves | Con llaves | Reduce modificaciones accidentales del flujo. |
| Segundo condicional | Sin llaves | Con llaves | Mejora la legibilidad y consistencia. |
| Fórmula del porcentaje | `precio * porcentaje / 100` | `(precio * porcentaje) / 100` | Paréntesis solo explicitan la agrupación. |
| Beneficio VIP | `descuento = descuento + 10` | Se conserva | No se inventa regla comercial. |
| Advertencia de porcentaje >100 | `console.log` y continúa | Se conserva | Falta especificación de errores. |
| Resultado | `precio - descuento` | Se conserva | No se modifica el contrato sin confirmación. |

## Infracciones esperadas por inspección del original

Con las reglas configuradas, una lectura estática permite anticipar **cinco incidencias de estilo**, sin sustituir el resultado real del linter:

- `no-var`: dos ubicaciones, líneas 2 y 5.
- `eqeqeq`: una ubicación, línea 3.
- `curly`: dos ubicaciones, líneas 3 y 4.
- `no-unused-vars`: sin infracción identificada en la revisión manual.
- `no-undef`: sin infracción identificada en la revisión manual bajo los globales configurados.

**Importante:** esto es una estimación analítica, **no** una salida ejecutada de ESLint. Para acreditar el antes y después, usar `npm run evidencias` y conservar los archivos resultantes.

## Cuestiones semánticas no corregidas

Se mantienen a propósito los casos descritos en H-04 a H-08: porcentaje inválido, bonificación VIP fija, validación de entradas, promoción excepcional y ambigüedad del resultado mostrado.

**Conclusión técnica provisional:** se ha limpiado el código respecto a reglas confirmadas de estilo, pero no se afirma que la funcionalidad sea correcta ni que todos los requisitos estén validados.
