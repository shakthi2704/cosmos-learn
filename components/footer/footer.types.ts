export interface FooterLink {
    label: string
    href: string
}

export interface FooterColumn {
    title: string
    links: FooterLink[]
}

export interface SocialLink {
    label: string
    href: string
    icon: string
}