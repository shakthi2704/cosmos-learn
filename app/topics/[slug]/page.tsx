import Link from "next/link"
import { Button } from "@/components/ui/button"

const topics = [
    { label: "The Universe", slug: "universe" },
    { label: "Solar System", slug: "solar-system" },
    { label: "Life Cycle of Stars", slug: "life-cycle-of-stars" },
    { label: "Expansion of the Universe", slug: "expansion-of-the-universe" },
]

export function StartHereSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-6">Start Here</h2>

            <div className="flex flex-wrap justify-center gap-4">
                {topics.map((topic) => (
                    <Button key={topic.slug} asChild variant="secondary" size="sm">
                        <Link href={`/topics/${topic.slug}`}>
                            {topic.label}
                        </Link>
                    </Button>
                ))}
            </div>
        </section>
    )
}
