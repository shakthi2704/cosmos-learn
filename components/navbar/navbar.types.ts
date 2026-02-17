export interface Domain {
    title: string
    href: string
    description: string
    icon: string
}

export interface Topic {
    title: string
    href: string
    description: string
}

export interface ListItemProps {
    className?: string
    title: string
    children: React.ReactNode
    icon?: string
    href: string
}