'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Palette, Search, Shield, Brush, Calendar, Star, Users, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSearch } from '@/components/animated-search';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = 0.7;
    }
  }, []);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for signing up!",
      description: "We'll keep you updated on our launch.",
    });
    setEmail('');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50 dark:opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-close-up-of-tattoo-artist-at-work-2633/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
        <motion.div 
          className="relative container px-4 md:px-6 z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div 
              className="space-y-4"
              variants={fadeIn}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Your Vision,{' '}
                <span className="text-primary">Their Artistry</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                Connect with elite tattoo artists, explore stunning portfolios, and bring your dream tattoo to life.
              </p>
            </motion.div>
            <motion.div 
              className="w-full"
              variants={fadeIn}
            >
              <AnimatedSearch />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Coming Soon to Your Area
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
              We're working hard to bring the best tattoo booking experience to you. Sign up to be notified when we launch in your city.
            </p>
            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto space-y-4 mt-8">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
                <Button type="submit" size="lg" className="h-12">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join 2,000+ others waiting for our launch. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest from Our Blog</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Discover tips, trends, and insights from the tattoo industry</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Essential Aftercare Tips",
                excerpt: "A comprehensive guide to taking care of your new tattoo.",
                image: "https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Choosing Your First Design",
                excerpt: "How to select a tattoo design that you'll love forever.",
                image: "https://images.unsplash.com/photo-1598211686638-61d85fb70911?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "2024 Tattoo Trends",
                excerpt: "The most popular styles and designs this year.",
                image: "https://images.unsplash.com/photo-1598211686754-89f5e7b12ec8?auto=format&fit=crop&w=600&h=400"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/blog" className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/blog">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Call-to-Action Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590246814883-57c511e9e6b6?auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="container relative px-4 md:px-6">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Calling All Tattoo Artists!
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Get listed for free during our launch period. Build your digital presence and connect with clients who appreciate your art.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" variant="secondary" asChild className="min-w-[200px]">
                <Link href="/artists/signup">
                  Join as Artist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center space-y-2">
                <Calendar className="h-8 w-8 mb-2" />
                <h3 className="font-semibold">Easy Scheduling</h3>
                <p className="text-primary-foreground/70">Manage your bookings efficiently</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="font-semibold">Wider Reach</h3>
                <p className="text-primary-foreground/70">Connect with new clients</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="font-semibold">Build Your Brand</h3>
                <p className="text-primary-foreground/70">Showcase your portfolio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}