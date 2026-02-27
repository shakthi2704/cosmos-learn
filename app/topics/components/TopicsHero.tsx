const TopicsHero = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-blue-950/20 to-black">
        
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

 
            <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                    Explore
                </span>
                <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6">
                    All Topics
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Dive deep into the fascinating subjects that make up the study of space and the universe
                </p>
            </div>
        </section>
    )
}

export default TopicsHero