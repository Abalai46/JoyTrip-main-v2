'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function BangkokTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Riverside Exploration',
      details: [
        '✈️ 8:00 AM – Arrive at Suvarnabhumi Airport (BKK).',
        '🚗 9:00 AM – Taxi or Airport Rail Link to Phra Arthit area (~45 mins).',
        '🛏️ 10:00 AM – Check-in at riverside hotel near Khao San Road.',
        '🌤️ Weather: 32°C, hot and humid. Light clothing & sunscreen needed.',
        '',
        '🍽️ 12:00 PM – Lunch at The Deck by Arun (view of Wat Arun).',
        '🛶 2:00 PM – Take a long-tail boat tour on Chao Phraya River.',
        '🕌 4:00 PM – Visit Wat Pho (Reclining Buddha).',
        '☕ 5:30 PM – Coffee and mango sticky rice at a local café.',
        '🌇 7:00 PM – Dinner at Sala Rattanakosin rooftop with temple views.',
      ],
    },
    {
      day: 'Day 2: Grand Palace & Old Town',
      details: [
        '🌤️ Weather: 33°C, sunny with slight breeze.',
        '🍳 7:30 AM – Breakfast at hotel.',
        '🏰 8:30 AM – Visit Grand Palace and Emerald Buddha Temple (arrive early to avoid crowds).',
        '🥢 12:00 PM – Lunch at Thip Samai (famous pad thai).',
        '🛍️ 2:00 PM – Explore Chinatown markets and Sampeng Lane shopping.',
        '☕ 4:00 PM – Refreshing Thai iced tea at a street vendor.',
        '🌆 6:00 PM – Sunset at Wat Saket (Golden Mount).',
        '🍽️ 8:00 PM – Dinner at Raan Jay Fai (Michelin-starred street food).',
      ],
    },
    {
      day: 'Day 3: Chatuchak Market & Modern Bangkok',
      details: [
        '🌦️ Weather: 31°C, chance of afternoon showers.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🛍️ 9:00 AM – Visit Chatuchak Weekend Market (if weekend) for shopping and street food.',
        '🍽️ 12:30 PM – Lunch at local stalls inside market.',
        '🏙️ 2:00 PM – Explore Siam Paragon and MBK Center malls.',
        '☕ 4:30 PM – Coffee break at Roast Café in Thonglor.',
        '🌃 7:00 PM – Dinner and drinks at Octave Rooftop Lounge & Bar (Marriott Hotel).',
      ],
    },
    {
      day: 'Day 4: Ayutthaya Day Trip',
      details: [
        '☀️ Weather: 32°C, mostly sunny.',
        '🥪 6:30 AM – Early breakfast and depart by train or private tour to Ayutthaya (~1.5 hours).',
        '🏯 9:00 AM – Explore historic temples: Wat Mahathat, Wat Phra Si Sanphet.',
        '🍽️ 12:30 PM – Lunch at local riverside restaurant.',
        '🚲 2:00 PM – Rent bicycle to explore more ruins and Buddha statues.',
        '🚆 4:30 PM – Return to Bangkok.',
        '🍽️ 7:00 PM – Dinner at Cabbages & Condoms (unique themed restaurant).',
      ],
    },
    {
      day: 'Day 5: Relaxation & Departure',
      details: [
        '☀️ Weather: 33°C, hot and sunny.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🛀 10:00 AM – Spa morning with Thai massage at Health Land Spa.',
        '🛍️ 1:00 PM – Last-minute shopping at Terminal 21 Mall.',
        '🍽️ 2:30 PM – Lunch at Pier 21 Food Court (affordable Thai dishes).',
        '🧳 4:00 PM – Return to hotel, pack and check out.',
        '🚖 5:00 PM – Taxi to Suvarnabhumi Airport for departure.',
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/img/bangkok.avif"
          alt="Bangkok Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">🇹🇭 5-Day Bangkok Adventure</h1>
        <p className="text-lg text-gray-700 mb-12">
          Discover vibrant street life, ancient temples, and amazing food with detailed timing, weather, and transport advice.
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

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚖 Bangkok Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Use the BTS Skytrain and MRT subway for fast travel around the city.</li>
            <li>Boat taxis on the Chao Phraya River are scenic and efficient.</li>
            <li>Always negotiate fares with tuk-tuk drivers before your ride.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
