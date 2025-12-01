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
import { useRouter } from "next/navigation";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer = React.forwardRef<any, VideoPlayerProps>(({ src, title }, ref) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPiPActive, setIsPiPActive] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // Function to exit picture-in-picture mode
  const exitPictureInPicture = React.useCallback(async () => {
    if (document.pictureInPictureElement) {
      try {
        await document.exitPictureInPicture();
        setIsPiPActive(false);
      } catch (error) {
        console.log('Failed to exit PiP:', error);
      }
    }
  }, []);
  // Expose exit function to parent component
  React.useImperativeHandle(ref, () => ({
    exitPiP: exitPictureInPicture,
  }), [exitPictureInPicture]);

  // Auto-enter PiP mode when component mounts (paused state)
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for video metadata to load, then enter PiP
    const handleLoadedMetadata = () => {
      setTimeout(async () => {
        if (document.pictureInPictureEnabled && !document.pictureInPictureElement) {
          try {
            await video.requestPictureInPicture();
            setIsPiPActive(true);
          } catch (error) {
            console.log('Initial PiP not available:', error);
          }
        }
      }, 500); // Small delay after metadata loads
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // When video starts playing, make sure it's in PiP if not already
      if (!document.pictureInPictureElement && document.pictureInPictureEnabled) {
        video.requestPictureInPicture().catch(console.log);
      }
    };

    const handlePause = () => {
      // Keep in PiP when paused - user can see the paused video in PiP
    };

    const handleEnterPiP = () => {
      setIsPiPActive(true);
    };

    const handleLeavePiP = () => {
      setIsPiPActive(false);
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    // Event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('enterpictureinpicture', handleEnterPiP);
    video.addEventListener('leavepictureinpicture', handleLeavePiP);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('enterpictureinpicture', handleEnterPiP);
      video.removeEventListener('leavepictureinpicture', handleLeavePiP);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Handle YouTube URLs - convert to embed format
  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    const getEmbedUrl = (url: string) => {
      // Handle youtu.be URLs
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // Handle youtube.com URLs
      else if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // Handle youtube.com/embed URLs (already in embed format)
      else if (url.includes('youtube.com/embed/')) {
        return url;
      }
      // Fallback - assume it's already an embed URL
      return url;
    };

    return (
      <div className="relative w-full h-full">
        <iframe
          src={getEmbedUrl(src)}
          className="w-full h-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          title={title}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-white text-lg">Loading YouTube video...</div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <div className="text-white text-center">
              <div className="text-lg mb-2">Failed to load YouTube video</div>
              <div className="text-sm opacity-75">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Open in YouTube
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Handle local video files
  const videoSrc = src.startsWith('/') ? src : `/${src}`;

  return (
    <div className="relative w-full h-full group">
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-black/80 text-white">
          <div className="text-center">
            <div className="text-lg mb-2">Failed to load video</div>
            <div className="text-sm opacity-75">
              Video file may be missing or corrupted
            </div>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/placeholder-video.jpg"
            title={title}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/webm" />
            <source src={videoSrc} type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-white text-lg">Loading video...</div>
            </div>
          )}

          {/* PiP Status Indicator */}
          {isPiPActive && (
            <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              📺 PiP Active
            </div>
          )}
        </>
      )}
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export function ProjectDetail({
  project,
  nextProject,
  prevProject,
}: ProjectDetailProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const videoPlayerRef = React.useRef<any>(null);

  // Intersection observer to manage PiP based on carousel visibility
  React.useEffect(() => {
    if (!carouselRef.current || !project.videoUrl) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        entries.forEach(async (entry) => {
          const video = videoPlayerRef.current;

          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Carousel is in view - exit PiP so video plays in carousel
            if (video?.exitPiP) {
              video.exitPiP();
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio <= 0.3) {
            // Carousel is out of view - enter PiP mode
            const videoElement = document.querySelector('video');
            if (videoElement && document.pictureInPictureEnabled && !document.pictureInPictureElement) {
              try {
                await videoElement.requestPictureInPicture();
              } catch (error) {
                console.log('PiP not available when leaving carousel:', error);
              }
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the carousel is visible/invisible
        rootMargin: '0px 0px -10px 0px'
      }
    );

    observer.observe(carouselRef.current);

    return () => {
      observer.disconnect();
    };
  }, [project.videoUrl]);

  // Cleanup PiP when leaving the page
  React.useEffect(() => {
    const cleanupPiP = async () => {
      if (document.pictureInPictureElement) {
        try {
          await document.exitPictureInPicture();
        } catch (error) {
          console.log('Failed to exit PiP on page leave:', error);
        }
      }
    };

    const handleBeforeUnload = () => {
      cleanupPiP();
    };

    const handlePageHide = () => {
      cleanupPiP();
    };

    const handleVisibilityChange = () => {
      // Clean up if page becomes hidden (user switches tabs or closes)
      if (document.hidden) {
        cleanupPiP();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cleanupPiP(); // Final cleanup
    };
  }, []);
 const router = useRouter();

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
        <div ref={carouselRef} className="mt-16">
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
                    <VideoPlayer
                      ref={videoPlayerRef}
                      src={project.videoUrl}
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
                        <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-full object-contain" />
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
            <Card onClick={() => router.push(`/projects/${prevProject.id}`)} className="glass-strong hover:border-primary/50 transition-all duration-300 group cursor-pointer">
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

            <Card onClick={() => router.push(`/projects/${nextProject.id}`)} className="glass-strong hover:border-primary/50 transition-all duration-300 group cursor-pointer">
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
