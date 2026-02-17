import { Globe, Star, Telescope, Eye, Zap } from 'lucide-react'
import { BeginnerTopic } from './startHere.types'

export const beginnerTopics: BeginnerTopic[] = [
    {
        number: "01",
        icon: Globe,
        title: "Solar System Basics",
        description: "Learn about our cosmic neighborhood, planets, moons, and the Sun.",
        color: "blue",
        href: "/start/solar-system",
        duration: "15 min read"
    },
    {
        number: "02",
        icon: Star,
        title: "Stars & Stellar Evolution",
        description: "Understand how stars are born, live for billions of years, and die.",
        color: "yellow",
        href: "/start/stars",
        duration: "20 min read"
    },
    {
        number: "03",
        icon: Telescope,
        title: "Galaxies & The Universe",
        description: "Explore the vast structure of the cosmos and our Milky Way.",
        color: "purple",
        href: "/start/galaxies",
        duration: "18 min read"
    },
    {
        number: "04",
        icon: Eye,
        title: "Space Observation",
        description: "Get started with stargazing, telescopes, and the night sky.",
        color: "cyan",
        href: "/start/observation",
        duration: "12 min read"
    },
    {
        number: "05",
        icon: Zap,
        title: "Cosmic Phenomena",
        description: "Discover eclipses, meteor showers, auroras, and supernovas.",
        color: "orange",
        href: "/start/phenomena",
        duration: "16 min read"
    },
]