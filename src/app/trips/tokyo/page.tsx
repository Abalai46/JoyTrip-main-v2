'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function TokyoTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Shinjuku Exploration',
      details: [
        '✈️ 9:00 AM – Arrive at Narita International Airport.',
        '🚆 10:30 AM – Take Narita Express (NEX) to Shinjuku Station (~90 mins, ~3000 JPY).',
        '🛏️ 12:30 PM – Check-in at hotel near Shinjuku (e.g., Hotel Gracery Shinjuku).',
        '🌤️ Weather: 22°C, partly cloudy. Light jacket recommended.',
        '',
        '🍣 1:30 PM – Lunch at Omoide Yokocho: small yakitori and sushi bars.',
        '🏙️ 3:00 PM – Explore Shinjuku Gyoen National Garden.',
        '🌆 5:30 PM – Visit the Tokyo Metropolitan Government Building Observatory for sunset views.',
        '🍜 7:00 PM – Dinner at Ichiran Ramen Shinjuku.',
        '🚶 8:30 PM – Walk around Kabukicho nightlife district.',
      ],
    },
    {
      day: 'Day 2: Asakusa, Ueno & Akihabara',
      details: [
        '🌤️ Weather: 24°C, sunny. Comfortable for walking.',
        '🍳 8:00 AM – Breakfast at a local bakery near hotel.',
        '⛩️ 9:00 AM – Visit Senso-ji Temple in Asakusa, explore Nakamise shopping street.',
        '🛥️ 11:30 AM – Take Sumida River cruise to Ueno Park.',
        '🖼️ 12:30 PM – Lunch near Ueno Park and visit Tokyo National Museum (~2 hours).',
        '🎮 3:30 PM – Explore Akihabara Electric Town for gadgets and anime culture.',
        '🍣 7:00 PM – Dinner at sushi train restaurant in Akihabara.',
      ],
    },
    {
      day: 'Day 3: Shibuya & Harajuku',
      details: [
        '☀️ Weather: 23°C, partly sunny.',
        '🥐 8:30 AM – Breakfast at a café in Harajuku.',
        '🚶 9:30 AM – Walk Takeshita Street for quirky fashion and sweets.',
        '🌳 11:00 AM – Visit Meiji Shrine.',
        '🍣 12:30 PM – Lunch at Uobei Shibuya (conveyor belt sushi).',
        '🛍️ 2:00 PM – Explore Shibuya crossing and shopping streets.',
        '☕ 4:30 PM – Coffee break at Streamer Coffee Company.',
        '🌇 6:30 PM – Sunset at Shibuya Sky observation deck.',
        '🍜 8:00 PM – Dinner at Nabezo Shibuya (hot pot).',
      ],
    },
    {
      day: 'Day 4: Odaiba & Tokyo Bay',
      details: [
        '☁️ Weather: 21°C, cloudy, chance of rain. Bring umbrella.',
        '🍳 8:00 AM – Breakfast at hotel or nearby café.',
        '🚆 9:30 AM – Take Yurikamome Line to Odaiba.',
        '🎡 10:00 AM – Visit teamLab Planets Tokyo (immersive digital art).',
        '🍔 12:30 PM – Lunch at DiverCity Tokyo Plaza food court.',
        '🚤 2:00 PM – Walk around Odaiba Seaside Park and take a bay cruise.',
        '🛍️ 4:00 PM – Explore shopping and entertainment complexes (Aqua City, VenusFort).',
        '🍣 7:00 PM – Dinner at Sushi Dai at Toyosu Market (reserve ahead).',
      ],
    },
    {
      day: 'Day 5: Tsukiji Market & Departure',
      details: [
        '🌤️ Weather: 22°C, clear skies.',
        '🥢 6:00 AM – Early breakfast at Tsukiji Outer Market (fresh sushi and street food).',
        '🚇 8:30 AM – Last-minute shopping in Ginza district.',
        '👜 11:00 AM – Return to hotel for packing and checkout.',
        '🚆 12:30 PM – Take Narita Express from Tokyo Station to Narita Airport (~90 mins).',
        '✈️ 3:30 PM – Depart from Narita International Airport.',
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
          src="/img/tokyo.jpg"
          alt="Tokyo Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Itinerary Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">
          🗼 5-Day Tokyo Adventure
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Experience Tokyo’s blend of tradition and cutting-edge modernity with this detailed itinerary including transport, meals, and weather tips.
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚆 Tokyo Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Purchase a Suica or Pasmo card for easy train and bus rides.</li>
            <li>Use Google Maps or HyperDia to plan train routes and schedules.</li>
            <li>Trains are punctual; avoid rush hours if possible for comfort.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
