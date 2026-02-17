import ConceptCard from './ConceptCard'
import { concepts } from './featuredConcepts.data'

const FeaturedConcepts = () => {
    return (
        <section id="concepts" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        Popular Topics
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                        Featured Concepts
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the most fascinating phenomena in the universe
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {concepts.map((concept) => (
                        <ConceptCard key={concept.title} {...concept} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedConcepts