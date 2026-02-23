import Image from 'next/image'

interface CosmologyHeroProps {
    title: string
    subtitle: string
    description: string
    image: string
}


const CosmologyHero = ({ title, subtitle, description, image }: CosmologyHeroProps) => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            </div>


            <div className="relative z-10 text-center px-6 py-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">
                        {title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        {subtitle}
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </div>


            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    )
}

export default CosmologyHero