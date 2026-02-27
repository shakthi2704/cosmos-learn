import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'
import { Topic } from '../topics.data'

interface TopicsGridProps {
    topics: Topic[]
}

const difficultyColors: Record<string, string> = {
    Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
}

const TopicsGrid = ({ topics }: TopicsGridProps) => {
    if (topics.length === 0) {
        return (
            <div className="py-24 text-center">
                <div className="max-w-md mx-auto">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                    <h3 className="text-2xl font-bold mb-2">No topics found</h3>
                    <p className="text-gray-400">Try adjusting your filters or search query</p>
                </div>
            </div>
        )
    }

    return (
        <section className="py-12">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic) => (
                        <Link
                            key={topic.slug}
                            href={`/topics/${topic.slug}`}
                            className="group block rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 overflow-hidden"
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
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20">
                                        {topic.category}
                                    </span>
                                </div>

                                {/* Difficulty Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`inline-block px-2.5 py-1 backdrop-blur-sm rounded-full text-xs font-mono border ${difficultyColors[topic.difficulty]}`}>
                                        {topic.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {topic.longDescription}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{topic.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Read More</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopicsGrid