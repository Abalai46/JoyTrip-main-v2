'use client';

import { FC } from 'react';

interface WeatherInfo {
  location: string;
  temperature: number;
  condition: string;
}

interface ChatMessageProps {
  role: 'user' | 'bot';
  text: string;
  weather?: WeatherInfo;
}

const ChatMessage: FC<ChatMessageProps> = ({ role, text, weather }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-5 py-3 rounded-lg shadow-md max-w-[80%] ${
          role === 'user'
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <div className="whitespace-pre-wrap">{text}</div>
        
        {/* แสดงข้อมูลสภาพอากาศถ้ามี */}
        {weather && (
          <div className="mt-3 pt-3 border-t border-gray-300">
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
              >
                <path d="M12 2a8 8 0 0 1 8 8c0 2.76-.98 5-2.2 6.7-1.2 1.7-2.8 2.8-4.8 3.3-.8.2-1.3-.1-1-1 .2-.6.3-1.2.4-1.8.1-.7-.4-1.2-1.1-1.2h-2.6c-.7 0-1.2.5-1.1 1.2.1.6.2 1.2.4 1.8.3.9-.2 1.2-1 1-2-.5-3.6-1.6-4.8-3.3C1 15 0 12.8 0 10a8 8 0 0 1 8-8h4z"/>
              </svg>
              <span className="font-medium">{weather.location}: </span>
              <span className="ml-1">{weather.temperature}°C, {weather.condition}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
