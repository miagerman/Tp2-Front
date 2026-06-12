export function validateTaskTitle(title: string): boolean {
  return title.trim().length >= 3
}

export function formatTaskDescription(description?: string): string {
  if (!description || description.trim() === '') {
    return 'Sin descripcion'
  }

  return description.trim()
}