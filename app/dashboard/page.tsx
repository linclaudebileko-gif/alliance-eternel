"use client";
import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("accueil");

  const healthScore = 72;
  const getScoreLabel = (s: number) => s >= 80 ? "Excellent" : s >= 60 ? "Stable" : s >= 40 ? "Fragile" : "Critique";
  const getScoreColor = (s: number) => s >= 80 ? "#22c55e" : s >= 60 ? "var(--gold)" : s >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* TOP NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 32px",
        background: "rgba(10,6,18,0.9)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 100
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--gold), var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
          }}>✝</div>
          <span style={{ fontSize: 18, fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
            Alliance <span className="gold-text">Éternelle</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: 4 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? "rgba(201,168,76,0.12)" : "transparent",
                color: activeTab === tab.id ? "var(--gold)" : "var(--text-secondary)",
                border: activeTab === tab.id ? "1px solid rgba(201,168,76,0.3)" : "1px solid transparent",
                padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500,
                transition: "all 0.2s", fontFamily: "Inter, sans-serif"
              }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            Marie & Jean-Paul
          </div>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--gold-dark), var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
          }}>💑</div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "32px", maxWidth: 1200, width: "100%", margin: "0 auto" }}>

        {activeTab === "accueil" && (
          <div>
            {/* Greeting */}
            <div style={{ marginBottom: 32 }}>
              <h1 style={{ fontSize: 32, marginBottom: 8 }}>
                Bonjour, <span className="gold-text">Marie & Jean-Paul</span> 👋
              </h1>
              <p style={{ color: "var(--text-secondary)" }}>Samedi 6 Juin 2025 · Que votre journée soit bénie</p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 32 }}>
              {/* Health Score */}
              <div className="glass-card animate-pulse-glow" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ color: "var(--text-secondary)", fontSize: 12, fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>
                  SANTÉ DU MARIAGE
                </div>
                <div className="score-ring" style={{
                  margin: "0 auto",
                  background: `conic-gradient(${getScoreColor(healthScore)} ${healthScore * 3.6}deg, rgba(255,255,255,0.05) 0deg)`,
                  boxShadow: `0 0 20px ${getScoreColor(healthScore)}40`
                }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: "50%",
                    background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center",
                    flexDirection: "column"
                  }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: getScoreColor(healthScore) }}>{healthScore}</span>
                    <span style={{ fontSize: 10, color: "var(--text-secondary)" }}>/100</span>
                  </div>
                </div>
                <div style={{ marginTop: 12, fontWeight: 600, color: getScoreColor(healthScore) }}>
                  {getScoreLabel(healthScore)}
                </div>
              </div>

              {statCards.map(card => (
                <div key={card.label} className="glass-card" style={{ padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 12, fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 700 }} className="gold-text">{card.value}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 12, marginTop: 4 }}>{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Today's Devotion Widget */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 32 }}>
              <div className="glass-card" style={{
                padding: 32, position: "relative", overflow: "hidden",
                background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(19,13,36,0.9))"
              }}>
                <div style={{
                  position: "absolute", top: -20, right: -20, width: 120, height: 120,
                  background: "radial-gradient(circle, rgba(201,168,76,0.1), transparent)",
                  borderRadius: "50%"
                }} />
                <div style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
                  📖 DÉVOTION DU JOUR
                </div>
                <blockquote style={{
                  fontSize: 20, fontFamily: "'Playfair Display', serif",
                  lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 16
                }}>
                  "Soyez toujours joyeux, priez sans cesse, rendez grâces en toutes choses."
                </blockquote>
                <div style={{ color: "var(--gold)", fontSize: 13, fontWeight: 500, marginBottom: 24 }}>
                  — 1 Thessaloniciens 5:16-18
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  <strong style={{ color: "var(--text-primary)" }}>Méditation :</strong> La gratitude est le fondement d'un couple épanoui. Prenez un moment pour remercier Dieu de votre partenaire, même dans les imperfections.
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button className="btn-gold" style={{ fontSize: 13, padding: "10px 20px" }}
                    onClick={() => setActiveTab("devotion")}>
                    Commencer la dévotion
                  </button>
                  <button className="btn-outline" style={{ fontSize: 13, padding: "9px 16px" }}>
                    🙏 Prier ensemble
                  </button>
                </div>
              </div>

              {/* Today's Challenge */}
              <div className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>
                  ⚡ DÉFI DU JOUR
                </div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🌹</div>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>7 Jours de Gratitude</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                  Dites à votre conjoint·e 3 choses pour lesquelles vous lui êtes reconnaissant·e aujourd'hui.
                </p>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12, color: "var(--text-secondary)" }}>
                    <span>Progression</span><span>Jour 4/7</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 50, height: 6 }}>
                    <div style={{
                      width: "57%", height: "100%", borderRadius: 50,
                      background: "linear-gradient(90deg, var(--gold), var(--gold-light))"
                    }} />
                  </div>
                </div>
                <button className="btn-gold" style={{ width: "100%", fontSize: 13 }}>
                  ✓ Marquer comme fait
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 18, marginBottom: 20 }}>Actions rapides</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
                {quickActions.map(a => (
                  <button key={a.label} onClick={() => setActiveTab(a.tab)}
                    style={{
                      background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                      borderRadius: 12, padding: "16px 12px", cursor: "pointer", textAlign: "center",
                      transition: "all 0.2s", color: "var(--text-primary)", fontFamily: "Inter, sans-serif"
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.08)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
                    }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{a.icon}</div>
                    <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{a.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "questionnaire" && <QuestionnaireTab />}
        {activeTab === "devotion" && <DevotionTab />}
        {activeTab === "coach" && <CoachTab />}
        {activeTab === "agenda" && <AgendaTab />}
      </div>
    </div>
  );
}

// ─── QUESTIONNAIRE ────────────────────────────────────────────────────────────
function QuestionnaireTab() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  const questions = [
    { cat: "Communication", q: "Nous nous parlons ouvertement de nos sentiments", icon: "💬" },
    { cat: "Vie spirituelle", q: "Nous prions et lisons la Bible ensemble régulièrement", icon: "📖" },
    { cat: "Finances", q: "Nous gérons notre budget ensemble sans conflits fréquents", icon: "💰" },
    { cat: "Intimité", q: "Nous passons du temps de qualité ensemble chaque semaine", icon: "❤️" },
    { cat: "Conflits", q: "Nous résolvons nos désaccords de manière constructive", icon: "🕊️" },
    { cat: "Confiance", q: "Je fais entièrement confiance à mon/ma conjoint·e", icon: "🔐" },
  ];

  const handleAnswer = (val: number) => {
    const newAnswers = { ...answers, [step]: val };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(s => s + 1), 300);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const totalScore = done
    ? Math.round((Object.values(answers).reduce((a, b) => a + b, 0) / (questions.length * 5)) * 100)
    : 0;

  const getColor = (s: number) => s >= 80 ? "#22c55e" : s >= 60 ? "var(--gold)" : s >= 40 ? "#f59e0b" : "#ef4444";
  const getLabel = (s: number) => s >= 80 ? "Excellent 🎉" : s >= 60 ? "Stable 👍" : s >= 40 ? "Fragile ⚠️" : "Critique 🚨";

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <h2 style={{ fontSize: 32, marginBottom: 8 }}>Bilan de Santé du <span className="gold-text">Couple</span></h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: 40 }}>
        Évaluez honnêtement chaque domaine de votre vie de couple.
      </p>

      {!done ? (
        <div className="glass-card" style={{ padding: 40 }}>
          {/* Progress */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }}>
              <span>Question {step + 1} sur {questions.length}</span>
              <span>{questions[step].cat}</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 50, height: 4 }}>
              <div style={{
                width: `${((step + 1) / questions.length) * 100}%`, height: "100%", borderRadius: 50,
                background: "linear-gradient(90deg, var(--gold), var(--gold-light))", transition: "width 0.4s ease"
              }} />
            </div>
          </div>

          <div style={{ fontSize: 48, textAlign: "center", marginBottom: 24 }}>{questions[step].icon}</div>
          <h3 style={{ fontSize: 22, textAlign: "center", lineHeight: 1.5, marginBottom: 40 }}>
            {questions[step].q}
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {[
              { val: 1, label: "Jamais" },
              { val: 2, label: "Rarement" },
              { val: 3, label: "Parfois" },
              { val: 4, label: "Souvent" },
              { val: 5, label: "Toujours" },
            ].map(opt => (
              <button key={opt.val} onClick={() => handleAnswer(opt.val)}
                style={{
                  padding: "16px 8px", borderRadius: 12, border: "1px solid var(--border)",
                  background: answers[step] === opt.val ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.03)",
                  color: answers[step] === opt.val ? "var(--gold)" : "var(--text-secondary)",
                  cursor: "pointer", fontSize: 12, fontFamily: "Inter, sans-serif", transition: "all 0.2s"
                }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{["😞","😕","😐","😊","😍"][opt.val-1]}</div>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass-card animate-fade-up" style={{ padding: 48, textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>📊</div>
          <h3 style={{ fontSize: 28, marginBottom: 16 }}>Résultats de votre Bilan</h3>
          <div className="score-ring" style={{
            margin: "0 auto 24px",
            width: 140, height: 140,
            background: `conic-gradient(${getColor(totalScore)} ${totalScore * 3.6}deg, rgba(255,255,255,0.05) 0deg)`,
            boxShadow: `0 0 32px ${getColor(totalScore)}50`
          }}>
            <div style={{
              width: 108, height: 108, borderRadius: "50%",
              background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
            }}>
              <span style={{ fontSize: 32, fontWeight: 700, color: getColor(totalScore) }}>{totalScore}</span>
              <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>/100</span>
            </div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: getColor(totalScore), marginBottom: 16 }}>
            {getLabel(totalScore)}
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
            {totalScore >= 80
              ? "Félicitations ! Votre couple est en excellente santé. Continuez à nourrir votre relation."
              : totalScore >= 60
              ? "Votre couple est stable. Quelques ajustements peuvent encore renforcer vos liens."
              : totalScore >= 40
              ? "Votre couple montre des signes de fragilité. Un plan de restauration de 14 jours est recommandé."
              : "Votre couple traverse une période critique. Un accompagnement personnalisé est conseillé."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button className="btn-gold" onClick={() => { setStep(0); setAnswers({}); setDone(false); }}>
              Refaire le questionnaire
            </button>
            <button className="btn-outline">Voir le rapport complet</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DEVOTION ─────────────────────────────────────────────────────────────────
function DevotionTab() {
  const [prayerDone, setPrayerDone] = useState(false);

  const devotion = {
    date: "6 Juin 2025",
    verset: "\"L'amour est patient, l'amour est plein de bonté. Il n'est pas envieux; l'amour ne se vante point, il ne s'enfle point d'orgueil.\"",
    reference: "1 Corinthiens 13:4",
    meditation: "L'amour véritable est un choix quotidien, pas seulement un sentiment. Aujourd'hui, choisissez délibérément d'être patient avec votre conjoint·e, surtout dans les moments difficiles. La patience n'est pas passive — c'est une force active qui dit 'je t'aime assez pour attendre.'",
    discussion: "Raconte-moi un moment récent où tu as vu l'amour de Dieu dans notre relation.",
    defi: "Envoyez un message d'encouragement à votre conjoint·e avant midi.",
    prayer: "Père Céleste, merci pour le don de notre mariage. Remplis nos cœurs de patience et de bonté l'un envers l'autre. Guide nos pas et fortifie notre alliance. En nom de Jésus, Amen."
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h2 style={{ fontSize: 32, marginBottom: 4 }}>Dévotion <span className="gold-text">du Jour</span></h2>
          <p style={{ color: "var(--text-secondary)" }}>{devotion.date}</p>
        </div>
        <div style={{
          background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
          color: "var(--gold)", padding: "8px 20px", borderRadius: 50, fontSize: 13
        }}>🔥 Série: 12 jours</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Verse */}
        <div className="glass-card" style={{
          padding: 36,
          background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(19,13,36,0.9))",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: 16, right: 24, fontSize: 80, opacity: 0.05 }}>✝</div>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>📖 VERSET DU JOUR</div>
          <blockquote style={{ fontSize: 20, fontFamily: "'Playfair Display', serif", lineHeight: 1.7, marginBottom: 12 }}>
            {devotion.verset}
          </blockquote>
          <div style={{ color: "var(--gold)", fontWeight: 500 }}>{devotion.reference}</div>
        </div>

        {/* Meditation */}
        <div className="glass-card" style={{ padding: 28 }}>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>🌅 MÉDITATION</div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>{devotion.meditation}</p>
        </div>

        {/* Discussion */}
        <div className="glass-card" style={{ padding: 28 }}>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>💬 SUJET DE DISCUSSION</div>
          <div style={{
            background: "rgba(201,168,76,0.06)", borderRadius: 12, padding: 20,
            border: "1px solid rgba(201,168,76,0.15)"
          }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-primary)" }}>"{devotion.discussion}"</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="glass-card" style={{ padding: 28 }}>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>⚡ DÉFI AMOUREUX</div>
          <div style={{
            background: "rgba(124,58,237,0.1)", borderRadius: 12, padding: 20,
            border: "1px solid rgba(124,58,237,0.2)", marginBottom: 16
          }}>
            <p style={{ fontSize: 16, color: "var(--text-primary)" }}>💌 {devotion.defi}</p>
          </div>
          <button className="btn-gold" style={{ fontSize: 13, padding: "10px 24px" }}>✓ Défi accompli !</button>
        </div>

        {/* Prayer */}
        <div className="glass-card" style={{ padding: 28 }}>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>🙏 TEMPS DE PRIÈRE</div>
          <div style={{
            background: "rgba(201,168,76,0.04)", borderRadius: 12, padding: 24,
            border: "1px solid rgba(201,168,76,0.1)", marginBottom: 20, fontStyle: "italic",
            color: "var(--text-secondary)", lineHeight: 1.8
          }}>
            {devotion.prayer}
          </div>
          <button
            className={prayerDone ? "btn-outline" : "btn-gold"}
            style={{ fontSize: 13, padding: "12px 28px" }}
            onClick={() => setPrayerDone(true)}>
            {prayerDone ? "🙌 Prière faite ensemble !" : "🙏 Nous avons prié ensemble"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── COACH ────────────────────────────────────────────────────────────────────
function CoachTab() {
  const [messages, setMessages] = useState([
    { role: "coach", text: "Bonjour ! Je suis votre coach conjugal chrétien, disponible 24h/24. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser toutes vos questions sur votre mariage." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Mon conjoint ne m'écoute plus",
    "Comment prier ensemble ?",
    "Comment pardonner une trahison ?",
    "Nous avons des problèmes financiers",
  ];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg = { role: "user", text };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // Simulated IA response
    setTimeout(() => {
      const responses: Record<string, string> = {
        default: "Je comprends votre situation. La Bible nous enseigne dans Éphésiens 4:2 : 'supportez-vous les uns les autres avec amour.' Je vous recommande d'abord d'établir un temps de prière commune chaque jour, puis de pratiquer l'écoute active — sans interrompre votre conjoint·e. Voulez-vous que nous explorions un plan concret ensemble ?"
      };
      const keywords = ["écoute", "prier", "pardonner", "financier"];
      const specificResponses: Record<string, string> = {
        "Mon conjoint ne m'écoute plus": "La communication est le pilier du mariage. Selon Proverbes 18:13, 'répondre avant d'avoir écouté est stupidité et honte.' Je vous suggère : 1) Choisissez un moment calme, 2) Exprimez vos sentiments avec 'je' (pas 'tu'), 3) Demandez à votre conjoint de répéter ce qu'il a entendu. Commençons par un exercice de communication structurée ce soir ?",
        "Comment prier ensemble ?": "Prier en couple est puissant ! Matthieu 18:20 dit : 'Là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.' Commencez simplement : 5 minutes le matin, tenez-vous la main, remerciez Dieu pour 3 choses, puis formulez 1 requête. La régularité est plus importante que la durée. Voulez-vous une structure de prière guidée ?",
        "Comment pardonner une trahison ?": "Le pardon est l'un des actes les plus difficiles mais les plus libérateurs. Colossiens 3:13 nous enseigne : 'supportez-vous et pardonnez-vous mutuellement.' Le pardon ne justifie pas la blessure, il vous libère de son emprise. C'est un processus en 3 étapes : 1) Nommer la douleur, 2) Choisir délibérément de pardonner, 3) Reconstruire la confiance progressivement. Je suis là pour vous guider.",
        "Nous avons des problèmes financiers": "Les difficultés financières sont l'une des principales causes de conflits conjugaux. Proverbes 21:5 dit : 'Les projets du travailleur mènent à l'abondance.' Je vous recommande : 1) Établir un budget commun (méthode des enveloppes), 2) Avoir une réunion financière mensuelle en couple, 3) Fixer des objectifs communs. Voulez-vous un template de budget chrétien pour couple ?"
      };

      const response = specificResponses[text] || responses.default;
      setMessages(m => [...m, { role: "coach", text: response }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", height: "calc(100vh - 200px)" }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 32, marginBottom: 4 }}>Coach <span className="gold-text">Conjugal IA</span></h2>
        <p style={{ color: "var(--text-secondary)" }}>Disponible 24h/24, basé sur la Parole de Dieu</p>
      </div>

      {/* Chat */}
      <div className="glass-card" style={{ flex: 1, display: "flex", flexDirection: "column", padding: 0, overflow: "hidden" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", gap: 12, justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              {msg.role === "coach" && (
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, var(--gold), var(--purple))",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                }}>✝</div>
              )}
              <div style={{
                maxWidth: "75%", padding: "14px 18px", borderRadius: 16,
                background: msg.role === "coach" ? "rgba(124,58,237,0.15)" : "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                color: msg.role === "user" ? "#0a0612" : "var(--text-primary)",
                border: msg.role === "coach" ? "1px solid rgba(124,58,237,0.3)" : "none",
                lineHeight: 1.6, fontSize: 14
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--gold), var(--purple))",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
              }}>✝</div>
              <div style={{
                padding: "14px 18px", borderRadius: 16,
                background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)",
                display: "flex", gap: 6, alignItems: "center"
              }}>
                {[0,1,2].map(d => (
                  <div key={d} style={{
                    width: 8, height: 8, borderRadius: "50%", background: "var(--gold)",
                    animation: `pulse-glow 1.2s ease ${d * 0.2}s infinite`
                  }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div style={{ padding: "0 24px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {suggestions.map(s => (
            <button key={s} onClick={() => sendMessage(s)}
              style={{
                background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)",
                color: "var(--gold)", padding: "6px 14px", borderRadius: 20, fontSize: 12,
                cursor: "pointer", fontFamily: "Inter, sans-serif", transition: "all 0.2s"
              }}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", display: "flex", gap: 12 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage(input)}
            placeholder="Posez votre question au coach conjugal..."
            style={{
              flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "12px 16px", color: "var(--text-primary)",
              outline: "none", fontSize: 14, fontFamily: "Inter, sans-serif"
            }}
          />
          <button className="btn-gold" onClick={() => sendMessage(input)} style={{ padding: "12px 20px", flexShrink: 0 }}>
            Envoyer →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── AGENDA ───────────────────────────────────────────────────────────────────
function AgendaTab() {
  const [events, setEvents] = useState(sampleEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "", type: "amour" });

  const typeColors: Record<string, string> = {
    amour: "var(--gold)", priere: "var(--purple-light)", famille: "#22c55e", objectif: "var(--info)"
  };
  const typeLabels: Record<string, string> = {
    amour: "❤️ Rendez-vous", priere: "🙏 Prière", famille: "👨‍👩‍👧 Famille", objectif: "🎯 Objectif"
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) return;
    setEvents(e => [...e, { ...newEvent, id: Date.now() }]);
    setShowForm(false);
    setNewEvent({ title: "", date: "", time: "", type: "amour" });
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h2 style={{ fontSize: 32, marginBottom: 4 }}>Agenda <span className="gold-text">du Couple</span></h2>
          <p style={{ color: "var(--text-secondary)" }}>Planifiez votre vie à deux</p>
        </div>
        <button className="btn-gold" onClick={() => setShowForm(!showForm)}>
          + Ajouter un événement
        </button>
      </div>

      {showForm && (
        <div className="glass-card animate-fade-up" style={{ padding: 28, marginBottom: 24 }}>
          <h3 style={{ marginBottom: 20 }}>Nouvel événement</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <input
              placeholder="Titre de l'événement"
              value={newEvent.title}
              onChange={e => setNewEvent(n => ({ ...n, title: e.target.value }))}
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)",
                fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", gridColumn: "1/-1"
              }}
            />
            <input type="date" value={newEvent.date} onChange={e => setNewEvent(n => ({ ...n, date: e.target.value }))}
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)",
                fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", colorScheme: "dark"
              }}
            />
            <select value={newEvent.type} onChange={e => setNewEvent(n => ({ ...n, type: e.target.value }))}
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)",
                fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", colorScheme: "dark"
              }}>
              {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-gold" onClick={addEvent}>Ajouter</button>
            <button className="btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {events.sort((a, b) => a.date.localeCompare(b.date)).map(ev => (
          <div key={ev.id} className="glass-card" style={{
            padding: 20, display: "flex", alignItems: "center", gap: 20,
            transition: "all 0.2s"
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = typeColors[ev.type] || "var(--gold)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
            }}>
            <div style={{
              width: 50, height: 50, borderRadius: 12, flexShrink: 0,
              background: `${typeColors[ev.type]}20`, border: `1px solid ${typeColors[ev.type]}40`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22
            }}>
              {ev.type === "amour" ? "❤️" : ev.type === "priere" ? "🙏" : ev.type === "famille" ? "👨‍👩‍👧" : "🎯"}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{ev.title}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 13 }}>
                {new Date(ev.date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                {ev.time && ` · ${ev.time}`}
              </div>
            </div>
            <div style={{
              color: typeColors[ev.type], fontSize: 12, fontWeight: 500, padding: "4px 12px",
              background: `${typeColors[ev.type]}15`, borderRadius: 50, border: `1px solid ${typeColors[ev.type]}30`
            }}>
              {typeLabels[ev.type]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const tabs = [
  { id: "accueil", label: "Accueil", icon: "🏠" },
  { id: "questionnaire", label: "Bilan", icon: "❤️" },
  { id: "devotion", label: "Dévotion", icon: "📖" },
  { id: "coach", label: "Coach IA", icon: "💬" },
  { id: "agenda", label: "Agenda", icon: "📅" },
];

const statCards = [
  { icon: "📖", label: "VIE SPIRITUELLE", value: "86%", sub: "12 jours de dévotion" },
  { icon: "💬", label: "COMMUNICATION", value: "74%", sub: "+5% ce mois" },
  { icon: "💰", label: "FINANCES", value: "68%", sub: "Budget partagé" },
  { icon: "👨‍👩‍👧", label: "VIE FAMILIALE", value: "91%", sub: "Objectifs atteints" },
];

const quickActions = [
  { icon: "📖", label: "Dévotion", tab: "devotion" },
  { icon: "❤️", label: "Bilan couple", tab: "questionnaire" },
  { icon: "💬", label: "Coach IA", tab: "coach" },
  { icon: "📅", label: "Agenda", tab: "agenda" },
  { icon: "🙏", label: "Mur de prière", tab: "accueil" },
  { icon: "⚡", label: "Défis", tab: "accueil" },
];

const sampleEvents = [
  { id: 1, title: "Rendez-vous romantique au restaurant", date: "2025-06-10", time: "19:30", type: "amour" },
  { id: 2, title: "Prière familiale du soir", date: "2025-06-07", time: "21:00", type: "priere" },
  { id: 3, title: "Réunion budget mensuel", date: "2025-06-15", time: "10:00", type: "objectif" },
  { id: 4, title: "Sortie famille au parc", date: "2025-06-08", time: "14:00", type: "famille" },
  { id: 5, title: "Retraite de couple – week-end", date: "2025-06-20", time: "08:00", type: "amour" },
];
