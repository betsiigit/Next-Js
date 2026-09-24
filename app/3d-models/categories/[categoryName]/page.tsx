import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModelsByCategorySlug } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"


export default async function CategoryPage({ params }: CategoryPageProps) {

  const { categoryName } = await params
  const category = await getCategoryBySlug(categoryName)
  const models = await getModelsByCategorySlug(category.slug)

  return (
    <ModelsGrid title={category.displayName} models={models} />
  )
}