# Registro de decisiones de la evaluación estática

## D-01 — Mantener reglas comerciales hasta confirmación

**Estado:** adoptada para esta inspección.

La auditoría busca detectar defectos antes de ejecutar software. Se decide **no** imponer un máximo, devolver errores, redondear valores ni modificar el bono VIP sin especificación aprobada. Corregir esas áreas ahora inventaría políticas de negocio.

## D-02 — Aplicar correcciones sintácticas delimitadas

**Estado:** adoptada con advertencia explícita de tipo.

Se sustituye `var` por `let`/`const`, se agregan llaves y se reemplaza `== true` por `=== true`. La comparación estricta supone que `esVip` se representa mediante un booleano. Este supuesto todavía necesita ratificación; con entradas no booleanas el comportamiento puede variar.

## D-03 — Activar reglas preventivas ESLint

**Estado:** configurada, pendiente de ejecución comprobable.

- `no-var`: evita variables con alcance propio de `var`; ayuda a reducir cambios accidentales de alcance.
- `eqeqeq`: exige comparación estricta y hace visible la intención sobre tipos.
- `no-unused-vars`: informa de identificadores declarados y no utilizados; puede descubrir código muerto.
- `curly`: obliga a utilizar llaves en bloques de control, mejorando legibilidad y seguridad de mantenimiento.
- `no-undef`: ayuda a detectar referencias a nombres no declarados; se definen `console` y `module` como globales conocidos del archivo CommonJS.

`no-unused-vars` y `no-undef` pueden estar activadas sin emitir hallazgos concretos en este módulo; no se debe inventar una infracción.

## D-04 — Separar herramientas de análisis y juicio humano

**Estado:** adoptada.

ESLint identifica patrones definidos por sus reglas; la inspección humana interpreta la intención del negocio y detecta ambigüedades. Un resultado limpio no demuestra que se haya aplicado el descuento correcto.

## D-05 — Revisión real por pares

**Estado:** pendiente.

Se preparó un formato para que autor, revisor y registrador documenten una sesión real. No se asignaron firmas, fechas, ni comentarios falsos a un compañero.
