import Hero from '@/components/main';
import { projects } from "@/constants";
import Image from 'next/image';
import { skills } from "@/constants";
import { ACHIEVEMENTS } from '@/constants';

export default function home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />

      {/* ABOUT ME & ACHIEVEMENTS SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 border-t border-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* 1. YOUR PHOTO BOX */}
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full max-w-[300px] mx-auto overflow-hidden rounded-2xl border-2 border-gray-800 p-2 bg-gray-900/50">
              <Image 
                src="/portfolio/me.jpg" // Change this to your actual filename in public folder
                alt="Priyanka Agarwal"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* 2. ABOUT TEXT & ACHIEVEMENTS (Takes up more space) */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a 2nd-year <span className="text-white font-medium">B.Tech Computer Science</span> student at 
              <span className="text-white font-medium"> IIIT Hyderabad</span>. 
              I am passionate about solving complex problems through code, whether it's building 
              scalable web applications or diving deep into quantitative research and statistical modeling.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-white">Academic Achievements</h3>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.title} className="flex flex-col border-l-2 border-teal-500 pl-4">
                    <span className="text-white font-medium">{ach.title}</span>
                    <span className="text-gray-400 text-sm">{ach.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. SKILLS (Moved inside the right column for better flow) */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 text-white">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-1.5 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-teal-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div> 

        </div> 
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/20">

              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-900 px-2 py-1 rounded text-teal-400 border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition">
                    View on GitHub 
                    <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}