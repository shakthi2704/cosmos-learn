import StartCard from './StartCard'
import { beginnerTopics } from './startHere.data'

const StartHere = () => {
    return (
        <section id="start-here" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        For Beginners
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                        Start Here
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        New to space science? Follow this path to build your understanding of the cosmos step by step.
                    </p>
                </div>

                {/* Roadmap */}
                <div className="relative flex flex-col gap-0 max-w-3xl mx-auto">
                    {beginnerTopics.map((topic, index) => (
                        <StartCard
                            key={topic.number}
                            {...topic}
                            isLast={index === beginnerTopics.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StartHere
