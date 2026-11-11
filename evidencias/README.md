# Evidencias de ESLint

Esta carpeta contiene una **copia literal** del código inicial en `codigo-inicial.js.txt`.

Los archivos `lint-inicial.txt` y `lint-final.txt` **no están precargados**, porque no sería correcto inventar salidas de una herramienta que no se ha ejecutado. Para obtener evidencias legítimas:

```powershell
npm install
npm run evidencias
```

El script genera automáticamente ambos archivos mediante el ESLint instalado en `node_modules/`, anota fecha, versión y código de salida y conserva la salida estándar y de error. El análisis inicial usa el código original mediante `--stdin`; el final analiza `src/descuentos.js`.

Se espera que el análisis inicial reporte infracciones y termine con código de salida diferente de cero, mientras que el análisis final termine con cero. **Estas expectativas no sustituyen comprobar los archivos reales.**

No editar manualmente las salidas generadas. Si vuelves a correr el comando, se reemplazan por resultados auténticos nuevos.
