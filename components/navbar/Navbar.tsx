'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet'
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


import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState<boolean>(false)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    const [exploreOpen, setExploreOpen] = useState<boolean>(false)
    const [topicsOpen, setTopicsOpen] = useState<boolean>(false)

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

                        {/* Desktop Navigation Menu */}
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

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">

                            {/* Desktop Search Button */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm"
                            >
                                <Search className="w-4 h-4" />
                                <span className="text-xs">Search</span>
                                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-xs border border-white/10 bg-white/5 font-mono">
                                    ⌘K
                                </kbd>
                            </button>

                            {/* Mobile Search Icon */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-gray-400 hover:text-white"
                                onClick={() => setSearchOpen(true)}
                            >
                                <Search className="w-5 h-5" />
                            </Button>

                            {/* Mobile Hamburger Menu */}
                            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="md:hidden text-gray-400 hover:text-white"
                                    >
                                        {mobileOpen
                                            ? <X className="w-5 h-5" />
                                            : <Menu className="w-5 h-5" />
                                        }
                                    </Button>
                                </SheetTrigger>

                                <SheetContent
                                    side="right"
                                    className="w-[300px] bg-black/95 backdrop-blur-xl border-white/10 p-0 overflow-y-auto"

                                >
                                    <VisuallyHidden>
                                        <SheetTitle>Navigation Menu</SheetTitle>
                                        <SheetDescription>Mobile navigation links</SheetDescription>
                                    </VisuallyHidden>
                                    {/* Mobile Menu Header */}
                                    <div className="flex items-center gap-2 px-6 py-5 border-b border-white/5">
                                        <Image
                                            src="/logo-white.svg"
                                            alt="Cosmos Learn Logo"
                                            width={28}
                                            height={28}
                                        />
                                        <span className="font-bold text-lg">Cosmos Learn</span>
                                    </div>

                                    {/* Mobile Menu Links */}
                                    <div className="px-4 py-6 flex flex-col gap-1">

                                        {/* Home */}
                                        <Link
                                            href="/"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                        >
                                            Home
                                        </Link>

                                        {/* Explore Accordion */}
                                        <div>
                                            <button
                                                onClick={() => setExploreOpen(!exploreOpen)}
                                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                            >
                                                Explore
                                                <ChevronDown className={cn(
                                                    "w-4 h-4 transition-transform duration-200",
                                                    exploreOpen && "rotate-180"
                                                )} />
                                            </button>

                                            {exploreOpen && (
                                                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                                                    {domains.map((domain) => (
                                                        <Link
                                                            key={domain.title}
                                                            href={domain.href}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                                                        >
                                                            <span>{domain.icon}</span>
                                                            {domain.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Topics Accordion */}
                                        <div>
                                            <button
                                                onClick={() => setTopicsOpen(!topicsOpen)}
                                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                            >
                                                Topics
                                                <ChevronDown className={cn(
                                                    "w-4 h-4 transition-transform duration-200",
                                                    topicsOpen && "rotate-180"
                                                )} />
                                            </button>

                                            {topicsOpen && (
                                                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                                                    {topics.map((topic) => (
                                                        <Link
                                                            key={topic.title}
                                                            href={topic.href}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                                                        >
                                                            {topic.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Events */}
                                        <Link
                                            href="/events"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                        >
                                            Events
                                        </Link>

                                        {/* News */}
                                        <Link
                                            href="/news"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                        >
                                            News
                                        </Link>

                                        {/* About */}
                                        <Link
                                            href="/about"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                                        >
                                            About
                                        </Link>
                                    </div>

                                    {/* Mobile Menu Footer */}
                                    <div className="px-6 py-4 border-t border-white/5 mt-auto">
                                        <p className="text-xs text-gray-600 font-mono">
                                            © 2026 Cosmos Learn
                                        </p>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar