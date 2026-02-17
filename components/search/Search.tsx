'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { searchItems } from './search.data'
import { SearchItem } from './search.types'
import {
    Globe,
    Telescope,
    Newspaper,
    Calendar,
    BookOpen,
    ArrowRight,
} from 'lucide-react'

interface SearchProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const categoryIcon: Record<SearchItem['category'], React.ElementType> = {
    Domain: Telescope,
    Topic: Globe,
    Event: Calendar,
    News: Newspaper,
    Guide: BookOpen,
}

const categoryOrder: SearchItem['category'][] = [
    'Domain',
    'Topic',
    'Event',
    'News',
    'Guide',
]

const Search = ({ open, onOpenChange }: SearchProps) => {
    const router = useRouter()

    // Ctrl+K / Cmd+K shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                onOpenChange(!open)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open, onOpenChange])

    const handleSelect = (href: string) => {
        onOpenChange(false)
        router.push(href)
    }

    // Group items by category
    const grouped = categoryOrder.reduce<Record<string, SearchItem[]>>((acc, category) => {
        const items = searchItems.filter(item => item.category === category)
        if (items.length > 0) acc[category] = items
        return acc
    }, {})

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput
                placeholder="Search topics, events, news..."
                className="border-none focus:ring-0"
            />
            <CommandList>
                <CommandEmpty>
                    <div className="flex flex-col items-center gap-2 py-8 text-gray-400">
                        <Globe className="w-8 h-8 opacity-50" />
                        <p>No results found.</p>
                    </div>
                </CommandEmpty>

                {Object.entries(grouped).map(([category, items], index) => {
                    const Icon = categoryIcon[category as SearchItem['category']]

                    return (
                        <div key={category}>
                            {index > 0 && <CommandSeparator />}
                            <CommandGroup
                                heading={
                                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-mono">
                                        <Icon className="w-3 h-3" />
                                        {category}s
                                    </span>
                                }
                            >
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.href}
                                        value={item.title}
                                        onSelect={() => handleSelect(item.href)}
                                        className="flex items-center justify-between gap-4 cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-4 h-4 text-gray-500 shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium">{item.title}</p>
                                                {item.description && (
                                                    <p className="text-xs text-gray-500">{item.description}</p>
                                                )}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-3 h-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </div>
                    )
                })}
            </CommandList>
        </CommandDialog>
    )
}

export default Search