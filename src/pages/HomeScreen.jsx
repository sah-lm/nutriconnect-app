import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function HomeScreen() {
  return (
    <div className="h-full overflow-y-auto pb-24 bg-gray-50">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-b-[30px] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            NutriConnect
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-800 text-lg">Olá, João!</span>
            <div className="w-10 h-10 bg-blue-300 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>

        {/* Orçamento Mensal */}
        <div className="mt-2">
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-gray-800">Orçamento mensal</span>
            <span className="text-gray-400 text-sm font-medium">Maio</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-800 font-semibold">R$ 480,00</span>
            <span className="text-gray-500">R$ 1000,00</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="bg-green-700 h-3 rounded-full w-[48%]"></div>
          </div>
          <p className="text-xs text-gray-500 font-medium">Faltam 13 dias para fechar o mês.</p>
        </div>
      </div>

      {/* Economia */}
      <div className="px-6 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 text-sm">ECONOMIA</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 snap-x">
          
          {/* Card Economia 1 */}
          <div className="min-w-[150px] bg-white rounded-2xl p-3 shadow-sm border border-gray-100 snap-start relative">
            <div className="w-full h-24 bg-red-100 rounded-xl mb-3 overflow-hidden">
               <div className="w-full h-full bg-red-800/20 flex items-center justify-center">🥩</div>
            </div>
            <p className="text-[10px] text-gray-400 font-semibold">Supermercado Central</p>
            <p className="font-bold text-gray-800 text-sm leading-tight mb-1">Patinho moído <br/>500g</p>
            <p className="font-bold text-green-600">R$ 20,80</p>
            <button className="absolute bottom-3 right-3 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white">
              <PlusCircle size={16} />
            </button>
          </div>

          {/* Card Economia 2 */}
          <div className="min-w-[150px] bg-white rounded-2xl p-3 shadow-sm border border-gray-100 snap-start relative">
            <div className="w-full h-24 bg-yellow-100 rounded-xl mb-3 overflow-hidden">
              <div className="w-full h-full bg-yellow-600/20 flex items-center justify-center">🍌</div>
            </div>
            <p className="text-[10px] text-gray-400 font-semibold">Hortifrúti do Bairro</p>
            <p className="font-bold text-gray-800 text-sm leading-tight mb-1">Cacho de <br/>banana-prata</p>
            <p className="font-bold text-green-600">R$ 4,50</p>
            <button className="absolute bottom-3 right-3 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white">
              <PlusCircle size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Próxima Refeição */}
      <div className="px-6 mt-6 mb-6">
        <h2 className="font-bold text-gray-800 mb-3 text-sm">PRÓXIMA REFEIÇÃO</h2>
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex gap-4">
           <div className="w-24 h-24 bg-orange-100 rounded-xl shrink-0 flex items-center justify-center">🍗</div>
           <div className="flex flex-col justify-center">
             <p className="text-[10px] text-gray-400 font-semibold">Almoço - 12:00</p>
             <p className="font-bold text-gray-800 text-sm leading-tight mt-1 mb-1">Frango grelhado com purê de batata-doce</p>
             <p className="text-xs text-gray-500">410 kcal</p>
           </div>
        </div>
      </div>

    </div>
  );
}