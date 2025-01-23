import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { MerchantForm } from './components/MerchantForm';
import { ShieldCheck } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Merchant Portal</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {!isAuthenticated ? (
          <LoginForm onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <MerchantForm />
        )}
      </main>
    </div>
  );
}

export default App;