'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-primary border-gray-200">
      <div className="text-xl font-bold">KADERE</div>

      {/* HAMBURGER BUTTON (Hidden > 425px) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="block xsm:hidden p-2 text-gray-600 focus:outline-none"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* DESKTOP NAVIGATION (Hidden < 425px) */}
      <div className="hidden xsm:flex gap-8 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/drivers" className="hover:text-blue-600">Drivers</Link>
        <Link href="/fleet" className="hover:text-blue-600">Fleet</Link>
      </div>

      {/* SIDE DRAWER (MOBILE) */}
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* The Drawer Content */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl p-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 font-medium text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/patners" onClick={() => setIsOpen(false)}>Patners</Link>
          <Link href="/sevices" onClick={() => setIsOpen(false)}>Services</Link>
        </div>
      </div>
    </nav>
  );
}