import { education } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="glass-effect rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-cyan-500"
                            style={{
                                animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                            }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                                        {edu.period}
                                    </p>
                                    {edu.description && (
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
