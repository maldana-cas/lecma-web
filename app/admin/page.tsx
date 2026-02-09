'use client';

import { useEffect, useState } from 'react';
import { generateAccessCodes, listAccessCodes, listUsers, listQuizResults, deactivateCode } from '@/app/lib/adminClient';

export default function AdminPage() {
  const [prefix, setPrefix] = useState('LECMA2026-');
  const [count, setCount] = useState(10);
  const [codes, setCodes] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAll();
  }, []);

  async function fetchAll() {
    setLoading(true);
    const ac = await listAccessCodes();
    if (ac.success) setCodes(ac.data || []);
    const us = await listUsers();
    if (us.success) setUsers(us.data || []);
    const rs = await listQuizResults(200);
    if (rs.success) setResults(rs.data || []);
    setLoading(false);
  }

  async function handleGenerate() {
    setMessage('Generando...');
    const res = await generateAccessCodes(prefix, count);
    if (!res.success) {
      const errMsg = res.error?.message || JSON.stringify(res.error) || 'Desconocido';
      setMessage('Error: ' + errMsg);
    } else {
      setMessage('Códigos generados');
      fetchAll();
    }
  }

  async function handleDeactivate(id: number) {
    await deactivateCode(id);
    fetchAll();
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Panel de Admin</h1>

        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="font-semibold mb-2">Generar códigos de acceso</h2>
          <div className="flex gap-2 mb-2">
            <input value={prefix} onChange={(e) => setPrefix(e.target.value)} className="border p-2 rounded flex-1" />
            <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value || '0'))} className="w-32 border p-2 rounded" />
            <button onClick={handleGenerate} className="bg-blue-600 text-white px-4 py-2 rounded">Generar</button>
          </div>
          <p className="text-sm text-gray-500">Prefijo y cantidad generan códigos secuenciales (prefijo + 001...)</p>
          <p className="text-sm text-green-600 mt-2">{message}</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="font-semibold mb-2">Códigos existentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b"><th className="p-2">ID</th><th className="p-2">Código</th><th className="p-2">Estado</th><th className="p-2">Acciones</th></tr>
              </thead>
              <tbody>
                {codes.map((c) => (
                  <tr key={c.id} className="border-b">
                    <td className="p-2">{c.id}</td>
                    <td className="p-2">{c.code}</td>
                    <td className="p-2">{c.status}</td>
                    <td className="p-2"><button onClick={() => handleDeactivate(c.id)} className="bg-red-500 text-white px-3 py-1 rounded">Desactivar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="font-semibold mb-2">Usuarios registrados</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b"><th className="p-2">ID</th><th className="p-2">Nombre</th><th className="p-2">Apellido</th><th className="p-2">Edad</th><th className="p-2">Código</th></tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b">
                    <td className="p-2">{u.id}</td>
                    <td className="p-2">{u.nombre}</td>
                    <td className="p-2">{u.apellido}</td>
                    <td className="p-2">{u.edad}</td>
                    <td className="p-2">{u.access_code_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="font-semibold mb-2">Resultados recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b"><th className="p-2">ID</th><th className="p-2">User ID</th><th className="p-2">Quiz</th><th className="p-2">Score</th><th className="p-2">Fecha</th></tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.id} className="border-b">
                    <td className="p-2">{r.id}</td>
                    <td className="p-2">{r.user_id}</td>
                    <td className="p-2">{r.quiz_id}</td>
                    <td className="p-2">{r.score}</td>
                    <td className="p-2">{new Date(r.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
