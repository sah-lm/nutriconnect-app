import React, { useState } from 'react';
import { Settings, LogOut, Edit2, Save } from 'lucide-react';

export default function PerfilScreen({ onLogout, userData, setUserData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...userData });

  const handleSave = () => {
    setUserData(editForm);
    setIsEditing(false);
  };

  const handleChange = (e, field) => {
    setEditForm({ ...editForm, [field]: e.target.value });
  };

  return (
    <div className="h-full overflow-y-auto pb-28 bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-xl font-bold text-gray-800">Perfil do usuário</h1>
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={`w-10 h-10 ${isEditing ? 'bg-blue-500' : 'bg-green-500'} text-white rounded-xl flex items-center justify-center shadow-md`}
        >
          {isEditing ? <Save size={20} /> : <Edit2 size={20} />}
        </button>
      </div>

      <div className="bg-white p-5 rounded-[24px] shadow-sm flex items-center gap-4 mb-6 border border-gray-100">
        <div className="w-16 h-16 bg-green-200 text-green-700 font-bold text-2xl rounded-full flex items-center justify-center">
          {userData.name[0]?.toUpperCase() || 'U'}
        </div>
        <div className="flex-1">
          {isEditing ? (
            <input 
              value={editForm.name} onChange={(e) => handleChange(e, 'name')}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 font-bold text-lg text-gray-800 mb-1"
            />
          ) : (
            <h2 className="font-bold text-gray-800 text-lg">{userData.name}</h2>
          )}
          
          {isEditing ? (
            <input 
              value={editForm.age} onChange={(e) => handleChange(e, 'age')}
              className="w-16 text-sm text-gray-500 border-b border-gray-300 focus:outline-none"
              placeholder="Idade"
            />
          ) : (
            <p className="text-gray-500 text-sm">{userData.age} Anos</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: 'Peso (kg)', field: 'weight' },
          { label: 'Altura (m)', field: 'height' },
          { label: '% De Gordura', field: 'fat' },
          { label: 'Massa Magra', field: 'mass' }
        ].map((item) => (
          <div key={item.field} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{item.label}</p>
            {isEditing ? (
              <input 
                type="number" value={editForm[item.field]} onChange={(e) => handleChange(e, item.field)}
                className="w-full font-bold text-gray-800 text-lg border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <p className="font-bold text-gray-800 text-lg">{userData[item.field]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Metas e Orçamento</p>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500">Foco Principal</p>
            {isEditing ? (
              <input value={editForm.goal} onChange={(e) => handleChange(e, 'goal')} className="w-full font-bold text-sm border-b" />
            ) : <p className="font-bold text-gray-800 text-sm">{userData.goal}</p>}
          </div>

          <div>
            <p className="text-xs text-gray-500">Orçamento Disponível (R$)</p>
            {isEditing ? (
              <input type="number" value={editForm.budget} onChange={(e) => handleChange(e, 'budget')} className="w-full font-bold text-sm border-b" />
            ) : <p className="font-bold text-gray-800 text-sm">R$ {userData.budget}</p>}
          </div>

          <div>
            <p className="text-xs text-gray-500">Meta calórica diária</p>
            {isEditing ? (
              <input value={editForm.calories} onChange={(e) => handleChange(e, 'calories')} className="w-full font-bold text-sm border-b" />
            ) : <p className="font-bold text-gray-800 text-sm">{userData.calories} kcal / dia</p>}
          </div>
        </div>
      </div>

      {!isEditing && (
        <button 
          onClick={onLogout}
          className="w-full py-4 bg-red-50 text-red-500 font-bold rounded-2xl flex justify-center items-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut size={20} /> Sair da Conta
        </button>
      )}
    </div>
  );
}