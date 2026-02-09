# LECMA - Plataforma de Evaluaciones Inteligentes

## 🚀 Guía de Configuración

### 1. **Configurar Supabase**

#### Paso 1: Crear tablas en Supabase
1. Ve a [supabase.com](https://supabase.com) y accede a tu proyecto
2. Abre el SQL Editor
3. Copia el contenido de `database.sql` y ejecútalo para crear las tablas necesarias

#### Paso 2: Configurar variables de entorno
1. Crea un archivo `.env.local` en la raíz del proyecto
2. Añade tus credenciales de Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

3. Obtén estas credenciales en: Settings → API → Project API Keys

### 2. **Instalación Local**

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará en `http://localhost:3000`

### 3. **Flujo de Uso**

1. **Página Principal** (`/`) - Información sobre la plataforma
2. **Registrarse** (`/register`) - Los usuarios crean su cuenta
3. **Login** (`/login`) - Acceso al sistema
4. **Dashboard** (`/dashboard`) - Panel con los cuestionarios disponibles
5. **Cuestionario** (`/cuestionario/[id]`) - Responder preguntas
6. **Resultados** - Ver puntuación y revisión de respuestas

### 4. **Estructura del Proyecto**

```
app/
├── page.tsx              # Página principal
├── login/
│   └── page.tsx         # Login funcional
├── register/
│   └── page.tsx         # Registro funcional
├── dashboard/
│   └── page.tsx         # Panel de cuestionarios
├── cuestionario/
│   └── [id]/
│       └── page.tsx     # Responder cuestionario
└── lib/
    └── supabaseClient.ts # Cliente de Supabase
```

### 5. **Cuestionarios Disponibles**

Los cuestionarios están en el archivo `app/cuestionario/[id]/page.tsx`:

- **Comprensión Lectora** (`/cuestionario/comprension-lectora`)
- **Razonamiento Matemático** (`/cuestionario/razonamiento-matematico`)
- **Ciencias Naturales** (`/cuestionario/ciencias-naturales`)

### 6. **Cómo Agregar Más Cuestionarios**

Para añadir un nuevo cuestionario con preguntas de un PDF:

1. Abre `app/cuestionario/[id]/page.tsx`
2. En el objeto `QUESTIONNAIRES`, añade tu nuevo cuestionario:

```typescript
"tu-cuestionario": {
  title: "Nombre del Cuestionario",
  questions: [
    {
      id: 1,
      text: "Pregunta 1?",
      options: ["Opción A", "Opción B", "Opción C", "Opción D"],
      correctAnswer: 0, // Índice de la respuesta correcta
    },
    // ... más preguntas
  ],
},
```

3. Añade el botón en el dashboard (`app/dashboard/page.tsx`)

### 7. **Características Implementadas**

✅ Sistema de autenticación con Supabase
✅ Registro de usuarios
✅ Login seguro
✅ Dashboard con cuestionarios
✅ Responder preguntas interactivas
✅ Calificación automática
✅ Revisión de respuestas
✅ Guardado de resultados en base de datos
✅ Seguimiento del progreso

### 8. **Comandos Útiles**

```bash
# Compilar para producción
npm run build

# Iniciar en producción
npm start

# Ejecutar linter
npm run lint
```

### 9. **Tecnologías Usadas**

- **Next.js 16** - Framework React
- **Tailwind CSS** - Estilos
- **TypeScript** - Tipado estático
- **Supabase** - Backend y autenticación

---

**Creado por:** El Profe Malc@s 👨‍🏫

