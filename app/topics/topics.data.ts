export interface Topic {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  domains: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  readTime: string
  order: number
}

// 
export const allTopics: Topic[] = [
    {
        slug: "solar-system",
        title: "Solar System",
        description: "Our cosmic neighborhood of planets and moons",
        longDescription: "Explore the eight planets, dwarf planets, moons, asteroids, and comets that make up our solar system.",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&q=80",
        category: "Planetary Science",
        domains: ["astronomy"],
        difficulty: "Beginner",
        readTime: "6 min read",
        order: 1,
    },
    {
        slug: "black-holes",
        title: "Black Holes",
        description: "Regions where gravity is infinitely strong",
        longDescription: "Explore the most extreme objects in the universe where the laws of physics break down and nothing can escape.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
        category: "Extreme Objects",
        domains: ["astronomy", "astrophysics"],
        difficulty: "Intermediate",
        readTime: "8 min read",
        order: 7,
    },
    {
        slug: "dark-matter",
        title: "Dark Matter",
        description: "Mysterious invisible matter in the universe",
        longDescription: "Discover the invisible substance that makes up 85% of the universe's mass but has never been directly observed.",
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&q=80",
        category: "Cosmic Mysteries",
        domains: ["astrophysics", "cosmology"],
        difficulty: "Advanced",
        readTime: "10 min read",
        order: 13,
    },
    {
        slug: "big-bang",
        title: "Big Bang",
        description: "The origin of our universe",
        longDescription: "Journey back to the explosive birth of space, time, and matter 13.8 billion years ago.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&q=80",
        category: "Origins",
        domains: ["cosmology"],
        difficulty: "Advanced",
        readTime: "12 min read",
        order: 12,
    },
    {
        slug: "galaxies",
        title: "Galaxies",
        description: "Massive systems of stars and matter",
        longDescription: "Explore the vast collections of billions of stars, gas, and dark matter that form the building blocks of the universe.",
        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80",
        category: "Cosmic Structure",
        domains: ["astronomy", "cosmology"],
        difficulty: "Intermediate",
        readTime: "7 min read",
        order: 10,
    },
    {
        slug: "exoplanets",
        title: "Exoplanets",
        description: "Planets beyond our solar system",
        longDescription: "Discover the thousands of worlds orbiting distant stars and the search for life beyond Earth.",
        image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&q=80",
        category: "Planetary Science",
        domains: ["astronomy"],
        difficulty: "Intermediate",
        readTime: "6 min read",
        order: 9,
    },
    {
        slug: "nebulae",
        title: "Nebulae",
        description: "Cosmic clouds where stars are born",
        longDescription: "Witness the spectacular birthplaces of stars in colorful clouds of gas and dust.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
        category: "Stellar Objects",
        domains: ["astronomy"],
        difficulty: "Beginner",
        readTime: "5 min read",
        order: 4,
    },
]


export const categories = [
  "All Topics",
  "Extreme Objects",
  "Cosmic Mysteries",
  "Origins",
  "Cosmic Structure",
  "Planetary Science",
  "Stellar Objects",
]

export const domains = [
  { label: "All Domains", value: "all" },
  { label: "Astronomy", value: "astronomy" },
  { label: "Astrophysics", value: "astrophysics" },
  { label: "Cosmology", value: "cosmology" },
]

export const difficulties = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
]
