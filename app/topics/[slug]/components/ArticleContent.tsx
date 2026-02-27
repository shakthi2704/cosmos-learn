import { ArticleContent as ArticleContentType } from '../../topics.content'

interface ArticleContentProps {
    content: ArticleContentType
}

const ArticleContent = ({ content }: ArticleContentProps) => {
    return (
        <article className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <div className="text-xl leading-relaxed text-gray-300 mb-12 p-6 border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg">
                {content.introduction}
            </div>

            {/* Sections */}
            {content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        {section.title}
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        {section.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            ))}

            {/* Conclusion */}
            {content.conclusion && (
                <div className="mt-16 p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {content.conclusion}
                    </p>
                </div>
            )}
        </article>
    )
}

export default ArticleContent