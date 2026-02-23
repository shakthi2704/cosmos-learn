import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import CosmologyHero from './components/CosmologyHero'
import Overview from './components/Overview'
import KeyAreas from './components/KeyAreas'
import FeaturedTopics from './components/FeaturedTopics'
import LatestArticles from './components/LatestArticles'
import CTASection from './components/CTASection'
import { cosmologyContent } from './cosmology.data'
const CosmologyPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-16">
        <CosmologyHero {...cosmologyContent.hero} />
        <Overview {...cosmologyContent.overview} />
        <KeyAreas areas={cosmologyContent.keyAreas} />
        <FeaturedTopics topics={cosmologyContent.featuredTopics} />
        <LatestArticles articles={cosmologyContent.articles} />
        <CTASection {...cosmologyContent.cta} />
      </main>
      <Footer />
    </>
  )
}

export default CosmologyPage