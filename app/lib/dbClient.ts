import { supabase } from './supabaseClient';

export interface UserData {
  id: number;
  nombre: string;
  apellido: string;
  ocupacion?: string;
  edad?: number;
  session_token: string;
  created_at: string;
}

export interface AccessCodeResult {
  valid: boolean;
  message: string;
  accessCodeId?: number;
}

// Verificar si un código de acceso es válido y está activo
export async function validateAccessCode(code: string): Promise<AccessCodeResult> {
  const { data, error } = await supabase
    .from('access_codes')
    .select('id, status')
    .eq('code', code)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    return { valid: false, message: 'Código de acceso inválido o ya utilizado' };
  }

  return { valid: true, message: 'Código válido', accessCodeId: data.id };
}

// Registrar un nuevo usuario con código de acceso
export async function registerUser(
  nombre: string,
  apellido: string,
  ocupacion: string | undefined,
  edad: number | undefined,
  accessCodeId: number
): Promise<{ success: boolean; user?: UserData; message: string }> {
  // Generar un token de sesión único
  const sessionToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        access_code_id: accessCodeId,
        nombre,
        apellido,
        ocupacion,
        edad,
        session_token: sessionToken,
      },
    ])
    .select()
    .single();

  if (error) {
    return { success: false, message: 'Error al registrar usuario: ' + error.message };
  }

  // Marcar el código de acceso como usado
  await supabase
    .from('access_codes')
    .update({ status: 'used', used_by: data.id, used_at: new Date().toISOString() })
    .eq('id', accessCodeId);

  // Guardar token en localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('session_token', sessionToken);
    localStorage.setItem('user_id', data.id.toString());
  }

  return { success: true, user: data, message: 'Registro exitoso' };
}

// Obtener usuario por token de sesión
export async function getUserByToken(token: string): Promise<UserData | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('session_token', token)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

// Logout (borrar session_token del localStorage)
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('session_token');
    localStorage.removeItem('user_id');
  }
}

// Obtener usuario logueado
export async function getCurrentUser(): Promise<UserData | null> {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem('session_token');
  if (!token) return null;

  return getUserByToken(token);
}

// Guardar resultado de quiz
export async function saveQuizResult(
  userId: number,
  quizId: string,
  score: number,
  answers: Record<string, any>
): Promise<{ success: boolean; message: string }> {
  const { error } = await supabase
    .from('quiz_results')
    .insert([
      {
        user_id: userId,
        quiz_id: quizId,
        score,
        answers,
      },
    ]);

  if (error) {
    return { success: false, message: 'Error al guardar resultado: ' + error.message };
  }

  return { success: true, message: 'Resultado guardado' };
}

// Actualizar progreso del usuario
export async function updateUserProgress(
  userId: number,
  quizId: string,
  completed: boolean,
  lastScore: number
): Promise<{ success: boolean; message: string }> {
  const { data: existing } = await supabase
    .from('user_progress')
    .select('id, attempt_count')
    .eq('user_id', userId)
    .eq('quiz_id', quizId)
    .single();

  if (existing) {
    const { error } = await supabase
      .from('user_progress')
      .update({
        completed,
        last_score: lastScore,
        attempt_count: (existing.attempt_count || 0) + 1,
      })
      .eq('id', existing.id);

    if (error) {
      return { success: false, message: 'Error al actualizar progreso' };
    }
  } else {
    const { error } = await supabase
      .from('user_progress')
      .insert([
        {
          user_id: userId,
          quiz_id: quizId,
          completed,
          last_score: lastScore,
          attempt_count: 1,
        },
      ]);

    if (error) {
      return { success: false, message: 'Error al crear progreso' };
    }
  }

  return { success: true, message: 'Progreso actualizado' };
}
