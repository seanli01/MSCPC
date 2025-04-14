
import React from 'react';
import Image from '@/node_modules/next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[800px] mt-0 pt-0">
      <div className="absolute inset-0">
        <Image
          src="/assets/mainfocal2.jpg"
          alt="Main Focal"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-4xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Looking for expert accounting services?
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          At MSPSC, we provide professional, reliable, and tailored financial solutions to help your business thrive.
        </p>
        
        <Button className="relative overflow-hidden h-14 px-8 text-lg bg-[#282936] hover:bg-[#1a1b26]">
          <span className="flex items-center gap-2">
            <span className="relative w-8 h-8 flex items-center justify-center">
              <span className="absolute w-full h-full bg-white/20 rounded-full animate-ping" />
              <span className="block w-2 h-2 bg-white rounded-full transition-all group-hover:translate-x-1" />
            </span>
            <span>Learn More</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;