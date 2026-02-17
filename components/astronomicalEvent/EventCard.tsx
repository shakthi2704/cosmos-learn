import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import { AstronomicalEvent } from './astronomicalEvent.types'

interface EventCardProps {
    event: AstronomicalEvent
    variant: 'featured' | 'small'
}

const EventCard = ({ event, variant }: EventCardProps) => {

    if (variant === 'featured') {
        return (
            <Link href={event.href} className="group block">
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                    {/* Image */}
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-10 flex items-center">
                        <div className="max-w-lg">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-mono mb-4 bg-white/10 text-gray-300 border-white/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Upcoming • {event.type}
                            </span>

                            {/* Date */}
                            <div className="flex items-baseline gap-3 mb-3">
                                <span className="text-7xl font-black leading-none text-white">
                                    {event.date.day}
                                </span>
                                <div>
                                    <div className="text-2xl font-bold text-white">{event.date.month}</div>
                                    <div className="text-gray-400 text-sm">{event.date.year}</div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {event.description}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                {event.time && (
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>{event.time}</span>
                                    </div>
                                )}
                                {event.visibility && (
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        <span>{event.visibility}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <Link href={event.href} className="group block">
            <div className="relative rounded-2xl overflow-hidden h-[280px]">
                {/* Image */}
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top: Badge */}
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono backdrop-blur-sm w-fit bg-white/10 text-gray-300 border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        {event.type}
                    </span>

                    {/* Bottom: Date + Title + Meta */}
                    <div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-black leading-none text-white">
                                {event.date.day}
                            </span>
                            <div>
                                <span className="text-white font-semibold text-sm">{event.date.month}</span>
                                <span className="text-gray-400 text-xs ml-1">{event.date.year}</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mb-3 group-hover:text-gray-300 transition-colors">
                            {event.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                            {event.time && (
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{event.time}</span>
                                </div>
                            )}
                            {event.visibility && (
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{event.visibility}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard