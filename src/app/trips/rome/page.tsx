'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function RomeTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Ancient Rome',
      details: [
        '✈️ 9:30 AM – Arrive at Leonardo da Vinci–Fiumicino Airport.',
        '🚗 10:30 AM – Take Leonardo Express train to Roma Termini (~32 mins).',
        '🛏️ 11:15 AM – Check-in at hotel near the historic center.',
        '🌤️ Weather: 23°C, sunny. Comfortable walking shoes recommended.',
        '',
        '🍽️ 12:30 PM – Lunch at Trattoria da Enzo al 29 (classic Roman dishes).',
        '🏛️ 2:00 PM – Visit Colosseum and Roman Forum (pre-book tickets).',
        '☕ 5:00 PM – Coffee break at Sant’Eustachio Il Caffè.',
        '🌅 6:30 PM – Walk to Capitoline Hill for sunset views.',
        '🍽️ 8:00 PM – Dinner at Roscioli (famous for carbonara and cured meats).',
      ],
    },
    {
      day: 'Day 2: Vatican City & Trastevere',
      details: [
        '☀️ Weather: 22°C, mostly sunny.',
        '🍳 7:30 AM – Breakfast at hotel.',
        '⛪ 8:30 AM – Visit Vatican Museums and Sistine Chapel (book early).',
        '🕍 12:30 PM – Explore St. Peter’s Basilica and Square.',
        '🍽️ 1:30 PM – Lunch at Borgo Pio street café.',
        '🚶 3:00 PM – Walk across Tiber River to Trastevere neighborhood.',
        '☕ 4:30 PM – Coffee and gelato at Gelateria del Viale.',
        '🌆 7:00 PM – Dinner at Da Enzo al 29 (authentic Roman trattoria).',
      ],
    },
    {
      day: 'Day 3: Baroque Rome & Piazzas',
      details: [
        '🌤️ Weather: 24°C, sunny.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🚶 9:00 AM – Visit Pantheon, Trevi Fountain, and Spanish Steps.',
        '🍽️ 12:00 PM – Lunch at Armando al Pantheon.',
        '🛍️ 2:00 PM – Shopping along Via del Corso.',
        '☕ 4:00 PM – Espresso at Caffè Greco.',
        '🌇 6:30 PM – Sunset at Pincian Hill overlooking Piazza del Popolo.',
        '🍽️ 8:00 PM – Dinner at Il Margutta RistorArte (vegetarian fine dining).',
      ],
    },
    {
      day: 'Day 4: Appian Way & Catacombs',
      details: [
        '☁️ Weather: 21°C, mild clouds.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🚴 9:00 AM – Rent bike to explore Appian Way (Via Appia Antica).',
        '🕯️ 11:00 AM – Visit Catacombs of San Callisto and San Sebastiano.',
        '🍽️ 1:00 PM – Lunch at nearby Osteria on Appian Way.',
        '🚇 3:00 PM – Return to city center.',
        '☕ 4:00 PM – Relax at Piazza Navona café.',
        '🍽️ 7:30 PM – Dinner at La Pergola (3 Michelin stars, reservation required).',
      ],
    },
    {
      day: 'Day 5: Villa Borghese & Departure',
      details: [
        '☀️ Weather: 23°C, clear skies.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🏞️ 9:00 AM – Visit Villa Borghese Gardens and Gallery (book tickets in advance).',
        '🛍️ 12:00 PM – Last-minute shopping at Via Condotti.',
        '🍽️ 1:00 PM – Lunch at Caffè Propaganda.',
        '🧳 2:30 PM – Pack and check out.',
        '🚖 3:00 PM – Taxi to Fiumicino Airport.',
        '✈️ 5:00 PM – Depart Rome.',
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/img/rome.avif"
          alt="Rome Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">🇮🇹 5-Day Rome Adventure</h1>
        <p className="text-lg text-gray-700 mb-12">
          Dive into Rome’s history, art, and cuisine with detailed daily plans including transport, meals, and weather.
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚇 Rome Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Use Roma Pass for metro, buses, and discounted entry to museums.</li>
            <li>Wear comfortable shoes as many streets are cobbled and require walking.</li>
            <li>Buy tickets for popular sites online in advance to skip lines.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
