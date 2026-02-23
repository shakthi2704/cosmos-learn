import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

interface Article {
    title: string
    description: string
    image: string
    date: string
    category: string
    href: string
}

interface LatestArticlesProps {
    articles: Article[]
}

const LatestArticles = ({ articles }: LatestArticlesProps) => {
    return (
        <section className="py-24 bg-white/[0.02]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                            Stay Updated
                        </span>
                        <h2 className="text-4xl font-bold mt-4">
                            Latest in Astronomy
                        </h2>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.href}
                            className="group block rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-mono">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {article.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LatestArticles