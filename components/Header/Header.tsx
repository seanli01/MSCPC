// components/Header.tsx
import React from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { navItems } from '@/components/Header/MenuItems';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[100px] shadow-[0px_4px_6px_rgba(0,0,0,0.1)] z-50 bg-[#800020]">
      <div className="flex justify-between items-center h-full px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-start">
          <Image
            src="/assets/logo.png"
            alt="Company Logo"
            width={200}
            height={60}
            className="h-[60px] w-[200px] object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-6 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <div className="relative group" key={item.name}>
              {item.href && (
                <Link
                  href={item.href}
                  className="text-white font-semibold px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:scale-105"
                >
                  {item.name}
                </Link>
              )}
              {item.subMenu && (
                <>
                  <div className="flex items-center text-white font-semibold px-4 py-2 rounded-md transition-all hover:bg-white/20 hover:scale-105">
                    {item.name}
                    <ChevronDown className="ml-1" />
                  </div>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-[#800020] hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <p className="text-white font-bold">
            Call us: <br></br>
            <span className="text-amber-400">+1-416-300-3525</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;