import DomainCard from './DomainCard'
import { domains } from './domains.data'

const Domains = () => {
    return (
        <section id="domains" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        Explore By Field
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                        Core Domains
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Dive deep into the three fundamental pillars of space science
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {domains.map((domain) => (
                        <DomainCard key={domain.title} {...domain} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Domains