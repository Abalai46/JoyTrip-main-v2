'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function ParisTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival & Eiffel Tower',
      details: [
        '✈️ 10:00 AM – Arrive at Charles de Gaulle Airport.',
        '🚇 11:00 AM – Take RER B train to Gare du Nord, then Metro Line 4 to Saint-Michel (~45 mins).',
        '🛏️ 12:00 PM – Check-in at hotel near the Latin Quarter.',
        '🌤️ Weather: 20°C, partly sunny. Light layers recommended.',
        '',
        '🍽️ 1:00 PM – Lunch at Le Comptoir du Relais (classic French bistro).',
        '🗼 3:00 PM – Visit Eiffel Tower; pre-book tickets for summit access.',
        '☕ 5:30 PM – Coffee and pastries at Café de Flore.',
        '🌇 7:30 PM – Seine river cruise at sunset.',
        '🍽️ 9:00 PM – Dinner at Le Jules Verne (Michelin-starred, inside Eiffel Tower).',
      ],
    },
    {
      day: 'Day 2: Louvre & Montmartre',
      details: [
        '🌤️ Weather: 22°C, sunny.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🎨 9:00 AM – Visit Louvre Museum. Allocate 3 hours; don’t miss Mona Lisa and Venus de Milo.',
        '🥪 12:30 PM – Picnic lunch at Jardin des Tuileries.',
        '🚇 2:00 PM – Metro to Montmartre (Anvers station).',
        '🖼️ 3:00 PM – Explore Sacré-Cœur, Place du Tertre artists’ square.',
        '🍦 5:00 PM – Try famous Berthillon ice cream on Île Saint-Louis.',
        '🍽️ 7:30 PM – Dinner at Le Moulin de la Galette (traditional French).',
      ],
    },
    {
      day: 'Day 3: Notre Dame & Le Marais',
      details: [
        '☀️ Weather: 19°C, mild.',
        '🥐 8:30 AM – Breakfast near hotel.',
        '⛪ 9:30 AM – Visit Notre Dame Cathedral and Sainte-Chapelle.',
        '🍽️ 12:00 PM – Lunch at Breizh Café (crepes and galettes).',
        '🛍️ 1:30 PM – Stroll Le Marais district, visit boutiques and Picasso Museum.',
        '☕ 4:00 PM – Coffee at Café Charlot (classic Parisian café).',
        '🌆 6:00 PM – Walk along the Seine and Pont des Arts.',
        '🍽️ 8:00 PM – Dinner at Chez Janou (Provence-style cuisine).',
      ],
    },
    {
      day: 'Day 4: Palace of Versailles',
      details: [
        '🌦️ Weather: 18°C, chance of rain; bring umbrella.',
        '🍳 7:30 AM – Early breakfast.',
        '🚆 8:30 AM – Train RER C to Versailles Château Rive Gauche (~40 mins).',
        '🏰 9:30 AM – Tour Palace of Versailles & Gardens.',
        '🥪 1:00 PM – Lunch at La Petite Venise inside Versailles park.',
        '🛍️ 3:00 PM – Explore Versailles town center shops.',
        '🚆 5:00 PM – Return to Paris.',
        '🍽️ 7:00 PM – Dinner near hotel or try Le Procope (historic restaurant).',
      ],
    },
    {
      day: 'Day 5: Last-minute Shopping & Departure',
      details: [
        '☀️ Weather: 20°C, clear skies.',
        '🥐 8:00 AM – Breakfast at hotel.',
        '🛍️ 9:00 AM – Shopping on Champs-Élysées and Galeries Lafayette.',
        '🍽️ 12:00 PM – Lunch at Ladurée for macarons and light fare.',
        '🧳 2:00 PM – Pack and check out.',
        '🚖 3:00 PM – Taxi or RER B train to Charles de Gaulle Airport.',
        '✈️ 5:00 PM – Departure flight.',
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/img/paris.avif"
          alt="Paris Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">🇫🇷 5-Day Paris Adventure</h1>
        <p className="text-lg text-gray-700 mb-12">
          Experience the City of Lights’ culture, history, and cuisine with precise travel, meals, and weather tips.
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚇 Paris Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Buy a Paris Visite pass for unlimited Metro, bus, and RER travel.</li>
            <li>Use the official RATP app or Citymapper for real-time navigation.</li>
            <li>Beware of pickpockets in crowded tourist areas.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
