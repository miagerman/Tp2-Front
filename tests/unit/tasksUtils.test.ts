import { describe, expect, it } from 'vitest'
import { validateTaskTitle, formatTaskDescription } from '../../src/lib/taskUtils'

describe('taskUtils', () => {
  it('valida que una tarea tenga titulo real', () => {
    expect(validateTaskTitle('Comprar comida')).toBe(true)
    expect(validateTaskTitle(' a ')).toBe(false)
  })

  it('muestra texto por defecto si no hay descripcion', () => {
    expect(formatTaskDescription('')).toBe('Sin descripcion')
    expect(formatTaskDescription('  Estudiar DevOps  ')).toBe('Estudiar DevOps')
  })
})