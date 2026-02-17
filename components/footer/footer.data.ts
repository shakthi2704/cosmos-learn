import { FooterColumn, SocialLink } from './footer.types'

export const footerColumns: FooterColumn[] = [
    {
        title: "Explore",
        links: [
            { label: "Astronomy", href: "/astronomy" },
            { label: "Astrophysics", href: "/astrophysics" },
            { label: "Cosmology", href: "/cosmology" },
            { label: "All Topics", href: "/topics" },
        ]
    },
    {
        title: "Resources",
        links: [
            { label: "Beginner's Guide", href: "/start" },
            { label: "Sky Calendar", href: "/events" },
            { label: "Image Gallery", href: "/gallery" },
            { label: "Glossary", href: "/glossary" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
        ]
    },
]

export const socialLinks: SocialLink[] = [
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
]
