import { Telescope, Atom, Sparkles } from 'lucide-react'
import { Domain } from './domains.types' 

export const domains: Domain[] = [
    {
        title: "Astronomy",
        href: "/astronomy",
        description: "The study of celestial objects, phenomena, and the universe as a whole.",
        icon: Telescope,
        color: "blue",
    },
    {
        title: "Astrophysics",
        href: "/astrophysics",
        description: "Understanding the physics of the universe, from stars to black holes.",
        icon: Atom,
        color: "purple",
    },
    {
        title: "Cosmology",
        href: "/cosmology",
        description: "The study of the universe's origin, evolution, and ultimate fate.",
        icon: Sparkles,
        color: "violet",
    },
]