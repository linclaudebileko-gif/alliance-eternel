"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", partnerFirstName: "", partnerLastName: "",
    email: "", password: "", confirm: "", plan: "gratuit"
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) { setStep(s => s + 1); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    router.push("/dashboard");
  };

  const plans = [
    { id: "gratuit", name: "Gratuit", price: "0$", desc: "Dévotion + défis", color: "var(--text-secondary)" },
    { id: "premium", name: "Premium", price: "10$/mois", desc: "Coach IA + académie", color: "var(--gold)" },
    { id: "premium-plus", name: "Premium Plus", price: "30$/mois", desc: "Accompagnement perso", color: "var(--purple-light)" },
  ];

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ width: "100%", maxWidth: 480, position: "relative" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--gold), var(--purple))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, margin: "0 auto 14px", cursor: "pointer"
            }}>✝</div>
          </Link>
          <h1 style={{ fontSize: 26, marginBottom: 6 }}>
            Rejoignez <span className="gold-text">Alliance Éternelle</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>
            "Ce que Dieu a uni, que l'homme ne le sépare pas." — Matthieu 19:6
          </p>
        </div>

        {/* Stepper */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 32 }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 13, fontWeight: 700, transition: "all 0.3s",
                background: step >= s ? "linear-gradient(135deg, var(--gold), var(--gold-light))" : "rgba(255,255,255,0.05)",
                color: step >= s ? "#0a0612" : "var(--text-secondary)",
                border: step >= s ? "none" : "1px solid var(--border)"
              }}>
                {step > s ? "✓" : s}
              </div>
              {s < 3 && <div style={{
                width: 40, height: 2, borderRadius: 1,
                background: step > s ? "var(--gold)" : "var(--border)", transition: "background 0.3s"
              }} />}
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: 36 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

            {/* Step 1: Identity */}
            {step === 1 && (
              <>
                <h2 style={{ fontSize: 18, fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: 4 }}>
                  👤 Vos informations
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 8 }}>
                  Commençons par vous connaître.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { key: "firstName", label: "Votre prénom", placeholder: "Marie" },
                    { key: "lastName", label: "Votre nom", placeholder: "Dupont" },
                    { key: "partnerFirstName", label: "Prénom du conjoint·e", placeholder: "Jean" },
                    { key: "partnerLastName", label: "Nom du conjoint·e", placeholder: "Dupont" },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ fontSize: 11, color: "var(--text-secondary)", fontWeight: 600, letterSpacing: 0.5, display: "block", marginBottom: 6 }}>
                        {field.label.toUpperCase()}
                      </label>
                      <input
                        id={`register-${field.key}`}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        placeholder={field.placeholder}
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                          borderRadius: 10, padding: "11px 14px", color: "var(--text-primary)",
                          fontSize: 13, fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--gold)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Step 2: Account */}
            {step === 2 && (
              <>
                <h2 style={{ fontSize: 18, fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: 4 }}>
                  🔐 Créer votre compte
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 8 }}>
                  Bienvenue, <strong style={{ color: "var(--gold)" }}>{form.firstName} & {form.partnerFirstName}</strong> ! Configurez votre accès.
                </p>
                {[
                  { key: "email", label: "Adresse email", type: "email", placeholder: "couple@email.com" },
                  { key: "password", label: "Mot de passe", type: "password", placeholder: "••••••••" },
                  { key: "confirm", label: "Confirmer le mot de passe", type: "password", placeholder: "••••••••" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: 11, color: "var(--text-secondary)", fontWeight: 600, letterSpacing: 0.5, display: "block", marginBottom: 6 }}>
                      {field.label.toUpperCase()}
                    </label>
                    <input
                      id={`register-${field.key}`}
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                        borderRadius: 10, padding: "13px 16px", color: "var(--text-primary)",
                        fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box"
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--gold)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}
              </>
            )}

            {/* Step 3: Plan */}
            {step === 3 && (
              <>
                <h2 style={{ fontSize: 18, fontFamily: "Inter, sans-serif", fontWeight: 600, marginBottom: 4 }}>
                  ✦ Choisissez votre plan
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 8 }}>
                  Commencez gratuitement, évoluez à votre rythme.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {plans.map(plan => (
                    <div key={plan.id}
                      onClick={() => setForm(f => ({ ...f, plan: plan.id }))}
                      style={{
                        padding: "16px 20px", borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
                        border: form.plan === plan.id ? `1px solid ${plan.color}` : "1px solid var(--border)",
                        background: form.plan === plan.id ? `${plan.color}10` : "rgba(255,255,255,0.03)",
                        display: "flex", justifyContent: "space-between", alignItems: "center"
                      }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: form.plan === plan.id ? plan.color : "var(--text-primary)" }}>
                          {plan.name}
                        </div>
                        <div style={{ color: "var(--text-secondary)", fontSize: 12, marginTop: 2 }}>{plan.desc}</div>
                      </div>
                      <div style={{ fontWeight: 700, color: plan.color, fontSize: 16 }}>{plan.price}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <button
              id="register-submit"
              type="submit"
              className="btn-gold"
              style={{ width: "100%", textAlign: "center", fontSize: 15, padding: "14px", marginTop: 8, opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? "Création du compte..." : step < 3 ? "Continuer →" : "Créer mon compte ✦"}
            </button>

            {step > 1 && (
              <button type="button" onClick={() => setStep(s => s - 1)} className="btn-outline"
                style={{ width: "100%", textAlign: "center", fontSize: 14, padding: "12px" }}>
                ← Retour
              </button>
            )}
          </form>

          <div style={{ textAlign: "center", marginTop: 24, color: "var(--text-secondary)", fontSize: 13 }}>
            Déjà inscrit ?{" "}
            <Link href="/auth/login" style={{ color: "var(--gold)", fontWeight: 600, textDecoration: "none" }}>
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
