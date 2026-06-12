import { describe, it, expect } from 'vitest'
import {
  getLoginErrorMessage,
  getRegisterErrorMessage,
  getRegisterSuccessMessage
} from '../../src/lib/authMessages'

describe('Auth Messages', () => {

  it('devuelve el mensaje correcto cuando falla el login', () => {
    expect(
      getLoginErrorMessage(new Error('Invalid credentials'))
    ).toBe('Email o contrasena incorrectos')
  })

  it('devuelve el mensaje correcto para un error de registro', () => {
    expect(
      getRegisterErrorMessage('Password too short')
    ).toBe('Error: Password too short')
  })

  it('devuelve el mensaje de registro exitoso', () => {
    expect(
      getRegisterSuccessMessage()
    ).toBe('Cuenta creada. Ahora inicia sesion.')
  })

})