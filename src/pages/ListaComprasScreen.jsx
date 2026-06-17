import React from 'react';
import { ArrowLeft, Trash2, PlusCircle, ShoppingBag } from 'lucide-react';

export default function ListaComprasScreen({ onBack, shoppingList, homeItems, onAdd, onRemove }) {
  const total = shoppingList.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="h-full flex flex-col bg-gray-50 overflow-y-auto pb-24">
      <div className="bg-white px-6 pt-8 pb-4 rounded-b-[30px] shadow-sm z-10 flex items-center gap-4 sticky top-0">
        <button onClick={onBack} className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Lista de Compras</h1>
      </div>

      <div className="px-6 mt-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <ShoppingBag size={18} className="text-green-500" /> MEUS ITENS
          </h2>
          <span className="text-sm font-bold text-green-600">Total: R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>

        {shoppingList.length === 0 ? (
          <p className="text-sm text-gray-500 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            Sua lista está vazia! Adicione itens abaixo.
          </p>
        ) : (
          <div className="space-y-3">
            {shoppingList.map(item => (
              <div key={item.id} className="bg-white p-3 rounded-2xl shadow-sm border border-green-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center text-xl`}>{item.icone}</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm leading-tight">{item.nome}</p>
                    <p className="text-xs text-green-600 font-bold mt-1">R$ {item.preco.toFixed(2).replace('.', ',')}</p>
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
        <h2 className="font-bold text-gray-800 text-sm mb-4">SUGESTÕES PARA ADICIONAR</h2>
        <div className="space-y-3">
          {homeItems.length === 0 ? (
            <p className="text-sm text-gray-500 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
              Você já adicionou todas as sugestões!
            </p>
          ) : (
            homeItems.map(item => (
              <div key={item.id} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center text-xl`}>{item.icone}</div>
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