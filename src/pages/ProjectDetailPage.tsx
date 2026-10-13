import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECT_ITEMS } from '../data/projects.ts';
import { LiquidImagePlaceholder } from '../components/LiquidImagePlaceholder.tsx';
import { ArrowLeft, ArrowRight, ArrowUpLeft, Github, CheckCircle2, Code2 } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = PROJECT_ITEMS.findIndex((p) => p.slug === slug);
  const project = PROJECT_ITEMS[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center mx-auto text-[#159A91]">
            <Code2 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#F7F7F2]">Project Not Found</h1>
          <p className="text-sm text-[#F7F7F2]/60">
            The requested project case study could not be located in the current repository.
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="px-5 py-2.5 text-xs font-semibold text-[#F7F7F2] bg-[#087F5B] hover:bg-[#075B46] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? PROJECT_ITEMS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECT_ITEMS.length - 1 ? PROJECT_ITEMS[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/60 hover:text-[#E2B52C] transition-colors"
          >
            <ArrowUpLeft className="w-4 h-4" />
            <span>Back to Digital Projects</span>
          </Link>
        </div>

        {/* Hero Cover Frame */}
        <div className="mb-12">
          <div className="w-full max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-[#159A91]/30 via-white/[0.04] to-transparent shadow-2xl">
            <LiquidImagePlaceholder
              aspectRatio={project.aspectRatio}
              label={project.title}
              variant="project"
              imageSrc={project.coverSrc}
              alt={project.title}
              badge={project.category}
              priority={true}
            />
          </div>
        </div>

        {/* Project Header Info */}
        <div className="border-t border-white/[0.08] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs text-[#159A91] font-semibold uppercase tracking-wider">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F7F7F2] tracking-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#F7F7F2]/80 leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <div className="pt-6 space-y-4">
                <h2 className="text-lg font-bold text-[#F7F7F2]">
                  Key Architectural Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="p-4 rounded-xl glass-card flex items-start gap-3 text-xs text-[#F7F7F2]/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#36A852] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technical Specs Sidebar */}
          <div className="lg:col-span-4 glass-card p-6 rounded-2xl space-y-6 text-xs">
            <div>
              <h3 className="font-bold text-[#E2B52C] uppercase tracking-wider text-[11px] mb-3">
                Technologies & Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[#F7F7F2]/80 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <h3 className="font-bold text-[#159A91] uppercase tracking-wider text-[11px]">
                Repository & Deployment
              </h3>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-[#F7F7F2] transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Prev / Next Pagination */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/70 hover:text-[#E2B52C] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#F7F7F2]/70 hover:text-[#E2B52C] transition-colors text-right"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
