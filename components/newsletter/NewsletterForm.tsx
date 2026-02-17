'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const NewsletterForm = () => {
    const [email, setEmail] = useState<string>('')
    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email) setSubmitted(true)
    }

    return (
        <section id="newsletter" className="py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600/20 via-blue-600/20 to-transparent border border-white/10 p-12 text-center">
                    {/* Background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10">
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                            Stay Updated
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                            Never Miss a Cosmic Moment
                        </h2>
                        <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
                            Get weekly space news, upcoming events, and fascinating discoveries delivered straight to your inbox.
                        </p>

                        {submitted ? (
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-sm">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                You&apos;re on the list! Welcome aboard 🚀
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            >
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                                />
                                <Button
                                    type="submit"
                                    className="bg-white text-black hover:bg-white/90 shrink-0"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Subscribe
                                </Button>
                            </form>
                        )}

                        <p className="text-xs text-gray-600 mt-4">
                            No spam, unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterForm