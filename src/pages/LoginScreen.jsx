import React from 'react';
import { Utensils } from 'lucide-react';

export default function LoginScreen({ onLogin }) {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-white">
      <div className="w-20 h-20 bg-green-500 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-green-200">
        <Utensils className="text-white w-10 h-10" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">NutriConnect</h1>
      <p className="text-center text-gray-500 mb-10">Sua dieta conectada com o seu bolso.</p>
      
      <div className="w-full space-y-4">
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
        />
        <input 
          type="password" 
          placeholder="Sua senha" 
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
        />
        <button 
          onClick={onLogin}
          className="w-full py-3 mt-4 bg-green-500 text-white font-semibold rounded-xl shadow-md shadow-green-200 hover:bg-green-600 transition-colors"
        >
          Entrar
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Ainda não tem conta? <span className="text-green-500 font-semibold cursor-pointer">Cadastre-se</span>
      </p>
    </div>
  );
}