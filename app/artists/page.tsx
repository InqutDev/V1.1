'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';

const artists = [
  {
    id: 1,
    name: 'Sarah Chen',
    style: 'Fine Line',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80',
    specialties: ['Minimalist', 'Geometric', 'Custom Script'],
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    style: 'Traditional Japanese',
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1580465446361-8aae5321522b?auto=format&fit=crop&w=800&q=80',
    specialties: ['Irezumi', 'Dragons', 'Koi Fish'],
  },
  {
    id: 3,
    name: 'Emma Thompson',
    style: 'Watercolor',
    location: 'Miami, FL',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?auto=format&fit=crop&w=800&q=80',
    specialties: ['Abstract', 'Nature', 'Custom Design'],
  },
];

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [styleFilter, setStyleFilter] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Find Your Perfect Tattoo Artist
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Browse through our curated list of talented artists and find the perfect match for your next tattoo
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search by style, location, or artist name..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={styleFilter} onValueChange={setStyleFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="traditional">Traditional</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="fineline">Fine Line</SelectItem>
                <SelectItem value="watercolor">Watercolor</SelectItem>
                <SelectItem value="blackwork">Blackwork</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {artists.map((artist) => (
              <motion.div
                key={artist.id}
                variants={fadeInUp}
                className="group relative bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-shadow"
              >
                <Link href={`/artists/${artist.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <p className="text-muted-foreground">{artist.style}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {artist.location}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 font-medium">{artist.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({artist.reviews} reviews)
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {artist.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}