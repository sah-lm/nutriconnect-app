import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export default function DietaScreen({ onOpenListaCompras }) {
  const [diaSelecionado, setDiaSelecionado] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [`${diaSelecionado}-${id}`]: !prev[`${diaSelecionado}-${id}`] }));
  };

  const dias = [
    { d: '18', s: 'Seg' }, { d: '19', s: 'Ter' }, { d: '20', s: 'Qua' }, 
    { d: '21', s: 'Qui' }, { d: '22', s: 'Sex' }
  ];

  const dietasPorDia = [
    [ // Segunda
      { id: 1, tipo: "Café da manhã", nome: "Pão integral com ovos e café", kcal: "410 kcal" },
      { id: 2, tipo: "Almoço", nome: "Frango grelhado com batata-doce", kcal: "410 kcal" },
      { id: 3, tipo: "Jantar", nome: "Macarrão integral com patinho", kcal: "430 kcal" },
    ],
    [ // Terça
      { id: 1, tipo: "Café da manhã", nome: "Tapioca com queijo branco", kcal: "350 kcal" },
      { id: 2, tipo: "Almoço", nome: "Peixe assado com brócolis", kcal: "380 kcal" },
      { id: 3, tipo: "Jantar", nome: "Sopa de legumes com frango", kcal: "290 kcal" },
    ],
    [ // Quarta
      { id: 1, tipo: "Café da manhã", nome: "Aveia com banana e mel", kcal: "320 kcal" },
      { id: 2, tipo: "Almoço", nome: "Bife magro com arroz integral", kcal: "450 kcal" },
      { id: 3, tipo: "Jantar", nome: "Salada completa com ovos", kcal: "250 kcal" },
    ],
    [ // Quinta
      { id: 1, tipo: "Café da manhã", nome: "Iogurte com frutas vermelhas", kcal: "210 kcal" },
      { id: 2, tipo: "Almoço", nome: "Strogonoff fit de frango", kcal: "420 kcal" },
      { id: 3, tipo: "Jantar", nome: "Crepioca de frango desfiado", kcal: "310 kcal" },
    ],
    [ // Sexta
      { id: 1, tipo: "Café da manhã", nome: "Pão de queijo fit", kcal: "280 kcal" },
      { id: 2, tipo: "Almoço", nome: "Feijoada light (carnes magras)", kcal: "550 kcal" },
      { id: 3, tipo: "Jantar", nome: "Hambúrguer artesanal fit", kcal: "480 kcal" },
    ]
  ];

  return (
    <div className="h-full flex flex-col bg-gray-100">
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-[30px] shadow-sm z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">Dieta semanal</h1>
          <button 
            onClick={onOpenListaCompras}
            className="bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Lista de compras
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
          {dias.map((dia, i) => (
            <button 
              key={i} 
              onClick={() => setDiaSelecionado(i)}
              className={`min-w-[60px] h-[70px] rounded-2xl flex flex-col items-center justify-center font-bold transition-all ${
                diaSelecionado === i ? 'bg-green-500 text-white shadow-md shadow-green-200 scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{dia.d}</span>
              <span className="text-xs">{dia.s}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-28 space-y-4">
        {dietasPorDia[diaSelecionado].map((ref) => (
          <div key={ref.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex-1 pr-4">
              <p className="text-[10px] text-gray-400 font-bold uppercase">{ref.tipo}</p>
              <p className="font-bold text-gray-800 text-sm leading-tight mt-1 mb-1">{ref.nome}</p>
              <p className="text-xs text-gray-500">{ref.kcal}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => toggleCheck(ref.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition border-2 ${
                  checkedItems[`${diaSelecionado}-${ref.id}`] ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-green-500 text-green-500'
                }`}
              >
                {checkedItems[`${diaSelecionado}-${ref.id}`] ? <CheckSquare size={20} /> : <Square size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}