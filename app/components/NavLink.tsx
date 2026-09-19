import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer ${isActive ? 'text-orange-accent' : 'text-gray-700 hover:text-orange-accent'}`}
      >{children}</Link>
    </li>
  )
}