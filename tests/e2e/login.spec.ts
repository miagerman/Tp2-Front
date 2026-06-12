import { test, expect } from '@playwright/test'

test('muestra la pantalla de login correctamente', async ({ page }) => {
  await page.goto('/login')

  await expect(page.getByRole('heading', { name: 'Taskly' })).toBeVisible()
  await expect(page.getByPlaceholder('Email')).toBeVisible()
  await expect(page.getByPlaceholder('Contrasena')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Iniciar sesion' })).toBeVisible()
})