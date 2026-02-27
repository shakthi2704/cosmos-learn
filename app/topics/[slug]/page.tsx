import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import ArticleHero from "./components/ArticleHero"
import ArticleContent from "./components/ArticleContent"
import KeyTakeaways from "./components/KeyTakeaways"
import RelatedTopics from "./components/RelatedTopics"
import { allTopics } from "../topics.data"
import { articleContent } from "../topics.content"
import { ExternalLink } from "lucide-react"

export async function generateStaticParams() {
  return allTopics.map((topic) => ({
    slug: topic.slug,
  }))
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const topic = allTopics.find((t) => t.slug === slug)

  if (!topic) {
    return {
      title: "Topic Not Found",
    }
  }

  return {
    title: `${topic.title} - Cosmos Learn`,
    description: topic.longDescription,
  }
}


export default async function TopicArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const topic = allTopics.find((t) => t.slug === slug)
  const content = articleContent[slug]

  if (!topic) {
    notFound()
  }


  if (!content) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white pt-16">
          <ArticleHero topic={topic} />

          <div className="py-24 text-center">
            <div className="max-w-2xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>

              <p className="text-gray-400 mb-8">
                We're currently writing this article. Check back soon for in-depth content about{" "}
                {topic.title}.
              </p>

              <Link
                href="/topics"
                className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Browse All Topics
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }


  const relatedTopics = allTopics
    .filter(
      (t) =>
        t.slug !== topic.slug &&
        t.domains.some((d) => topic.domains.includes(d))
    )
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-16">
        <ArticleHero topic={topic} />

        <div className="py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <div>
                <ArticleContent content={content} />
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                <KeyTakeaways takeaways={content.keyTakeaways} />

                <div className="sticky top-24 space-y-6">
                  {/* Article Info */}
                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">
                      Article Info
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Difficulty</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-mono ${
                            topic.difficulty === "Beginner"
                              ? "bg-green-500/10 text-green-400"
                              : topic.difficulty === "Intermediate"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {topic.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Read Time</span>
                        <span className="text-white">{topic.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Category</span>
                        <span className="text-white">{topic.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Further Reading */}
                  {content.furtherReading &&
                    content.furtherReading.length > 0 && (
                      <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                        <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">
                          Further Reading
                        </h3>

                        <ul className="space-y-3">
                          {content.furtherReading.map((link, index) => (
                            <li key={index}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group"
                              >
                                <span className="group-hover:underline">
                                  {link.title}
                                </span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Topics */}
        {relatedTopics.length > 0 && (
          <RelatedTopics topics={relatedTopics} />
        )}
      </main>
      <Footer />
    </>
  )
}