import { AstronomicalEvent } from './astronomicalEvent.types'

export const events: AstronomicalEvent[] = [
    {
        date: { day: "13", month: "Mar", year: "2026" },
        title: "Penumbral Lunar Eclipse",
        description: "The Moon passes through Earth's penumbral shadow, visible across Europe, Asia, and Africa.",
        type: "Eclipse",
        time: "02:45 UTC",
        visibility: "Europe, Asia, Africa",

        image: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=600&q=80",
        href: "/events/lunar-eclipse-2026"
    },
    {
        date: { day: "22", month: "Apr", year: "2026" },
        title: "Lyrids Meteor Shower",
        description: "One of the oldest known meteor showers, producing up to 20 meteors per hour.",
        type: "Meteor Shower",
        time: "Peak at Midnight",
        visibility: "Northern Hemisphere",

        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
        href: "/events/lyrids-2026"
    },
    {
        date: { day: "06", month: "May", year: "2026" },
        title: "Eta Aquarids Meteor Shower",
        description: "Debris from Halley's Comet creates a stunning display with up to 60 meteors per hour.",
        type: "Meteor Shower",
        time: "Peak before Dawn",
        visibility: "Southern Hemisphere",

        image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?w=600&q=80",
        href: "/events/eta-aquarids-2026"
    },
    {
        date: { day: "21", month: "Jun", year: "2026" },
        title: "Summer Solstice",
        description: "The longest day of the year in the Northern Hemisphere.",
        type: "Solar Event",
        time: "10:24 UTC",
        visibility: "Worldwide",

        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80",
        href: "/events/summer-solstice-2026"
    },
    {
        date: { day: "12", month: "Aug", year: "2026" },
        title: "Perseids Meteor Shower Peak",
        description: "The most popular meteor shower producing up to 100 meteors per hour.",
        type: "Meteor Shower",
        time: "Peak at 22:00 UTC",
        visibility: "Northern Hemisphere",

        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
        href: "/events/perseids-2026"
    },
    {
        date: { day: "14", month: "Dec", year: "2026" },
        title: "Geminids Meteor Shower",
        description: "The best meteor shower of the year with up to 120 multicolored meteors per hour.",
        type: "Meteor Shower",
        time: "Peak at 02:00 UTC",
        visibility: "Worldwide",

        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600&q=80",
        href: "/events/geminids-2026"
    },
     {
        date: { day: "15", month: "Dec", year: "2026" },
        title: "Geminids Meteor Shower",
        description: "The best meteor shower of the year with up to 120 multicolored meteors per hour.",
        type: "Meteor Shower",
        time: "Peak at 02:00 UTC",
        visibility: "Worldwide",

        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
        href: "/events/geminids-2027"
    }
]