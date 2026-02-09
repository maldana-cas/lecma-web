import { supabase } from './supabaseClient';

// Genera n códigos únicos con prefijo opcional
export async function generateAccessCodes(prefix: string, n: number) {
  const codes = [] as string[];
  for (let i = 1; i <= n; i++) {
    const code = `${prefix}${String(i).padStart(3, '0')}`;
    codes.push(code);
  }

  const inserts = codes.map((c) => ({ code: c, status: 'active' }));
  const { data, error } = await supabase.from('access_codes').insert(inserts).select();
  if (error) return { success: false, error };
  return { success: true, data };
}

export async function listAccessCodes() {
  const { data, error } = await supabase.from('access_codes').select().order('id', { ascending: true });
  if (error) return { success: false, error };
  return { success: true, data };
}

export async function listUsers() {
  const { data, error } = await supabase.from('users').select().order('id', { ascending: true });
  if (error) return { success: false, error };
  return { success: true, data };
}

export async function listQuizResults(limit = 100) {
  const { data, error } = await supabase.from('quiz_results').select('*').order('created_at', { ascending: false }).limit(limit);
  if (error) return { success: false, error };
  return { success: true, data };
}

export async function deactivateCode(id: number) {
  const { data, error } = await supabase.from('access_codes').update({ status: 'inactive' }).eq('id', id).select();
  if (error) return { success: false, error };
  return { success: true, data };
}
