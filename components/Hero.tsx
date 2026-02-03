import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl w-full">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Profile Image */}
                    <div className="animate-slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                                <Image
                                    src="/profile.png"
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="flex-1 text-center md:text-left animate-slide-in-right">
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                {personalInfo.availability}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            <span className="gradient-text">{personalInfo.name}</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-700 dark:text-zinc-300">
                            {personalInfo.title}
                        </h2>

                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                            {personalInfo.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Get In Touch
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#projects"
                                className="px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
