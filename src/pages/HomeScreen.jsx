import React, { useState, useEffect } from 'react';
import { PlusCircle, LogOut } from 'lucide-react';

export default function HomeScreen({ onLogout, userData, homeItems, onAddToList, valorPlanejado, valorGasto }) {
  const [showMenu, setShowMenu] = useState(false);
  const [proximaRefeicao, setProximaRefeicao] = useState(null);

  useEffect(() => {
    const agora = new Date();
    const horaMinutos = agora.getHours() * 60 + agora.getMinutes();

    const refeicoes = [
      { mins: 6 * 60 + 30, nome: "Pão integral com ovos e café", tempo: "Café da manhã - 06:30", kcal: "410 kcal", icone: "☕", bg: "bg-amber-100" },
      { mins: 10 * 60 + 30, nome: "Iogurte com morangos", tempo: "Lanche - 10:30", kcal: "140 kcal", icone: "🍓", bg: "bg-red-100" },
      { mins: 12 * 60 + 30, nome: "Frango grelhado e purê", tempo: "Almoço - 12:30", kcal: "410 kcal", icone: "🍗", bg: "bg-orange-100" },
      { mins: 16 * 60 + 0, nome: "Mix de castanhas e maçã", tempo: "Lanche da tarde - 16:00", kcal: "190 kcal", icone: "🍎", bg: "bg-green-100" },
      { mins: 20 * 60 + 0, nome: "Macarrão integral com patinho", tempo: "Jantar - 20:00", kcal: "430 kcal", icone: "🍝", bg: "bg-yellow-100" },
    ];

    let prox = refeicoes.find(r => r.mins > horaMinutos);
    if (!prox) prox = refeicoes[0]; 

    setProximaRefeicao(prox);
  }, []);

  const primeiroNome = userData.name.split(' ')[0] || 'Usuário';
  
  // A barra enche baseada no valor total planejado na lista de compras comparado ao orçamento
  const orcamentoGasto = (valorPlanejado / userData.totalBudget) * 100;

  return (
    <div className="h-full overflow-y-auto pb-24 bg-gray-50">
      <div className="bg-white p-6 rounded-b-[30px] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            NutriConnect
          </div>
          <div className="flex items-center gap-3 relative">
            <span className="font-bold text-gray-800 text-lg">Olá, {primeiroNome}!</span>
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="w-10 h-10 bg-green-200 text-green-700 font-bold rounded-full border-2 border-white shadow-sm flex items-center justify-center transition-transform hover:scale-105"
            >
              {primeiroNome[0].toUpperCase()}
            </button>

            {showMenu && (
              <div className="absolute top-12 right-0 w-36 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-50">
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-3 py-2 text-sm text-red-500 font-bold hover:bg-red-50 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <LogOut size={16} /> Sair
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-gray-800">Orçamento mensal</span>
            <span className="text-gray-400 text-sm font-medium">Atual</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-800 font-semibold">Lista: R$ {valorPlanejado.toFixed(2).replace('.', ',')}</span>
            <span className="text-gray-500">Total: R$ {userData.totalBudget}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className={`bg-green-500 h-3 rounded-full transition-all`} style={{ width: `${Math.min(orcamentoGasto, 100)}%` }}></div>
          </div>
          <p className="text-xs text-gray-500 font-medium text-right">
            Comprado no mercado: <span className="font-bold text-green-600">R$ {valorGasto.toFixed(2).replace('.', ',')}</span>
          </p>
        </div>
      </div>

      {proximaRefeicao && (
        <div className="px-6 mt-6 mb-2">
          <h2 className="font-bold text-gray-800 mb-3 text-sm">PRÓXIMA REFEIÇÃO</h2>
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex gap-4">
             <div className={`w-24 h-24 ${proximaRefeicao.bg} rounded-xl shrink-0 flex items-center justify-center text-3xl`}>
               {proximaRefeicao.icone}
             </div>
             <div className="flex flex-col justify-center">
               <p className="text-[10px] text-gray-400 font-semibold uppercase">{proximaRefeicao.tempo}</p>
               <p className="font-bold text-gray-800 text-sm leading-tight mt-1 mb-1">{proximaRefeicao.nome}</p>
               <p className="text-xs text-gray-500">{proximaRefeicao.kcal}</p>
             </div>
          </div>
        </div>
      )}

      <div className="px-6 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 text-sm">SUGESTÕES DE ECONOMIA</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 snap-x">
          {homeItems.length === 0 ? (
            <p className="text-sm text-gray-500 italic bg-white p-4 rounded-xl shadow-sm w-full text-center">Todos os itens foram para a lista de compras!</p>
          ) : (
            homeItems.map(item => (
              <div key={item.id} className="min-w-[150px] bg-white rounded-2xl p-3 shadow-sm border border-gray-100 snap-start relative">
                <div className={`w-full h-24 ${item.bg} rounded-xl mb-3 overflow-hidden`}>
                   <div className={`w-full h-full ${item.color} flex items-center justify-center text-2xl`}>{item.icone}</div>
                </div>
                <p className="text-[10px] text-gray-400 font-semibold truncate">{item.loja}</p>
                <p className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.nome}</p>
                <p className="font-bold text-green-600">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => onAddToList(item)} className="absolute bottom-3 right-3 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600">
                  <PlusCircle size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}