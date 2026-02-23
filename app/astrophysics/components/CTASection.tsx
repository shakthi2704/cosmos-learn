import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'

interface CTASectionProps {
    title: string
    description: string
    primaryButton: {
        text: string
        href: string
    }
    secondaryButton: {
        text: string
        href: string
    }
}

const CTASection = ({ title, description, primaryButton, secondaryButton }: CTASectionProps) => {
    return (
        <section className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent border border-white/10 p-12 md:p-16 text-center">
                    {/* Background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <BookOpen className="w-8 h-8 text-blue-400" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={primaryButton.href}>
                                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                                    {primaryButton.text}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link href={secondaryButton.href}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 hover:bg-white/10"
                                >
                                    {secondaryButton.text}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection