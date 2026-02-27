import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Topic } from '../../topics.data'

interface RelatedTopicsProps {
    topics: Topic[]
}

const RelatedTopics = ({ topics }: RelatedTopicsProps) => {
    if (topics.length === 0) return null

    return (
        <section className="py-24 bg-white/[0.02] border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl font-bold mb-12">Related Topics</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {topics.map((topic) => (
                        <Link
                            key={topic.slug}
                            href={`/topics/${topic.slug}`}
                            className="group block rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={topic.image}
                                    alt={topic.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                
                                {/* Category */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20">
                                        {topic.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {topic.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Read More</span>
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

export default RelatedTopics
