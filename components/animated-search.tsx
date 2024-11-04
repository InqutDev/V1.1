'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const searchExamples = [
  "Traditional Japanese sleeve artist in New York",
  "Minimalist fine line tattoo specialist",
  "Color realism portrait expert",
  "Black and grey geometric designs",
  "Watercolor style tattoo artist",
  "Custom script lettering specialist"
];

export function AnimatedSearch() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentExample = searchExamples[currentIndex];
      
      if (!isDeleting) {
        if (text.length < currentExample.length) {
          setText(currentExample.slice(0, text.length + 1));
          timeout = setTimeout(animateText, 50 + Math.random() * 50);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
          timeout = setTimeout(animateText, 30);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % searchExamples.length);
        }
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting]);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <div className="w-full rounded-full border bg-white px-12 py-4 text-lg text-left shadow-lg dark:bg-gray-950">
            {text}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className={cn(
                "inline-block w-[2px] h-5 ml-[2px] align-middle",
                "bg-primary"
              )}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}