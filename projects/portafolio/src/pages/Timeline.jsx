import { workExperience } from '../data/workData';
import { education } from '../data/educationData';
import {
    Briefcase,
    GraduationCap,
    Calendar,
    ArrowRight,
    Trophy,
    BookOpen
} from 'lucide-react';

export default function Timeline() {
    return (
        <section id="experience" className="py-32 px-6 relative border-t border-[var(--primary-background)]">


            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase mb-4">
                        Life_Cycle_History
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Divider Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent -translate-x-1/2 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative">
                        {/* Column 1: Experience */}
                        <div className="space-y-16">
                            <div className="flex items-center gap-4 mb-4 md:justify-end">
                                <h3 className="text-2xl font-bold tracking-widest text-primary uppercase">
                                    Experience
                                </h3>
                                <div className="bg-[var(--primary-background)] p-2 rounded-lg text-primary border border-[var(--primary-background)]">
                                    <Briefcase size={30} />
                                </div>
                            </div>

                            {/* Experience Items */}
                            <div className="space-y-8">
                                {workExperience.map((job) => (
                                    <div key={job.id} className="relative md:text-right md:pr-16 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute right-0 top-1 w-3 h-3 rounded-full bg-black border-2 border-primary translate-x-[7px] hidden md:block z-10 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_var(--primary)]"></div>

                                        {/* Content Card */}
                                        <div className="p-8 transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

                                            <div className="relative z-10">
                                                <div className="text-primary font-bold text-xs mb-3 tracking-[0.2em] uppercase flex items-center gap-2 md:justify-end">
                                                    <Calendar size={12} />
                                                    {job.period}
                                                </div>
                                                <h4 className="text-xl font-black group-hover:text-primary transition-colors text-white mb-1">
                                                    {job.position}
                                                </h4>
                                                <p className="text-slate-500 text-xs mb-6 font-bold uppercase tracking-wider">
                                                    {job.company}
                                                </p>
                                                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                                                    {job.description}
                                                </p>
                                                <ul className="space-y-2">
                                                    {job.achievements.map((achievement, idx) => (
                                                        <li key={idx} className="text-slate-500 text-xs flex items-start gap-3 md:justify-end">
                                                            <Trophy size={10} className="text-primary mt-0.5 md:order-2 shrink-0" />
                                                            <span className="md:order-1 italic">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Education */}
                        <div className="space-y-16">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[var(--primary-background)] p-2 rounded-lg text-primary border border-[var(--primary-background)]">
                                    <GraduationCap size={30} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-widest text-primary uppercase">
                                    Education
                                </h3>
                            </div>

                            {/* Education Items */}
                            <div className="space-y-8">
                                {education.map((edu) => (
                                    <div key={edu.id} className="relative pl-0 md:pl-16 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-black border-2 border-primary -translate-x-[5px] hidden md:block z-10 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_var(--primary)]"></div>

                                        {/* Content Card */}
                                        <div className="p-8 transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-br-full -ml-10 -mt-10 transition-transform group-hover:scale-150"></div>

                                            <div className="relative z-10">
                                                <div className="text-primary font-bold text-xs mb-3 tracking-[0.2em] uppercase flex items-center gap-2">
                                                    <Calendar size={12} />
                                                    {edu.period}
                                                </div>
                                                <h4 className="text-xl font-black group-hover:text-primary transition-colors text-white mb-1">
                                                    {edu.degree}
                                                </h4>
                                                <p className="text-slate-500 text-xs mb-6 font-bold uppercase tracking-wider">
                                                    {edu.institution}
                                                </p>
                                                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                                                    {edu.description}
                                                </p>
                                                <ul className="space-y-2">
                                                    {edu.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="text-slate-500 text-xs flex items-start gap-3">
                                                            <BookOpen size={10} className="text-primary mt-0.5 shrink-0" />
                                                            <span className="italic">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
