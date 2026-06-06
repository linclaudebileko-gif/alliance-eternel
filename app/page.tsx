"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* NAVBAR */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 48px", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(253,248,242,0.88)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 2px 16px rgba(194,113,106,0.07)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--gold), var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, color: "#fff"
          }}>✝</div>
          <span style={{ fontSize: 20, fontFamily: "var(--font-playfair, serif)", fontWeight: 700, color: "var(--text-primary)" }}>
            Alliance <span className="gold-text">Éternelle</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          <a href="#fonctionnalites" className="nav-link">Fonctionnalités</a>
          <a href="#tarifs" className="nav-link">Tarifs</a>
          <a href="#temoignages" className="nav-link">Témoignages</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/auth/login">
            <button className="btn-outline" style={{ padding: "9px 22px", fontSize: 14 }}>Connexion</button>
          </Link>
          <Link href="/auth/register">
            <button className="btn-gold" style={{ padding: "9px 22px", fontSize: 14 }}>Commencer gratuitement</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        textAlign: "center", padding: "110px 24px 90px",
        position: "relative", overflow: "hidden"
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
          width: 640, height: 640, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(194,113,106,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: 120, right: "8%",
          width: 220, height: 220, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,111,168,0.10) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: 80, left: "6%",
          width: 180, height: 180, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(122,158,126,0.10) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div className="animate-fade-up" style={{ marginBottom: 24 }}>
          <span style={{
            background: "rgba(194,113,106,0.10)", border: "1px solid rgba(194,113,106,0.30)",
            color: "var(--gold-dark)", padding: "6px 22px", borderRadius: 50, fontSize: 13, fontWeight: 600
          }}>
            ✦ Plateforme Chrétienne de Mariage N°1
          </span>
        </div>

        <h1 className="animate-fade-up gold-text" style={{
          fontSize: "clamp(40px, 7vw, 78px)", lineHeight: 1.1,
          marginBottom: 24, fontWeight: 700,
          fontFamily: "var(--font-playfair, serif)"
        }}>
          Fortifiez votre<br />Alliance Éternelle
        </h1>

        <p className="animate-fade-up-delay" style={{
          fontSize: 19, color: "var(--text-secondary)", maxWidth: 560,
          margin: "0 auto 52px", lineHeight: 1.75
        }}>
          Accompagnez votre couple chaque jour avec la Parole de Dieu,
          un coach conjugal IA et des outils de restauration du mariage chrétien.
        </p>

        <div className="animate-fade-up-delay" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/auth/register">
            <button className="btn-gold animate-pulse-glow" style={{ fontSize: 16, padding: "16px 40px" }}>
              Commencer gratuitement ✦
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="btn-outline" style={{ fontSize: 16, padding: "15px 36px" }}>
              Voir la démo →
            </button>
          </Link>
        </div>

        <div className="animate-fade-up-delay2" style={{
          display: "flex", justifyContent: "center", gap: 56,
          marginTop: 80, flexWrap: "wrap"
        }}>
          {[
            { num: "50 000+", label: "Couples accompagnés" },
            { num: "95%", label: "Taux de satisfaction" },
            { num: "12", label: "Pays couverts" },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div className="gold-text" style={{
                fontSize: 38, fontWeight: 700,
                fontFamily: "var(--font-playfair, serif)"
              }}>
                {stat.num}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" style={{
        padding: "100px 48px",
        background: "rgba(253,232,228,0.18)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{
            fontSize: 40, marginBottom: 16, color: "var(--text-primary)",
            fontFamily: "var(--font-playfair, serif)"
          }}>
            Tout ce dont votre couple <span className="gold-text">a besoin</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 18, maxWidth: 480, margin: "0 auto" }}>
            Des outils inspirés de la Bible pour renforcer chaque aspect de votre mariage.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24, maxWidth: 1100, margin: "0 auto"
        }}>
          {features.map((f, i) => (
            <Link href={f.href} key={f.title} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{
                padding: 28, cursor: "pointer", transition: "all 0.3s ease"
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(194,113,106,0.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(194,113,106,0.08)";
                }}
              >
                <div style={{
                  fontSize: 34, marginBottom: 16,
                  background: "rgba(194,113,106,0.10)", width: 58, height: 58,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: 14, border: "1px solid rgba(194,113,106,0.15)"
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, marginBottom: 8, color: "var(--text-primary)", fontFamily: "var(--font-playfair,serif)" }}>{f.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                <div style={{ marginTop: 16, color: "var(--gold-dark)", fontSize: 13, fontWeight: 600 }}>
                  Explorer →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="tarifs" style={{ padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, fontFamily: "var(--font-playfair, serif)", color: "var(--text-primary)" }}>
            Des offres pour <span className="gold-text">chaque couple</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 18 }}>
            Commencez gratuitement, évoluez à votre rythme.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24, maxWidth: 1100, margin: "0 auto"
        }}>
          {plans.map(plan => (
            <div key={plan.name} className="glass-card" style={{
              padding: 32, position: "relative",
              border: plan.featured ? "2px solid var(--gold)" : "1px solid var(--border)",
              boxShadow: plan.featured ? "0 8px 40px rgba(194,113,106,0.22)" : "0 4px 24px rgba(194,113,106,0.08)"
            }}>
              {plan.featured && (
                <div style={{
                  position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))",
                  color: "#fff", padding: "4px 22px", borderRadius: 50, fontSize: 12, fontWeight: 700,
                  whiteSpace: "nowrap"
                }}>
                  ✦ POPULAIRE
                </div>
              )}
              <h3 style={{ fontSize: 22, marginBottom: 8, color: "var(--text-primary)", fontFamily: "var(--font-playfair,serif)" }}>{plan.name}</h3>
              <div style={{ marginBottom: 24 }}>
                <span className="gold-text" style={{ fontSize: 38, fontWeight: 700, fontFamily: "var(--font-playfair,serif)" }}>{plan.price}</span>
                {plan.price !== "Gratuit" && <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>/mois</span>}
              </div>
              <ul style={{ listStyle: "none", marginBottom: 32 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ color: "var(--text-secondary)", fontSize: 14, padding: "7px 0", display: "flex", gap: 10, alignItems: "center", borderBottom: "1px solid rgba(240,216,208,0.5)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/register">
                <button className={plan.featured ? "btn-gold" : "btn-outline"} style={{ width: "100%", textAlign: "center" }}>
                  Commencer
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="temoignages" style={{ padding: "100px 48px", background: "rgba(245,198,188,0.12)" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 40, marginBottom: 16, fontFamily: "var(--font-playfair,serif)", color: "var(--text-primary)" }}>
            Couples <span className="gold-text">transformés</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>
            Ils ont fait confiance à Alliance Éternelle. Lisez leurs témoignages.
          </p>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24, maxWidth: 1000, margin: "0 auto"
        }}>
          {testimonials.map(t => (
            <div key={t.name} className="glass-card" style={{ padding: 28 }}>
              <div style={{ fontSize: 28, marginBottom: 12, color: "var(--gold)" }}>❝</div>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--blush), var(--purple-light))",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
                }}>💑</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        margin: "80px 48px", padding: "64px 48px", borderRadius: 24, textAlign: "center",
        background: "linear-gradient(135deg, rgba(194,113,106,0.12), rgba(155,111,168,0.10))",
        border: "1.5px solid rgba(194,113,106,0.20)"
      }}>
        <h2 style={{ fontSize: 40, marginBottom: 16, fontFamily: "var(--font-playfair,serif)", color: "var(--text-primary)" }}>
          Prêt à <span className="gold-text">fortifier</span> votre alliance ?
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 18, marginBottom: 40 }}>
          Rejoignez des milliers de couples qui ont choisi de construire sur la Parole de Dieu.
        </p>
        <Link href="/auth/register">
          <button className="btn-gold animate-pulse-glow" style={{ fontSize: 18, padding: "18px 48px" }}>
            Commencer gratuitement — C'est gratuit ✦
          </button>
        </Link>
        <p style={{ color: "var(--text-secondary)", fontSize: 13, marginTop: 16 }}>
          Aucune carte de crédit requise · Accès immédiat
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid var(--border)", padding: "48px 48px 32px",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48,
        background: "rgba(253,232,228,0.20)"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--gold), var(--purple))",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff"
            }}>✝</div>
            <span style={{ fontFamily: "var(--font-playfair,serif)", fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>
              Alliance <span className="gold-text">Éternelle</span>
            </span>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.75, maxWidth: 280, fontStyle: "italic" }}>
            "Ce que Dieu a uni, que l'homme ne le sépare pas." — Matthieu 19:6
          </p>
        </div>
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: "var(--text-primary)" }}>Plateforme</h4>
          {["Questionnaire", "Dévotion", "Coach", "Agenda", "Académie"].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 13 }}>{l}</a>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: "var(--text-primary)" }}>Tarifs</h4>
          {["Gratuit", "Premium", "Premium Plus", "Église"].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 13 }}>{l}</a>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: "var(--text-primary)" }}>Légal</h4>
          {["Confidentialité", "Conditions", "Contact"].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 13 }}>{l}</a>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "1/-1", borderTop: "1px solid var(--border)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: 12 }}>
            © 2025 Alliance Éternelle — Tous droits réservés. Conçu avec ❤ pour les couples chrétiens.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: "❤️", title: "Bilan de Santé du Couple", desc: "Questionnaire intelligent évaluant communication, vie spirituelle, finances et intimité.", href: "/questionnaire" },
  { icon: "📖", title: "Dévotion Quotidienne", desc: "Verset du jour, méditation, sujet de discussion et défi amoureux chaque matin.", href: "/devotion" },
  { icon: "💬", title: "Coach Conjugal IA", desc: "Assistant disponible 24h/24 basé sur la Bible et les meilleures pratiques conjugales.", href: "/coach" },
  { icon: "📅", title: "Agenda du Couple", desc: "Planifiez vos rendez-vous amoureux, temps de prière et objectifs familiaux.", href: "/agenda" },
  { icon: "🕊️", title: "Centre de Réconciliation", desc: "Programme guidé de pardon, dialogue structuré et reconstruction de confiance.", href: "/dashboard" },
  { icon: "🎓", title: "Académie du Mariage", desc: "Cours vidéo sur la communication, sexualité, finances et leadership spirituel.", href: "/dashboard" },
  { icon: "⚠️", title: "Détecteur de Crise", desc: "Alerte préventive et plan de restauration sur 14 jours en cas de fragilité.", href: "/dashboard" },
  { icon: "🙏", title: "Mur Mondial de Prière", desc: "Déposez vos sujets de prière et intercédez pour des milliers de couples.", href: "/dashboard" },
];

const plans = [
  { name: "Gratuit", price: "Gratuit", featured: false, features: ["Dévotion quotidienne", "Diagnostic mensuel", "Défis de couple", "Mur de prière"] },
  { name: "Premium", price: "10$", featured: true, features: ["Coach conjugal illimité", "Rapports détaillés", "Académie complète", "Agenda complet", "Détecteur de crise"] },
  { name: "Premium Plus", price: "30$", featured: false, features: ["Accompagnement personnalisé", "Conseillers conjugaux", "Programmes restauration", "Tout Premium inclus"] },
  { name: "Église Premium", price: "100$", featured: false, features: ["Pour assemblées locales", "Ministères de la famille", "Conseillers pastoraux", "Tableau de bord église"] },
];

const testimonials = [
  { name: "Marie & Jean-Paul K.", location: "Abidjan, Côte d'Ivoire", text: "Alliance Éternelle nous a sauvés. Après 3 ans de conflits, le programme de réconciliation et le coach IA nous ont redonné espoir et amour." },
  { name: "Esther & Christophe M.", location: "Paris, France", text: "La dévotion quotidienne a transformé nos matins. Nous prions ensemble depuis 6 mois, quelque chose que nous ne faisions plus depuis longtemps." },
  { name: "Grace & Samuel O.", location: "Lagos, Nigeria", text: "Le détecteur de crise nous a alertés avant que la situation ne devienne grave. Le plan de 14 jours a tout changé dans notre communication." },
];
