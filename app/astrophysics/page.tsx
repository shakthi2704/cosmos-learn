import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import AstrophysicsHero from "./components/AstrophysicsHero"
import Overview from "./components/Overview"
import KeyAreas from './components/KeyAreas'
import FeaturedTopics from './components/FeaturedTopics'
import LatestArticles from './components/LatestArticles'
import CTASection from './components/CTASection'
import { astrophysicsContent } from "./astrophysics.data"


export const metadata = {
  title: 'Astrophysics - Cosmos Learn',
  description: 'Explore the physics of the universe. Learn about black holes, dark matter, stellar evolution, and cosmic phenomena.',
}

const PstrophysicsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-16">
        <AstrophysicsHero {...astrophysicsContent.hero} />
        <Overview {...astrophysicsContent.overview} />
        <KeyAreas areas={astrophysicsContent.keyAreas} />
        <FeaturedTopics topics={astrophysicsContent.featuredTopics} />
        <LatestArticles articles={astrophysicsContent.articles} />
        <CTASection {...astrophysicsContent.cta} />
      </main>
      <Footer />
    </>
  )
}

export default PstrophysicsPage
