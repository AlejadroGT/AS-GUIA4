import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Login must be used within an AuthProvider");
  }
  const { login } = authContext;
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100">
      {/* Panel izquierdo: imagen (oculto en xs, visible md) */}
      <div
        className="d-none d-md-flex flex-grow-1 bg-dark position-relative"
        style={{
          backgroundImage: "url('/fondoazul.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 w-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 bottom-0 end-0">
          <h2 className="text-white display-4 px-3">Bienvenido Pa'</h2>
        </div>
      </div>

      {/* Panel derecho: formulario */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 bg-light p-4">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div className="d-flex justify-content-center mb-4">
            <FaUserCircle className="text-secondary" style={{ fontSize: "4rem" }} />
          </div>
          <h1 className="text-center mb-3">Inicia Sesión</h1>
          <p className="text-center text-muted mb-4">
            Accede a tu panel de control con tu cuenta de Google
          </p>
          <GoogleLogin
            onSuccess={(res) => {
              if (res.credential) {
                login(res.credential);
                navigate("/dashboard");
              }
            }}
            onError={() => {
              alert("Fallo al iniciar sesión");
            }}
          />
        </div>
      </div>
    </div>
  );
}
