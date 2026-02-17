import { SearchItem } from './search.types'

export const searchItems: SearchItem[] = [
    // Domains
    { title: "Astronomy",    href: "/astronomy",    category: "Domain", description: "Study of celestial objects and phenomena" },
    { title: "Astrophysics", href: "/astrophysics", category: "Domain", description: "Physics of the universe and celestial bodies" },
    { title: "Cosmology",    href: "/cosmology",    category: "Domain", description: "Origin and evolution of the universe" },

    // Topics
    { title: "Black Holes",  href: "/topics/black-holes",  category: "Topic", description: "Regions where gravity is infinitely strong" },
    { title: "Dark Matter",  href: "/topics/dark-matter",  category: "Topic", description: "Mysterious invisible matter in the universe" },
    { title: "Big Bang",     href: "/topics/big-bang",     category: "Topic", description: "The origin of our universe" },
    { title: "Galaxies",     href: "/topics/galaxies",     category: "Topic", description: "Massive systems of stars and matter" },
    { title: "Exoplanets",   href: "/topics/exoplanets",   category: "Topic", description: "Planets beyond our solar system" },
    { title: "Nebulae",      href: "/topics/nebulae",      category: "Topic", description: "Cosmic clouds where stars are born" },

    // Events
    { title: "Penumbral Lunar Eclipse",    href: "/events/lunar-eclipse-2026", category: "Event", description: "Mar 13, 2026" },
    { title: "Lyrids Meteor Shower",       href: "/events/lyrids-2026",        category: "Event", description: "Apr 22, 2026" },
    { title: "Eta Aquarids Meteor Shower", href: "/events/eta-aquarids-2026",  category: "Event", description: "May 06, 2026" },
    { title: "Summer Solstice",            href: "/events/summer-solstice-2026", category: "Event", description: "Jun 21, 2026" },
    { title: "Perseids Meteor Shower",     href: "/events/perseids-2026",      category: "Event", description: "Aug 12, 2026" },
    { title: "Geminids Meteor Shower",     href: "/events/geminids-2026",      category: "Event", description: "Dec 14, 2026" },

    // News
    { title: "James Webb Discovers Ancient Galaxies", href: "/news/james-webb-ancient-galaxies", category: "News", description: "Feb 10, 2026 • NASA" },
    { title: "Mars Rover Finds Organic Compounds",    href: "/news/mars-organic-compounds",       category: "News", description: "Feb 08, 2026 • ESA" },
    { title: "Historic Starship Mission Success",     href: "/news/starship-mission-success",     category: "News", description: "Feb 05, 2026 • SpaceX" },

    // Guides
    { title: "Solar System Basics",        href: "/start/solar-system", category: "Guide", description: "15 min read" },
    { title: "Stars & Stellar Evolution",  href: "/start/stars",        category: "Guide", description: "20 min read" },
    { title: "Galaxies & The Universe",    href: "/start/galaxies",     category: "Guide", description: "18 min read" },
    { title: "Space Observation",          href: "/start/observation",  category: "Guide", description: "12 min read" },
    { title: "Cosmic Phenomena",           href: "/start/phenomena",    category: "Guide", description: "16 min read" },
]