# Guía práctica de ejecución y entrega

## A. Instalar dependencias en Visual Studio Code

1. Descomprimir el ZIP en una carpeta de tu computadora.
2. Abrir la carpeta `Auditoria_Estatica_Descuentos_U1` con Visual Studio Code.
3. Abrir **Terminal > Nueva terminal**.
4. Comprobar Node y npm con `node -v` y `npm -v`. Se requiere una versión de Node.js compatible con ESLint 10 (Node 20.19+, 22.13+ o 24+ según rama admitida).
5. Ejecutar:

```powershell
npm install
```

Esto descarga la dependencia `eslint` declarada en `package.json` y genera `package-lock.json` si aún no existe.

**Alternativa rápida (Windows):** ejecutar `EJECUTAR_AUDITORIA_WINDOWS.bat` desde la carpeta del proyecto; realiza instalación y análisis en secuencia.

## B. Generar análisis inicial y final

```powershell
npm run evidencias
```

La orden guarda los dos reportes auténticos:

- `evidencias/lint-inicial.txt`
- `evidencias/lint-final.txt`

Para comprobar que la versión revisada cumple las reglas configuradas:

```powershell
npm run lint
npm run revisar-sintaxis
```

**No ejecutar la función con datos de prueba en esta fase:** la consigna pide inspección estática anterior a las pruebas funcionales.

## C. Verificar documentación

Revisar `docs/requisitos.md`, `docs/checklist.md`, `docs/matriz-trazabilidad.md`, `docs/hallazgos.md` y `docs/comparacion.md`. Son propuestas y observaciones preparadas; personalizar las decisiones con las confirmaciones que proporcione el docente o el responsable del negocio.

## D. Completar revisión real por pares

En `docs/inspeccion-pares.md` se encuentran roles y un acta para completar. Para acreditar esta parte se necesita participación real de un revisor y un registrador, o un proceso equivalente definido por el docente. No dejar los campos como «Por registrar» al entregar si se exige el acta.

Alternativa: crear una rama de revisión, abrir un pull request real y solicitar **dos comentarios técnicos auténticos** al revisor. Guardar el enlace.

## E. Publicar repositorio GitHub

Este ZIP contiene el directorio `.git` con cuatro commits locales de preparación. Se registraron con una identidad técnica de preparación, **no como si los hubiera realizado un compañero o el estudiante en persona**. Configura tu identidad para nuevos commits:

```powershell
git config user.name "TU NOMBRE"
git config user.email "TU CORREO DE GITHUB"
```

Después de generar las evidencias y el archivo `package-lock.json`:

```powershell
git add package-lock.json evidencias/lint-inicial.txt evidencias/lint-final.txt
git commit -m "evidencias: registrar resultados reales de ESLint"
git log --oneline
```

Crea un repositorio **vacío** en GitHub y vincúlalo (reemplaza la URL con la tuya):

```powershell
git remote add origin https://github.com/TU-USUARIO/auditoria-estatica-u1.git
git push -u origin main
```

Si abres el ZIP con un descompresor que no preserve carpetas ocultas, revisa que `.git` esté presente; si no, deberás inicializar Git y hacer commits de forma manual.

## F. Preparar el PDF (etapa posterior)

El informe se deja para la siguiente etapa, según lo acordado. La consigna pide cinco secciones de carácter técnico-reflexivo, de 4 a 7 páginas sugeridas, PDF con el nombre `primerApellido_primerNombre_VVS_U1.pdf` y enlace al GitHub.

## G. Lista de control final

- [ ] `npm install` ejecutado correctamente.
- [ ] `npm run evidencias` ejecutado y ambas salidas revisadas.
- [ ] `npm run lint` termina correctamente.
- [ ] Requisitos RF-01 a RF-04 y matriz comprobados.
- [ ] Al menos seis hallazgos documentados (hay ocho preparados).
- [ ] Roles y acta real de pares o PR auténtico con comentarios técnicos.
- [ ] Repositorio GitHub público o accesible al docente.
- [ ] Historial con al menos cuatro commits significativos.
- [ ] Informe PDF elaborado, revisado y presentado en la segunda etapa.
