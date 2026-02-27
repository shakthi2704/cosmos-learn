"use client"
import { useState, useMemo } from "react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import TopicsHero from "./components/TopicsHero"
import { allTopics, categories, domains, difficulties } from "./topics.data"
import TopicsFilters from "./components/TopicsFilters"
import TopicsGrid from "./components/TopicsGrid"

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All Topics")
  const [selectedDomain, setSelectedDomain] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<string>("All Levels")

  const filteredTopics = useMemo(() => {
    return allTopics.filter((topic) => {
      // Search filter
      const matchesSearch =
        !searchQuery ||
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.longDescription.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory =
        selectedCategory === "All Topics" || topic.category === selectedCategory

      // Domain filter
      const matchesDomain =
        selectedDomain === "all" || topic.domains.includes(selectedDomain)

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "All Levels" ||
        topic.difficulty === selectedDifficulty

      return (
        matchesSearch && matchesCategory && matchesDomain && matchesDifficulty
      )
    })
  }, [searchQuery, selectedCategory, selectedDomain, selectedDifficulty])

  return (
    <>
            <Navbar />
            <main className="min-h-screen bg-black text-white pt-16">
                <TopicsHero />
                <TopicsFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedDomain={selectedDomain}
                    setSelectedDomain={setSelectedDomain}
                    selectedDifficulty={selectedDifficulty}
                    setSelectedDifficulty={setSelectedDifficulty}
                    categories={categories}
                    domains={domains}
                    difficulties={difficulties}
                    totalResults={filteredTopics.length}
                />
       <TopicsGrid topics={filteredTopics} />
            </main>
            <Footer />
        </>
  )
}
