import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import type { ReactElement } from 'react';
import Login from './page/login';
import Dashboard from './page/dashboard';

/* ---------- Helpers para proteger o bloquear rutas ---------- */
type Props = { children: ReactElement };

function PrivateRoute({ children }: Props) {
  const { user } = useAuth();      // user === null si no ha iniciado
  return user ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }: Props) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/dashboard" replace />;
}

/* ---------------------------- Rutas ------------------------- */
export default function App() {
  return (
    <Routes>
      {/* raíz → login (o dashboard, si quisieras) */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Ruta pública: solo si NO hay sesión */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Ruta privada: solo si SÍ hay sesión */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Cualquier otra ruta → raíz */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
