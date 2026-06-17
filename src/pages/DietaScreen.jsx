import React, { useState } from 'react';
import { RefreshCw, CheckSquare, Square } from 'lucide-react';

export default function DietaScreen() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const refeicoes = [
    { id: 1, tipo: "Café da manhã - 6:30", nome: "Pão integral com ovos mexidos e café", kcal: "410 kcal" },
    { id: 2, tipo: "Lanche da manhã - 10:30", nome: "Iogurte natural desnatado com morangos", kcal: "140 kcal" },
    { id: 3, tipo: "Almoço - 12:30", nome: "Frango grelhado com purê de batata-doce", kcal: "410 kcal" },
    { id: 4, tipo: "Lanche da tarde - 16:00", nome: "Mix de castanhas com uma maçã", kcal: "190 kcal" },
    { id: 5, tipo: "Jantar - 20:00", nome: "Macarrão integral com patinho e molho", kcal: "430 kcal" },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-100">
      
      {/* Header Fixo */}
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-[30px] shadow-sm z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">Dieta semanal</h1>
          <button className="bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-600">
            Lista de compras
          </button>
        </div>

        {/* Carrossel de Dias */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
          {[{d: '18', s: 'Seg', a: true}, {d: '19', s: 'Ter'}, {d: '20', s: 'Qua'}, {d: '21', s: 'Qui'}, {d: '22', s: 'Sex'}].map((dia, i) => (
            <div key={i} className={`min-w-[60px] h-[70px] rounded-2xl flex flex-col items-center justify-center font-bold ${dia.a ? 'bg-green-500 text-white shadow-md shadow-green-200' : 'bg-gray-100 text-gray-500'}`}>
              <span className="text-xl">{dia.d}</span>
              <span className="text-xs">{dia.s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de Refeições */}
      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-28 space-y-4">
        {refeicoes.map((ref) => (
          <div key={ref.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex-1 pr-4">
              <p className="text-[10px] text-gray-400 font-bold uppercase">{ref.tipo}</p>
              <p className="font-bold text-gray-800 text-sm leading-tight mt-1 mb-1">{ref.nome}</p>
              <p className="text-xs text-gray-500">{ref.kcal}</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition">
                <RefreshCw size={18} />
              </button>
              <button 
                onClick={() => toggleCheck(ref.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition border-2 ${checkedItems[ref.id] ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-green-500 text-green-500'}`}
              >
                {checkedItems[ref.id] ? <CheckSquare size={20} /> : <Square size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}