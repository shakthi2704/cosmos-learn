'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { domains, topics } from './navbar.data'
import ListItem from './ListItem'
import SearchDialog from '@/components/search/Search'

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState<boolean>(false)

    return (
        <>
            {/* Search Dialog */}
            <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-4">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="text-xl font-bold flex items-center gap-2">
                            <Image
                                src="/logo-white.svg"
                                alt="Cosmos Learn Logo"
                                width={32}
                                height={32}
                                priority
                            />
                            Cosmos Learn
                        </Link>

                        {/* Navigation Menu */}
                        <NavigationMenu className="hidden md:block">
                            <NavigationMenuList>

                                {/* Home */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                                        >
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* Explore Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent">
                                        Explore
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/10">
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                                            {domains.map((domain) => (
                                                <ListItem
                                                    key={domain.title}
                                                    title={domain.title}
                                                    href={domain.href}
                                                    icon={domain.icon}
                                                >
                                                    {domain.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Topics Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent">
                                        Topics
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/10">
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {topics.map((topic) => (
                                                <ListItem
                                                    key={topic.title}
                                                    title={topic.title}
                                                    href={topic.href}
                                                >
                                                    {topic.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Events */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/events"
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                                        >
                                            Events
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* News */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/news"
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                                        >
                                            News
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* About */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/about"
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                                        >
                                            About
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Search Button */}
                        <div className="flex items-center gap-4">
                            {/* Keyboard shortcut hint */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm"
                            >
                                <Search className="w-4 h-4" />
                                <span className="text-xs">Search</span>
                                <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs border border-white/10 bg-white/5 font-mono">
                                    ⌘K
                                </kbd>
                            </button>

                            {/* Mobile search icon only */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-gray-400 hover:text-white"
                                onClick={() => setSearchOpen(true)}
                            >
                                <Search className="w-5 h-5" />
                            </Button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
