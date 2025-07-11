'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';

export default function NewYorkTripPage() {
  const itinerary = [
    {
      day: 'Day 1: Arrival, Hotel Check-in & Times Square',
      details: [
        '✈️ 10:30 AM – Arrive at JFK International Airport (Terminal 4).',
        '🚇 11:15 AM – Take AirTrain JFK to Jamaica Station, then transfer to the E subway toward World Trade Center. Ride to 42 St – Port Authority Bus Terminal (~60 mins, $10.75).',
        '🛏️ 12:30 PM – Check-in at The Row NYC near Times Square.',
        '🌤️ Weather: 26°C, sunny. Light clothing and sunscreen recommended.',
        '',
        '🍽️ 1:30 PM – Lunch at Shake Shack (8th Ave). Grab a classic NYC burger (~$15).',
        '🎡 2:30 PM – Explore Times Square: red stairs, giant screens, street performers.',
        '🎭 4:00 PM – Browse Broadway ticket deals at TKTS booth.',
        '☕ 5:30 PM – Coffee break at Blue Bottle Coffee (Bryant Park area).',
        '🌇 6:30 PM – Walk to Rockefeller Center and visit Top of the Rock for sunset views.',
        '🍽️ 8:00 PM – Dinner at Carmine’s Italian (large portions, ~$30/person).',
        '🚶 9:30 PM – Leisure stroll around Midtown. Head back to hotel.',
      ],
    },
    {
      day: 'Day 2: Central Park & Museum Mile',
      details: [
        '🌤️ Weather: 24°C, partly cloudy. Good for walking; bring sunglasses.',
        '🍳 8:30 AM – Breakfast at Sarabeth’s Central Park South (American brunch style).',
        '🌳 9:30 AM – Walk through Central Park. Visit Bethesda Terrace, Bow Bridge, Strawberry Fields.',
        '🖼️ 11:30 AM – Visit The Metropolitan Museum of Art. Allocate ~2 hours.',
        '🥪 1:30 PM – Picnic lunch in Sheep Meadow or try sandwiches from Dean & Deluca.',
        '🛍️ 3:00 PM – Walk down 5th Ave: see St. Patrick’s Cathedral, luxury shops, Apple Cube.',
        '🍽️ 6:00 PM – Dinner at Eleven Madison Park (3 Michelin stars, modern American). Reserve early.',
        '🌉 8:30 PM – Evening walk across Brooklyn Bridge. Scenic night skyline.',
      ],
    },
    {
      day: 'Day 3: Statue of Liberty, Wall Street & Downtown',
      details: [
        '⛅ Weather: 22°C, mild. Perfect for ferry rides.',
        '🥯 8:00 AM – Breakfast at Russ & Daughters (bagels with lox).',
        '🗽 9:00 AM – Ferry to Statue of Liberty & Ellis Island. Book ahead. Allocate 3 hours.',
        '🍕 1:00 PM – Lunch at Adrienne’s Pizza Bar (Stone Street, Financial District).',
        '📸 2:30 PM – Explore Wall Street, Charging Bull, and NY Stock Exchange.',
        '🕊️ 4:00 PM – 9/11 Memorial and Museum. Plan ~1.5 hours.',
        '🏙️ 5:30 PM – Visit One World Observatory (Freedom Tower).',
        '🍣 7:30 PM – Dinner at Nobu Downtown (fusion sushi, Michelin recommended).',
      ],
    },
    {
      day: 'Day 4: Brooklyn & Artistic Exploration',
      details: [
        '☁️ Weather: 21°C, chance of rain. Bring light jacket.',
        '☕ 8:30 AM – Coffee at Brooklyn Heights Promenade. Great skyline photos.',
        '🍳 9:30 AM – Breakfast at Butler Bake Shop (DUMBO).',
        '🖼️ 10:30 AM – Explore DUMBO: art galleries, Instagram spot under Manhattan Bridge.',
        '🛍️ 12:00 PM – Brooklyn Flea Market or thrift shops in Williamsburg.',
        '🍔 1:30 PM – Lunch at Smorgasburg food market (weekends only) or Juliana’s Pizza.',
        '📚 3:00 PM – Visit independent bookstores or Brooklyn Art Library.',
        '🌃 6:00 PM – Rooftop drinks and dinner at Westlight (Williamsburg Hotel, panoramic view).',
      ],
    },
    {
      day: 'Day 5: Last-Minute Exploration & Departure',
      details: [
        '🌦️ Weather: 23°C, light breeze. Great day for walking.',
        '🥯 8:30 AM – Breakfast at Ess-a-Bagel (Midtown).',
        '🖼️ 9:30 AM – Visit MoMA or explore The High Line (choose based on interest).',
        '🛍️ 11:30 AM – Shopping at Macy’s Herald Square or Chelsea Market.',
        '🍽️ 1:00 PM – Lunch at Los Tacos No. 1 (Chelsea Market, affordable & delicious).',
        '🧳 2:30 PM – Return to hotel. Final packing.',
        '🚖 3:30 PM – Uber or Subway + AirTrain to JFK (allow 1 hour 30 mins total).',
        '✈️ 5:30 PM – Depart from NYC.',
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
          src="/img/newyork.jpg"
          alt="New York Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Itinerary Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">
          🗽 5-Day New York City Adventure
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Dive deep into New York’s top landmarks, food culture, and hidden gems — all planned with precise timing, weather, and transport in mind.
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🚇 NYC Transport Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
            <li>Buy a MetroCard or use Apple/Google Pay to tap into subway.</li>
            <li>Use Google Maps or Citymapper for real-time subway navigation.</li>
            <li>Subways run 24/7 but be cautious during late-night hours.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
