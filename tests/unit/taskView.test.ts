import { describe, expect, it } from 'vitest'
import { getTaskDescription, hasTasks } from '../../src/lib/taskView'

describe('logica de visualizacion de tareas', () => {
  it('muestra "Sin descripcion" cuando una tarea no tiene descripcion', () => {
    expect(getTaskDescription('')).toBe('Sin descripcion')
    expect(getTaskDescription(null)).toBe('Sin descripcion')
  })

  it('detecta cuando el usuario tiene tareas cargadas', () => {
    const tasks = [
      {
        id: 1,
        title: 'Estudiar DevOps',
        description: 'Leer sobre CI/CD',
        completed: false,
        user_id: 'user-123'
      }
    ]

    expect(hasTasks(tasks)).toBe(true)
  })

  it('detecta cuando el usuario no tiene tareas', () => {
    expect(hasTasks([])).toBe(false)
    expect(hasTasks(null)).toBe(false)
  })
})