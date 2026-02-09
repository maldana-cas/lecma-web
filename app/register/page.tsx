"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // ✅ Crear cuenta en Supabase
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setMessage("❌ Error: " + error.message);
      setLoading(false);
      return;
    }

    setMessage("✅ Cuenta creada correctamente. Ahora puedes iniciar sesión.");

    setLoading(false);

    // Ir al login
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Registro en LECMA
        </h1>

        {/* Nombre */}
        <label className="block mb-2">Nombre</label>
        <input
          className="w-full p-3 border rounded-xl mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <label className="block mb-2">Correo</label>
        <input
          type="email"
          className="w-full p-3 border rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <label className="block mb-2">Contraseña</label>
        <input
          type="password"
          className="w-full p-3 border rounded-xl mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-xl"
        >
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm font-medium">{message}</p>
        )}
      </form>
    </div>
  );
}
