"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, logout } from "@/app/lib/dbClient";
import type { UserData } from "@/app/lib/dbClient";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      router.push("/access-code");
      return;
    }
    setUser(currentUser);
    setLoading(false);
  }

  function handleLogout() {
    logout();
    router.push("/access-code");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#3b3b5c]">LECMA</h1>
          <div className="flex items-center gap-6">
            <p className="text-[#5c5c7a]">
              Bienvenido, <span className="font-semibold">{user?.nombre} {user?.apellido}</span>
            </p>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-90"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-2">
          <h2 className="text-4xl font-bold text-[#2f2f44]">🎮 Mis Niveles</h2>
          <p className="text-[#5c5c7a] mt-2">Completa todos los niveles para dominar la plataforma LECMA</p>
        </div>

        {/* Grid de Niveles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* NIVEL 1: PIEDRA BASE */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition border-2 border-yellow-300">
            <div className="text-5xl mb-4">🟡</div>
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">
              Nivel 1: Piedra Base
            </h3>
            <p className="text-yellow-800 text-sm mb-2 font-semibold">Identificación Literal</p>
            <p className="text-yellow-700 mb-4 text-sm">
              Aprende a identificar información explícita en textos y realizar operaciones matemáticas básicas.
            </p>
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-semibold">50 preguntas</span>
              <span className="text-yellow-800">Dificultad: Básica</span>
            </div>
            <button
              onClick={() => router.push("/cuestionario/nivel-1")}
              className="w-full px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-semibold transition"
            >
              → Iniciar Nivel 1
            </button>
          </div>

          {/* NIVEL 2: CRISTALIZACIÓN */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition border-2 border-orange-300">
            <div className="text-5xl mb-4">🟠</div>
            <h3 className="text-2xl font-bold text-orange-900 mb-2">
              Nivel 2: Cristalización
            </h3>
            <p className="text-orange-800 text-sm mb-2 font-semibold">Comprensión Inferencial</p>
            <p className="text-orange-700 mb-4 text-sm">
              Desarrolla habilidades de inferencia y comprensión de relaciones lógicas en textos complejos.
            </p>
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full font-semibold">50 preguntas</span>
              <span className="text-orange-800">Dificultad: Media</span>
            </div>
            <button
              onClick={() => router.push("/cuestionario/nivel-2")}
              className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold transition"
            >
              → Iniciar Nivel 2
            </button>
          </div>

          {/* NIVEL 3: DIAMANTE */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition border-2 border-blue-300">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Nivel 3: Diamante
            </h3>
            <p className="text-blue-800 text-sm mb-2 font-semibold">Pensamiento Crítico</p>
            <p className="text-blue-700 mb-4 text-sm">
              Domina el análisis crítico, evaluación de argumentos e identificación de sesgos complejos.
            </p>
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-semibold">50 preguntas</span>
              <span className="text-blue-800">Dificultad: Experto</span>
            </div>
            <button
              onClick={() => router.push("/cuestionario/nivel-3")}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition"
            >
              → Iniciar Nivel 3
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-4xl font-bold text-[#3b82f6]">0</p>
            <p className="text-[#5c5c7a] mt-2">Cuestionarios Completados</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-4xl font-bold text-green-500">-</p>
            <p className="text-[#5c5c7a] mt-2">Promedio General</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-4xl font-bold text-orange-500">-</p>
            <p className="text-[#5c5c7a] mt-2">Última Actividad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
