import React from 'react';
import { Home, Utensils, MessageCircle, User } from 'lucide-react';

export default function BottomNav({ currentScreen, setCurrentScreen }) {
  const navItems = [
    { id: 'home', icon: Home },
    { id: 'dieta', icon: Utensils },
    { id: 'chat', icon: MessageCircle },
    { id: 'perfil', icon: User },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-lg p-2 flex justify-between px-4 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isActive ? 'bg-green-500 text-white' : 'text-gray-400'
            }`}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
}