export default function CVDownload() {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1 shadow-2xl animate-slide-up">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 text-center">
                        <div className="mb-6">
                            <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-4 animate-pulse-slow">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">Download My CV</span>
                        </h2>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Get a comprehensive overview of my experience, skills, and achievements in a downloadable PDF format.
                        </p>

                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
