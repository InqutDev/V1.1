'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    readingTime: string;
    category: string;
  };
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <Badge variant="secondary" className="mb-2">
          {post.category}
        </Badge>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}