"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Enhanced Profile Image - First on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center order-first lg:order-last"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <div className="relative">
              {/* Outer Glow Rings */}
              <div className="absolute inset-0 scale-110">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-spin-slow opacity-60" />
              </div>

              {/* Middle Ring */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

              {/* Profile Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Background Pattern */}
                <div className="absolute inset-0 " />

                {/* 3D Profile Image */}
                <div
                  className="profile-3d-container"
                  // style={{
                  //   transform: `perspective(1200px) rotateY(${mousePosition.x * 12}deg) rotateX(${-mousePosition.y * 12}deg)`,
                  // }}
                >
                  <img
                    src='/J7.png'
                    
                    alt='Jasmeet Singh - AI Solutions Developer'
                    className="profile-image-3d"
                  />

                  {/* Inner Glow */}
                  {/* <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm animate-pulse-slow opacity-50" style={{ animationDelay: '3s' }} /> */}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  {/* <Sparkles className="w-4 h-4 text-primary-foreground" /> */}
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/80 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Text Content - Second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-last lg:order-first"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="block text-foreground mb-2">Jasmeet</span>
              <span className="block gradient-text">Singh</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-3">
                Full Stack Developer & AI Engineer
              </h2>
              <p className="text-primary font-medium">
                N8N • LangChain • RAG • Full Stack Development
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Transforming complex business challenges into intelligent, automated solutions.
              I build AI-powered workflows and applications that drive real results and measurable impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={handleContactClick}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Let&apos;s Build Something
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToProjects}
                className="glass-strong hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                View Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={handleScrollToProjects}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Scroll down to projects"
          >
            <span className="text-sm font-medium mb-2 opacity-80">Discover My Work</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
