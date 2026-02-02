"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Github, Linkedin, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Direct Contact Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <Card 
                className="h-full p-8 border-border/50 bg-background/50 backdrop-blur-xl hover:border-primary/50 transition-colors flex flex-col justify-between group cursor-pointer"
                onClick={() => window.location.href = 'mailto:2136seanpaul@gmail.com'}
              >
                <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Send me an email</h3>
                    <p className="text-muted-foreground mb-8">
                        The best way to reach me. I usually respond within 24 hours.
                    </p>
                </div>
                <Button className="w-full group/btn pointer-events-none" size="lg">
                    2136seanpaul@gmail.com
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>

            {/* Social & Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                     <Card className="h-full p-6 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-background/80 transition-colors flex flex-col items-center text-center justify-center gap-4 group cursor-pointer" onClick={() => window.open('/Resume Sean Paul M. Monton.pdf', '_blank')}>
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Resume</h4>
                            <p className="text-xs text-muted-foreground">Download PDF</p>
                        </div>
                     </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                     <Card className="h-full p-6 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-background/80 transition-colors flex flex-col items-center text-center justify-center gap-4 group cursor-pointer" onClick={() => window.open('https://github.com/snplmntn', '_blank')}>
                        <div className="h-10 w-10 rounded-full bg-slate-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Github className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                            <h4 className="font-bold">GitHub</h4>
                            <p className="text-xs text-muted-foreground">Check my code</p>
                        </div>
                     </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                     <Card className="h-full p-6 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-background/80 transition-colors flex flex-col items-center text-center justify-center gap-4 group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/snplmntn', '_blank')}>
                        <div className="h-10 w-10 rounded-full bg-blue-700/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Linkedin className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                            <h4 className="font-bold">LinkedIn</h4>
                            <p className="text-xs text-muted-foreground">Let's connect</p>
                        </div>
                     </Card>
                </motion.div>
                
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                     <Card className="h-full p-6 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-background/80 transition-colors flex flex-col items-center text-center justify-center gap-4 group cursor-pointer" onClick={() => window.open('https://calendly.com/2136seanpaul/30min', '_blank')}>
                        <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Calendar className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Schedule</h4>
                            <p className="text-xs text-muted-foreground">Book a meeting</p>
                        </div>
                     </Card>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
