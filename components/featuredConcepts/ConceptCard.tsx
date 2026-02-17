import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Concept } from './featuredConcepts.types'

const ConceptCard = ({ title, description, image, category, href }: Concept) => {
    return (
        <Link href={href} className="group relative overflow-hidden rounded-2xl cursor-pointer block h-[400px]">
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Badge */}
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono border border-white/20">
                        {category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover: transition-colors">
                    {title}
                </h3>

                {/* Description - shows on hover */}
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>

                {/* Learn More - shows on hover */}
                <div className="flex items-center gap-2 text-sm  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    )
}

export default ConceptCard