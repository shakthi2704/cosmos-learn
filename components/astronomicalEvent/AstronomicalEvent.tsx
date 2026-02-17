import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import EventCard from './EventCard'
import { events } from './astronomicalEvent.data'

const AstronomicalEvents = () => {
    return (
        <section id="events" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        What&apos;s Coming
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                        Astronomical Events
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Don&apos;t miss these spectacular celestial events happening throughout the year
                    </p>
                </div>

                {/* Featured First Event */}
                <div className="mb-6">
                    <EventCard event={events[0]} variant="featured" />
                </div>

                {/* Remaining Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {events.slice(1).map((event) => (
                        <EventCard key={event.href} event={event} variant="small" />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                        <Calendar className="w-4 h-4" />
                        View All Events
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AstronomicalEvents