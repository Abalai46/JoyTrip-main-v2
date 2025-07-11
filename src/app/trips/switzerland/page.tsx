'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function SwitzerlandTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival in Zurich & City Exploration',
      details: [
        '✈️ 9:00 AM – Arrive at Zurich Airport.',
        '🚄 10:00 AM – Take train from Zurich Airport to Zurich HB (main station) (~15 mins).',
        '🛏️ 11:00 AM – Check-in at hotel near Zurich city center.',
        '🌤️ Weather: 18°C, partly sunny. Light jacket recommended.',
        '',
        '🍽️ 12:30 PM – Lunch at Zeughauskeller (traditional Swiss food).',
        '🏛️ 2:00 PM – Walk through Old Town (Altstadt), visit Grossmünster and Bahnhofstrasse.',
        '☕ 4:30 PM – Coffee break at Café Sprüngli (famous Luxemburgerli macarons).',
        '🌅 6:30 PM – Stroll along Lake Zurich promenade.',
        '🍽️ 8:00 PM – Dinner at Restaurant Kronenhalle (classic Swiss cuisine).',
      ],
    },
    {
      day: 'Day 2: Lucerne & Mount Pilatus',
      details: [
        '🌤️ Weather: 20°C, sunny with light breeze.',
        '🍳 7:30 AM – Breakfast at hotel.',
        '🚆 8:30 AM – Take train from Zurich HB to Lucerne (~1 hour).',
        '🚠 10:00 AM – Ride the world’s steepest cogwheel railway up to Mount Pilatus.',
        '🥪 12:00 PM – Picnic lunch with panoramic mountain views.',
        '🚡 2:00 PM – Descend via aerial cableway to Kriens, then bus to Lucerne.',
        '🏞️ 4:00 PM – Explore Chapel Bridge and Lake Lucerne waterfront.',
        '🍽️ 7:00 PM – Dinner at Wirtshaus Galliker (local specialties).',
        '🚆 9:00 PM – Return train to Zurich.',
      ],
    },
    {
      day: 'Day 3: Interlaken & Jungfrau Region',
      details: [
        '⛅ Weather: 15°C, partly cloudy, cooler in mountains.',
        '🥐 6:30 AM – Early breakfast at hotel.',
        '🚆 7:00 AM – Train Zurich to Interlaken OST (~2 hours).',
        '🚞 10:00 AM – Take train to Jungfraujoch (Top of Europe). Book tickets in advance.',
        '🥗 12:30 PM – Lunch at Jungfraujoch restaurant with snowy views.',
        '🚞 3:00 PM – Descend and explore Interlaken town, shop local crafts.',
        '☕ 5:00 PM – Coffee at local café.',
        '🍽️ 7:00 PM – Dinner at Husi Bierhaus (Swiss and German cuisine).',
        '🛏️ Overnight in Interlaken or return to Zurich if preferred.',
      ],
    },
    {
      day: 'Day 4: Bern & Emmental Valley',
      details: [
        '🌦️ Weather: 16°C, chance of light rain; bring umbrella.',
        '🍳 8:00 AM – Breakfast at hotel or local café.',
        '🚆 9:00 AM – Train to Bern (~1 hour).',
        '🏛️ 10:00 AM – Explore Bern’s UNESCO Old Town: Clock Tower, Bear Park.',
        '🥪 12:30 PM – Lunch at Kornhauskeller (historic cellar restaurant).',
        '🧀 2:00 PM – Bus or car rental to Emmental Valley (famous for cheese farms).',
        '🏞️ 3:30 PM – Visit local cheese dairies, participate in tasting tours.',
        '🚆 6:00 PM – Return to Bern or Zurich.',
        '🍽️ 8:00 PM – Dinner at your hotel or nearby restaurant.',
      ],
    },
    {
      day: 'Day 5: Zurich Last Minute & Departure',
      details: [
        '☀️ Weather: 19°C, clear skies.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🛍️ 9:30 AM – Shopping along Bahnhofstrasse or visit Swiss National Museum.',
        '🍽️ 12:00 PM – Lunch at Haus Hiltl (world’s oldest vegetarian restaurant).',
        '🧳 2:00 PM – Return to hotel, pack up and check out.',
        '🚖 3:00 PM – Taxi or train to Zurich Airport.',
        '✈️ 5:30 PM – Depart from Zurich Airport.',
      ],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/img/swit.jpg"
          alt="Switzerland Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            🏔️ Discover Switzerland in 5 Days
          </h1>
        </div>
      </div>

      {/* Itinerary Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">
          🏔️ 5-Day Switzerland Adventure
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Explore Switzerland’s stunning landscapes, charming towns, and delicious cuisine with detailed travel, meals, and weather guidance.
        </p>

        {itinerary.map((day, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{day.day}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
              {day.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Travel Tips */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚆 Switzerland Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Consider a Swiss Travel Pass for unlimited trains, buses, and boats.</li>
            <li>Trains and public transport are extremely punctual.</li>
            <li>Carry cash for smaller shops and mountain cable cars.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
