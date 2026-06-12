export type Task = {
  id: number
  title: string
  description?: string | null
  completed: boolean
  user_id: string
}

export function getTaskDescription(description?: string | null): string {
  if (!description || description.trim() === '') {
    return 'Sin descripcion'
  }

  return description
}

export function hasTasks(tasks: Task[] | null): boolean {
  return Array.isArray(tasks) && tasks.length > 0
}