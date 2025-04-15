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


function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.category}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 aspect-video w-full bg-black rounded-lg overflow-hidden">
          <video
            controls
            autoPlay
            className="w-full h-full object-contain"
            src={project.media}
          />
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Project Overview</h3>
            <p className="text-muted-foreground">{project.content.overview}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Key Features</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              {project.content.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Tools Used</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4 rounded-4xl"
            onClick={() => window.open(project.link, "_blank")}
          >
            Play
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  

  return (
    <div className="min-h-screen w-full pb-32 bg-white dark:bg-black relative overflow-hidden">
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
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Projects</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Unleash Your Inner Vision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${project.content.className}`}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button variant="link" className="w-fit p-0 mt-2 text-white hover:text-primary">
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


        {/* personal Projects */}
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Personal Project</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {personal_projects.map((project) => (
              <div
                key={project.id}
                className={`relative group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${project.content.className}`}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button variant="link" className="w-fit p-0 mt-2 text-white hover:text-primary">
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
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}