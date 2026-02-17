import Link from "next/link"
import { NavigationMenuLink } from "../ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ListItemProps } from './navbar.types'


const ListItem = ({ className, title, children, icon, href }: ListItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                        {icon && <span>{icon}</span>}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li >
    )
}

export default ListItem