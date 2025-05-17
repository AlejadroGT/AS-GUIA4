import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthContextType } from '../context/AuthContext';
import { FaSignOutAlt, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

export default function Dashboard() {
  // Usamos el contexto con el tipo definido para mayor seguridad
  const context = useContext(AuthContext);

if (!context) {
  throw new Error('AuthContext debe usarse dentro de un AuthProvider');
}

const { user, logout } = context;


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-white shadow p-4">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">{user.name}</span>
            <img
              src={user.picture}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <FaSignOutAlt size={24} />
            </button>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        {/* Welcome card */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Bienvenido, {user?.name}</h2>
          <p className="text-gray-700">
            Este es tu panel de control donde podrás administrar tu cuenta y revisar la información relevante.
          </p>
        </section>

        {/* Quick access cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-5 flex items-center space-x-4">
            <FaUsers className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Usuarios</h3>
              <p className="text-gray-600">Administra tus usuarios</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5 flex items-center space-x-4">
            <FaChartLine className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Estadísticas</h3>
              <p className="text-gray-600">Revisa los gráficos de rendimiento</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5 flex items-center space-x-4">
            <FaCog className="text-yellow-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Configuración</h3>
              <p className="text-gray-600">Ajusta las preferencias de tu cuenta</p>
            </div>
          </div>

          {/* Puedes agregar más cards aquí */}
        </section>
      </main>
    </div>
  );
}
