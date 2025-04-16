"use client";
import { useState } from "react";
import { DockNav } from "@/components/DockNav";
import { ShootingStars } from "@/components/ui/shooting-stars";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project, projects, personal_projects } from "@/lib/projects-data";
import { X } from "lucide-react";

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-4xl p-0 overflow-hidden sm:rounded-lg">
        {/* Header Section with Close Button */}
        <div className="relative">
          <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b sticky top-0 bg-background z-10">
            <DialogTitle className="text-xl sm:text-2xl pr-8">{project.name}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">{project.category}</DialogDescription>
          </DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 sm:right-4 top-2 sm:top-4 z-20 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 sm:space-y-6 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto scrollbar-hidden">
          {/* Video Container */}
          <div className="mt-2 sm:mt-4 aspect-video w-full bg-black rounded-lg overflow-hidden">
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
              src={project.media}
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Project Overview</h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">
                {project.content.overview}
              </p>
            </div>
            
            {project.content.features?.length > 0 && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Key Features</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-1 sm:mt-2 text-sm sm:text-base">
                  {project.content.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tools?.length > 0 && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Tools Used</h3>
                <div className="flex flex-wrap gap-2 mt-1 sm:mt-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs sm:text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with Action Button */}
        {project.link && (
          <div className="sticky bottom-0 bg-background border-t px-4 sm:px-6 py-3 sm:py-4">
            <Button
              variant="outline"
              className="rounded-full w-full text-sm sm:text-base"
              onClick={() => window.open(project.link, "_blank")}
            >
              Play
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen w-full pb-20 sm:pb-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Background elements with pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </div>

      {/* Content with normal pointer events */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-3 sm:mb-4">Projects</h1>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Unleash Your Inner Vision
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative group overflow-hidden rounded-lg sm:rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${project.content.className}`}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                  <Button variant="link" className="w-fit p-0 mt-1 sm:mt-2 text-white hover:text-primary text-sm sm:text-base">
                    View project →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>

        {/* Personal Projects Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-3 sm:mb-4">Personal Projects</h1>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            My creative explorations and experiments
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
            {personal_projects.map((project) => (
              <div
                key={project.id}
                className={`relative group overflow-hidden rounded-lg sm:rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${project.content.className}`}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                  <Button variant="link" className="w-fit p-0 mt-1 sm:mt-2 text-white hover:text-primary text-sm sm:text-base">
                    View project →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
        <DockNav />
      </div>

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(1px 1px at 10px 15px, #eee, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 20px 35px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 25px 80px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 45px 20px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 65px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 80px 60px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 100px 100px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }

        @media (min-width: 640px) {
          .stars {
            background-size: 200px 200px;
          }
        }
      `}</style>
    </div>
  );
}