import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Domain } from './domains.types'

const colorMap: Record<string, {
    border: string
    iconBg: string
    iconColor: string
    glow: string
    arrow: string
}> = {
    blue: {
        border: "hover:border-blue-500/50",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        glow: "from-blue-500 to-cyan-500",
        arrow: "text-blue-400"
    },
    purple: {
        border: "hover:border-purple-500/50",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        glow: "from-purple-500 to-pink-500",
        arrow: "text-purple-400"
    },
    violet: {
        border: "hover:border-violet-500/50",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
        glow: "from-violet-500 to-indigo-500",
        arrow: "text-violet-400"
    },
}

const DomainCard = ({ title, href, description, icon: Icon, color }: Domain) => {
    const colors = colorMap[color]

    return (
        <Link href={href} className="group relative block">
            {/* Glow */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.glow} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`} />

            {/* Card */}
            <div className={`relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 ${colors.border} rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-xl ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 ${colors.iconBg} rounded-full animate-pulse`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

                {/* Link */}
                <div className={`flex items-center gap-2 mt-auto text-sm ${colors.arrow} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span>Explore {title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    )
}

export default DomainCard