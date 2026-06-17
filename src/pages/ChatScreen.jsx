import React from 'react';
import { ArrowRightLeft, Send } from 'lucide-react';

export default function ChatScreen() {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-[30px] shadow-sm z-10 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">N</div>
          <span className="font-bold text-gray-800">Nutri Mariana Costa</span>
        </div>
        <button className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
          <ArrowRightLeft size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="text-center text-xs text-gray-400 my-4 font-medium">Hoje</div>
        
        <div className="flex flex-col items-start max-w-[80%]">
          <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm text-sm text-gray-700 shadow-sm">
            Olá! Como você se sentiu com a dieta essa semana?
          </div>
          <span className="text-[10px] text-gray-400 mt-1 ml-1">12:00</span>
        </div>

        <div className="flex flex-col items-end w-full">
          <div className="bg-green-600 text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm max-w-[80%]">
            Muito bem, obrigado! Estou economizando bastante.
          </div>
          <span className="text-[10px] text-gray-400 mt-1 mr-1 flex items-center gap-1">
            ✓ 12:10
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-t-[30px] border-t border-gray-100 pb-28">
        <div className="flex items-center gap-2">
          <input 
            type="text" placeholder="Digite uma mensagem..." 
            className="flex-1 bg-gray-100 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md shadow-green-200 shrink-0 hover:bg-green-600">
            <Send size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}