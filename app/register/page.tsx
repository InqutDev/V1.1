'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClientRegistrationForm } from '@/components/forms/client-registration-form';
import { ArtistRegistrationForm } from '@/components/forms/artist-registration-form';
import { Palette, User } from 'lucide-react';

export default function RegisterPage() {
  const [selectedTab, setSelectedTab] = useState('client');

  return (
    <div className="container relative min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold">Create an Account</CardTitle>
            <CardDescription>
              Choose your account type to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="client" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Client
                </TabsTrigger>
                <TabsTrigger value="artist" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Artist
                </TabsTrigger>
              </TabsList>
              <TabsContent value="client">
                <ClientRegistrationForm />
              </TabsContent>
              <TabsContent value="artist">
                <ArtistRegistrationForm />
              </TabsContent>
            </Tabs>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}