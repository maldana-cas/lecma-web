/**
 * EJEMPLO: Cómo agregar cuestionarios desde tus PDFs
 * 
 * 1. Abre tu archivo PDF con las preguntas
 * 2. Lee cuidadosamente cada pregunta y sus opciones
 * 3. Identifica la respuesta correcta
 * 4. Copia el objeto abajo a la sección QUESTIONNAIRES en [id]/page.tsx
 * 5. Reemplaza "tu-id-unico" con un identificador único (sin espacios)
 * 6. Añade el botón en dashboard/page.tsx
 */

export const TEMPLATE_QUESTIONNAIRE = {
  "tu-id-unico": {
    title: "Nombre de tu Cuestionario",
    questions: [
      {
        id: 1,
        text: "Primera pregunta del PDF?",
        options: [
          "Opción A",
          "Opción B (respuesta correcta)",
          "Opción C",
          "Opción D",
        ],
        correctAnswer: 1, // El índice (0-3) de la respuesta correcta
      },
      {
        id: 2,
        text: "Segunda pregunta del PDF?",
        options: [
          "Opción A",
          "Opción B",
          "Opción C (respuesta correcta)",
          "Opción D",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        text: "Tercera pregunta del PDF?",
        options: [
          "Opción A (respuesta correcta)",
          "Opción B",
          "Opción C",
          "Opción D",
        ],
        correctAnswer: 0,
      },
      // Añade más preguntas aquí...
    ],
  },
};

/**
 * PASOS PARA IMPLEMENTAR:
 * 
 * 1. Abre app/cuestionario/[id]/page.tsx
 * 2. Localiza la sección QUESTIONNAIRES (alrededor de la línea 20)
 * 3. Copia tu objeto de cuestionario dentro de ese objeto QUESTIONNAIRES
 * 4. Guarda el archivo
 * 5. Ve a app/dashboard/page.tsx
 * 6. Añade un nuevo card para tu cuestionario (copia uno existente y modifica)
 * 7. Reinicia el servidor (npm run dev)
 * 
 * EJEMPLO DE AGREGACIÓN:
 * 
 * En app/dashboard/page.tsx, después de los tres cuestionarios existentes:
 * 
 * <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
 *   <div className="text-4xl mb-4">📝</div>
 *   <h3 className="text-xl font-bold text-[#3b3b5c] mb-2">
 *     Mi Nuevo Cuestionario
 *   </h3>
 *   <p className="text-[#5c5c7a] mb-4">
 *     Descripción del cuestionario
 *   </p>
 *   <button
 *     onClick={() => router.push("/cuestionario/tu-id-unico")}
 *     className="w-full px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:opacity-90"
 *   >
 *     Iniciar Cuestionario
 *   </button>
 * </div>
 */
