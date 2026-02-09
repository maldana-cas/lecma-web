export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#2f2f44]">
      {/* NAVBAR */}
      <header className="w-full flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-[#3b3b5c]">LECMA</h1>

        <nav className="flex gap-6 text-sm font-medium text-[#5c5c7a]">
          <a href="#about" className="hover:underline">
            ¿Qué es?
          </a>
          <a href="#benefits" className="hover:underline">
            Beneficios
          </a>
          <a href="#start" className="hover:underline">
            Empezar
          </a>
        </nav>
      </header>

      {/* HERO SECTION MEJORADO */}
      <section className="relative flex flex-col items-center text-center px-6 mt-10">
        {/* Figuras decorativas */}
        <div className="absolute top-0 left-10 text-6xl opacity-20">📘</div>
        <div className="absolute top-20 right-16 text-6xl opacity-20">∑</div>
        <div className="absolute bottom-0 left-24 text-6xl opacity-20">π</div>
        <div className="absolute bottom-10 right-20 text-6xl opacity-20">
          ➗
        </div>

        {/* Caja principal con degradado */}
        <div className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] rounded-3xl shadow-xl p-12 max-w-4xl">
          <h2 className="text-5xl font-extrabold text-[#2f2f44] mb-6">
            Aprende con Evaluaciones Inteligentes
          </h2>

          <p className="text-lg text-[#3b3b5c] max-w-2xl mx-auto mb-10">
            Plataforma web inteligente para fortalecer la comprensión lectora y
            el razonamiento matemático mediante evaluaciones adaptativas,
            utilizando la modalidad tipo ICFES.
          </p>

          {/* BOTONES CONECTADOS */}
          <div className="flex justify-center gap-4">
            {/* Ir al Dashboard/Registrarse */}
            <a
              href="/register"
              className="px-8 py-3 rounded-2xl bg-[#3b82f6] text-white font-semibold shadow-md hover:opacity-90"
            >
              Registrarse gratis
            </a>

            {/* Login conectado */}
            <a
              href="/login"
              className="px-8 py-3 rounded-2xl bg-[#f97316] text-white font-semibold shadow-md hover:opacity-90"
            >
              Ingresar
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mt-24 max-w-4xl mx-auto px-6 text-center"
      >
        <h3 className="text-3xl font-bold text-[#3b3b5c] mb-4">
          ¿Qué es LECMA?
        </h3>

        <p className="text-[#5c5c7a] text-lg leading-relaxed">
          LECMA es una plataforma educativa diseñada para estudiantes que desean
          mejorar su desempeño en pruebas tipo ICFES. Su sistema adaptativo
          ajusta el nivel de dificultad según tus respuestas, fortaleciendo tus
          habilidades paso a paso.
        </p>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="mt-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-[#3b3b5c] mb-10">
          Beneficios principales
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">
              📘 Comprensión lectora
            </h4>
            <p className="text-sm text-[#5c5c7a]">
              Mejora tu capacidad para interpretar textos y resolver preguntas
              contextualizadas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">
              ➗ Razonamiento matemático
            </h4>
            <p className="text-sm text-[#5c5c7a]">
              Desarrolla habilidades numéricas, lógicas y analíticas con
              ejercicios tipo ICFES.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">
              🎯 Evaluación adaptativa
            </h4>
            <p className="text-sm text-[#5c5c7a]">
              El sistema se ajusta a tu nivel y te guía hacia un progreso real y
              personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="start"
        className="mt-24 py-10 text-center text-sm text-[#777799]"
      >
        © {new Date().getFullYear()} LECMA · Educación - El Profe Malc@s
      </footer>
    </main>
  );
}
