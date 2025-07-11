'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-4 text-lg">
        Have any questions? {' '}
        contact via LINE
      </p>
      <Image
        src="/qr.JPG"
        alt="QR Code"
        className='ml-150 mb-10'
        width={200}
        height={200}
      />

      <p className="text-sm">© {new Date().getFullYear()} JoyTrip. All rights reserved.</p>
    </footer>
  );
}
