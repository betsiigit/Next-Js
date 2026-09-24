import { getDBConnection } from '@/app/lib/db'
import type { Category } from '@/app/types'

type CategoryRow = {
  slug: string
  name: string
}

function toCategory(row: CategoryRow): Category {
  return { slug: row.slug, displayName: row.name }
}

export async function getCategories(): Promise<CategoryRow[]> {
  const db = await getDBConnection()

  try {
    return await db.all<CategoryRow[]>("SELECT * FROM categories")
  } finally {
    await db.close()
  }
}

export async function getAllCategories(): Promise<Category[]> {
  const categories = await getCategories()
  return categories.map(toCategory)
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const db = await getDBConnection()

  try {
    const category = await db.get<CategoryRow>(
      "SELECT * FROM categories WHERE slug = ?",
      [slug]
    )
    if (!category) {
      throw new Error(`Category with slug ${slug} not found`)
    }
    return toCategory(category)
  } finally {
    await db.close()
  }
}
