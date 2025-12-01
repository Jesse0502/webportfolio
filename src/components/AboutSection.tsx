"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Brain, Zap, Award, Users, TrendingUp, Clock, Target, Lightbulb, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    name: "N8N Automation",
    level: 95,
    icon: Workflow,
    color: "bg-primary",
    description: "Complex workflow automation & API integrations"
  },
  {
    name: "LangChain & AI",
    level: 90,
    icon: Brain,
    color: "bg-primary",
    description: "LLM integrations & AI agent development"
  },
  {
    name: "RAG Systems",
    level: 85,
    icon: Bot,
    color: "bg-primary",
    description: "Retrieval-augmented generation pipelines"
  },
  {
    name: "Full Stack Dev",
    level: 92,
    icon: Zap,
    color: "bg-primary",
    description: "Modern web applications & APIs"
  },
];

const stats = [
  {
    icon: Award,
    value: "50+",
    label: "Projects Delivered",
    description: "Successful deployments"
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    description: "Satisfied businesses"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Avg. Efficiency Gain",
    description: "Time saved for clients"
  },
  {
    icon: Clock,
    value: "1000+",
    label: "Hours Saved",
    description: "Automated workflows"
  },
];

// Enhanced tech stack with categories and descriptions
const techStack = [
  // AI & ML
  { name: "LangChain", category: "AI", icon: "🔗", description: "LLM Framework" },
  { name: "RAG Systems", category: "AI", icon: "📚", description: "Knowledge Retrieval" },
  { name: "Vector DBs", category: "AI", icon: "🗄️", description: "Embeddings Storage" },
  { name: "Hugging Face", category: "AI", icon: "🤗", description: "Model Hub" },

  // Automation
  { name: "N8N", category: "Automation", icon: "⚡", description: "Workflow Engine" },


  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️", description: "UI Framework" },
  { name: "Next.js", category: "Frontend", icon: "▲", description: "Full-Stack React" },
  { name: "TypeScript", category: "Frontend", icon: "📘", description: "Type-Safe JS" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨", description: "Utility-First CSS" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "🟢", description: "Runtime Environment" },
  { name: "Python", category: "Backend", icon: "🐍", description: "AI & Scripting" },
  { name: "FastAPI", category: "Backend", icon: "⚡", description: "Python Web Framework" },

  // Database & Cloud
  { name: "PostgreSQL", category: "Database", icon: "🐘", description: "Relational Database" },
  { name: "Qdrant", category: "Database", icon: "🌲", description: "Vector Database" },
  { name: "Redis", category: "Database", icon: "🔴", description: "In-Memory Store" },
  { name: "AWS", category: "Cloud", icon: "☁️", description: "Cloud Infrastructure" },
  { name: "Docker", category: "Cloud", icon: "🐳", description: "Containerization" },
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    AI: "from-primary/20 to-primary/10 border-primary/30",
    Automation: "from-yellow-500/20 to-yellow-500/10 border-yellow-500/30",
    Frontend: "from-blue-500/20 to-blue-500/10 border-blue-500/30",
    Backend: "from-green-500/20 to-green-500/10 border-green-500/30",
    Database: "from-purple-500/20 to-purple-500/10 border-purple-500/30",
    Cloud: "from-cyan-500/20 to-cyan-500/10 border-cyan-500/30",
  };
  return colors[category] || colors.AI;
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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
            <Target className="w-4 h-4" />
            About Me
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Challenges into <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With expertise spanning AI, automation, and full-stack development,
            I help businesses leverage cutting-edge technology to solve complex problems and drive innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Core Expertise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-2"
          >
            <Card className="glass-strong border-primary/20 h-full">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  Core Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 md:space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <skill.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base md:text-lg mb-1">{skill.name}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                          <div className="flex items-center gap-2">
                            <div className="h-2 bg-muted/50 rounded-full flex-1 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                                className={`h-full ${skill.color} rounded-full relative`}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                              </motion.div>
                            </div>
                            <span className="text-sm font-bold text-primary min-w-[3rem]">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-strong border-primary/20 h-full">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Rocket className="w-6 h-6 text-primary" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Workflow,
                    title: "Workflow Automation",
                    description: "Build intelligent N8N workflows that eliminate repetitive tasks and streamline business processes."
                  },
                  {
                    icon: Brain,
                    title: "AI Integration",
                    description: "Implement LangChain agents and RAG systems that understand context and deliver accurate results."
                  },
                  {
                    icon: Zap,
                    title: "Full Stack Solutions",
                    description: "Create end-to-end applications from AI-powered backends to polished, responsive frontends."
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technology Stack - Compact Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">Technology Stack</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Technologies I use to build intelligent solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
              >
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default ${
                  tech.category === 'AI & ML'
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-700 hover:bg-blue-500/20'
                    : tech.category === 'Automation'
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 hover:bg-indigo-500/20'
                    : tech.category === 'Frontend'
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 hover:bg-cyan-500/20'
                    : tech.category === 'Backend'
                    ? 'bg-teal-500/10 border-teal-500/30 text-teal-700 hover:bg-teal-500/20'
                    : tech.category === 'Database'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/20'
                    : 'bg-sky-500/10 border-sky-500/30 text-sky-700 hover:bg-sky-500/20'
                }`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
