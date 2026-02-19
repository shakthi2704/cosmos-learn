import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AstronomyHero from './components/AstronomyHero'
import Overview from './components/Overview'
import KeyAreas from './components/KeyAreas'
import FeaturedTopics from './components/FeaturedTopics'
import LatestArticles from './components/LatestArticles'
import CTASection from './components/CTASection'
import { astronomyContent } from './astronomy.data'

export const metadata = {
    title: 'Astronomy - Cosmos Learn',
    description: 'Explore the universe through astronomy. Learn about stars, planets, galaxies, and cosmic phenomena.',
}

export default function AstronomyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black text-white pt-16">
                <AstronomyHero {...astronomyContent.hero} />
                <Overview {...astronomyContent.overview} />
                <KeyAreas areas={astronomyContent.keyAreas} />
                <FeaturedTopics topics={astronomyContent.featuredTopics} />
                <LatestArticles articles={astronomyContent.articles} />
                <CTASection {...astronomyContent.cta} />
            </main>
            <Footer />
        </>
    )
}