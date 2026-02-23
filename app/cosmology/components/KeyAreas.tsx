import Link from 'next/link'

interface KeyArea {
    title: string
    description: string
    icon: string
    color: string
}

interface KeyAreasProps {
    areas: KeyArea[]
}

const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/20 hover:border-blue-500/40",
    orange: "from-orange-500/20 to-red-500/20 border-orange-500/20 hover:border-orange-500/40",
    yellow: "from-yellow-500/20 to-orange-500/20 border-yellow-500/20 hover:border-yellow-500/40",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/20 hover:border-purple-500/40",
    cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/20 hover:border-cyan-500/40",
    green: "from-green-500/20 to-emerald-500/20 border-green-500/20 hover:border-green-500/40",
}

const KeyAreas = ({ areas }: KeyAreasProps) => {
    return (
        <section className="py-24 bg-white/[0.02]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        Explore
                    </span>
                    <h2 className="text-5xl font-bold mt-4 mb-6">
                        Key Areas of Astronomy
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover the diverse fields and specializations within astronomy
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br ${colorMap[area.color]} border rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer`}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {area.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyAreas