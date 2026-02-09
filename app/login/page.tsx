"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("❌ Error: " + error.message);
      setLoading(false);
      return;
    }

    setMessage("✅ Sesión iniciada correctamente...");
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f8fc] px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#3b3b5c] mb-4 text-center">
          Iniciar sesión
        </h1>

        <p className="text-sm text-[#5c5c7a] text-center mb-8">
          Accede a LECMA para continuar tu proceso de aprendizaje adaptativo.
        </p>

        {/* Formulario */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#3b82f6] text-white font-semibold py-3 rounded-xl hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium">{message}</p>
        )}

        {/* Volver */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-[#f97316] font-medium hover:underline"
          >
            ← Volver a la página principal
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-[#5c5c7a]">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-[#3b82f6] font-semibold hover:underline"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
