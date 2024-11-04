'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FeaturedPost } from '@/components/blog/featured-post';
import { PostCard } from '@/components/blog/post-card';
import { CategoryFilter } from '@/components/blog/category-filter';

const featuredPost = {
  slug: 'ultimate-tattoo-aftercare-guide',
  title: 'The Ultimate Guide to Tattoo Aftercare',
  excerpt: 'Everything you need to know about taking care of your new tattoo, from the first day to complete healing. Learn expert tips and common mistakes to avoid.',
  coverImage: 'https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?auto=format&fit=crop&w=2000&q=80',
  date: '2024-03-15',
  readingTime: '8 min read',
};

const categories = [
  'Aftercare',
  'Inspiration',
  'Artist Spotlight',
  'Techniques',
  'Industry News',
];

const posts = [
  {
    slug: 'choosing-your-first-tattoo',
    title: 'How to Choose Your First Tattoo Design',
    excerpt: 'A comprehensive guide to selecting meaningful and timeless designs for your first tattoo experience.',
    coverImage: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    readingTime: '6 min read',
    category: 'Inspiration',
  },
  {
    slug: 'traditional-vs-modern',
    title: 'Traditional vs. Modern Tattoo Styles',
    excerpt: 'Exploring the differences between traditional and modern tattoo techniques and their cultural significance.',
    coverImage: 'https://images.unsplash.com/photo-1580465446361-8aae5321522b?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-05',
    readingTime: '7 min read',
    category: 'Techniques',
  },
  {
    slug: 'rising-stars-2024',
    title: 'Rising Stars: Top Tattoo Artists to Watch in 2024',
    excerpt: 'Meet the emerging talents who are revolutionizing the tattoo industry with their unique styles and techniques.',
    coverImage: 'https://images.unsplash.com/photo-1598211686754-89f5e7b12ec8?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-01',
    readingTime: '5 min read',
    category: 'Artist Spotlight',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Insights & Inspiration
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the latest trends, techniques, and stories from the world of tattoo artistry
            </p>
          </motion.div>

          <div className="mb-12">
            <FeaturedPost post={featuredPost} />
          </div>

          <div className="mb-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}