// components/Header.tsx
import React from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[100px] shadow-[0px_4px_6px_rgba(0,0,0,0.1)] z-50 bg-[#800020]">
      <div className="flex justify-between items-center h-full px-8 max-w-7xl mx-auto">
        <Image
          src="/assets/logo.png"
          alt="Company Logo"
          width={200}
          height={60}
          className="h-[60px] w-[200px] object-contain"
        />
        
        <nav className="hidden md:flex gap-6 items-center">
          {['About Us', 'Services', 'Tax Planning', 'Bookkeeping', 'Payroll', 'Contact'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white font-semibold px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:scale-105"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <p className="text-white font-bold">
            Call us: <span className="text-amber-400">+1-416-300-3525</span>
          </p>
          <Button variant="outline" className="text-[#800020] bg-amber-400 hover:bg-amber-300">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;