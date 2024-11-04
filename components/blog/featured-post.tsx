'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface FeaturedPostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    readingTime: string;
  };
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            {post.excerpt}
          </p>
          <Button asChild>
            <Link href={`/blog/${post.slug}`}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}