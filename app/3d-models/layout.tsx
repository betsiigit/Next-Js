import type { ReactNode } from "react"
import CategoriesNav from "@/app/components/CategoriesNav"
import { getAllCategories } from "@/app/lib/categories"

export default async function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = await getAllCategories()

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav categories={categories} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}
