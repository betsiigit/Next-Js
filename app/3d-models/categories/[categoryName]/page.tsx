import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModelsByCategorySlug } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"



export default async function CategoryPage({ params }: CategoryPageProps) {

  const { categoryName } = await params
  const models = await getModelsByCategorySlug(categoryName)
  const category = await getCategoryBySlug(categoryName)

  return (
    <ModelsGrid models={models} categoryName={category.displayName} />
  )
}