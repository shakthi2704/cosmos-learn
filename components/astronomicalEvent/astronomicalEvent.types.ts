export interface AstronomicalEvent {
    date: {
        day: string
        month: string
        year: string
    }
    title: string
    description: string
    type: string
    time?: string
    visibility?: string
    image: string
    href: string
}