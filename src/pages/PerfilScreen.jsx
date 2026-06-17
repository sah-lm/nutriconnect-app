import React from 'react';
import { Settings, LogOut } from 'lucide-react';

export default function PerfilScreen({ onLogout }) {
  return (
    <div className="h-full overflow-y-auto pb-28 bg-gray-100 p-6">
      
      {/* Header e Card do Usuário */}
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-xl font-bold text-gray-800">Perfil do usuário</h1>
        <button className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-md shadow-green-200">
          <Settings size={20} />
        </button>
      </div>

      <div className="bg-white p-5 rounded-[24px] shadow-sm flex items-center gap-4 mb-6 border border-gray-100">
        <div className="w-16 h-16 bg-green-500 rounded-full"></div>
        <div>
          <h2 className="font-bold text-gray-800 text-lg">João Silva</h2>
          <p className="text-gray-500 text-sm">26 Anos</p>
        </div>
      </div>

      {/* Grid de Medidas */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Peso</p>
          <p className="font-bold text-gray-800 text-lg">79,4 kg</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Altura</p>
          <p className="font-bold text-gray-800 text-lg">1,82 m</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">% De Gordura</p>
          <p className="font-bold text-gray-800 text-lg">12,5 %</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Massa Magra</p>
          <p className="font-bold text-gray-800 text-lg">69,5 kg</p>
        </div>
      </div>

      {/* Metas e Evolução */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Metas e Objetivos</p>
        <p className="font-bold text-gray-800 text-sm mb-1">Foco: Ganho de massa</p>
        <p className="font-bold text-gray-800 text-sm mb-1">Meta calórica: 2.950 kcal / dia</p>
        <p className="font-bold text-gray-800 text-sm">Meta de água: 2,8 litros / dia</p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Evolução Recente</p>
        <div className="flex items-center gap-3">
          <p className="font-bold text-gray-800 text-sm">Mês passado: 80,0 kg</p>
          <span className="text-green-500 font-bold text-sm">-1,5kg</span>
        </div>
      </div>

      {/* Botão de Sair */}
      <button 
        onClick={onLogout}
        className="w-full py-4 bg-red-50 text-red-500 font-bold rounded-2xl flex justify-center items-center gap-2 hover:bg-red-100 transition-colors"
      >
        <LogOut size={20} />
        Sair da Conta
      </button>

    </div>
  );
}