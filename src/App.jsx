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
  
  const [userData, setUserData] = useState({
    name: 'João Silva',
    age: '26',
    email: '',
    totalBudget: 500,
    weight: '79.4',
    height: '1.82',
    fat: '12.5',
    mass: '69.5',
    goal: 'Ganho de massa',
    calories: '2.950'
  });

  const [shoppingList, setShoppingList] = useState([
    { id: 'n1', nome: "Filé de Frango (3kg)", preco: 150.00, origin: 'nutri', bought: false },
    { id: 'n2', nome: "Ovos (3 dúzias)", preco: 50.00, origin: 'nutri', bought: false },
    { id: 'n3', nome: "Pão Integral & Aveia", preco: 50.00, origin: 'nutri', bought: false },
    { id: 'n4', nome: "Iogurte Natural", preco: 40.00, origin: 'nutri', bought: false },
    { id: 'n5', nome: "Batata Doce (2kg)", preco: 30.00, origin: 'nutri', bought: false },
    { id: 'n6', nome: "Macarrão Integral", preco: 20.00, origin: 'nutri', bought: false },
    { id: 'n7', nome: "Patinho (3kg)", preco: 140.00, origin: 'nutri', bought: false }
  ]);

  // AQUI DEFINIMOS AS IMAGENS JPG
  const [homeItems, setHomeItems] = useState([
    { id: 'patinho_promo', nome: "Patinho moído 500g", loja: "Supermercado Central", preco: 20.80, imagem: "imagens/patinho.jpg" },
    { id: 'banana', nome: "Cacho de banana-prata", loja: "Hortifrúti do Bairro", preco: 4.50, imagem: "imagens/banana.jpg" },
    { id: 'aveia', nome: "Aveia em flocos 500g", loja: "Mercadinho", preco: 8.90, imagem: "imagens/aveia.jpg" }
  ]);
  
  const valorPlanejado = shoppingList.reduce((acc, item) => acc + item.preco, 0); 
  const valorGasto = shoppingList.reduce((acc, item) => item.bought ? acc + item.preco : acc, 0); 

  const handleAddToList = (item) => {
    setShoppingList([...shoppingList, { ...item, origin: 'user', bought: false }]);
    setHomeItems(homeItems.filter(i => i.id !== item.id));
  };

  const handleRemoveFromList = (item) => {
    setHomeItems([...homeItems, item]);
    setShoppingList(shoppingList.filter(i => i.id !== item.id));
  };

  const handleToggleBought = (item) => {
    setShoppingList(shoppingList.map(i => i.id === item.id ? { ...i, bought: !i.bought } : i));
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
          <HomeScreen 
            onLogout={handleLogout} 
            userData={userData} 
            homeItems={homeItems} 
            onAddToList={handleAddToList}
            valorPlanejado={valorPlanejado}
            valorGasto={valorGasto}
          />
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
            onToggleBought={handleToggleBought}
          />
        )}
        
        {currentScreen === 'chat' && (
          <ChatScreen />
        )}
        
        {currentScreen === 'perfil' && (
          <PerfilScreen onLogout={handleLogout} userData={userData} setUserData={setUserData} />
        )}
        
        {currentScreen !== 'login' && currentScreen !== 'listaCompras' && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}