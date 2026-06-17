import React, { useState } from 'react';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import DietaScreen from './pages/DietaScreen';
import ChatScreen from './pages/ChatScreen';    // IMPORT NOVO
import PerfilScreen from './pages/PerfilScreen'; // IMPORT NOVO
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 font-sans p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-gray-50 rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-neutral-800">
        
        {currentScreen === 'login' && <LoginScreen onLogin={() => setCurrentScreen('home')} />}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'dieta' && <DietaScreen />}
        {currentScreen === 'chat' && <ChatScreen />}      {/* TELA NOVA */}
        {currentScreen === 'perfil' && <PerfilScreen onLogout={handleLogout} />}  {/* TELA NOVA */}
        
        {currentScreen !== 'login' && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}