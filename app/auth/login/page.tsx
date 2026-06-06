"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate auth (replace with real API call)
    await new Promise(r => setTimeout(r, 1200));
    if (form.email && form.password) {
      router.push("/dashboard");
    } else {
      setError("Veuillez remplir tous les champs.");
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, position: "relative", overflow: "hidden"
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--gold), var(--purple))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, margin: "0 auto 16px", cursor: "pointer"
            }}>✝</div>
          </Link>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>
            Bon retour sur <span className="gold-text">Alliance Éternelle</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            "Là où deux ou trois sont assemblés en mon nom..." — Mt 18:20
          </p>
        </div>

        <div className="glass-card" style={{ padding: 36 }}>
          <h2 style={{ fontSize: 20, marginBottom: 28, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            Connexion à votre espace couple
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 600, letterSpacing: 0.5, display: "block", marginBottom: 8 }}>
                ADRESSE EMAIL
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="votre@email.com"
                style={{
                  width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "13px 16px", color: "var(--text-primary)",
                  fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", transition: "border 0.2s",
                  boxSizing: "border-box"
                }}
                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <div>
              <label style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 600, letterSpacing: 0.5, display: "block", marginBottom: 8 }}>
                MOT DE PASSE
              </label>
              <input
                id="login-password"
                type="password"
                required
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="••••••••"
                style={{
                  width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "13px 16px", color: "var(--text-primary)",
                  fontSize: 14, fontFamily: "Inter, sans-serif", outline: "none", transition: "border 0.2s",
                  boxSizing: "border-box"
                }}
                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <a href="#" style={{ color: "var(--gold)", fontSize: 12, textDecoration: "none" }}>
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            {error && (
              <div style={{
                background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: 8, padding: "10px 14px", color: "#ef4444", fontSize: 13
              }}>
                ⚠️ {error}
              </div>
            )}

            <button
              id="login-submit"
              type="submit"
              className="btn-gold"
              style={{ width: "100%", textAlign: "center", fontSize: 15, padding: "14px", marginTop: 8, opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? "Connexion en cours..." : "Se connecter ✦"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 24, color: "var(--text-secondary)", fontSize: 13 }}>
            Pas encore de compte ?{" "}
            <Link href="/auth/register" style={{ color: "var(--gold)", fontWeight: 600, textDecoration: "none" }}>
              Créer un compte gratuit
            </Link>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: 11, marginTop: 24 }}>
          En vous connectant, vous acceptez nos{" "}
          <a href="#" style={{ color: "var(--gold)", textDecoration: "none" }}>conditions d'utilisation</a>
        </p>
      </div>
    </div>
  );
}
