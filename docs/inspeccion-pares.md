# Inspección por pares — preparación y acta

## 1. Roles de la actividad

| Rol | Responsabilidad | Participante real |
| --- | --- | --- |
| Autor | Explica el propósito del módulo, entrega artefactos y atiende observaciones. | **Por registrar** |
| Revisor | Revisa código y requisitos de forma independiente y propone defectos concretos. | **Por registrar** |
| Registrador | Anota evidencia, severidad, decisiones y estado sin alterar lo que dijeron los participantes. | **Por registrar** |

> **Importante:** este documento es una **plantilla preparada**. No acredita una inspección humana celebrada ni inventa participantes o comentarios. Para cumplir plenamente con la actividad, completar una sesión real y conservar su evidencia.

## 2. Material previo para la sesión

1. Código original: `evidencias/codigo-inicial.js.txt`.
2. Código revisado: `src/descuentos.js`.
3. Requisitos: `docs/requisitos.md`.
4. Lista de verificación: `docs/checklist.md`.
5. Matriz y hallazgos: `docs/matriz-trazabilidad.md` y `docs/hallazgos.md`.
6. Salidas reales de ESLint (generadas después de instalar dependencias): `evidencias/lint-inicial.txt` y `evidencias/lint-final.txt`.

## 3. Procedimiento sugerido

1. El autor presenta requisitos y código **sin ejecutar pruebas funcionales**.
2. El revisor inspecciona cada bloque y responde el checklist.
3. El registrador anota observación, origen, severidad, línea y acción.
4. Se distingue lo detectado por ESLint de lo detectado por criterio humano.
5. El equipo decide qué correcciones son válidas sin aprobar reglas de negocio por cuenta propia.
6. El registrador indica elementos cerrados y pendientes y conserva el acta.

## 4. Acta de sesión (completar durante la revisión real)

- **Fecha y hora:** ______________________________
- **Medio / lugar:** ______________________________
- **Autor:** _____________________________________
- **Revisor:** ___________________________________
- **Registrador:** _______________________________
- **Versión o commit revisado:** __________________
- **Archivos revisados:** _________________________
- **Duración:** ___________________________________

### Observaciones verificadas por el revisor

| N.º | Autor de la observación | Archivo/línea | Observación técnica y justificación | Severidad | Acuerdo / acción | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Sin revisar |
| 2 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Sin revisar |

### Decisiones finales

- **Hallazgos aprobados:** _________________________
- **Hallazgos rechazados (con motivo):** ___________
- **Puntos de negocio que no deben cambiarse:** ____
- **Responsables y próximos pasos:** ______________
- **Conformidad del revisor y registrador:** ________

## 5. Dos sugerencias de comentarios técnicos para un pull request

**No publicar estos textos como si fueran opiniones ya expresadas por otra persona.** Son temas de discusión para que el revisor real los analice y formule sus propios comentarios.

**Tema 1 — Validación del porcentaje, `src/descuentos.js`:** «Cuando `porcentaje` supera 100, se escribe una advertencia, pero el cálculo continúa. Conviene definir con negocio si debe rechazarse la operación o si existe una promoción autorizada».

**Tema 2 — Bono VIP, `src/descuentos.js`:** «El beneficio fijo de 10 no está definido en R-02. Sugiero documentar el monto y confirmar si debe acumularse con el descuento porcentual antes de modificar la lógica».

## 6. Evidencia aceptable

Un pull request real con **dos comentarios técnicos del revisor**, o un acta equivalente que identifique participantes, fecha, observaciones y acuerdos. Se debe añadir la URL o la evidencia correspondiente antes de entregar.

- **URL de PR / ubicación del acta firmada:** pendiente.
