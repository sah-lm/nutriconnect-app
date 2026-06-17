import React from 'react';
import { ArrowLeft, Trash2, PlusCircle, ShoppingBag, CheckSquare, Square } from 'lucide-react';

export default function ListaComprasScreen({ onBack, shoppingList, homeItems, onAdd, onRemove, onToggleBought }) {
  
  const itensNutri = shoppingList.filter(item => item.origin === 'nutri');
  const itensUser = shoppingList.filter(item => item.origin === 'user');

  return (
    <div className="h-full flex flex-col bg-gray-50 overflow-y-auto pb-24">
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-[30px] shadow-sm z-10 flex items-center gap-4 sticky top-0">
        <button onClick={onBack} className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors shrink-0">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-gray-800">Lista de Compras</h1>
          <p className="text-xs text-gray-500">Marque o que já colocou no carrinho</p>
        </div>
      </div>

      <div className="px-6 mt-6">
        <h2 className="font-bold text-gray-800 text-sm flex items-center gap-2 mb-4 uppercase">
          <ShoppingBag size={18} className="text-green-500" /> Itens da Dieta (Nutricionista)
        </h2>
        <div className="space-y-3">
          {itensNutri.map(item => (
            <div key={item.id} className={`p-3 rounded-2xl shadow-sm border transition-all flex items-center justify-between ${item.bought ? 'bg-green-50 border-green-200 opacity-70' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center gap-3">
                <button onClick={() => onToggleBought(item)} className={`${item.bought ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}>
                  {item.bought ? <CheckSquare size={24} /> : <Square size={24} />}
                </button>
                <div>
                  <p className={`font-bold text-sm leading-tight ${item.bought ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{item.nome}</p>
                  <p className="text-xs text-green-600 font-bold mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-8">
        <h2 className="font-bold text-gray-800 text-sm mb-4 uppercase text-blue-600">
          Meus Itens Adicionados
        </h2>
        {itensUser.length === 0 ? (
          <p className="text-sm text-gray-500 italic text-center py-4">Nenhum item extra adicionado.</p>
        ) : (
          <div className="space-y-3">
            {itensUser.map(item => (
              <div key={item.id} className={`p-3 rounded-2xl shadow-sm border transition-all flex items-center justify-between ${item.bought ? 'bg-green-50 border-green-200 opacity-70' : 'bg-white border-blue-100'}`}>
                <div className="flex items-center gap-3">
                  <button onClick={() => onToggleBought(item)} className={`${item.bought ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}>
                    {item.bought ? <CheckSquare size={24} /> : <Square size={24} />}
                  </button>
                  
                  {/* Mini imagem do item adicionado */}
                  {item.imagem && (
                    <div className={`w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-200 ${item.bought ? 'opacity-50' : 'opacity-100'}`}>
                      <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div>
                    <p className={`font-bold text-sm leading-tight ${item.bought ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{item.nome}</p>
                    <p className="text-xs text-blue-600 font-bold mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item)} className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="px-6 mt-8">
        <h2 className="font-bold text-gray-800 text-sm mb-4">SUGESTÕES DE COMPRA</h2>
        <div className="space-y-3">
          {homeItems.length === 0 ? (
            <p className="text-sm text-gray-500 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
              Você já adicionou todas as sugestões!
            </p>
          ) : (
            homeItems.map(item => (
              <div key={item.id} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  {/* IMAGEM JPG AQUI */}
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold leading-tight">{item.loja}</p>
                    <p className="font-bold text-gray-800 text-sm leading-tight">{item.nome}</p>
                    <p className="text-xs text-green-600 font-bold mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>
                <button onClick={() => onAdd(item)} className="w-8 h-8 bg-green-50 text-green-500 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
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