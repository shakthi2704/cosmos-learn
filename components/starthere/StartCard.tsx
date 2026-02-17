import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BeginnerTopic } from './startHere.types'

const colorMap: Record<string, {
    iconBg: string
    iconColor: string
    numberColor: string
    badge: string
    line: string
}> = {
    blue: { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", numberColor: "text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", line: "bg-blue-500/30" },
    yellow: { iconBg: "bg-yellow-500/10", iconColor: "text-yellow-400", numberColor: "text-yellow-400", badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", line: "bg-yellow-500/30" },
    purple: { iconBg: "bg-purple-500/10", iconColor: "text-purple-400", numberColor: "text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", line: "bg-purple-500/30" },
    cyan: { iconBg: "bg-cyan-500/10", iconColor: "text-cyan-400", numberColor: "text-cyan-400", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", line: "bg-cyan-500/30" },
    orange: { iconBg: "bg-orange-500/10", iconColor: "text-orange-400", numberColor: "text-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", line: "bg-orange-500/30" },
}

interface StartCardProps extends BeginnerTopic {
    isLast: boolean
}

const StartCard = ({ number, icon: Icon, title, description, color, href, duration, isLast }: StartCardProps) => {
    const colors = colorMap[color]

    return (
        <div className="relative flex gap-6 group">
            {/* Left: Number Circle + Connecting Line */}
            <div className="flex flex-col items-center">
                {/* Circle */}
                <div className={`w-12 h-12 rounded-full ${colors.iconBg} border border-white/10 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-sm font-bold ${colors.numberColor}`}>
                        {number}
                    </span>
                </div>

                {/* Connecting Line */}
                {!isLast && (
                    <div className={`w-[2px] flex-1 ${colors.line} my-2 min-h-[40px]`} />
                )}
            </div>

            {/* Right: Content Card */}
            <Link href={href} className="flex-1 mb-6 block">
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-lg font-bold group-hover:text-white transition-colors">
                                {title}
                            </h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${colors.badge} font-mono`}>
                                {duration}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-5 h-5 ${colors.iconColor} shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                </div>
            </Link>
        </div>
    )
}

export default StartCard