"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { getCurrentUser, saveQuizResult, updateUserProgress } from "@/app/lib/dbClient";
import {
  nivel1Questions,
  nivel1Feedback,
  nivel2Questions,
  nivel2Feedback,
  nivel3Questions,
  nivel3Feedback,
  type Question,
} from "@/app/lib/questionsData";
import type { UserData } from "@/app/lib/dbClient";

const QUESTIONNAIRES: Record<
  string,
  {
    title: string;
    subtitle: string;
    questions: Question[];
    feedback: any;
  }
> = {
  "nivel-1": {
    title: "🟡 NIVEL 1: PIEDRA BASE",
    subtitle: "Identificación Literal y Operaciones Básicas",
    questions: nivel1Questions,
    feedback: nivel1Feedback,
  },
  "nivel-2": {
    title: "🟠 NIVEL 2: CRISTALIZACIÓN",
    subtitle: "Inferencia, Relaciones Lógicas y Análisis Crítico",
    questions: nivel2Questions,
    feedback: nivel2Feedback,
  },
  "nivel-3": {
    title: "💎 NIVEL 3: DIAMANTE",
    subtitle: "Pensamiento Crítico y Análisis Profundo",
    questions: nivel3Questions,
    feedback: nivel3Feedback,
  },
};

export default function CuestionarioPage() {
  const router = useRouter();
  const params = useParams();
  const cuestionarioId = params.id as string;
  const [user, setUser] = useState<UserData | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const questionnaire = QUESTIONNAIRES[cuestionarioId] || QUESTIONNAIRES["nivel-1"];
  const questions = questionnaire.questions;
  const storageKey = `quiz_${cuestionarioId}_answers`;
  const currentPosKey = `quiz_${cuestionarioId}_position`;

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      router.push("/access-code");
      return;
    }
    setUser(currentUser);
    setLoading(false);

    // Verificar si hay respuestas guardadas en localStorage
    if (typeof window !== "undefined") {
      const savedAnswers = localStorage.getItem(storageKey);
      if (savedAnswers) {
        setShowResumeDialog(true);
        setAnswers(JSON.parse(savedAnswers));
        const savedPos = localStorage.getItem(currentPosKey);
        if (savedPos) {
          setCurrentQuestion(parseInt(savedPos));
        }
      } else {
        setAnswers(new Array(questions.length).fill(null));
      }
    } else {
      setAnswers(new Array(questions.length).fill(null));
    }
  }

  function handleResume() {
    setShowResumeDialog(false);
  }

  function handleStartNew() {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(currentPosKey);
    setAnswers(new Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResumeDialog(false);
  }

  function handleAnswerSelect(optionLetter: string) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionLetter;
    setAnswers(newAnswers);

    // Guardar en localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(newAnswers));
      localStorage.setItem(currentPosKey, currentQuestion.toString());
    }
  }

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      if (typeof window !== "undefined") {
        localStorage.setItem(currentPosKey, (currentQuestion + 1).toString());
      }
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      if (typeof window !== "undefined") {
        localStorage.setItem(currentPosKey, (currentQuestion - 1).toString());
      }
    }
  }

  async function handleSubmit() {
    let correctCount = 0;
    const answersRecord: Record<string, string | null> = {};
    
    answers.forEach((answer, index) => {
      answersRecord[index.toString()] = answer;
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);

    // Guardar resultado en Supabase
    if (user && user.id) {
      await saveQuizResult(user.id, cuestionarioId, finalScore, answersRecord);
      await updateUserProgress(user.id, cuestionarioId, true, finalScore);
    }

    // Limpiar localStorage después de enviar
    if (typeof window !== "undefined") {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(currentPosKey);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  // Mostrar diálogo si hay respuestas guardadas
  if (showResumeDialog) {
    return (
      <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-6 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#3b3b5c] mb-4">Cuestionario Encontrado</h1>
          <p className="text-[#5c5c7a] mb-2">
            Encontramos respuestas guardadas en pregunta <span className="font-bold">{currentQuestion + 1}</span> de {questions.length}
          </p>
          <p className="text-sm text-gray-500 mb-8">
            ¿Deseas continuar desde donde dejaste o empezar de nuevo?
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleStartNew}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 rounded-xl transition"
            >
              Empezar de Nuevo
            </button>
            <button
              onClick={handleResume}
              className="flex-1 bg-[#3b82f6] hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const correctCount = answers.filter((a, i) => a === questions[i].correctAnswer).length;
    const feedbackMessage = questionnaire.feedback?.scoreFeedback(score) || `Obtuviste ${score}%.`;

    return (
      <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-6 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#3b3b5c] mb-2">{questionnaire.title}</h1>
            <p className="text-[#5c5c7a]">Resultados Finales</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <p className="text-7xl font-bold text-[#3b82f6] mb-2">{score}%</p>
            <p className="text-xl text-[#3b3b5c] font-semibold">
              Acertaste {correctCount} de {questions.length} preguntas
            </p>
          </div>

          <div className="mb-8 bg-[#f0f9ff] rounded-xl p-6 border-2 border-[#3b82f6]">
            <p className="text-center text-[#3b3b5c] text-lg font-medium">
              {feedbackMessage}
            </p>
          </div>

          <div className="mb-8 bg-gray-50 rounded-xl p-6 max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold text-[#3b3b5c] mb-4">Revisión Detallada:</h2>
            {questions.map((q, index) => {
              const isCorrect = answers[index] === q.correctAnswer;
              const optionLetters = ["A", "B", "C", "D"];
              const optionValues = [q.options.A, q.options.B, q.options.C, q.options.D];
              const userAnswerIndex = optionLetters.indexOf(answers[index] || "");
              const correctAnswerIndex = optionLetters.indexOf(q.correctAnswer);

              return (
                <div
                  key={q.id}
                  className={`mb-4 pb-4 border-l-4 pl-4 ${isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
                >
                  <p className="font-semibold text-[#3b3b5c] text-sm">
                    Pregunta {index + 1}. {q.text}
                  </p>
                  <p
                    className={`text-sm mt-2 font-medium ${isCorrect ? "text-green-700" : "text-red-700"}`}
                  >
                    Tu respuesta: {answers[index]} - {optionValues[userAnswerIndex]}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-700 mt-1 font-medium">
                      ✓ Correcta: {q.correctAnswer} - {optionValues[correctAnswerIndex]}
                    </p>
                  )}
                  <p className="text-xs text-[#5c5c7a] mt-2 italic">
                    {q.feedback}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex-1 px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:opacity-90 font-semibold transition"
            >
              ← Volver al Dashboard
            </button>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers(new Array(questions.length).fill(null));
                setShowResults(false);
              }}
              className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:opacity-90 font-semibold transition"
            >
              Intentar de Nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== null;
  const optionLetters = ["A", "B", "C", "D"];
  const optionValues = [question.options.A, question.options.B, question.options.C, question.options.D];

  return (
    <div className="min-h-screen bg-[#f7f8fc] py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#3b3b5c]">{questionnaire.title}</h1>
            <p className="text-[#5c5c7a] text-sm mt-1">{questionnaire.subtitle}</p>
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-[#f97316] hover:underline font-medium"
          >
            ← Volver
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-semibold text-[#5c5c7a]">
              Pregunta {currentQuestion + 1} de {questions.length}
            </p>
            <p className="text-sm text-[#5c5c7a]">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-8">
          <h2 className="text-xl font-bold text-[#3b3b5c] mb-8 leading-relaxed">{question.text}</h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {optionLetters.map((letter, index) => (
              <button
                key={letter}
                onClick={() => handleAnswerSelect(letter)}
                className={`w-full text-left p-4 rounded-xl border-2 transition ${
                  answers[currentQuestion] === letter
                    ? "border-[#3b82f6] bg-[#f0f9ff] shadow-md"
                    : "border-gray-200 hover:border-[#3b82f6] hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      answers[currentQuestion] === letter
                        ? "border-[#3b82f6] bg-[#3b82f6]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {answers[currentQuestion] === letter ? (
                      <span className="text-white text-sm font-bold">✓</span>
                    ) : (
                      <span className="text-[#3b3b5c] text-sm font-bold">{letter}</span>
                    )}
                  </div>
                  <span className="text-[#3b3b5c] font-medium text-base">{optionValues[index]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1 px-4 py-3 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition"
            >
              ← Anterior
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!isAnswered}
                className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition"
              >
                ✓ Enviar Cuestionario
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex-1 px-4 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition"
              >
                Siguiente →
              </button>
            )}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <p className="text-sm font-semibold text-[#5c5c7a] mb-4">Ir a pregunta:</p>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-full h-10 rounded-lg font-bold text-sm transition ${
                  index === currentQuestion
                    ? "bg-[#3b82f6] text-white shadow-md"
                    : answers[index] !== null
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-200 text-[#3b3b5c] hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
