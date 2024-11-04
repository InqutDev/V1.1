'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative p-6 bg-card rounded-lg border",
        highlighted && "border-primary shadow-lg"
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className="w-full"
        variant={highlighted ? "default" : "outline"}
      >
        Get Started
      </Button>
    </motion.div>
  );
}