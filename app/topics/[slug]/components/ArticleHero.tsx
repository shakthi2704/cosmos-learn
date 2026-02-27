import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, BarChart3 } from 'lucide-react'
import { Topic } from '../../topics.data'

interface ArticleHeroProps {
    topic: Topic
}

const ArticleHero = ({ topic }: ArticleHeroProps) => {
    const difficultyColors: Record<string, string> = {
        Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
        Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
    }

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Back Button */}
                <Link
                    href="/topics"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Topics
                </Link>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20">
                        {topic.category}
                    </span>
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-mono border ${difficultyColors[topic.difficulty]}`}>
                        {topic.difficulty}
                    </span>
                    {topic.domains.map(domain => (
                        <span
                            key={domain}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs font-mono border border-white/10 capitalize"
                        >
                            {domain}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
                    {topic.title}
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                    {topic.longDescription}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{topic.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        <span>{topic.difficulty} Level</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleHero