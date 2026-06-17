import React, { useState } from 'react';

// Importando as nossas telas e componentes que estão nas outras pastas
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import DietaScreen from './pages/DietaScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  // Esse estado diz qual tela deve aparecer primeiro
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 font-sans p-4">
      {/* Container que simula a tela do celular */}
      <div className="w-full max-w-[375px] h-[812px] bg-gray-50 rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-neutral-800">
        
        {/* Lógica: Mostre a tela certa baseada no estado */}
        {currentScreen === 'login' && <LoginScreen onLogin={() => setCurrentScreen('home')} />}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'dieta' && <DietaScreen />}
        
        {/* O Menu inferior só aparece se não estivermos na tela de login */}
        {currentScreen !== 'login' && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}