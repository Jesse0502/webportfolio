"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/types/project";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid3X3, LayoutGrid } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All");
  const [viewMode, setViewMode] = React.useState<'grid' | 'masonry'>('grid');

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-8 relative"
    >
      {/* Subtle background that blends with hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Grid3X3 className="w-4 h-4" />
            Portfolio
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI Solutions <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real business problems solved with intelligent automation, AI agents,
            and cutting-edge technology. Each solution delivers measurable impact and ROI.
          </p>
        </motion.div>

        {/* Filter and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {projectCategories.map((category) => {
              const count = category === "All"
                ? projects.length
                : projects.filter(p => p.categories.includes(category)).length;

              return (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    activeCategory === category
                      ? "shadow-lg scale-105"
                      : "glass hover:border-primary/40 hover:bg-primary/5"
                  }`}
                  size="sm"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                  <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0.5">
                    {count}
                  </Badge>
                </Button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? '' : 'glass hover:border-primary/40'}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'masonry' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('masonry')}
              className={viewMode === 'masonry' ? '' : 'glass hover:border-primary/40'}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`${activeCategory}-${viewMode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
              : 'columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8'
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={viewMode === 'masonry' ? 'break-inside-avoid mb-6 md:mb-8' : ''}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No projects match the selected category yet. Try selecting a different filter or check back later.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
