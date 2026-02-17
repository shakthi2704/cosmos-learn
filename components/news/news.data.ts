import { NewsArticle } from './news.types'

export const newsArticles: NewsArticle[] = [
    {
        title: "James Webb Discovers Ancient Galaxies",
        description: "New observations reveal galaxies formed just 300 million years after the Big Bang.",
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&q=80",
        category: "Discovery",
        date: "Feb 10, 2026",
        source: "NASA",
        readTime: "5 min read",
        href: "/news/james-webb-ancient-galaxies"
    },
    {
        title: "Mars Rover Finds Organic Compounds",
        description: "Perseverance rover detects complex organic molecules in ancient Martian rocks.",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80",
        category: "Mars",
        date: "Feb 8, 2026",
        source: "ESA",
        readTime: "4 min read",
        href: "/news/mars-organic-compounds"
    },
    {
        title: "Historic Starship Mission Success",
        description: "First successful orbital flight and landing of fully reusable Starship spacecraft.",
        image: "https://images.unsplash.com/photo-1541873676-a18131494184?w=600&q=80",
        category: "Launch",
        date: "Feb 5, 2026",
        source: "SpaceX",
        readTime: "6 min read",
        href: "/news/starship-mission-success"
    },
]