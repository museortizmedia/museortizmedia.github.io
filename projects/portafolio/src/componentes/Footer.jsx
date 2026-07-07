
function Footer() {

    return (
        <footer id="contact" className="mt-20 mb-12 px-6 border-t border-[var(--primary-background)]">

            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-bold tracking-widest mt-12">
                <div className="flex gap-8">
                    <a className="hover:text-primary transition-colors uppercase" href="https://www.linkedin.com/in/museortizmedia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="hover:text-primary transition-colors uppercase" href="https://github.com/museortizmedia" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="hover:text-primary transition-colors uppercase" href="https://museortizmedia.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>
                    <a className="hover:text-primary transition-colors uppercase" href="https://museortizmedia.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>
                    <a className="hover:text-primary transition-colors uppercase" href="mailto:museortiz@gmail.com">Email</a>
                </div>
                <div className="uppercase">
                    © {new Date().getFullYear()} MUSE ORTIZ MEDIA // ALL RIGHTS RESERVED
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    BUILD_VERSION_1.0.0
                </div>
            </div>
        </footer>
    )
}

export default Footer