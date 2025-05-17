import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Importa La función para decodificar JWT.
import  { jwtDecode } from "jwt-decode";

//Representa La información de un usuario autenticado.
interface User {
    name: string;
    email: string;
    picture: string;
}

export interface AuthContextType {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider ({ children }: {children: ReactNode }){
// Estado Local para guardar La info del usuario decodificada
const [user, setUser] = useState<User | null> (null);
// Al montarse, comprueba si hay un token guardado.
// Si existe, Llama a Login para decodificarlo y poblar user.

function login (token: string) {
    localStorage.setItem("google_token", token);
    //Decodifica el JWT. El any se utiliza aqui para extraer campos conocidos
    const decoded = jwtDecode<any>(token);
    setUser({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
    });
} 

function logout(){
    localStorage.removeItem("google_token");
    setUser(null);
}

useEffect(()=>{
    const token = localStorage.getItem("google_token");
    if (token) {
        login(token);
    }
}, []);

return (
    <AuthContext.Provider value = {{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
);

}

