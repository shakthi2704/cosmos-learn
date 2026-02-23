import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FeaturedTopic {
    title: string
    description: string
    image: string
    href: string
    category: string
}

interface FeaturedTopicsProps {
    topics: FeaturedTopic[]
}

const FeaturedTopics = ({ topics }: FeaturedTopicsProps) => {
    return (
        <section className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        Learn More
                    </span>
                    <h2 className="text-5xl font-bold mt-4 mb-6">
                        Featured Topics
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Dive deep into fascinating astronomical subjects
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {topics.map((topic, index) => (
                        <Link
                            key={index}
                            href={topic.href}
                            className="group block relative overflow-hidden rounded-2xl h-[400px]"
                        >
                            {/* Image */}
                            <Image
                                src={topic.image}
                                alt={topic.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20 w-fit mb-3">
                                    {topic.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {topic.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedTopics