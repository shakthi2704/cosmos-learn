import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react'
import { footerColumns, socialLinks } from './footer.data'

const iconMap: Record<string, React.ElementType> = {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
}

const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-16">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-xl font-bold flex items-center gap-2">
                            <Image
                                src="/logo-white.svg"
                                alt="Cosmos Learn Logo"
                                width={32}
                                height={32}
                                priority
                            />
                            Cosmos Learn
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Your gateway to understanding the universe and its infinite wonders. Explore space science made simple.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon]
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h4 className="text-sm font-semibold text-white mb-4">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Cosmos Learn. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
