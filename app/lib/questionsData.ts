// LECMA: Base de Datos de Preguntas por Nivel
export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  feedback: string;
}

export interface QuestionnaireFeedback {
  level: string;
  title: string;
  subtitle: string;
  scoreFeedback: (percentage: number) => string;
}

// NIVEL 1: PIEDRA BASE (Identificación literal, Operaciones básicas y Lógica directa)
export const nivel1Questions: Question[] = [
  {
    id: 1,
    text: 'Lea el siguiente estado de WhatsApp: "Hoy no atiendo a nadie. Modo avión activado porque mi batería social está en 0%." Según el texto explícito, la razón por la que la persona no atiende a nadie es:',
    options: {
      A: "Porque su celular se quedó sin batería real.",
      B: "Porque está viajando en un avión.",
      C: "Porque su energía para interactuar socialmente se agotó.",
      D: "Porque se le dañó el cargador.",
    },
    correctAnswer: "C",
    feedback:
      "El texto usa la metáfora 'batería social' para referirse a la energía humana para interactuar.",
  },
  {
    id: 2,
    text: 'En un tutorial de YouTube sobre cocina, el título dice: "Haz esta pasta viral en 5 minutos sin ser un experto". La palabra "viral" en este contexto significa explícitamente que:',
    options: {
      A: "La pasta tiene un virus peligroso.",
      B: "La receta se ha compartido y visto masivamente en internet.",
      C: "La pasta es muy picante.",
      D: "La receta solo funciona en computadoras.",
    },
    correctAnswer: "B",
    feedback: "En internet, 'viral' se refiere a la propagación masiva de contenido.",
  },
  {
    id: 3,
    text: 'Complete la oración con la opción ortográficamente correcta: "Oye, _____ un error en el código que me pasaste."',
    options: {
      A: "hay",
      B: "ay",
      C: "ahí",
      D: "ahy",
    },
    correctAnswer: "A",
    feedback:
      "'Hay' proviene del verbo haber; 'Ay' es exclamación y 'Ahí' es lugar.",
  },
  {
    id: 4,
    text: 'Lea el comentario en un post de Instagram: "El \'outfit\' está increíble, pero los zapatos no combinan con la ocasión." ¿Qué elemento específico critica el autor del comentario?',
    options: {
      A: "El peinado.",
      B: "La ropa en general (outfit).",
      C: "El lugar de la foto.",
      D: "Los zapatos.",
    },
    correctAnswer: "D",
    feedback:
      "El autor usa el conector 'pero' para diferenciar la ropa (outfit) del problema (zapatos).",
  },
  {
    id: 5,
    text: 'En la frase: "La Inteligencia Artificial generó una imagen realista", el sujeto de la oración es:',
    options: {
      A: "Una imagen realista.",
      B: "Generó.",
      C: "La Inteligencia Artificial.",
      D: "Realista.",
    },
    correctAnswer: "C",
    feedback: "El sujeto es quien realiza la acción de generar la imagen.",
  },
  {
    id: 6,
    text: 'Un titular de noticias tecnológicas dice: "Cuidado: Nueva estafa por SMS suplanta a tu banco". El propósito principal y directo de este titular es:',
    options: {
      A: "Entretener con una historia de ficción.",
      B: "Alertar al lector sobre un riesgo de seguridad.",
      C: "Vender un nuevo celular.",
      D: "Felicitar al banco por su seguridad.",
    },
    correctAnswer: "B",
    feedback:
      "Palabras como 'Cuidado' y 'Estafa' indican una función apelativa de advertencia.",
  },
  {
    id: 7,
    text: '¿Cuál es la forma correcta de escribir el plural de la palabra "Fan"?',
    options: {
      A: "Fanes",
      B: "Fans",
      C: "Fannes",
      D: "Fan's",
    },
    correctAnswer: "B",
    feedback:
      "Según la RAE, el plural de fan es fans (aunque fanes también se admite, fans es el estándar digital).",
  },
  {
    id: 8,
    text: 'En el contexto de videojuegos, si un personaje tiene "baja latencia", el texto técnico indica que:',
    options: {
      A: "El juego responde muy lento.",
      B: "El juego responde muy rápido (casi sin retraso).",
      C: "El personaje es muy bajito.",
      D: "El juego tiene malos gráficos.",
    },
    correctAnswer: "B",
    feedback: "En tecnología, baja latencia significa que el retraso (delay) es mínimo.",
  },
  {
    id: 9,
    text: 'Lea el mensaje de texto: "Voy a botar estos papeles que ya no sirven". El uso de la palabra "botar" es:',
    options: {
      A: "Incorrecto, debería ser 'votar'.",
      B: "Correcto, porque se refiere a arrojar o tirar algo.",
      C: "Incorrecto, debería ser 'bothar'.",
      D: "Incorrecto, porque los papeles se reciclan.",
    },
    correctAnswer: "B",
    feedback: "'Botar' es arrojar; 'Votar' es ejercer el derecho al sufragio.",
  },
  {
    id: 10,
    text: "Identifique la oración que es un HECHO y no una OPINIÓN:",
    options: {
      A: "La nueva temporada de la serie es aburridísima.",
      B: "La serie estrenó 8 episodios el viernes pasado.",
      C: "El actor principal actuó sin ganas.",
      D: "Es la peor serie del año.",
    },
    correctAnswer: "B",
    feedback:
      "Las fechas y cantidades son datos comprobables (hechos), no juicios de valor.",
  },
  {
    id: 11,
    text: "Una suscripción a música cuesta $15.000 al mes. Si pagas el año completo por adelantado, te cobran solo 10 meses. ¿Cuánto cuesta el plan anual?",
    options: {
      A: "$150.000",
      B: "$180.000",
      C: "$100.000",
      D: "$120.000",
    },
    correctAnswer: "A",
    feedback: "Multiplicación simple: 15,000 x 10 = 150,000.",
  },
  {
    id: 12,
    text: "Un influencer subió 3 historias. La primera dura 15 segundos, la segunda 10 segundos y la tercera 20 segundos. ¿Cuánto tiempo total dura el contenido?",
    options: {
      A: "35 segundos.",
      B: "40 segundos.",
      C: "45 segundos.",
      D: "50 segundos.",
    },
    correctAnswer: "C",
    feedback: "Suma de tiempos: 15 + 10 + 20 = 45 segundos.",
  },
  {
    id: 13,
    text: "Tienes $50.000 en tu cuenta digital (Nequi/Daviplata). Haces una recarga de celular de $10.000 y transfieres $20.000 a un amigo. ¿Cuánto dinero te queda?",
    options: {
      A: "$30.000",
      B: "$10.000",
      C: "$20.000",
      D: "$15.000",
    },
    correctAnswer: "C",
    feedback: "Resta sucesiva: 50,000 - 10,000 - 20,000 = 20,000.",
  },
  {
    id: 14,
    text: "En un juego tipo 'Battle Royale', empiezan 100 jugadores. En los primeros 5 minutos eliminan a 30. Luego eliminan a la mitad de los que quedaban. ¿Cuántos jugadores quedan vivos?",
    options: {
      A: "35 jugadores.",
      B: "70 jugadores.",
      C: "50 jugadores.",
      D: "40 jugadores.",
    },
    correctAnswer: "A",
    feedback: "100 - 30 = 70. La mitad de 70 es 35. Quedan 35.",
  },
  {
    id: 15,
    text: "Un plan de datos ofrece 10 GB. Si ya consumiste el 40% viendo videos, ¿cuántas GB te quedan disponibles?",
    options: {
      A: "4 GB",
      B: "5 GB",
      C: "6 GB",
      D: "2 GB",
    },
    correctAnswer: "C",
    feedback: "El 40% de 10 es 4. Si gastas 4, te quedan 6 GB.",
  },
  {
    id: 16,
    text: "Si 1 Bitcoin vale, hipotéticamente, 100 millones de pesos, ¿cuánto valen 0.5 Bitcoins?",
    options: {
      A: "10 millones.",
      B: "25 millones.",
      C: "50 millones.",
      D: "75 millones.",
    },
    correctAnswer: "C",
    feedback: "0.5 equivale a la mitad de 100 millones.",
  },
  {
    id: 17,
    text: "Un video de TikTok tiene 2.000 vistas. El 10% de las personas le dio 'Like'. ¿Cuántos Likes tiene el video?",
    options: {
      A: "20 likes.",
      B: "200 likes.",
      C: "100 likes.",
      D: "2000 likes.",
    },
    correctAnswer: "B",
    feedback:
      "El 10% de cualquier cifra se obtiene eliminando el último cero o corriendo la coma.",
  },
  {
    id: 18,
    text: "Quieres comprar unos tenis que cuestan $200.000. La tienda ofrece un descuento del 50%. ¿Cuánto pagarás finalmente?",
    options: {
      A: "$150.000",
      B: "$50.000",
      C: "$100.000",
      D: "$180.000",
    },
    correctAnswer: "C",
    feedback: "El 50% es la mitad exacta del precio original.",
  },
  {
    id: 19,
    text: "Un 'Streamer' transmite 2 horas diarias de lunes a viernes. El sábado transmite 4 horas. ¿Cuántas horas transmite en total a la semana?",
    options: {
      A: "10 horas.",
      B: "12 horas.",
      C: "14 horas.",
      D: "16 horas.",
    },
    correctAnswer: "C",
    feedback: "(2 horas x 5 días) + 4 horas = 10 + 4 = 14 horas.",
  },
  {
    id: 20,
    text: "Si la velocidad de descarga de tu internet es de 10 Megas por segundo, ¿cuántas Megas descargas en 5 segundos constantes?",
    options: {
      A: "2 Megas.",
      B: "15 Megas.",
      C: "50 Megas.",
      D: "100 Megas.",
    },
    correctAnswer: "C",
    feedback: "Multiplicación de tasa por tiempo: 10 MB x 5 seg = 50 MB.",
  },
  {
    id: 21,
    text: "Secuencia de días de gimnasio: Lunes (Pierna), Martes (Brazo), Miércoles (Cardio), Jueves (Pierna), Viernes (Brazo)... ¿Qué toca entrenar el Sábado siguiendo el patrón?",
    options: {
      A: "Pierna",
      B: "Descanso",
      C: "Brazo",
      D: "Cardio",
    },
    correctAnswer: "D",
    feedback: "El patrón es un ciclo de 3 días (Pierna, Brazo, Cardio) que se repite.",
  },
  {
    id: 22,
    text: "Premisa 1: Todas las redes sociales necesitan internet. Premisa 2: Instagram es una red social. Conclusión lógica directa:",
    options: {
      A: "Instagram es la mejor red social.",
      B: "Instagram necesita internet.",
      C: "Sin Instagram no hay internet.",
      D: "Todas las redes sociales son Instagram.",
    },
    correctAnswer: "B",
    feedback:
      "Es un silogismo directo: si A necesita B, y C es parte de A, C necesita B.",
  },
  {
    id: 23,
    text: 'Instrucción de una app de transporte: "El conductor llegará en 3 minutos. Por favor espere en el punto verde del mapa." Si el usuario espera en la esquina opuesta al punto verde, ¿qué error lógico está cometiendo?',
    options: {
      A: "No tiene saldo.",
      B: "No está siguiendo la instrucción de ubicación explícita.",
      C: "El conductor se perdió.",
      D: "La app falló.",
    },
    correctAnswer: "B",
    feedback:
      "La instrucción era un punto específico; ignorarlo es un error de seguimiento literal.",
  },
  {
    id: 24,
    text: "Si: 🔋 = 100% y 🪫 = 0%. ¿Qué representa lógicamente este ícono: 🔋 con la mitad rellena?",
    options: {
      A: "10%",
      B: "25%",
      C: "50%",
      D: "90%",
    },
    correctAnswer: "C",
    feedback: "Visualmente, la mitad de una barra representa el 50% de su capacidad.",
  },
  {
    id: 25,
    text: 'En una receta dice: "Mezclar la harina y el huevo ANTES de echar la leche". Si echas la leche primero, ¿qué falló?',
    options: {
      A: "El horno.",
      B: "La calidad de los ingredientes.",
      C: "La secuencia lógica de pasos.",
      D: "La temperatura.",
    },
    correctAnswer: "C",
    feedback:
      "El texto establece un orden temporal ('antes de') que debe respetarse.",
  },
  {
    id: 26,
    text: 'Titular: "El cantante X cancela su gira por agotamiento mental y físico". Según el titular, la causa de la cancelación es:',
    options: {
      A: "Bajas ventas de boletos.",
      B: "Problemas legales.",
      C: "Salud (agotamiento).",
      D: "Una pelea con su manager.",
    },
    correctAnswer: "C",
    feedback: "El texto menciona 'agotamiento', que es una condición de salud.",
  },
  {
    id: 27,
    text: 'Bio de perfil: "Amante de los gatos 🐱 | Fotógrafo aficionado 📸 | No respondo DMs 🚫". Si le escribes un mensaje directo (DM) a esta persona esperando respuesta, estás ignorando:',
    options: {
      A: "Que es fotógrafo.",
      B: "Que le gustan los gatos.",
      C: "Una advertencia explícita en su perfil.",
      D: "Que no tiene internet.",
    },
    correctAnswer: "C",
    feedback:
      "El símbolo '🚫' y el texto son una restricción explícita de comunicación.",
  },
  {
    id: 28,
    text: 'Texto en una app de citas: "Busco una relación seria, nada de cosas pasajeras". La intención explícita del usuario es:',
    options: {
      A: "Encontrar amigos para jugar fútbol.",
      B: "Encontrar un compromiso a largo plazo.",
      C: "Encontrar a alguien para una sola noche.",
      D: "Encontrar consejos financieros.",
    },
    correctAnswer: "B",
    feedback:
      "El antónimo de 'pasajero' en este contexto es 'serio/compromiso'.",
  },
  {
    id: 29,
    text: '¿Qué conector completa mejor la frase? "Quería comprar la nueva consola, _________ no tenía suficiente dinero ahorrado."',
    options: {
      A: "y",
      B: "pero",
      C: "también",
      D: "además",
    },
    correctAnswer: "B",
    feedback:
      "Se requiere un conector adversativo para indicar una limitación (el dinero).",
  },
  {
    id: 30,
    text: 'En la frase: "Ella scrolleaba infinitamente en su celular", el verbo adaptado del inglés se refiere a:',
    options: {
      A: "Llamar por teléfono.",
      B: "Deslizar la pantalla hacia abajo continuamente.",
      C: "Tomar fotos.",
      D: "Escribir un correo.",
    },
    correctAnswer: "B",
    feedback:
      "'Scroll' es el término técnico para el desplazamiento vertical en pantallas.",
  },
  {
    id: 31,
    text: 'Si 1.000 seguidores equivalen a "1K", ¿a cuánto equivalen "10.5K"?',
    options: {
      A: "105 seguidores.",
      B: "1.500 seguidores.",
      C: "10.500 seguidores.",
      D: "105.000 seguidores.",
    },
    correctAnswer: "C",
    feedback: "'K' significa kilo (mil). 10.5 x 1,000 = 10,500.",
  },
  {
    id: 32,
    text: 'Texto de garantía: "Cambios solo con factura original y etiquetas puestas". Usted lleva la prenda con etiquetas pero sin factura. ¿Le harán el cambio según el texto?',
    options: {
      A: "Sí, porque tiene etiquetas.",
      B: "No, porque falta una de las dos condiciones obligatorias.",
      C: "Sí, si le cae bien al vendedor.",
      D: "No, porque la prenda es fea.",
    },
    correctAnswer: "B",
    feedback:
      "El conector 'y' implica que ambas condiciones deben cumplirse simultáneamente.",
  },
  {
    id: 33,
    text: 'Sinónimo en contexto: "Ese filtro de la foto es muy artificial". La palabra "artificial" significa lo opuesto a:',
    options: {
      A: "Falso.",
      B: "Natural.",
      C: "Plástico.",
      D: "Editado.",
    },
    correctAnswer: "B",
    feedback:
      "Lo artificial es creado; lo natural es lo que existe sin intervención.",
  },
  {
    id: 34,
    text: "Un Uber cobra $5.000 de tarifa base + $1.000 por kilómetro. Si recorres 5 kilómetros, ¿cuánto pagas?",
    options: {
      A: "$5.000",
      B: "$6.000",
      C: "$9.000",
      D: "$10.000",
    },
    correctAnswer: "D",
    feedback: "Tarifa base (5,000) + (1,000 x 5 km) = 5,000 + 5,000 = 10,000.",
  },
  {
    id: 35,
    text: "Ortografía: Elija la palabra escrita correctamente.",
    options: {
      A: "Conexión.",
      B: "Conección.",
      C: "Conecxión.",
      D: "Conesión.",
    },
    correctAnswer: "A",
    feedback: "Conexión se escribe con 'x' y tilde en la 'o'.",
  },
  {
    id: 36,
    text: "Lógica visual: Si ves un semáforo en rojo y un policía de tránsito te indica con la mano que pases. Según las normas de prelación (lógica vial), tú debes:",
    options: {
      A: "Esperar a que cambie el semáforo.",
      B: "Obedecer al policía sobre la señal de la máquina.",
      C: "Pitar para preguntar.",
      D: "Dar la vuelta en U.",
    },
    correctAnswer: "B",
    feedback:
      "Por ley y lógica vial, las señales de un agente humano prevalecen sobre las mecánicas.",
  },
  {
    id: 37,
    text: "En un grupo de 5 amigos, 3 tienen iPhone y 2 tienen Android. ¿Qué fracción del grupo usa Android?",
    options: {
      A: "3/5",
      B: "1/2",
      C: "2/5",
      D: "5/2",
    },
    correctAnswer: "C",
    feedback: "Total de amigos = 5. Amigos con Android = 2. Fracción = 2/5.",
  },
  {
    id: 38,
    text: 'Mensaje de error: "Contraseña incorrecta. Intente de nuevo en 30 segundos". ¿Qué debe hacer el usuario inmediatamente?',
    options: {
      A: "Intentar poner la contraseña ya mismo.",
      B: "Reiniciar el celular.",
      C: "Esperar el tiempo indicado antes de intentar.",
      D: "Comprar otro celular.",
    },
    correctAnswer: "C",
    feedback:
      "El sistema bloquea la acción por un tiempo determinado; intentarlo antes es inútil.",
  },
  {
    id: 39,
    text: 'Si "Hater" es alguien que odia o critica destructivamente, un comentario de un "Hater" sería:',
    options: {
      A: '"¡Buen video, sigue así!"',
      B: '"Podrías mejorar la iluminación."',
      C: '"Tu contenido es basura, dedícate a otra cosa."',
      D: '"¿Qué cámara usas?"',
    },
    correctAnswer: "C",
    feedback: "Un 'Hater' se define por ataques destructivos y sin fundamento.",
  },
  {
    id: 40,
    text: 'Un post dice: "Giveaway (Sorteo): Etiqueta a 2 amigos para ganar". Juan etiqueta solo a 1 amigo. ¿Cumplió la condición?',
    options: {
      A: "Sí, porque etiquetó a alguien.",
      B: "No, la condición numérica explícita era 2.",
      C: "Sí, porque su amigo tiene dos cuentas.",
      D: "No, porque debió etiquetar a 3.",
    },
    correctAnswer: "B",
    feedback:
      "La instrucción pedía una cantidad exacta (2); menos de eso es incumplimiento.",
  },
  {
    id: 41,
    text: "Si en una playlist hay 10 canciones y cada una dura 3 minutos exactos. ¿Cuánto dura la playlist completa?",
    options: {
      A: "13 minutos.",
      B: "30 minutos.",
      C: "33 minutos.",
      D: "20 minutos.",
    },
    correctAnswer: "B",
    feedback: "10 canciones x 3 minutos = 30 minutos.",
  },
  {
    id: 42,
    text: "¿Cuál palabra NO pertenece al grupo por su significado?",
    options: {
      A: "Monitor.",
      B: "Teclado.",
      C: "Mouse.",
      D: "Cuaderno.",
    },
    correctAnswer: "D",
    feedback:
      "Monitor, teclado y mouse son hardware; el cuaderno es papelería física.",
  },
  {
    id: 43,
    text: "Tienes una pizza de 8 porciones. Te comes 2. ¿Qué porcentaje de la pizza te comiste?",
    options: {
      A: "50%",
      B: "25% (un cuarto).",
      C: "10%",
      D: "75%",
    },
    correctAnswer: "B",
    feedback: "2 de 8 simplificado es 1/4, lo cual equivale al 25%.",
  },
  {
    id: 44,
    text: '"Se solicita Community Manager con experiencia". El aviso busca a una persona encargada de:',
    options: {
      A: "Limpiar la oficina.",
      B: "Gestionar las redes sociales de una marca.",
      C: "Arreglar computadoras.",
      D: "Gerenciar el edificio.",
    },
    correctAnswer: "B",
    feedback: "Es la definición laboral del cargo mencionado.",
  },
  {
    id: 45,
    text: 'Si son las 3:00 PM y un "Live" empieza en 90 minutos. ¿A qué hora empieza el Live?',
    options: {
      A: "4:00 PM",
      B: "4:30 PM",
      C: "5:00 PM",
      D: "3:90 PM",
    },
    correctAnswer: "B",
    feedback:
      "90 minutos equivalen a 1 hora y media. 3:00 + 1:30 = 4:30.",
  },
  {
    id: 46,
    text: 'El antónimo (opuesto) de "Público" en redes sociales es:',
    options: {
      A: "Privado.",
      B: "Viral.",
      C: "Famoso.",
      D: "Abierto.",
    },
    correctAnswer: "A",
    feedback:
      "En privacidad digital, lo opuesto a lo abierto al mundo es lo privado.",
  },
  {
    id: 47,
    text: "Si 2 personas pagan $20.000 por un taxi (mitad y mitad). ¿Cuánto paga cada una?",
    options: {
      A: "$5.000",
      B: "$10.000",
      C: "$20.000",
      D: "$15.000",
    },
    correctAnswer: "B",
    feedback: "División simple: 20,000 / 2 = 10,000.",
  },
  {
    id: 48,
    text: 'En la frase: "Voy a postear una foto", el verbo viene del sustantivo inglés "Post" que significa:',
    options: {
      A: "Correo.",
      B: "Publicación.",
      C: "Poste de luz.",
      D: "Posterior.",
    },
    correctAnswer: "B",
    feedback:
      "En el ecosistema digital, 'Post' se traduce como publicación.",
  },
  {
    id: 49,
    text: 'Lógica de conjuntos: Tienes una carpeta de "Fotos" y dentro de ella una subcarpeta de "Viajes". Si borras la carpeta principal "Fotos":',
    options: {
      A: "Se borra todo, incluyendo 'Viajes'.",
      B: 'Se borran las fotos pero queda la carpeta "Viajes".',
      C: "No pasa nada.",
      D: 'Se borra solo "Viajes".',
    },
    correctAnswer: "A",
    feedback:
      "Lógica de jerarquía de archivos: borrar la raíz borra el contenido.",
  },
  {
    id: 50,
    text: 'Un influencer dice: "Este producto es asequible". Esto significa que el producto:',
    options: {
      A: "Es muy costoso.",
      B: "Se puede conseguir o comprar por un precio moderado.",
      C: "Es de mala calidad.",
      D: "Es imposible de encontrar.",
    },
    correctAnswer: "B",
    feedback:
      "Asequible significa que está al alcance (económico o físico).",
  },
];

// Retroalimentación del Nivel 1
export const nivel1Feedback: QuestionnaireFeedback = {
  level: "nivel-1",
  title: "🟡 NIVEL 1: PIEDRA BASE",
  subtitle: "Identificación Literal y Operaciones Básicas",
  scoreFeedback: (percentage: number) => {
    if (percentage >= 90) {
      return "¡Excelente! Dominas completamente la identificación literal de información. Estás listo para avanzar al siguiente nivel donde abordaremos comprensión inferencial.";
    } else if (percentage >= 80) {
      return "¡Muy bien! Tienes una sólida comprensión de textos y operaciones básicas. Repasa las preguntas que fallaste para consolidar este nivel.";
    } else if (percentage >= 70) {
      return "Buen trabajo. Has aprobado este nivel, pero te recomendamos repasar los conceptos donde tuviste dificultad antes de pasar al siguiente.";
    } else if (percentage >= 60) {
      return "Has alcanzado el mínimo para avanzar. Te sugerimos hacer más práctica en comprensión lectora y operaciones matemáticas básicas.";
    } else {
      return "Necesitas reforzar conceptos de lectura literal e identificación de información explícita. Practica más ejercicios de este nivel antes de avanzar.";
    }
  },
};

// NIVEL 2: CRISTALIZACIÓN (Inferencia, Relaciones Lógicas, Matemáticas de dos pasos y Análisis de Intención)
export const nivel2Questions: Question[] = [
  {
    id: 51,
    text: 'Lea el siguiente tweet: "Qué curioso que justo cuando se cae el internet de la oficina, todos recuperamos la capacidad de hablar entre nosotros." La intención subyacente del autor es:',
    options: {
      A: "Celebrar que la oficina tiene buena acústica.",
      B: "Criticar la dependencia tecnológica que aísla a las personas.",
      C: "Informar al servicio técnico sobre la falla.",
      D: "Sugerir que deberían cancelar el servicio de internet para siempre.",
    },
    correctAnswer: "B",
    feedback: "El autor usa la ironía para resaltar que la tecnología a veces impide la charla real.",
  },
  {
    id: 52,
    text: 'En una reseña de un restaurante se lee: "La comida excelente, el ambiente precioso. Lástima que tuve que levantarme yo mismo a buscar el menú después de 20 minutos de espera." ¿Cuál es la valoración global del cliente?',
    options: {
      A: "Totalmente positiva.",
      B: "Totalmente negativa.",
      C: "Mixta: buen producto, pésimo servicio.",
      D: "Neutra: no le importó nada.",
    },
    correctAnswer: "C",
    feedback: "El cliente elogia el producto pero describe un error de servicio (espera y autoservicio).",
  },
  {
    id: 53,
    text: '"No se trata de tener tiempo, se trata de hacer tiempo." Esta frase implica que:',
    options: {
      A: "El día debería tener 25 horas.",
      B: "La falta de ejercicio es un problema de prioridades, no de horario.",
      C: "Debemos comprar relojes más precisos.",
      D: "El tiempo es una ilusión física.",
    },
    correctAnswer: "B",
    feedback: "Implica que el tiempo no es un recurso que 'sobra', sino que se asigna según intereses.",
  },
  {
    id: 54,
    text: 'Contexto laboral: "Su hoja de vida es impresionante, nosotros lo llamaremos." En la cultura popular y el contexto de búsqueda de empleo, esta frase suele interpretarse inferencialmente como:',
    options: {
      A: "Una promesa legal de contrato inmediato.",
      B: "Un rechazo cortés o una postergación indefinida.",
      C: "Que el reclutador perdió el número de teléfono.",
      D: "Que el candidato está sobrecalificado.",
    },
    correctAnswer: "B",
    feedback: "Es una inferencia cultural sobre las respuestas estándar en procesos de selección.",
  },
  {
    id: 55,
    text: 'Titular: "El estudio afirma que los videojuegos mejoran los reflejos, según investigación financiada por Sony PlayStation." ¿Qué elemento debe considerar un lector crítico sobre esta noticia?',
    options: {
      A: "Que los videojuegos son malos.",
      B: "Que existe un posible conflicto de intereses en la fuente de financiación.",
      C: "Que Sony es una empresa de Japón.",
      D: "Que el estudio es falso obligatoriamente.",
    },
    correctAnswer: "B",
    feedback: "Un lector crítico siempre cuestiona quién financia la investigación para detectar sesgos.",
  },
  {
    id: 56,
    text: 'En la frase: "Estudió toda la noche; sin embargo, reprobó el examen." El conector "sin embargo" establece una relación de:',
    options: {
      A: "Causa y efecto.",
      B: "Adición de información.",
      C: "Oposición o contraste inesperado.",
      D: "Tiempo cronológico.",
    },
    correctAnswer: "C",
    feedback: "Indica que el resultado fue el contrario al esperado según el esfuerzo realizado.",
  },
  {
    id: 57,
    text: "Lea el diálogo: — ¿Vas a ir a la fiesta? — Mi ex va a estar allá. La respuesta de la segunda persona implica que:",
    options: {
      A: "No sabe dónde es la fiesta.",
      B: "Su asistencia depende de esa condición (probablemente no vaya).",
      C: "Quiere volver con su ex.",
      D: "Está preguntando la hora.",
    },
    correctAnswer: "B",
    feedback: "La respuesta es una 'razón implícita' para no asistir debido a un conflicto emocional.",
  },
  {
    id: 58,
    text: 'Si el autor dice: "La Inteligencia Artificial es una herramienta, no un maestro", está sugiriendo que:',
    options: {
      A: "La IA no sirve para nada.",
      B: "El humano debe mantener el control y el criterio sobre la tecnología.",
      C: "Los maestros deben ser robots.",
      D: "La IA es peligrosa.",
    },
    correctAnswer: "B",
    feedback: "Sugiere que la herramienta no reemplaza el criterio o la enseñanza humana.",
  },
  {
    id: 59,
    text: '"Si es gratis, el producto eres tú." Esta frase, aplicada a redes sociales, significa que:',
    options: {
      A: "Te van a regalar cosas físicas.",
      B: "Las empresas pagan con tus datos personales y atención.",
      C: "No debes pagar por nada en internet.",
      D: "Eres una mercancía física.",
    },
    correctAnswer: "B",
    feedback: "Explica el modelo de negocio de datos por servicios gratuitos.",
  },
  {
    id: 60,
    text: '"El río suena, piedras lleva." En un contexto de noticias de farándula sobre una ruptura amorosa, esto sugiere que:',
    options: {
      A: "Que hay construcción cerca.",
      B: "Que los rumores suelen tener una base de verdad.",
      C: "Que la pareja se fue de paseo al río.",
      D: "Que el ruido es molesto.",
    },
    correctAnswer: "B",
    feedback: "Las señales o rumores suelen indicar que algo real está ocurriendo de fondo.",
  },
  {
    id: 61,
    text: "Un pantalón cuesta $100.000. Tiene un descuento del 20%, pero luego debes pagar el 19% de IVA sobre el precio con descuento. ¿Cuánto pagas al final?",
    options: {
      A: "$99.000",
      B: "$95.200",
      C: "$100.000 (se anulan).",
      D: "$80.000",
    },
    correctAnswer: "B",
    feedback: "100,000 - 20% = 80,000. El 19% de 80,000 es 15,200. Total = 95,200.",
  },
  {
    id: 62,
    text: "Tienes un plan de datos. Gastas 1/2 en YouTube y 1/4 en Instagram. ¿Qué fracción de tus datos te queda disponible?",
    options: {
      A: "1/4",
      B: "1/3",
      C: "1/2",
      D: "1/8",
    },
    correctAnswer: "A",
    feedback: "1/2 (YouTube) + 1/4 (IG) = 3/4. Sobra 1/4.",
  },
  {
    id: 63,
    text: "Una inversión promete un 10% de ganancia mensual simple. Inviertes $1.000.000. ¿Cuánto dinero tendrás en total (capital + ganancia) al cabo de 3 meses?",
    options: {
      A: "$1.100.000",
      B: "$1.300.000",
      C: "$3.000.000",
      D: "$1.331.000",
    },
    correctAnswer: "B",
    feedback: "Ganancia: 100k x 3 meses = 300k. Total: 1,000,000 + 300,000.",
  },
  {
    id: 64,
    text: "Si 3 gatos cazan 3 ratones en 3 minutos. ¿Cuánto tarda 1 gato en cazar 1 ratón?",
    options: {
      A: "1 minuto.",
      B: "3 minutos.",
      C: "9 minutos.",
      D: "6 minutos.",
    },
    correctAnswer: "B",
    feedback: "Si los 3 actúan en paralelo, cada uno tarda sus mismos 3 minutos en su respectivo ratón.",
  },
  {
    id: 65,
    text: "En una empresa, por cada 5 hombres hay 3 mujeres. Si en total hay 160 empleados. ¿Cuántas mujeres hay? (Pista: Agrupe en sets de 8).",
    options: {
      A: "30",
      B: "50",
      C: "60",
      D: "100",
    },
    correctAnswer: "C",
    feedback: "160 / 8 (5+3) = 20 grupos. 20 grupos x 3 mujeres = 60 mujeres.",
  },
  {
    id: 66,
    text: "Un video dura 120 segundos. Si lo ves a velocidad 1.5x (más rápido). ¿Cuánto tardarás en verlo?",
    options: {
      A: "100 segundos.",
      B: "90 segundos.",
      C: "80 segundos.",
      D: "60 segundos.",
    },
    correctAnswer: "C",
    feedback: "Tiempo / Velocidad = 120 / 1.5 = 80 segundos.",
  },
  {
    id: 67,
    text: "Compras una criptomoneda en $100 USD. Sube un 50% (llega a $150). Luego, cae un 50% desde ese nuevo valor. ¿Cuál es tu precio final?",
    options: {
      A: "$100 USD (quedo igual).",
      B: "$75 USD.",
      C: "$50 USD.",
      D: "$125 USD.",
    },
    correctAnswer: "B",
    feedback: "150 - (50% de 150) = 150 - 75 = 75. Perder un porcentaje tras subirlo no te deja igual.",
  },
  {
    id: 68,
    text: "Para aprobar la materia necesitas un promedio de 3.0. Tus notas son: 2.0, 3.0 y 4.0. Te falta una cuarta nota. ¿Qué nota mínima necesitas sacar en el cuarto examen para promediar exactamente 3.0?",
    options: {
      A: "2.0",
      B: "3.0",
      C: "4.0",
      D: "1.0",
    },
    correctAnswer: "B",
    feedback: "Suma necesaria para promedio 3.0 en 4 notas es 12. Tienes 2+3+4=9. Falta 3.",
  },
  {
    id: 69,
    text: "Una botella de 2 litros de gaseosa cuesta $4.000. Una botella personal de 500ml cuesta $1.500. ¿Cuánto ahorras por litro si compras la botella grande en lugar de 4 personales?",
    options: {
      A: "$500",
      B: "$1.000",
      C: "$2.000",
      D: "No ahorras nada.",
    },
    correctAnswer: "C",
    feedback: "2 litros en pequeñas valen 6,000. En la grande valen 4,000. Ahorras 2,000 por cada 2 litros (1,000 por litro).",
  },
  {
    id: 70,
    text: "El aforo de un concierto es de 10.000 personas. Se vendió el 80%. De los asistentes, la mitad compró camiseta. ¿Cuántas personas compraron camiseta?",
    options: {
      A: "8.000",
      B: "5.000",
      C: "4.000",
      D: "2.000",
    },
    correctAnswer: "C",
    feedback: "El 80% de 10,000 es 8,000. La mitad compró camiseta: 4,000.",
  },
  {
    id: 71,
    text: "Premisa 1: Si llueve, el suelo se moja. Premisa 2: El suelo está mojado. ¿Es válido concluir que llovió?",
    options: {
      A: "Sí, es la única explicación.",
      B: "No, alguien pudo haber regado o lavado el piso (Falacia de afirmación del consecuente).",
      C: "Sí, el agua siempre viene de la lluvia.",
      D: "No, porque el suelo puede ser impermeable.",
    },
    correctAnswer: "B",
    feedback: "Error lógico de 'afirmación del consecuente'. El suelo mojado no garantiza lluvia.",
  },
  {
    id: 72,
    text: 'Identifique la falacia en: "No le creas a Juan sobre economía, él es muy tacaño y se viste mal".',
    options: {
      A: "Generalización apresurada.",
      B: "Ad Hominem (Ataque a la persona y no al argumento).",
      C: "Falso dilema.",
      D: "Petición de principio.",
    },
    correctAnswer: "B",
    feedback: "Ataca rasgos personales de Juan que no tienen que ver con su conocimiento económico.",
  },
  {
    id: 73,
    text: "Orden lógico de redacción:\n1. Enviar el correo.\n2. Escribir el asunto.\n3. Adjuntar el archivo.\n4. Redactar el cuerpo del mensaje.\nEl orden más seguro para evitar errores (como olvidar el adjunto) es:",
    options: {
      A: "1, 2, 3, 4.",
      B: "4, 2, 3, 1.",
      C: "2, 4, 3, 1. (Asunto, Mensaje, Adjunto, Enviar).",
      D: "3, 1, 2, 4.",
    },
    correctAnswer: "C",
    feedback: "Es la secuencia que minimiza el error común de enviar correos sin archivos o sin texto.",
  },
  {
    id: 74,
    text: "Analogía: Algoritmo es a Programador como Receta es a:",
    options: {
      A: "Comensal.",
      B: "Cocina.",
      C: "Chef.",
      D: "Ingrediente.",
    },
    correctAnswer: "C",
    feedback: "Relación: El programador crea el código; el chef crea la receta.",
  },
  {
    id: 75,
    text: 'Si: "Ningún estudiante es perezoso" y "Algunos perezosos son felices". Se puede concluir lógicamente que:',
    options: {
      A: "Todos los estudiantes son felices.",
      B: "Ningún estudiante es feliz.",
      C: "Algunos felices no son estudiantes.",
      D: "Todos los felices son perezosos.",
    },
    correctAnswer: "C",
    feedback: "Si algunos perezosos son felices, y ningún estudiante es perezoso, esos perezosos felices no son estudiantes.",
  },
  {
    id: 76,
    text: 'En una discusión de Twitter: Usuario A: "Deberíamos mejorar el transporte público". Usuario B: "Ah, entonces quieres que prohíban los carros particulares y todos vayamos en bicicleta obligados". El Usuario B está cometiendo la falacia de:',
    options: {
      A: "El Hombre de Paja (distorsionar el argumento del otro para atacarlo fácil).",
      B: "Causa Falsa.",
      C: "Pendiente Resbaladiza.",
      D: "Ad Populum.",
    },
    correctAnswer: "A",
    feedback: "El usuario B exagera la postura de A para que parezca ridícula y fácil de atacar.",
  },
  {
    id: 77,
    text: "Serie gráfica numérica: 3, 6, 11, 18, 27... (Pista: Sume números impares consecutivos: +3, +5, +7, +9...). El siguiente número es:",
    options: {
      A: "36",
      B: "38",
      C: "40",
      D: "35",
    },
    correctAnswer: "B",
    feedback: "La diferencia entre términos aumenta en números impares: +3, +5, +7, +9, +11. 27+11=38.",
  },
  {
    id: 78,
    text: '"Solo si estudias inglés, conseguirás el puesto internacional". Juan consiguió el puesto internacional. Por lo tanto:',
    options: {
      A: "Juan es inteligente.",
      B: "Juan estudió inglés (condición necesaria).",
      C: "Juan tiene amigos en la empresa.",
      D: "Juan habla francés.",
    },
    correctAnswer: "B",
    feedback: "'Solo si' indica una condición necesaria para el resultado obtenido.",
  },
  {
    id: 79,
    text: "Paradoja de la tolerancia: Si una sociedad es ilimitadamente tolerante, su capacidad de ser tolerante es finalmente destruida por los intolerantes. Esto implica que:",
    options: {
      A: "Debemos tolerar todo.",
      B: "Para mantener la tolerancia, no se debe tolerar la intolerancia.",
      C: "La tolerancia es un defecto.",
      D: "Los intolerantes son necesarios.",
    },
    correctAnswer: "B",
    feedback: "Es la conclusión de la paradoja: la tolerancia absoluta se destruye a sí misma.",
  },
  {
    id: 80,
    text: "Relación semántica: Efímero es a Eterno como Ficticio es a:",
    options: {
      A: "Imaginario.",
      B: "Real.",
      C: "Literario.",
      D: "Falso.",
    },
    correctAnswer: "B",
    feedback: "La relación es de antonimia (opuestos).",
  },
  {
    id: 81,
    text: 'Texto: "El teletrabajo ha aumentado la productividad, pero ha difuminado la línea entre vida personal y laboral." La palabra "difuminado" sugiere que:',
    options: {
      A: "La línea se ha borrado o vuelto poco clara.",
      B: "La línea es ahora más gruesa y fuerte.",
      C: "La línea ha cambiado de color.",
      D: "El teletrabajo es ilegal.",
    },
    correctAnswer: "A",
    feedback: "Significa que los límites se han vuelto borrosos o mezclados.",
  },
  {
    id: 82,
    text: 'En un contrato de términos y condiciones: "La empresa se reserva el derecho de modificar las tarifas sin previo aviso". Esto significa legalmente que:',
    options: {
      A: "Te avisarán antes de subir el precio.",
      B: "Pueden subir el precio hoy y tú te enteras cuando te llegue la factura.",
      C: "Las tarifas son fijas para siempre.",
      D: "Tú puedes decidir cuánto pagar.",
    },
    correctAnswer: "B",
    feedback: "Es una cláusula que otorga poder unilateral a la empresa sobre el usuario.",
  },
  {
    id: 83,
    text: '"No todo lo que brilla es oro, ni todo el que vaga está perdido" (Tolkien). La segunda parte de la frase reivindica:',
    options: {
      A: "A las personas que tienen GPS.",
      B: "Que vagar o explorar no significa carecer de propósito.",
      C: "Que perderse es divertido.",
      D: "Que el oro es irrelevante.",
    },
    correctAnswer: "B",
    feedback: "Sugiere que el movimiento o la búsqueda no implican falta de dirección.",
  },
  {
    id: 84,
    text: "Análisis de gráfica: En una gráfica de barras de ventas, la barra de Diciembre es el doble de alta que la de Enero. Esto significa que:",
    options: {
      A: "Diciembre tiene más días.",
      B: "En Enero no se vendió nada.",
      C: "En Diciembre se vendió un 100% más que en Enero.",
      D: "En Enero se vendió el doble que en Diciembre.",
    },
    correctAnswer: "C",
    feedback: "Si algo es el doble que otro, el aumento respecto al original es del 100%.",
  },
  {
    id: 85,
    text: '"Es un secreto a voces". Esta figura retórica (oxímoron) significa:',
    options: {
      A: "Que es un secreto muy bien guardado.",
      B: "Que nadie lo sabe.",
      C: "Que todo el mundo lo sabe, aunque nadie lo dice oficialmente.",
      D: "Que se dice susurrando.",
    },
    correctAnswer: "C",
    feedback: "Es una contradicción que describe algo público que se pretende ocultar.",
  },
  {
    id: 86,
    text: '¿Cuál frase usa correctamente el conector "Por qué" / "Porque"?',
    options: {
      A: "No entiendo porque no viniste.",
      B: "Me fui por qué estaba cansado.",
      C: "¿Por qué no me avisaste antes?",
      D: "Esa es la razón porqué lo hice.",
    },
    correctAnswer: "C",
    feedback: "'Por qué' separado y con tilde se usa para preguntas directas o indirectas.",
  },
  {
    id: 87,
    text: '"La medida afectará negativamente a los estratos más altos". Un lector crítico de estrato bajo podría pensar erróneamente que esto es positivo para él. Sin embargo, en economía interconectada:',
    options: {
      A: "Los ricos siempre pierden.",
      B: "No le afecta en absoluto.",
      C: "Podría haber efectos colaterales (ej. desempleo) que sí le afecten.",
      D: "El gobierno le dará dinero.",
    },
    correctAnswer: "C",
    feedback: "En un sistema complejo, lo que afecta a un sector puede rebotar en otros (ej. inversión).",
  },
  {
    id: 88,
    text: 'Si lees una noticia científica que dice "Correlación no implica causalidad". Significa que:',
    options: {
      A: "Si dos cosas pasan al tiempo, una causó la otra.",
      B: "Que dos eventos ocurran juntos no significa que uno provoque el otro.",
      C: "La ciencia no sabe nada.",
      D: "Todo es casualidad.",
    },
    correctAnswer: "B",
    feedback: "Que dos cosas ocurran juntas no significa que una sea la madre de la otra.",
  },
  {
    id: 89,
    text: 'Texto: "Se busca pasante. Pago: Experiencia y visibilidad". La crítica social a este aviso es:',
    options: {
      A: "Que es una gran oportunidad educativa.",
      B: 'Que la "experiencia" no paga las facturas (precarización laboral).',
      C: "Que los pasantes no saben nada.",
      D: "Que la visibilidad es lo más importante.",
    },
    correctAnswer: "B",
    feedback: "Es una crítica a la falta de remuneración económica en trabajos de entrada.",
  },
  {
    id: 90,
    text: "¿Cuál de los siguientes es un argumento subjetivo?",
    options: {
      A: "La película dura 120 minutos.",
      B: "La película fue dirigida por Nolan.",
      C: "La película es una obra maestra incomprendida.",
      D: "La película costó 100 millones de dólares.",
    },
    correctAnswer: "C",
    feedback: "El uso de 'obra maestra' es una valoración personal, no un dato medible.",
  },
  {
    id: 91,
    text: "Si lanzas un dado de 6 caras. ¿Cuál es la probabilidad de sacar un número mayor que 4? (Es decir, 5 o 6).",
    options: {
      A: "1/6",
      B: "2/6 (o 1/3)",
      C: "3/6 (o 1/2)",
      D: "4/6",
    },
    correctAnswer: "B",
    feedback: "Hay 2 opciones favorables (5, 6) de 6 posibles. 2/6 = 1/3.",
  },
  {
    id: 92,
    text: "Un mapa está a escala 1:100.000. Si dos ciudades están a 5 cm en el mapa. ¿A qué distancia real están? (1 cm = 1 km en esa escala).",
    options: {
      A: "5 km.",
      B: "50 km.",
      C: "500 metros.",
      D: "10 km.",
    },
    correctAnswer: "A",
    feedback: "100,000 cm son 1 km. 5 cm equivalen a 5 km.",
  },
  {
    id: 93,
    text: '"A caballo regalado no se le mira el diente". Este refrán enseña a:',
    options: {
      A: "Ser experto veterinario.",
      B: "No criticar los defectos de algo que se recibió gratuitamente.",
      C: "Rechazar regalos sospechosos.",
      D: "Cuidar la higiene dental de las mascotas.",
    },
    correctAnswer: "B",
    feedback: "Enseña gratitud sobre la exigencia cuando algo es un obsequio.",
  },
  {
    id: 94,
    text: 'Si "A" es más alto que "B", y "B" es más alto que "C". ¿Cuál afirmación es falsa?',
    options: {
      A: "A es más alto que C.",
      B: "C es el más bajo de todos.",
      C: "B está en el medio.",
      D: "C es más alto que A.",
    },
    correctAnswer: "D",
    feedback: "Por transitividad, si A > B y B > C, entonces A > C. Por tanto, C no puede ser > A.",
  },
  {
    id: 95,
    text: "Tienes dos relojes de arena: uno de 4 minutos y otro de 7 minutos. ¿Es posible medir exactamente 3 minutos?",
    options: {
      A: "No, es imposible.",
      B: "Sí, pones los dos al tiempo y la diferencia cuando acabe el de 4 es el residuo del de 7.",
      C: "Sí, pero rompiendo el de 4.",
      D: "Sí, usando un cronómetro digital.",
    },
    correctAnswer: "B",
    feedback: "Al terminar el de 4, en el de 7 quedan exactamente 3 minutos de arena.",
  },
  {
    id: 96,
    text: 'Un artículo de opinión ataca una idea diciendo: "Eso es socialismo" sin explicar por qué. Esto funciona como:',
    options: {
      A: "Un argumento sólido.",
      B: 'Una etiqueta o "palabra gatillo" para generar rechazo emocional sin argumentar.',
      C: "Una definición política precisa.",
      D: "Un elogio.",
    },
    correctAnswer: "B",
    feedback: "Es una técnica de manipulación emocional que evita el debate de ideas.",
  },
  {
    id: 97,
    text: "Una receta para 4 personas usa 200g de harina. Llegan 2 invitados extra (total 6 personas). ¿Cuánta harina necesitas ahora?",
    options: {
      A: "250g",
      B: "300g",
      C: "400g",
      D: "220g",
    },
    correctAnswer: "B",
    feedback: "Si 4p = 200g, cada persona requiere 50g. 6 personas x 50g = 300g.",
  },
  {
    id: 98,
    text: '"El usuario promedio pasa 6 horas en pantalla". Tú pasas 3 horas. En comparación con la media, tu uso es:',
    options: {
      A: "Un 100% mayor.",
      B: "Un 50% menor.",
      C: "Un 200% menor.",
      D: "Igual.",
    },
    correctAnswer: "B",
    feedback: "3 horas es la mitad (50% menos) que 6 horas.",
  },
  {
    id: 99,
    text: 'Sinónimo de "Procrastinar" en contexto académico:',
    options: {
      A: "Adelantar trabajo.",
      B: "Investigar profundamente.",
      C: "Postergar o aplazar tareas importantes.",
      D: "Fracasar deliberadamente.",
    },
    correctAnswer: "C",
    feedback: "Es la definición académica del hábito de postergar tareas.",
  },
  {
    id: 100,
    text: 'En un debate, tu oponente dice: "Todos los políticos son corruptos". Para refutar esto lógicamente, solo necesitas demostrar:',
    options: {
      A: "Que la mayoría son honestos.",
      B: "Que al menos UN político no es corrupto (contraejemplo).",
      C: "Que la política es difícil.",
      D: "Que tú eres político.",
    },
    correctAnswer: "B",
    feedback: "Las afirmaciones universales ('Todos') se caen con un solo contraejemplo.",
  },
];

// Retroalimentación del Nivel 2
export const nivel2Feedback: QuestionnaireFeedback = {
  level: "nivel-2",
  title: "🟠 NIVEL 2: CRISTALIZACIÓN",
  subtitle: "Inferencia, Relaciones Lógicas y Análisis Crítico",
  scoreFeedback: (percentage: number) => {
    if (percentage >= 90) {
      return "¡Excelente! Dominas la comprensión inferencial y el análisis lógico. Estás listo para el Nivel 3 donde abordaremos análisis crítico profundo.";
    } else if (percentage >= 80) {
      return "¡Muy bien! Tienes sólidas habilidades de inferencia y razonamiento. Repasa las preguntas sobre falacias lógicas antes de continuar.";
    } else if (percentage >= 70) {
      return "Buen trabajo. Has dominado este nivel, pero practica más sobre relaciones lógicas e intenciones textuales.";
    } else if (percentage >= 60) {
      return "Has alcanzado el mínimo para avanzar. Te recomendamos reforzar falacias y razonamiento antes del próximo nivel.";
    } else {
      return "Necesitas practicar más sobre inferencia y lógica. Revisa especialmente las secciones de falacias y razonamiento deductivo.";
    }
  },
};

// NIVEL 3: DIAMANTE (Pensamiento Crítico, Evaluación de Argumentos, Falacias Complejas y Probabilidad Avanzada)
export const nivel3Questions: Question[] = [
  {
    id: 101,
    text: 'En un debate sobre IA, un experto afirma: "No podemos detener el desarrollo de la IA porque sería como intentar detener la rotación de la tierra". ¿Qué tipo de recurso argumentativo está usando el experto?',
    options: {
      A: "Una prueba científica irrefutable.",
      B: "Una analogía que busca presentar el avance tecnológico como un fenómeno natural inevitable.",
      C: "Una amenaza directa contra la humanidad.",
      D: "Una hipérbole que carece de sentido lógico.",
    },
    correctAnswer: "B",
    feedback: "Intenta naturalizar algo social para evitar que sea cuestionado o regulado.",
  },
  {
    id: 102,
    text: 'Un titular dice: "El 90% de los usuarios prefiere nuestra app". El asterisco al final indica: estudio realizado sobre una muestra de 10 empleados de la empresa. ¿Por qué este argumento es débil desde el pensamiento crítico?',
    options: {
      A: "Porque el porcentaje es muy alto.",
      B: "Por el sesgo de selección: la muestra no es representativa ni imparcial.",
      C: "Porque los empleados no saben usar la app.",
      D: "Porque el 10% restante no fue encuestado.",
    },
    correctAnswer: "B",
    feedback: "Una muestra de empleados nunca será imparcial para evaluar su propia empresa.",
  },
  {
    id: 103,
    text: 'Falacia de la "Pendiente Resbaladiza": ¿Cuál de estos argumentos la ejemplifica?',
    options: {
      A: "Si no estudias, no pasas.",
      B: "Si permitimos que los estudiantes usen calculadoras, luego querrán usar IA para todo, dejarán de pensar y eventualmente la civilización colapsará.",
      C: "Los videojuegos son buenos porque mejoran los reflejos.",
      D: "Todos los científicos usan batas, por tanto, si uso bata soy científico.",
    },
    correctAnswer: "B",
    feedback: "Sugiere una cadena de eventos catastróficos sin pruebas de que uno lleve al otro.",
  },
  {
    id: 104,
    text: 'Un político dice: "Mi oponente propone reducir el gasto militar; claramente quiere que nuestra nación quede indefensa y sea invadida por terroristas". Esta distorsión del argumento original se conoce como:',
    options: {
      A: "Ad Hominem.",
      B: "Hombre de Paja.",
      C: "Falsa equivalencia.",
      D: "Apelación a la autoridad.",
    },
    correctAnswer: "B",
    feedback: "Distorsiona la reducción de gasto como 'deseo de invasión' para invalidar al oponente.",
  },
  {
    id: 105,
    text: '"La mayoría de la gente cree en los horóscopos, por lo tanto, algo de verdad deben tener". Esta falacia se llama:',
    options: {
      A: "Ad Populum (apelar a la popularidad).",
      B: "Ad Ignorantiam (apelar a la ignorancia).",
      C: "Post Hoc (falsa causa).",
      D: "Generalización apresurada.",
    },
    correctAnswer: "A",
    feedback: "La verdad no se define por el número de personas que creen en algo.",
  },
  {
    id: 106,
    text: "Si un autor utiliza un tono \"Sarcástico\" en una columna de opinión, su objetivo principal es:",
    options: {
      A: "Informar datos objetivos.",
      B: "Ridiculizar una postura o personaje a través de la ironía.",
      C: "Elogiar las virtudes de un sistema.",
      D: "Confundir al lector con mentiras.",
    },
    correctAnswer: "B",
    feedback: "El sarcasmo busca criticar a través de la burla indirecta.",
  },
  {
    id: 107,
    text: '¿Qué diferencia un "Hecho" de una "Inferencia" en un texto académico?',
    options: {
      A: "El hecho es aburrido y la inferencia es interesante.",
      B: "El hecho es una comprobación directa; la inferencia es una conclusión lógica basada en hechos.",
      C: "El hecho siempre es verdadero y la inferencia siempre es falsa.",
      D: "No hay diferencia.",
    },
    correctAnswer: "B",
    feedback: "El hecho se observa; la inferencia se construye mediante la razón sobre el hecho.",
  },
  {
    id: 108,
    text: "Al analizar un discurso, detectar un \"Sesgo de Confirmación\" significa que el autor:",
    options: {
      A: "Solo presenta información que apoya sus creencias previas e ignora la evidencia contraria.",
      B: "Confirma todas sus fuentes con rigor científico.",
      C: "No tiene una opinión clara sobre el tema.",
      D: "Intenta convencer a todos por igual.",
    },
    correctAnswer: "A",
    feedback: "Es la tendencia humana a ignorar lo que nos contradice y abrazar lo que nos da la razón.",
  },
  {
    id: 109,
    text: 'En la frase: "El capitalismo es el peor sistema, a excepción de todos los demás que se han inventado" (Churchill). El autor sugiere que:',
    options: {
      A: "El capitalismo es perfecto.",
      B: "El capitalismo es imperfecto, pero es la opción más viable comparada con las otras.",
      C: "Debemos inventar un sistema nuevo mañana.",
      D: "Ningún sistema funciona.",
    },
    correctAnswer: "B",
    feedback: "Es un argumento de 'realismo político' sobre la falta de mejores alternativas.",
  },
  {
    id: 110,
    text: "Un texto que utiliza muchas \"preguntas retóricas\" busca principalmente:",
    options: {
      A: "Que el lector responda en voz alta.",
      B: "Evidenciar que el autor no sabe las respuestas.",
      C: "Involucrar al lector y hacerlo reflexionar sobre una obviedad.",
      D: "Llenar espacio porque no tiene argumentos.",
    },
    correctAnswer: "C",
    feedback: "Busca que el lector llegue a la conclusión deseada por 'cuenta propia'.",
  },
  {
    id: 111,
    text: 'Paradoja de Epicuro: "Si Dios es omnipotente y bueno, ¿por qué permite el mal?". Este planteamiento busca exponer:',
    options: {
      A: "Una verdad teológica.",
      B: "Una contradicción lógica entre tres atributos.",
      C: "Una solución al problema del dolor.",
      D: "Un odio hacia la religión.",
    },
    correctAnswer: "B",
    feedback: "Expone el problema lógico de conciliar la maldad con una deidad perfecta.",
  },
  {
    id: 112,
    text: "Un examen médico tiene una efectividad del 99%. Si te sale positivo en una enfermedad que solo tiene 1 de cada 10.000 personas. Lógicamente, la probabilidad de que realmente estés enfermo es:",
    options: {
      A: "99%",
      B: "Sorprendentemente baja (debido a la probabilidad base y los falsos positivos).",
      C: "1%",
      D: "100%",
    },
    correctAnswer: "B",
    feedback: "En enfermedades raras, hay más falsos positivos que enfermos reales en la población general.",
  },
  {
    id: 113,
    text: "Si A implica B, y B implica C. Si sabemos que \"C\" es FALSO, podemos afirmar que:",
    options: {
      A: "A es verdadero.",
      B: "B es verdadero.",
      C: "A es falso.",
      D: "No se puede saber nada de A.",
    },
    correctAnswer: "C",
    feedback: "Modus Tollens: Si la consecuencia (C) es falsa, el origen (A) también debe serlo.",
  },
  {
    id: 114,
    text: "En una mesa hay 3 cajas. Una tiene oro, las otras dos están vacías. Eliges la caja 1. El presentador (que sabe qué hay) abre la caja 3 y está vacía. Te ofrece cambiar a la caja 2. Según la lógica de probabilidad (Problema de Monty Hall), tú deberías:",
    options: {
      A: "Quedarte con la 1, da igual.",
      B: "Cambiar a la 2, porque tienes más probabilidad de ganar.",
      C: "No elegir ninguna.",
      D: "Enojarte con el presentador.",
    },
    correctAnswer: "B",
    feedback: "Cambiar duplica tus opciones porque el presentador ya eliminó un error por ti.",
  },
  {
    id: 115,
    text: "¿Cuál es el siguiente número en la serie de Fibonacci: 1, 1, 2, 3, 5, 8, 13...?",
    options: {
      A: "18",
      B: "21",
      C: "20",
      D: "25",
    },
    correctAnswer: "B",
    feedback: "Cada número es la suma de los dos anteriores: 8 + 13 = 21.",
  },
  {
    id: 116,
    text: '"Todos los mamíferos son animales. Algunos animales son feroces". ¿Se puede concluir que algunos mamíferos son feroces?',
    options: {
      A: "Sí, es lógico.",
      B: "No necesariamente (falacia del término medio no distribuido).",
      C: "Solo si son leones.",
      D: "Sí, porque los mamíferos son animales.",
    },
    correctAnswer: "B",
    feedback: "No hay conexión necesaria entre ser mamífero y ser la parte 'feroz' de los animales.",
  },
  {
    id: 117,
    text: "Si un proceso de producción tiene una falla de 1 entre 1.000. ¿Cuál es la probabilidad de que en un lote de 2 productos, AMBOS estén fallidos?",
    options: {
      A: "1 / 1.000",
      B: "2 / 1.000",
      C: "1 / 1.000.000",
      D: "1 / 2.000",
    },
    correctAnswer: "C",
    feedback: "Las probabilidades de eventos independientes se multiplican: 1/1000 x 1/1000.",
  },
  {
    id: 118,
    text: "Un silogismo categórico válido requiere que:",
    options: {
      A: "Tenga al menos 4 premisas.",
      B: "La conclusión se desprenda necesariamente de las premisas.",
      C: "Las premisas sean divertidas.",
      D: "El autor sea un filósofo griego.",
    },
    correctAnswer: "B",
    feedback: "La validez depende de la estructura, no del contenido o del autor.",
  },
  {
    id: 119,
    text: "La navaja de Ockham sugiere que:",
    options: {
      A: "La explicación más complicada suele ser la correcta.",
      B: "En igualdad de condiciones, la explicación más sencilla suele ser la correcta.",
      C: "Hay que cortar los argumentos a la mitad.",
      D: "La verdad es relativa.",
    },
    correctAnswer: "B",
    feedback: "Principio de parsimonia: no multiplicar las causas sin necesidad.",
  },
  {
    id: 120,
    text: "Si se duplica el radio de un círculo, su área:",
    options: {
      A: "Se duplica.",
      B: "Se triplica.",
      C: "Se cuadruplica (A = πr²).",
      D: "Se mantiene igual.",
    },
    correctAnswer: "C",
    feedback: "Como el radio está al cuadrado, al duplicarlo (2²), el área aumenta 4 veces.",
  },
  {
    id: 121,
    text: '"La libertad no es hacer lo que uno quiere, sino no tener que hacer lo que uno no quiere". Esta distinción define:',
    options: {
      A: "La libertad positiva vs. libertad negativa.",
      B: "El egoísmo puro.",
      C: "La pereza laboral.",
      D: "La anarquía.",
    },
    correctAnswer: "A",
    feedback: "Define la libertad como ausencia de coacción externa (libertad negativa).",
  },
  {
    id: 122,
    text: 'En un texto jurídico, la frase "Ipso facto" significa:',
    options: {
      A: "Después del hecho.",
      B: "Por el mismo hecho (inmediatamente).",
      C: "Según la ley anterior.",
      D: "Bajo sospecha.",
    },
    correctAnswer: "B",
    feedback: "Término jurídico para consecuencias automáticas de un acto.",
  },
  {
    id: 123,
    text: 'Analice el sesgo: Un periódico titula "Manifestantes bloquean la ciudad" mientras otro titula "Ciudadanos exigen derechos en las calles". La diferencia principal es:',
    options: {
      A: "El primer periódico miente.",
      B: "El encuadre (framing): uno enfatiza el caos y el otro la causa social.",
      C: "No hay diferencia, dicen lo mismo.",
      D: "Uno es para ricos y otro para pobres.",
    },
    correctAnswer: "B",
    feedback: "El lenguaje moldea la percepción: uno criminaliza, el otro legitima.",
  },
  {
    id: 124,
    text: 'Si un autor dice que una política es "un mal necesario", está usando un argumento:',
    options: {
      A: "Deontológico (basado en principios).",
      B: "Utilitarista (el fin justifica los medios).",
      C: "Estético.",
      D: "Teológico.",
    },
    correctAnswer: "B",
    feedback: "Juzga la acción por el beneficio final que produce, no por la acción en sí.",
  },
  {
    id: 125,
    text: '¿Qué es un "Eufemismo"?',
    options: {
      A: "Una exageración.",
      B: "Una palabra suave decorosa para sustituir una que se considera tabú o grosera.",
      C: "Una contradicción de términos.",
      D: "Un insulto directo.",
    },
    correctAnswer: "B",
    feedback: "Es una herramienta lingüística para suavizar realidades crudas (ej. 'limpieza social').",
  },
  {
    id: 126,
    text: "Según la pirámide de argumentación de Graham, la forma más baja de debatir es:",
    options: {
      A: "El contraargumento.",
      B: "El insulto (Name-calling).",
      C: "Refutar el punto central.",
      D: "El tono.",
    },
    correctAnswer: "B",
    feedback: "Atacar a la persona es el nivel más bajo de razonamiento.",
  },
  {
    id: 127,
    text: '"El fin de la historia" de Francis Fukuyama sugiere que:',
    options: {
      A: "El mundo se va a acabar pronto.",
      B: "La democracia liberal es el punto final de la evolución ideológica humana.",
      C: "Ya no habrá más guerras.",
      D: "Los libros de historia no se escribirán más.",
    },
    correctAnswer: "B",
    feedback: "Tesis sobre la hegemonía de un solo modelo de pensamiento tras la Guerra Fría.",
  },
  {
    id: 128,
    text: '¿Qué significa que un argumento sea "Sólido"?',
    options: {
      A: "Que suena muy fuerte al decirlo.",
      B: "Que es válido y además sus premisas son verdaderas.",
      C: "Que nadie puede contradecirlo.",
      D: "Que es muy largo.",
    },
    correctAnswer: "B",
    feedback: "Un argumento sólido es la combinación perfecta de lógica válida y datos verdaderos.",
  },
  {
    id: 129,
    text: "Un texto distópico (como 1984) utiliza la narrativa para:",
    options: {
      A: "Predecir el futuro exacto.",
      B: "Advertir sobre tendencias sociales o políticas actuales llevadas al extremo.",
      C: "Entretener niños.",
      D: "Enseñar historia antigua.",
    },
    correctAnswer: "B",
    feedback: "Las distopías son 'espejos aumentados' de los miedos del presente.",
  },
  {
    id: 130,
    text: "El concepto de \"Posverdad\" se refiere a:",
    options: {
      A: "Verdades que se descubren tarde.",
      B: "Circunstancias en las que los hechos objetivos influyen menos que las emociones y creencias personales.",
      C: "Mentiras piadosas.",
      D: "El futuro de la verdad.",
    },
    correctAnswer: "B",
    feedback: "Describe una era donde los sentimientos pesan más que los datos duros.",
  },
  {
    id: 131,
    text: 'Si un estudio dice que "El café causa longevidad" pero fue pagado por una asociación de caficultores, el lector debe:',
    options: {
      A: "Dejar de tomar café.",
      B: "Aplicar el escepticismo sano y buscar estudios independientes.",
      C: "Creerlo porque son expertos.",
      D: "Quemar el estudio.",
    },
    correctAnswer: "B",
    feedback: "El escepticismo crítico es vital cuando quien paga el estudio se beneficia del resultado.",
  },
  {
    id: 132,
    text: '"Pienso, luego existo" de Descartes es la base del:',
    options: {
      A: "Empirismo.",
      B: "Racionalismo.",
      C: "Nihilismo.",
      D: "Relativismo.",
    },
    correctAnswer: "B",
    feedback: "Establece la razón como la primera certeza de la existencia humana.",
  },
  {
    id: 133,
    text: '¿Cuál de estas es una característica de la "Lectura Crítica"?',
    options: {
      A: "Leer muy rápido.",
      B: "Evaluar la consistencia lógica y la validez de la evidencia del texto.",
      C: "Memorizar todos los nombres del texto.",
      D: "Aceptar todo lo que dice el autor.",
    },
    correctAnswer: "B",
    feedback: "Leer críticamente es 'desarmar' el texto para ver cómo está construido.",
  },
  {
    id: 134,
    text: "Si un argumento incurre en \"Petitio Principii\" (Petición de principio):",
    options: {
      A: "El autor pide perdón.",
      B: "La conclusión ya está incluida en una de las premisas (razonamiento circular).",
      C: "El autor es un principiante.",
      D: "El argumento es demasiado complejo.",
    },
    correctAnswer: "B",
    feedback: "Es un error donde la prueba depende de aceptar primero la conclusión.",
  },
  {
    id: 135,
    text: "Un \"Cisne Negro\" en lógica y economía (Nassim Taleb) representa:",
    options: {
      A: "Un evento altamente probable.",
      B: "Un evento altamente improbable, de gran impacto, que se explica después de que ocurre.",
      C: "Una especie de ave en peligro.",
      D: "Una mentira que parece verdad.",
    },
    correctAnswer: "B",
    feedback: "Describe eventos que cambian el mundo pero que nadie vio venir (ej. Internet).",
  },
  {
    id: 136,
    text: "El \"Efecto Dunning-Kruger\" describe a personas que:",
    options: {
      A: "Saben mucho y son humildes.",
      B: "Tienen poco conocimiento pero sobreestiman mucho su propia habilidad.",
      C: "Se les olvida todo lo que aprenden.",
      D: "Son genios incomprendidos.",
    },
    correctAnswer: "B",
    feedback: "Explica por qué la ignorancia suele generar más confianza que el conocimiento.",
  },
  {
    id: 137,
    text: '¿Qué es un "Dilema Ético"?',
    options: {
      A: "Una situación con una solución fácil.",
      B: "Una situación donde dos valores morales entran en conflicto y no hay una solución perfecta.",
      C: "Un error de ortografía.",
      D: "Una pelea entre dos personas.",
    },
    correctAnswer: "B",
    feedback: "Es un choque de 'dos bienes' o 'dos males' donde no hay salida fácil.",
  },
  {
    id: 138,
    text: "En estadística, la \"Desviación Estándar\" mide:",
    options: {
      A: "El promedio de los datos.",
      B: "Qué tan dispersos están los datos respecto al promedio.",
      C: "El dato que más se repite.",
      D: "El error del investigador.",
    },
    correctAnswer: "B",
    feedback: "Indica si los datos están agrupados o muy alejados del centro.",
  },
  {
    id: 139,
    text: "Un texto que apela al \"Patetismo\" (Pathos) busca convencer a través de:",
    options: {
      A: "La lógica y la razón.",
      B: "Las emociones y la empatía del oyente.",
      C: "La autoridad del hablante.",
      D: "La velocidad de las palabras.",
    },
    correctAnswer: "B",
    feedback: "Es el uso de la emoción para nublar o potenciar el juicio del otro.",
  },
  {
    id: 140,
    text: "Si el ingreso per cápita de un país sube, pero la pobreza también sube, esto indica:",
    options: {
      A: "Que los datos están mal.",
      B: "Una alta desigualdad en la distribución de la riqueza.",
      C: "Que el país es muy rico.",
      D: "Que la población disminuyó.",
    },
    correctAnswer: "B",
    feedback: "Muestra que el promedio no refleja la realidad de todos los individuos.",
  },
  {
    id: 141,
    text: '"A priori" significa:',
    options: {
      A: "Basado en la experiencia.",
      B: "Antes de la experiencia (independiente de ella).",
      C: "Con mucha prioridad.",
      D: "Al final de todo.",
    },
    correctAnswer: "B",
    feedback: "Conocimiento puro que no requiere salir al mundo para ser comprobado (ej. 2+2=4).",
  },
  {
    id: 142,
    text: '¿Cuál es el riesgo de una "Cámara de Eco" en redes sociales?',
    options: {
      A: "Que el celular se dañe por el sonido.",
      B: "Que el usuario solo vea opiniones iguales a la suya, reforzando sus sesgos.",
      C: "Que la batería dure menos.",
      D: "Que nadie te responda.",
    },
    correctAnswer: "B",
    feedback: "Evita el crecimiento intelectual al bloquear ideas que nos incomodan.",
  },
  {
    id: 143,
    text: "Un sistema de meritocracia pura asume (teóricamente) que:",
    options: {
      A: "Todos tienen el mismo punto de partida y oportunidades.",
      B: "Solo ganan los que tienen suerte.",
      C: "El gobierno debe dar todo gratis.",
      D: "Nadie debe trabajar.",
    },
    correctAnswer: "A",
    feedback: "Sin igualdad de oportunidades, el mérito es solo un reflejo del privilegio.",
  },
  {
    id: 144,
    text: 'Si una premisa dice "Si llueve, voy al cine" y "Fui al cine", ¿se puede concluir que llovió?',
    options: {
      A: "Sí.",
      B: "No (puedo ir al cine por otras razones).",
      C: "Solo si es fin de semana.",
      D: "Tal vez.",
    },
    correctAnswer: "B",
    feedback: "Puedes ir al cine por muchas razones; la lluvia era solo una de ellas.",
  },
  {
    id: 145,
    text: "La \"Carga de la prueba\" recae sobre:",
    options: {
      A: "Quien niega algo.",
      B: "Quien afirma algo (especialmente si es algo extraordinario).",
      C: "El juez.",
      D: "El público.",
    },
    correctAnswer: "B",
    feedback: "Quien afirma algo fuera de lo común debe presentar las pruebas.",
  },
  {
    id: 146,
    text: '¿Qué es la "Entropía" en un sentido figurado en la comunicación?',
    options: {
      A: "El orden total de los mensajes.",
      B: "La tendencia al desorden, ruido o pérdida de información en un mensaje.",
      C: "La velocidad de la señal.",
      D: "Un tipo de antena.",
    },
    correctAnswer: "B",
    feedback: "En comunicación, es la degradación del mensaje durante el proceso.",
  },
  {
    id: 147,
    text: "El concepto de \"Banalidad del Mal\" (Hannah Arendt) sugiere que:",
    options: {
      A: "El mal solo lo hacen los monstruos psicópatas.",
      B: "Personas comunes pueden cometer actos atroces simplemente por seguir órdenes o normas sin cuestionar.",
      C: "El mal es divertido.",
      D: "No existe el mal.",
    },
    correctAnswer: "B",
    feedback: "Sugiere que el mal a gran escala es ejecutado por burócratas que 'solo cumplen su deber'.",
  },
  {
    id: 148,
    text: "Una gráfica que no empieza su eje Y en cero (0) suele usarse para:",
    options: {
      A: "Ahorrar tinta.",
      B: "Exagerar visualmente pequeñas diferencias entre los datos.",
      C: "Ser más preciso.",
      D: "Que se vea más bonita.",
    },
    correctAnswer: "B",
    feedback: "Técnica visual para que una pequeña subida parezca un crecimiento masivo.",
  },
  {
    id: 149,
    text: "Si un algoritmo de IA sesgado discrimina a personas, el responsable es:",
    options: {
      A: "La computadora (porque ella decidió).",
      B: "Los desarrolladores y los datos de entrenamiento humanos que alimentaron el sesgo.",
      C: "El usuario por usarla.",
      D: "Nadie, es tecnología.",
    },
    correctAnswer: "B",
    feedback: "La tecnología hereda los prejuicios de quienes la crean y la alimentan.",
  },
  {
    id: 150,
    text: "El \"Diamante\" en LECMA representa:",
    options: {
      A: "Que el curso es muy caro.",
      B: "La transparencia, dureza y claridad de un pensamiento que ha sido procesado y pulido.",
      C: "Una piedra preciosa enterrada.",
      D: "El final de un videojuego.",
    },
    correctAnswer: "B",
    feedback: "Es la meta de LECMA: un pensamiento resistente, claro y valioso.",
  },
];

// Retroalimentación del Nivel 3
export const nivel3Feedback: QuestionnaireFeedback = {
  level: "nivel-3",
  title: "💎 NIVEL 3: DIAMANTE",
  subtitle: "Pensamiento Crítico y Análisis Profundo",
  scoreFeedback: (percentage: number) => {
    if (percentage >= 90) {
      return "¡EXCELENTE! Has alcanzado el dominio máximo del pensamiento crítico. Eres un Diamante Tallado: tu análisis es resistente, claro y visionario. Estás listo para ser un pensador crítico independiente.";
    } else if (percentage >= 80) {
      return "¡EXCEPCIONAL! Dominas los conceptos avanzados de lógica, probabilidad y análisis crítico. Tu pensamiento es transparente y resistente. Sigue puliendo esas habilidades.";
    } else if (percentage >= 70) {
      return "¡EXCELENTE! Has completado LECMA con buenos resultados. Has desarrollado habilidades sólidas de pensamiento crítico. Practica en aplicarlas en tu vida diaria.";
    } else if (percentage >= 60) {
      return "¡FELICIDADES! Has alcanzado el Nivel Diamante y completado LECMA. Tu pensamiento es más fuerte que al inicio. Continúa cuestionando, analizando y creciendo.";
    } else {
      return "Has llegado al Nivel 3. Aunque aún hay conceptos para consolidar, has avanzado significativamente. La práctica continua te llevará a dominar el pensamiento crítico.";
    }
  },
};
