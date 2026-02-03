import { personalInfo, skills } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Personal Info Card */}
                    <div className="glass-effect rounded-2xl p-8 shadow-xl animate-slide-in-left">
                        <h3 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                            Personal Information
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-zinc-800 dark:text-zinc-200 hover:text-purple-500 transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Location</p>
                                    <p className="text-zinc-800 dark:text-zinc-200">{personalInfo.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Status</p>
                                    <p className="text-zinc-800 dark:text-zinc-200">{personalInfo.availability}</p>
                                </div>
                            </div>

                            {personalInfo.website && (
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <div>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Website</p>
                                        <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:text-purple-500 transition-colors">
                                            {personalInfo.website.replace('https://', '')}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {personalInfo.linkedin && (
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <div>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                                        <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 transition-colors">
                                            {personalInfo.linkedin}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Skills Card */}
                    <div className="glass-effect rounded-2xl p-8 shadow-xl animate-slide-in-right">
                        <h3 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                            Core Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
