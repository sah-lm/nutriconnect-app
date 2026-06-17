import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

export default function LoginScreen({ onLogin, setUserData, userData }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAuth = () => {
    if (email === '' || password === '') {
      setErrorMsg('Preencha os campos obrigatórios!');
      return;
    }
    
    if (isRegistering) {
      if (name === '') {
        setErrorMsg('Por favor, digite seu nome!');
        return;
      }
      setUserData({ ...userData, name: name });
    }
    
    setErrorMsg('');
    onLogin();
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-white overflow-y-auto">
      <div className="w-20 h-20 bg-green-500 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-green-200 shrink-0 mt-8">
        <Utensils className="text-white w-10 h-10" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">NutriConnect</h1>
      <p className="text-center text-gray-500 mb-8">
        {isRegistering ? 'Crie sua conta e mude sua vida.' : 'Sua dieta conectada com o seu bolso.'}
      </p>
      
      <div className="w-full space-y-4">
        {isRegistering && (
          <input 
            type="text" placeholder="Seu nome completo" 
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
          />
        )}
        <input 
          type="email" placeholder="Seu e-mail" 
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
        />
        <input 
          type="password" placeholder="Sua senha" 
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
        />

        {errorMsg && <p className="text-red-500 text-sm text-center font-medium">{errorMsg}</p>}

        <button 
          onClick={handleAuth}
          className="w-full py-3 mt-4 bg-green-500 text-white font-semibold rounded-xl shadow-md shadow-green-200 hover:bg-green-600 transition-colors"
        >
          {isRegistering ? 'Criar Conta' : 'Entrar'}
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500 mb-8">
        {isRegistering ? 'Já tem uma conta?' : 'Ainda não tem conta?'}{' '}
        <span 
          onClick={() => { setIsRegistering(!isRegistering); setErrorMsg(''); }}
          className="text-green-500 font-semibold cursor-pointer"
        >
          {isRegistering ? 'Faça login' : 'Cadastre-se'}
        </span>
      </p>
    </div>
  );
}