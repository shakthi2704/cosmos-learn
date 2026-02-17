export interface SearchItem {
    title: string
    href: string
    category: 'Topic' | 'Domain' | 'Event' | 'News' | 'Guide'
    description?: string
}