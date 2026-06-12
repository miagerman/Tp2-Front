# Tp2-Front
 
Nuestro trabajo es una mini app de lista de tareas con el objetivo de permitir que cada usuario se registre, inicie sesión y administre sus propias tareas, guardándolas en una base de datos en la nube. Mia hizo el back y benja el front.
 imp hacer 
 npm install -D @playwright/test
npx playwright install 
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro",
  "test": "vitest run",
  "test:e2e": "playwright test"
} ANTES DE CORRER 

benja: 
Creé la carpeta tests para separar todos los tests del proyecto.
Dentro de tests armé la carpeta unit.
Agregué un test unitario para validar la lógica relacionada con la visualización de tareas.
Creé funciones auxiliares para comprobar si una tarea tiene descripción y si existen tareas cargadas.
Probé que los tests funcionen correctamente con Vitest usando npm run test.
Dejé preparada la estructura para que después se puedan agregar más tests sin mezclar el código de la aplicación.
Archivos agregados
tests/unit/taskView.test.ts
src/lib/taskView.ts


mia: 
hice los test e2e es un servidor que se instala y recorre la app como si fuera un user 

npm run test
npm run test:e2e
npm run build
