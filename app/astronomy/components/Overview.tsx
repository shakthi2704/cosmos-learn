import Image from 'next/image'
import { Check } from 'lucide-react'

interface OverviewProps {
    title: string
    content: string
    highlights: string[]
    image: string
}

const Overview = ({ title, content, highlights, image }: OverviewProps) => {
    return (
        <section className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                            Overview
                        </span>
                        <h2 className="text-4xl font-bold mt-4 mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            {content}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview