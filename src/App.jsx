import React, { useState } from 'react';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import DietaScreen from './pages/DietaScreen';
import ChatScreen from './pages/ChatScreen';
import PerfilScreen from './pages/PerfilScreen';
import ListaComprasScreen from './pages/ListaComprasScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  
  // O NOSSO BANCO DE DADOS GERAL
  const [userData, setUserData] = useState({
    name: 'João Silva',
    age: '26',
    email: '',
    spent: 480, // O quanto já foi gasto!
    totalBudget: 1000, // O orçamento total (editável no perfil)
    weight: '79.4',
    height: '1.82',
    fat: '12.5',
    mass: '69.5',
    goal: 'Ganho de massa',
    calories: '2.950'
  });

  // O NOSSO BANCO DE DADOS DA LISTA DE COMPRAS
  const [homeItems, setHomeItems] = useState([
    { id: 'patinho', nome: "Patinho moído 500g", loja: "Supermercado Central", preco: 20.80, icone: "🥩", bg: "bg-red-100", color: "text-red-800" },
    { id: 'banana', nome: "Cacho de banana-prata", loja: "Hortifrúti do Bairro", preco: 4.50, icone: "🍌", bg: "bg-yellow-100", color: "text-yellow-600" },
    { id: 'aveia', nome: "Aveia em flocos 500g", loja: "Mercadinho", preco: 8.90, icone: "🥣", bg: "bg-blue-100", color: "text-blue-600" }
  ]);
  
  const [shoppingList, setShoppingList] = useState([]);

  // Lógica de transferir os itens
  const handleAddToList = (item) => {
    setShoppingList([...shoppingList, item]);
    setHomeItems(homeItems.filter(i => i.id !== item.id));
  };

  const handleRemoveFromList = (item) => {
    setHomeItems([...homeItems, item]);
    setShoppingList(shoppingList.filter(i => i.id !== item.id));
  };

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
          <HomeScreen onLogout={handleLogout} userData={userData} homeItems={homeItems} onAddToList={handleAddToList} />
        )}
        
        {currentScreen === 'dieta' && (
          <DietaScreen onOpenListaCompras={() => setCurrentScreen('listaCompras')} />
        )}
        
        {currentScreen === 'listaCompras' && (
          <ListaComprasScreen 
            onBack={() => setCurrentScreen('dieta')} 
            shoppingList={shoppingList} 
            homeItems={homeItems} 
            onAdd={handleAddToList} 
            onRemove={handleRemoveFromList} 
          />
        )}
        
        {currentScreen === 'chat' && (
          <ChatScreen />
        )}
        
        {currentScreen === 'perfil' && (
          <PerfilScreen onLogout={handleLogout} userData={userData} setUserData={setUserData} />
        )}
        
        {/* O Menu inferior SOME se estivermos no login ou na tela de lista de compras! */}
        {currentScreen !== 'login' && currentScreen !== 'listaCompras' && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}