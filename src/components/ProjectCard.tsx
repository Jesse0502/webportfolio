"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="h-full flex flex-col overflow-hidden glass-strong hover:border-primary/50 transition-all duration-300 group">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            {project.usePlaceholder ? (
              <ProjectPlaceholder title={project.title} className="h-full w-full" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-muted-foreground">Add project image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-6 space-y-4">
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>

          <p className="text-muted-foreground line-clamp-3">
            {project.summary}
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-primary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="secondary" className="glass">
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            asChild
            size="lg"
            className="w-full group/btn"
            aria-label={`View case study for ${project.title}`}
          >
            <Link href={`/projects/${project.id}`}>
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
