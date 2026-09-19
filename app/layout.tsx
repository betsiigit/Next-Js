import NavLink from "@/app/components/NavLink"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Navbar from "@/app/components/Navbar"
import { getAllCategories } from "@/app/lib/categories"
import type { Category, RootLayoutProps } from "@/app/types"
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: RootLayoutProps) {
  const categories: Category[] = getAllCategories()
 return (
  <html lang="en">
    <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
      <Navbar />
      <div className="relative flex flex-col min-h-screen md:flex-row">
        {/* Responsive Navigation */}
        <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
          <div className="relative">
            <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
              <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                <li>
                  <NavLink href="/3d-models">
                    All
                  </NavLink>
                </li>

                {categories.map((item) => (
                  <li key={item.slug}>
                    <NavLink href={`/3d-models/categories/${item.slug}`}>
                      {item.displayName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Fading edge/gradient for horizontal scroll hint on mobile */}
            <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:ml-64">
          {children}
        </main>
      </div>
    </body>
  </html>
)
}