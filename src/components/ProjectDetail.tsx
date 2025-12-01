"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  ChevronLeft, 
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}

export function ProjectDetail({
  project,
  nextProject,
  prevProject,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          asChild
          className="group"
          aria-label="Back to home"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Solutions
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-3 space-y-8">
            {/* Title and Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 glass rounded-full border border-primary/20">
                <span className="text-primary font-semibold">Case Study</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">{project.title}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button asChild size="lg">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild size="lg" variant="secondary" className="glass">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="glass-strong rounded-xl p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-primary">The Challenge</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Solution Overview */}
            {project.solution && (
              <div className="glass-strong rounded-xl p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-primary">The Solution</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Full Description */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Implementation Details</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Column - Tech Stack and Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tech Stack */}
            <Card className="glass-strong border border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default" className="text-sm py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="glass-strong">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Skills Applied</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {project.results && (
              <Card className="glass-strong border border-primary/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Results Achieved</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {project.results}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Media Section - Video and Images Carousel */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Project Walkthrough</span>
          </h2>
          
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {/* Video First if available */}
              {project.videoUrl && (
                <CarouselItem>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl glass-strong">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${project.title} demonstration video`}
                    />
                  </div>
                </CarouselItem>
              )}
              
              {/* Then Images */}
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl glass-strong">
                    {project.usePlaceholder ? (
                      <ProjectPlaceholder 
                        title={`Screenshot ${index + 1}`} 
                        className="h-full w-full"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <span className="text-muted-foreground">Add project screenshot</span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 glass" aria-label="Previous slide" />
            <CarouselNext className="right-4 glass" aria-label="Next slide" />
          </Carousel>
        </div>

        {/* Issues and Solutions Section */}
        {(project.issuesFaced || project.solutionsApplied) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Issues Faced */}
            {project.issuesFaced && project.issuesFaced.length > 0 && (
              <Card className="glass-strong border border-red-500/30">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-red-500/10">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold">Challenges Faced</h3>
                  </div>
                  <ul className="space-y-4">
                    {project.issuesFaced.map((issue, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-red-400 mt-1">▸</span>
                        <span className="flex-1">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Solutions Applied */}
            {project.solutionsApplied && project.solutionsApplied.length > 0 && (
              <Card className="glass-strong border border-primary/30">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Solutions Implemented</h3>
                  </div>
                  <ul className="space-y-4">
                    {project.solutionsApplied.map((solution, index) => (
                      <li key={index} className="flex gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="flex-1">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-16 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Explore More Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-strong hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Previous Solution
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {prevProject.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {prevProject.summary}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  aria-label={`View ${prevProject.title} project`}
                >
                  <Link href={`/projects/${prevProject.id}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-strong hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-end gap-2 mb-4">
                  <span className="text-sm font-semibold text-primary">
                    Next Solution
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {nextProject.summary}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  aria-label={`View ${nextProject.title} project`}
                >
                  <Link href={`/projects/${nextProject.id}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
