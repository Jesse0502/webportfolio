"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, Sparkles, Send, Clock, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = React.useState<'idle' | 'sending' | 'sent'>('idle');
  const [formSendMessage, setFormSendMessage] = React.useState<{message: string, state: 'success' | 'error' | 'idle'}>({message: "", state: 'idle'});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
    setFormState('sending');
    // console.log(e.target);
    const data = {
      // @ts-ignore
      name: e.target.name.value,
      // @ts-ignore
      email: e.target.email.value,
      // @ts-ignore
      subject: e.target.subject.value,
      // @ts-ignore
      message: e.target.message.value,
    };

    // console.log(data);
    setFormSendMessage({message: 'Sending...', state: 'idle'});

    await fetch('https://n8n-production-0d8d.up.railway.app/webhook/872c92cf-4805-45cd-99fd-f5dc28881a8a', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data => {
      setFormSendMessage({message: 'Message Sent!', state: 'success'});
    }).catch(err => {
      setFormSendMessage({message: 'Message Sent!', state: 'success'});
    });

      setFormState('sent');
  } catch (error) {
    setFormSendMessage({message: 'Message Sent!', state: 'error'});
    setFormState('idle');
  }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-8 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build <span className="gradient-text">Your Solution</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a business challenge that needs AI automation? Let&apos;s discuss how
            I can help you save time, reduce costs, and scale efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Me",
                  description: "Direct communication for project discussions",
                  value: "jasmeetsingh0502@gmail.com",
                  action: "mailto:jasmeetsingh0502@gmail.com",
                  actionText: "Send Email",
                },
                {
                  icon: Calendar,
                  title: "Schedule a Call",
                  description: "Book a consultation to discuss your needs",
                  value: "30 min meeting",
                  action: "https://calendly.com/jasmeetsingh0502/30min",
                  actionText: "Book Time",
                },
                {
                  icon: MessageSquare,
                  title: "Quick Chat",
                  description: "Send a message for quick questions",
                  value: "Response in 24h",
                  action: "#message",
                  actionText: "Start Chat",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card className="glass-strong  hover:border-primary/40 transition-all duration-300 group cursor-pointer border border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{contact.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{contact.description}</p>
                          <p className="font-medium text-primary mb-3">{contact.value}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="glass hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                            onClick={() => {
                              if (contact.action.startsWith('mailto:')) {
                                window.location.href = contact.action;
                              } if (contact.action.startsWith('https://')) {
                                window.location.href = contact.action;
                              } else {
                                const element = document?.querySelector(contact.action);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }}
                          >
                            {contact.actionText}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="form-input"
                      placeholder="Project inquiry, consultation, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell me about your project, challenges, and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === 'sending' || formState === 'sent'}
                    className="w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {formState === 'idle' && (
                      <>
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </span>
                      </>
                    )}
                    {formState === 'sending' && (
                      <span className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </span>
                    )}
                    {formState === 'sent' && (
                      <span className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message Sent!
                      </span>
                    )}

                    {formState === 'idle' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="glass-strong border-primary/20 inline-block">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                From N8N workflow automation to custom AI solutions, I help businesses
                leverage cutting-edge technology to solve real problems and achieve measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = 'mailto:jasmeetsingh0502@gmail.com'}
                >
                  Start Your Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-strong"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Solutions
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
