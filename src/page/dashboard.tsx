import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt, FaUsers, FaChartLine, FaCog } from "react-icons/fa";

export default function Dashboard() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext debe usarse dentro de un AuthProvider");
  }
  const { user, logout } = context;

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center bg-white shadow-sm p-3">
        <h1 className="h3 m-0">Dashboard</h1>
        {user && (
          <div className="d-flex align-items-center gap-3">
            <span className="fw-medium text-secondary">{user.name}</span>
            <img
              src={user.picture}
              alt="Avatar"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <button
              onClick={logout}
              className="btn btn-link text-danger p-0"
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
              type="button"
            >
              <FaSignOutAlt size={24} />
            </button>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow-1 p-4">
        {/* Welcome card */}
        <section className="card mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title h5">Bienvenido, {user?.name}</h2>
            <p className="card-text text-secondary">
              Este es tu panel de control donde podrás administrar tu cuenta y revisar la información relevante.
            </p>
          </div>
        </section>

        {/* Quick access cards */}
        <section className="row g-3">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card shadow-sm h-100 d-flex align-items-center p-3">
              <FaUsers className="text-primary" style={{ fontSize: "2.5rem" }} />
              <div className="ms-3">
                <h3 className="h6 mb-1">Usuarios</h3>
                <p className="text-muted mb-0">Administra tus usuarios</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card shadow-sm h-100 d-flex align-items-center p-3">
              <FaChartLine className="text-success" style={{ fontSize: "2.5rem" }} />
              <div className="ms-3">
                <h3 className="h6 mb-1">Estadísticas</h3>
                <p className="text-muted mb-0">Revisa los gráficos de rendimiento</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card shadow-sm h-100 d-flex align-items-center p-3">
              <FaCog className="text-warning" style={{ fontSize: "2.5rem" }} />
              <div className="ms-3">
                <h3 className="h6 mb-1">Configuración</h3>
                <p className="text-muted mb-0">Ajusta las preferencias de tu cuenta</p>
              </div>
            </div>
          </div>

          {/* Más cards aquí si quieres */}
        </section>
      </main>
    </div>
  );
}
