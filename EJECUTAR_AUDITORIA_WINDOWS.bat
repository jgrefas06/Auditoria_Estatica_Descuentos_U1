@echo off
setlocal
cd /d "%~dp0"
title Auditoria estatica - Unidad 1

echo ================================================
echo  AUDITORIA ESTATICA DE DESCUENTOS - UNIDAD 1
echo ================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js no esta instalado o no esta en PATH.
  echo Instala Node.js compatible con ESLint 10 y vuelve a intentar.
  goto :error
)

where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm no esta disponible.
  goto :error
)

echo [1/3] Instalando las dependencias del proyecto...
call npm install
if errorlevel 1 goto :error

echo.
echo [2/3] Generando evidencias de ESLint...
call npm run evidencias
if errorlevel 1 goto :error

echo.
echo [3/3] Comprobando el codigo corregido...
call npm run lint
if errorlevel 1 goto :error

echo.
echo LISTO. Revisa evidencias\lint-inicial.txt y evidencias\lint-final.txt.
pause
exit /b 0

:error
echo.
echo No se completo la auditoria. Revisa el error mostrado.
pause
exit /b 1
