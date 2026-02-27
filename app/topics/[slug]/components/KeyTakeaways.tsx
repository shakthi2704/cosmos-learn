import { Check } from 'lucide-react'

interface KeyTakeawaysProps {
    takeaways: string[]
}

const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
    return (
        <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">
                Key Takeaways
            </h3>
            <ul className="space-y-3">
                {takeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">
                            {takeaway}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default KeyTakeaways