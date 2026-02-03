import { workExperience } from "@/lib/data";

export default function Timeline() {
    return (
        <section id="experience" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        <span className="gradient-text">Work Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-16 rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {workExperience.map((job, index) => (
                            <div
                                key={job.id}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                style={{
                                    animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                                }}
                            >
                                {/* Date Section */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg">
                                        {job.period}
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-zinc-900 border-4 border-purple-500 rounded-full z-10 shadow-lg">
                                    <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                                </div>

                                {/* Job Card */}
                                <div className="flex-1">
                                    <div className="group glass-effect rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-purple-500">
                                        <h3 className="text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 group-hover:text-purple-500 transition-colors">
                                            {job.title}
                                        </h3>
                                        <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                                            {job.company}
                                        </h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
