"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/jasmeetsingh",
    label: "Visit GitHub profile",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/jasmeetsingh",
    label: "Visit LinkedIn profile",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/jasmeetsingh",
    label: "Visit Twitter profile",
    color: "hover:text-blue-300",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@jasmeetsingh.dev",
    label: "Send email",
    color: "hover:text-primary",
  },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-transparent" />

      {/* Top border with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative glass border-t border-primary/10 pt-16 pb-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="gradient-text">Jasmeet Singh</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                  AI Solutions Developer specializing in N8N, LangChain, RAG, and intelligent automation.
                  Transforming business challenges into automated, AI-powered solutions.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Available for new projects
                </div>
              </div>

              {/* Newsletter Signup - Optional */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Stay Updated</h4>
                <p className="text-muted-foreground text-xs">Get notified about new projects and AI insights</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="flex-1 px-3 py-2 bg-background/50 border border-primary/20 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
                  />
                  <Button size="sm" className="px-4">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary">Quick Links</h4>
              <nav className="space-y-3" aria-label="Footer navigation">
                {footerLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm md:text-base text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary">Connect With Me</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="glass hover:border-primary/40 transition-all duration-300 w-10 h-10 md:w-11 md:h-11"
                    aria-label={social.label}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="glass hover:border-primary/40 hover:bg-primary/5 transition-all w-full"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs md:text-sm">
                © {currentYear} Jasmeet Singh. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-center gap-1">
                Made with <Heart className="h-3 w-3 md:h-4 md:w-4 text-primary fill-primary" />{" "}
                using Next.js & AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
