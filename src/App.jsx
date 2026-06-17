import React, { useState } from 'react';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import DietaScreen from './pages/DietaScreen';
import ChatScreen from './pages/ChatScreen';
import PerfilScreen from './pages/PerfilScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  
  // O NOSSO "BANCO DE DADOS" GLOBAL!
  const [userData, setUserData] = useState({
    name: 'João Silva',
    age: '26',
    email: '',
    budget: 480,
    totalBudget: 1000,
    weight: '79.4',
    height: '1.82',
    fat: '12.5',
    mass: '69.5',
    goal: 'Ganho de massa',
    calories: '2.950'
  });

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 font-sans p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-gray-50 rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-neutral-800">
        
        {currentScreen === 'login' && (
          <LoginScreen onLogin={() => setCurrentScreen('home')} setUserData={setUserData} userData={userData} />
        )}
        
        {currentScreen === 'home' && (
          <HomeScreen onLogout={handleLogout} userData={userData} />
        )}
        
        {currentScreen === 'dieta' && (
          <DietaScreen />
        )}
        
        {currentScreen === 'chat' && (
          <ChatScreen />
        )}
        
        {currentScreen === 'perfil' && (
          <PerfilScreen onLogout={handleLogout} userData={userData} setUserData={setUserData} />
        )}
        
        {currentScreen !== 'login' && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}