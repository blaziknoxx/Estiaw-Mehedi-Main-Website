import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../data/projects.ts';
import { LiquidImagePlaceholder } from './LiquidImagePlaceholder.tsx';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  return (
    <div className="group relative rounded-2xl glass-card overflow-hidden transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Media Frame */}
        <Link
          to={`/projects/${project.slug}`}
          className="block p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B52C] rounded-xl"
          tabIndex={-1}
        >
          <LiquidImagePlaceholder
            aspectRatio={project.aspectRatio}
            label={project.title}
            variant="project"
            imageSrc={project.coverSrc}
            alt={project.title}
            badge="Digital Build"
            priority={priority}
          />
        </Link>

        {/* Content Details */}
        <div className="p-6 pt-3">
          <div className="flex items-center justify-between text-xs text-[#159A91] font-medium tracking-wide mb-2">
            <span>{project.category}</span>
            <span className="font-mono text-[#F7F7F2]/40 text-[11px]">{project.year}</span>
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="group/title inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E2B52C]"
          >
            <h3 className="text-xl font-bold text-[#F7F7F2] tracking-tight group-hover/title:text-[#E2B52C] transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7F7F2]/40 group-hover/title:text-[#E2B52C] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-[#F7F7F2]/65 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack as clean unboxed inline text */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#F7F7F2]/45 mt-4 pt-3 border-t border-white/[0.06]">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-[#F7F7F2]/70 font-mono text-[11px]">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-[#F7F7F2]/20" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-xs font-semibold text-[#E2B52C] hover:underline"
          >
            View Project Details →
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="flex items-center gap-1.5 text-xs text-[#F7F7F2]/60 hover:text-[#F7F7F2] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
