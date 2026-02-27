'use client'

import { Search } from 'lucide-react'

interface TopicsFiltersProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    selectedDomain: string
    setSelectedDomain: (domain: string) => void
    selectedDifficulty: string
    setSelectedDifficulty: (difficulty: string) => void
    categories: string[]
    domains: { label: string; value: string }[]
    difficulties: string[]
    totalResults: number
}

const TopicsFilters = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedDomain,
    setSelectedDomain,
    selectedDifficulty,
    setSelectedDifficulty,
    categories,
    domains,
    difficulties,
    totalResults,
}: TopicsFiltersProps) => {
    return (
        <div className="py-8 border-b border-white/5 sticky top-16 bg-black/80 backdrop-blur-xl z-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 transition-colors"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center">
                    {/* Category Filter */}
                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category} className="bg-black">
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Domain Filter */}
                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedDomain}
                            onChange={(e) => setSelectedDomain(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
                        >
                            {domains.map((domain) => (
                                <option key={domain.value} value={domain.value} className="bg-black">
                                    {domain.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Difficulty Filter */}
                    <div className="flex-1 min-w-[200px]">
                        <select
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
                        >
                            {difficulties.map((difficulty) => (
                                <option key={difficulty} value={difficulty} className="bg-black">
                                    {difficulty}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="text-sm text-gray-500 font-mono">
                        {totalResults} {totalResults === 1 ? 'topic' : 'topics'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicsFilters