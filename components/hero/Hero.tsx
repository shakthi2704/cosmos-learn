'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

const STAR_COUNT = 20

const Hero = () => {
    return (
        <section className="relative min-h-screen pb-20 overflow-hidden flex items-center justify-center">

            {/* ⭐ Animated Stars */}
            <div className="stars absolute inset-0 pointer-events-none z-[1]">
                {Array.from({ length: STAR_COUNT }).map((_, i) => (
                    <div
                        key={i}
                        className="star absolute w-[2px] h-[2px] bg-white rounded-full"
                    />
                ))}
            </div>

            {/* 🌌 Right Galaxy */}
            <div className="galaxy absolute top-[75%] right-[-200px] w-[600px] h-[600px] -translate-y-1/2 opacity-15 pointer-events-none z-[1]">
                <div className="galaxy-core absolute top-1/2 left-1/2 w-[100px] h-[100px] -mt-[50px] -ml-[50px] rounded-full blur-[20px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
            </div>

            {/* 🌌 Left Galaxy */}
            <div className="galaxy absolute top-[25%] left-[-200px] w-[600px] h-[600px] -translate-y-1/2 opacity-15 pointer-events-none z-[1]">
                <div className="galaxy-core absolute top-1/2 left-1/2 w-[100px] h-[100px] -mt-[50px] -ml-[50px] rounded-full blur-[20px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
                <div className="galaxy-arm absolute top-1/2 left-1/2 w-[400px] h-[150px] -mt-[75px] -ml-[200px] rounded-full blur-[15px]" />
            </div>

            {/* 🪐 Floating Saturn - positioned carefully to not overlap content */}
            <div className="absolute top-[20%] right-[8%] w-[80px] h-[80px] pointer-events-none z-[2] animate-float">
                <div className="planet-saturn w-full h-full rounded-full" />
                <div className="planet-ring" />
            </div>

            {/* 🌍 Glowing Planet - positioned carefully to not overlap content */}
            <div className="absolute top-[20%] left-[8%] w-[60px] h-[60px] pointer-events-none z-[2] animate-float">
                <div className="planet-glow w-full h-full rounded-full" />
            </div>

            {/* 🔥 Hero Content - centered */}
            <div className="relative z-10 w-full text-center px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">

                    {/* Badge */}
                    <div className="inline-block mb-6 animate-fade-in">
                        <Link href="/discoveries/james-webb">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                                Latest: James Webb Telescope Discoveries
                            </span>
                        </Link>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-100 leading-tight">
                        Explore the wonders of
                        <br />
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            the universe
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
                        Discover the mysteries of space, from distant galaxies to our own
                        solar system. Join millions of space enthusiasts in exploring the
                        cosmos.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
                        <Link href="/explore">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90">
                                Start Exploring
                            </Button>
                        </Link>

                        <Link href="/discoveries">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 hover:bg-white/10"
                            >
                                View Discoveries
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero