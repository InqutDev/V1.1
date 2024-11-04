'use client';

import { motion } from 'framer-motion';
import { Calendar, Palette, Shield, Brush, MessageSquare, Clock, CreditCard, Users } from 'lucide-react';
import { FeatureCard } from '@/components/features/feature-card';
import { PricingCard } from '@/components/features/pricing-card';

const features = [
  {
    title: 'Smart Scheduling',
    description: 'Efficiently manage your appointments with our intelligent booking system that handles time zones and availability.',
    icon: Calendar,
  },
  {
    title: 'Portfolio Showcase',
    description: 'Display your artwork in a beautiful, customizable gallery that highlights your unique style and expertise.',
    icon: Palette,
  },
  {
    title: 'Secure Payments',
    description: 'Process deposits and payments safely with our integrated payment system and automated invoicing.',
    icon: Shield,
  },
  {
    title: 'Design Collaboration',
    description: 'Work directly with clients on designs through our interactive design collaboration tools.',
    icon: Brush,
  },
  {
    title: 'Client Communication',
    description: 'Stay connected with clients through our integrated messaging system and automated notifications.',
    icon: MessageSquare,
  },
  {
    title: 'Availability Management',
    description: 'Set your working hours, breaks, and vacation time with our flexible scheduling tools.',
    icon: Clock,
  },
];

const pricingPlans = [
  {
    title: 'Basic',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Basic portfolio showcase',
      'Simple appointment scheduling',
      'Client messaging',
      'Up to 5 designs per month',
    ],
  },
  {
    title: 'Professional',
    price: '$29',
    description: 'Everything you need to grow',
    features: [
      'Advanced portfolio showcase',
      'Smart scheduling system',
      'Payment processing',
      'Unlimited designs',
      'Client management tools',
      'Analytics dashboard',
    ],
    highlighted: true,
  },
  {
    title: 'Studio',
    price: '$79',
    description: 'For established studios',
    features: [
      'Multiple artist profiles',
      'Team management',
      'Advanced analytics',
      'Custom branding',
      'Priority support',
      'API access',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Everything You Need to{' '}
              <span className="text-primary">Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Powerful tools designed specifically for tattoo artists and studios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that best fits your needs. All plans include core features.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                index={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}