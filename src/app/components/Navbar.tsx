'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand with Logo */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image 
            src="/logo.jpg" 
            alt="JoyTrip Logo" 
            width={40}
            height={40} 
            className="rounded-full" // ทำให้โลโก้เป็นวงกลม
          />
          {/* Brand Name */}
          <div className="text-2xl font-bold text-blue-600">JoyTrip</div>
        </div>

        {/* Center: Navigation links */}
        <ul className=" hidden md:flex space-x-6 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        {/* Right: CTA */}
        <Link
          href="/chat"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create a Trip
        </Link>
      </div>
    </nav>
  );
}
