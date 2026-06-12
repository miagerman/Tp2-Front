# CALIDAD.md

## Estrategia general

En este TP agregamos una estrategia de calidad para Taskly. La idea fue que cada cambio pueda validarse automáticamente antes de considerarse listo.

Para eso usamos tests unitarios, tests end to end y un pipeline con GitHub Actions.

## Herramientas seleccionadas

Usamos Vitest para los tests unitarios porque permite probar funciones concretas de lógica de manera rápida.

Usamos Playwright para los tests E2E porque permite abrir la aplicación en un navegador y verificar que una pantalla real funcione.

Usamos GitHub Actions para automatizar las validaciones del proyecto en cada push o pull request.

## Tests desarrollados

### Tests unitarios

Se agregaron tests sobre la lógica de visualización de tareas:

- Verificar que una tarea sin descripción muestre "Sin descripcion".
- Verificar que el sistema detecte cuando hay tareas cargadas.
- Verificar que el sistema detecte cuando no hay tareas.

### Test E2E

Se agregó un test sobre la pantalla de login.

El test verifica que se cargue correctamente:

- El título Taskly.
- El campo de email.
- El campo de contraseña.
- El botón para iniciar sesión.

## Casos de uso críticos

Los flujos más importantes de la aplicación son:

- Registro.
- Inicio de sesión.
- Acceso al dashboard.
- Creación de tareas.
- Visualización de tareas.
- Eliminación de tareas.

Priorizamos login y visualización de tareas porque son partes centrales del funcionamiento de Taskly.

## Pipeline CI/CD

El workflow de GitHub Actions ejecuta:

1. Descarga el repositorio.
2. Configura Node.
3. Instala dependencias.
4. Ejecuta tests unitarios.
5. Instala Playwright.
6. Ejecuta tests E2E.
7. Ejecuta el build.

Si algún paso falla, el workflow queda en error y el cambio no debería mergearse.

## Flujo de trabajo

Se trabajó dividiendo tareas entre dos personas.

Persona 1 agregó la estructura de tests unitarios.

Persona 2 agregó los tests E2E, el workflow de GitHub Actions y la documentación de calidad.

Las ramas usadas fueron:

- feature/tests-unitarios
- feature/tests-e2e-ci

## Limitaciones

No se hizo un test E2E completo creando tareas reales en Supabase porque eso requiere una base de datos de prueba y usuarios de testing.

También quedó pendiente configurar deploy automático real a Vercel con token secreto.