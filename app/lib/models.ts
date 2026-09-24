import { getDBConnection } from '@/app/lib/db'
import type { Model } from '@/app/types'

export async function getModels(): Promise<Model[]> {
  const db = await getDBConnection()

  try {
    return await db.all<Model[]>("SELECT * FROM models")
  } finally {
    await db.close()
  }
}

export async function getModelsByCategorySlug(categorySlug: string): Promise<Model[]> {
  const db = await getDBConnection()
  try {
    return await db.all<Model[]>("SELECT * FROM models WHERE category=?", [categorySlug])
  } finally {
    await db.close()
  }
}

export async function getModelById(id: string | number): Promise<Model> {
  const db = await getDBConnection()
  try {
    const model = await db.get<Model>("SELECT * FROM models WHERE id=?", [id])
    if (!model) {
      throw new Error(`Model with id ${id} not found`)
    }
    return model
  } finally {
    await db.close()
  }
}
