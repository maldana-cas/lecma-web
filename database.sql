-- Tabla de códigos de acceso (generados por el admin)
CREATE TABLE access_codes (
  id BIGSERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active', -- 'active', 'used', 'inactive'
  used_by BIGINT,
  created_at TIMESTAMP DEFAULT NOW(),
  used_at TIMESTAMP
);

CREATE INDEX idx_access_codes_code ON access_codes(code);
CREATE INDEX idx_access_codes_status ON access_codes(status);

-- Tabla de usuarios registrados con código de acceso
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  access_code_id BIGINT REFERENCES access_codes(id) ON DELETE SET NULL,
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  ocupacion TEXT,
  edad INTEGER,
  session_token TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_session_token ON users(session_token);
CREATE INDEX idx_users_access_code_id ON users(access_code_id);

-- Tabla para guardar los resultados de los cuestionarios
CREATE TABLE quiz_results (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  answers JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_quiz_id ON quiz_results(quiz_id);

-- Tabla de progreso del usuario
CREATE TABLE user_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  last_score INTEGER,
  attempt_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, quiz_id)
);

CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);

-- Ejemplos de códigos de acceso (puedes generar más)
INSERT INTO access_codes (code, status) VALUES
('LECMA2026-001', 'active'),
('LECMA2026-002', 'active'),
('LECMA2026-003', 'active'),
('LECMA2026-004', 'active'),
('LECMA2026-005', 'active');
