'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TripCardProps {
  name: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
}

export default function TripCard({ name, title, desc, image, slug }: TripCardProps) {
  return (
    <Link href={`/trips/${slug}`} className="block h-full">
      <div className="h-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
        
        {/* Image Section */}
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">by {name}</p>
          <p className="text-gray-700 text-base flex-grow">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
