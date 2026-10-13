import React from 'react';
import { PROJECT_ITEMS } from '../data/projects.ts';
import { ProjectCard } from '../components/ProjectCard.tsx';
import { Code2, Github } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#159A91] uppercase tracking-widest">
            <Code2 className="w-4 h-4 text-[#36A852]" />
            <span>Digital Systems & Creative Code</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F7F2]">
            Digital Projects
          </h1>
          <p className="text-base sm:text-lg text-[#F7F7F2]/70 leading-relaxed">
            Explorations in interactive audio synthesis, editorial typography systems, and web utilities crafted with high visual fidelity and lightweight code architectures.
          </p>

          <div className="pt-2">
            <a
              href="https://github.com/blaziknoxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-card text-[#F7F7F2]/80 hover:text-[#E2B52C] hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository (@blaziknoxx)</span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_ITEMS.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 2} />
          ))}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-20 p-8 rounded-2xl glass-card border-l-2 border-[#36A852] max-w-3xl">
          <h3 className="text-base font-bold text-[#F7F7F2] mb-2">
            Architecture & Engineering Principles
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F7F2]/70 leading-relaxed">
            Every digital build is engineered for high frame-rate performance, zero unnecessary dependencies, accessibility standards (WCAG AA), and tactile responsive interactions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
