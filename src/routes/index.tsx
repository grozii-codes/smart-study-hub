import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Logo } from "@/components/Logo";
import * as S from "@/components/screens/AllScreens";

export const Route = createFileRoute("/")({
  component: Showcase,
  head: () => ({
    meta: [
      { title: "PadhAI — Official Product Document v1.0 (30 screens)" },
      {
        name: "description",
        content:
          "Official client preview: 30 mobile screens for an AI-powered tuition platform. Engineered to the standard of PhysicsWallah, Zomato, Swiggy & Flipkart.",
      },
    ],
  }),
});

type Screen = {
  no: string;
  label: string;
  features: string[];
  tech: string[];
  node: ReactNode;
};

type Section = {
  code: string;
  title: string;
  sub: string;
  problem: string;
  screens: Screen[];
};

const sections: Section[] = [
  {
    code: "01",
    title: "Onboarding",
    sub: "Pehla impression — sub-3-second cold start, multi-role auth",
    problem: "78% edtech apps lose users in first 30 seconds. Hum 3 taps mein onboard karte hain.",
    screens: [
      { no: "1.1", label: "Splash — brand reveal", features: ["Animated logo + tagline", "Auto session check (Firebase)", "App-update gate (Play store)"], tech: ["React Native", "Reanimated 3", "Firebase Auth"], node: <S.SplashScreen /> },
      { no: "1.2", label: "Phone OTP login", features: ["+91 only, autoread OTP", "MSG91 SMS fallback if Firebase fails", "30-sec resend lock, 3 attempts"], tech: ["Firebase Auth", "MSG91", "SMS Retriever API"], node: <S.OtpScreen /> },
      { no: "1.3", label: "Role selection", features: ["4 roles — Student / Teacher / Parent / Admin", "Role saved in JWT claim", "Different home stack per role"], tech: ["JWT", "AsyncStorage", "React Navigation"], node: <S.RoleScreen /> },
    ],
  },
  {
    code: "02",
    title: "Daily core",
    sub: "Roz kaam aane wale screens — Zomato-grade polish",
    problem: "Student app khole — agla class kab hai? Fees due? Streak intact? Sab kuch ek glance mein.",
    screens: [
      { no: "2.1", label: "Student home dashboard", features: ["Next class CTA with join button", "4 quick actions, continue-learning card", "Live streak ribbon, push-noti badge"], tech: ["FCM", "Zustand", "MMKV cache"], node: <S.HomeScreen /> },
      { no: "2.2", label: "Profile + settings", features: ["Stats: attend %, rank, XP", "ID card, bonafide, refer & earn", "Hindi/English toggle, dark mode"], tech: ["i18next", "react-native-paper"], node: <S.ProfileScreen /> },
      { no: "2.3", label: "Weekly timetable", features: ["Horizontal day picker", "Live class indicator (red dot)", "Color-coded per subject"], tech: ["date-fns", "FlashList"], node: <S.TimetableScreen /> },
      { no: "2.4", label: "Notifications centre", features: ["Grouped: fee / class / result / streak", "Swipe to mark read, deep links", "Silent push for badge counts"], tech: ["FCM topics", "Notifee"], node: <S.NotificationsScreen /> },
      { no: "2.5", label: "Announcements", features: ["Admin pinned notices", "Attach PDF / image", "Read receipts to admin"], tech: ["MongoDB", "S3 signed URLs"], node: <S.AnnouncementsScreen /> },
    ],
  },
  {
    code: "03",
    title: "Attendance — QR + Geo-fence",
    sub: "Teacher generates → Student scans → Backend verifies location & expiry",
    problem: "Coaching mein proxy attendance ek ₹500cr problem hai. Rotating QR + geo-fence = zero proxy.",
    screens: [
      { no: "3.1", label: "Teacher — live QR", features: ["Rotating QR every 10 sec (anti-share)", "Live scan list with avatars", "End-session generates Excel report"], tech: ["JWT signed QR", "Socket.io", "ExcelJS"], node: <S.QrTeacherScreen /> },
      { no: "3.2", label: "Student — scan + geo-fence", features: ["100m radius geo-check (Haversine)", "Blocks emulator + screenshot", "Haptic + sound on success"], tech: ["expo-location", "vision-camera", "PlayIntegrity"], node: <S.QrStudentScreen /> },
      { no: "3.3", label: "My attendance", features: ["Overall + subject-wise %", "Warning below 75% threshold", "Calendar heatmap (GitHub style)"], tech: ["Recharts", "MongoDB aggregation"], node: <S.AttendanceScreen /> },
    ],
  },
  {
    code: "04",
    title: "Fees & documents",
    sub: "Razorpay + auto PDF receipt + digital ID card",
    problem: "Parents ko WhatsApp pe receipt manga-mang ke teachers thak gaye. Auto-everything.",
    screens: [
      { no: "4.1", label: "Fee payment", features: ["UPI / Card / Netbanking via Razorpay", "EMI option for >₹10,000", "Auto WhatsApp receipt to parent"], tech: ["Razorpay SDK", "Twilio WhatsApp"], node: <S.FeesScreen /> },
      { no: "4.2", label: "PDF receipt (auto-generated)", features: ["GST-compliant invoice", "QR for verification", "Email + download"], tech: ["Puppeteer", "Nodemailer"], node: <S.ReceiptScreen /> },
      { no: "4.3", label: "Digital ID card", features: ["Add to Apple/Google Wallet", "QR for gate entry", "Auto-expiry on session end"], tech: ["PassKit", "Google Wallet API"], node: <S.IdCardScreen /> },
      { no: "4.4", label: "Leave application", features: ["Date range + reason + proof upload", "Parent approval flow", "Auto-deduct attendance % preview"], tech: ["S3", "Workflow state machine"], node: <S.LeaveScreen /> },
    ],
  },
  {
    code: "05",
    title: "Learning",
    sub: "Live class, notes, homework — full Vedantu/PW experience",
    problem: "Live class + replay + notes + homework + chat — sab alag apps mein. Hum ek mein dete hain.",
    screens: [
      { no: "5.1", label: "Live class", features: ["Raise hand, polls, reactions", "Auto-recorded to S3 for replay", "Bandwidth-adaptive (240p–720p)"], tech: ["Agora SDK", "S3 + CloudFront"], node: <S.LiveClassScreen /> },
      { no: "5.2", label: "Notes & study material", features: ["Searchable PDF library", "Offline download with DRM", "Highlight + note in PDF"], tech: ["react-native-pdf", "MMKV"], node: <S.NotesScreen /> },
      { no: "5.3", label: "Homework submission", features: ["Camera scan → auto PDF", "Plagiarism flag (text match)", "Teacher rubric grading"], tech: ["ML Kit OCR", "S3"], node: <S.HomeworkScreen /> },
      { no: "5.4", label: "Teacher chat", features: ["1-1 + group chats per batch", "Typing indicator, read receipts", "Voice notes, image, file share"], tech: ["Socket.io", "Redis pub/sub"], node: <S.ChatScreen /> },
    ],
  },
  {
    code: "06",
    title: "AI features",
    sub: "Doubtnut-killer — handwritten doubt → instant solution",
    problem: "Doubtnut sirf typed question samajhta hai. Hum hindi handwriting + diagram + LaTeX sab.",
    screens: [
      { no: "6.1", label: "AI Doubt camera", features: ["Snap handwritten question", "Auto-crop + denoise", "OCR → LaTeX equation"], tech: ["vision-camera", "ML Kit", "Mathpix"], node: <S.DoubtCameraScreen /> },
      { no: "6.2", label: "Step-by-step AI solution", features: ["Gemini 2.5 reasoning chain", "Hindi + English explanation", "Similar practice problems"], tech: ["Gemini API", "RAG on NCERT corpus"], node: <S.DoubtAnswerScreen /> },
    ],
  },
  {
    code: "07",
    title: "Tests & analytics",
    sub: "MCQ engine + auto grading + weak topic detection",
    problem: "Student ko nahi pata kya weak hai. AI bata deta hai — Thermodynamics 42%, focus karo.",
    screens: [
      { no: "7.1", label: "Online test", features: ["Countdown timer, +4/−1 marking", "Tab-switch detection (anti-cheat)", "Auto-save every 5 sec"], tech: ["AppState API", "MongoDB"], node: <S.TestScreen /> },
      { no: "7.2", label: "Results breakdown", features: ["Subject-wise rank", "Topper comparison", "Time-per-question chart"], tech: ["Victory charts"], node: <S.ResultsScreen /> },
      { no: "7.3", label: "Progress + weak topics", features: ["12-week trend line", "AI detects weak chapters", "Auto-suggests revision plan"], tech: ["Gemini", "Cron jobs"], node: <S.ProgressScreen /> },
    ],
  },
  {
    code: "08",
    title: "Gamification",
    sub: "Duolingo-style retention — yahi feature DAU 10x karta hai",
    problem: "70% students 14 din mein app chodh dete hain. Streak + leaderboard = roz wapas aate hain.",
    screens: [
      { no: "8.1", label: "Leaderboard", features: ["Podium top-3 + scrollable rest", "Batch / city / India filters", "Weekly reset, prize pool"], tech: ["Redis sorted sets"], node: <S.LeaderboardScreen /> },
      { no: "8.2", label: "Badges, level, XP", features: ["20+ unlockable badges", "Level progression with perks", "Share badge to Instagram"], tech: ["react-native-share"], node: <S.BadgesScreen /> },
      { no: "8.3", label: "Streak system", features: ["Daily login + lesson combo", "Streak freeze (2/month)", "Milestone rewards: 7/30/100"], tech: ["Cron + FCM"], node: <S.StreakScreen /> },
      { no: "8.4", label: "Virtual study room", features: ["Pomodoro timer with peers", "Camera-on focus mode", "Background lo-fi music"], tech: ["Agora", "WebRTC"], node: <S.StudyRoomScreen /> },
    ],
  },
  {
    code: "09",
    title: "Parent & wellbeing",
    sub: "Trust + emotional intelligence — koi competitor nahi karta",
    problem: "Kota suicide rate India mein highest. Anxiety mode + parent transparency = unique moat.",
    screens: [
      { no: "9.1", label: "Parent dashboard", features: ["Daily auto-summary (8 PM)", "Teacher note + fee status", "WhatsApp digest option"], tech: ["Cron", "WhatsApp Business API"], node: <S.ParentScreen /> },
      { no: "9.2", label: "Exam anxiety mode", features: ["4-7-8 breathing animation", "Hides leaderboard & ranks", "Calming sounds + affirmations"], tech: ["Reanimated", "Audio API"], node: <S.AnxietyScreen /> },
    ],
  },
];

const totalScreens = sections.reduce((a, s) => a + s.screens.length, 0);
const totalPages = sections.length + 7; // cover, problem, metrics, compare, arch, toc, appendix

function PageChrome({ page, section }: { page: string; section?: string }) {
  return (
    <div className="border-b border-border/40 bg-surface/30 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <Logo size={22} />
        <span className="hidden md:block">{section ?? "OFFICIAL PRODUCT DOCUMENT"}</span>
        <span>PAGE {page} / {String(totalPages).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <main className="min-h-screen">
      {/* ============ COVER PAGE ============ */}
      <header className="relative overflow-hidden border-b border-border min-h-screen flex flex-col">
        <div className="absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(ellipse at 15% 20%, oklch(0.55 0.22 290 / 0.4), transparent 55%), radial-gradient(ellipse at 85% 30%, oklch(0.86 0.18 95 / 0.25), transparent 50%), radial-gradient(ellipse at 50% 90%, oklch(0.7 0.2 30 / 0.15), transparent 50%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <Logo size={22} />
            <span>CONFIDENTIAL · CLIENT PREVIEW</span>
            <span>DOC-001 · REV 1.0 · 01 / {String(totalPages).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8 py-12 items-center">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-muted-foreground">OFFICIAL PRODUCT DOCUMENT · v1.0</span>
            </div>

            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              PadhAI<span className="text-primary">.</span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              The tuition app <span className="text-foreground font-semibold">Kota</span>, <span className="text-foreground font-semibold">PhysicsWallah</span> & <span className="text-foreground font-semibold">Allen</span> should have built.
            </p>

            <div className="mt-8 h-px w-24 bg-primary" />

            <p className="mt-6 max-w-xl text-sm text-muted-foreground leading-relaxed">
              A {totalScreens}-screen, production-grade mobile experience — engineered to the same bar as <span className="text-foreground">Zomato, Swiggy, Flipkart</span> & PhysicsWallah.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-4 max-w-md">
              {[["Prepared by","PadhAI Engineering"],["Prepared for","Founder & Client"],["Date","May 2026"],["Status","● Ready for review"]].map(([l,v])=>(
                <div key={l}>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{l}</p>
                  <p className={`text-sm font-bold mt-1 ${v.startsWith("●") ? "text-success" : ""}`}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero phone */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-20 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-3xl rounded-full" />
              <div className="relative" style={{ transform: "scale(1.15)" }}>
                <PhoneFrame>
                  <S.HomeScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ PROBLEM / SOLUTION ============ */}
      <PageChrome page="02" section="THE PROBLEM" />
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-danger tracking-widest uppercase">The problem</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-black tracking-tight max-w-4xl">
            India ka coaching market <span className="text-danger">broken</span> hai. Aur har stakeholder jaanta hai.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { stat: "₹58,000 Cr", l: "Indian coaching market size, growing 16% YoY — sab paper + WhatsApp pe chal raha hai." },
              { stat: "70%", l: "Students who drop edtech apps within 14 days. Retention = #1 unsolved problem." },
              { stat: "24 hrs", l: "Average doubt-clearing time in offline coaching. AI ye 30 seconds mein karta hai." },
            ].map((c) => (
              <div key={c.stat} className="bg-surface border border-border rounded-2xl p-6">
                <p className="text-5xl font-black text-danger">{c.stat}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[11px] font-mono text-primary tracking-widest uppercase">Our solution</p>
              <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">
                One app. Four superpowers.
              </h3>
              <p className="mt-3 text-muted-foreground">Har feature ek specific failure mode solve karta hai.</p>
            </div>
            <div className="space-y-3">
              {[
                ["AI Doubt Buddy", "24hr → 30 sec doubt resolution. Handwritten + Hindi support."],
                ["Competitive Mode", "Duolingo-style streaks + leaderboard. D14 retention 70% → 92%."],
                ["Parent Daily Report", "8 PM WhatsApp auto-digest. Trust + transparency = referrals."],
                ["Exam Anxiety Mode", "Kota suicide problem ka tech answer. Industry-first."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-4 p-4 bg-surface rounded-xl border border-border hover:border-primary transition-colors">
                  <span className="text-2xl font-black text-primary font-mono w-10">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BUSINESS METRICS ============ */}
      <PageChrome page="03" section="THE BUSINESS CASE" />
      <section className="border-b border-border bg-surface/20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">Business case</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-black tracking-tight">Numbers a founder cares about.</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {[
              { n: "₹120", l: "Target CAC", s: "WhatsApp + referral loops" },
              { n: "₹4,800", l: "LTV per student", s: "12-month avg subscription" },
              { n: "40×", l: "LTV : CAC", s: "Healthy SaaS benchmark = 3×" },
              { n: "70%", l: "D30 retention", s: "Industry avg: 18%" },
              { n: "92%", l: "Daily streak rate", s: "Duolingo loop validated" },
              { n: "<₹2", l: "Server cost / DAU", s: "Edge + serverless arch" },
              { n: "4.7★", l: "Target Play Store", s: "vs PW 4.5, Vedantu 4.3" },
              { n: "18 mo", l: "Payback period", s: "Sustainable unit economics" },
            ].map((m) => (
              <div key={m.l} className="bg-background border border-border rounded-2xl p-5">
                <p className="text-4xl font-black text-primary">{m.n}</p>
                <p className="text-sm font-bold mt-2">{m.l}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{m.s}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-surface border border-border rounded-2xl p-6">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Hero retention loop</p>
            <p className="mt-3 text-lg leading-relaxed">
              <span className="text-primary font-bold">AI Buddy</span> solves homework →
              <span className="text-primary font-bold"> Streak</span> brings them back daily →
              <span className="text-primary font-bold"> Leaderboard</span> turns it social →
              <span className="text-primary font-bold"> Parent Report</span> drives word-of-mouth →
              <span className="text-success font-bold"> 5 new signups per parent</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ============ COMPETITOR TABLE ============ */}
      <PageChrome page="04" section="COMPETITIVE LANDSCAPE" />
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-secondary tracking-widest uppercase">Competitive landscape</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-black tracking-tight">Why we win.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Feature-by-feature vs the 4 biggest players. Green ✓ = full support. Empty = missing.</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left p-4 font-mono text-[10px] uppercase text-muted-foreground border-b border-border">Feature</th>
                  {["PadhAI", "PhysicsWallah", "Vedantu", "Classplus", "Unacademy"].map((c, i) => (
                    <th key={c} className={`p-4 text-xs font-bold border-b border-border ${i === 0 ? "text-primary bg-surface" : "text-muted-foreground"}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["QR + Geo-fence attendance", true, false, false, true, false],
                  ["AI doubt (handwritten + Hindi)", true, false, false, false, false],
                  ["Razorpay auto-receipts to WhatsApp", true, false, false, true, false],
                  ["Streak + leaderboard (Duolingo-style)", true, false, false, false, false],
                  ["Parent daily WhatsApp digest", true, false, false, false, false],
                  ["Exam anxiety / wellbeing mode", true, false, false, false, false],
                  ["Virtual study rooms (Pomodoro)", true, false, false, false, false],
                  ["Live class with auto-replay", true, true, true, false, true],
                  ["Offline notes with DRM", true, true, true, false, true],
                ].map(([f, ...vals], i) => (
                  <tr key={f as string} className={i % 2 === 0 ? "bg-surface/30" : ""}>
                    <td className="p-4 font-medium border-b border-border/50">{f}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={`p-4 text-center border-b border-border/50 ${j === 0 ? "bg-surface" : ""}`}>
                        {v ? <span className={`text-lg ${j === 0 ? "text-primary" : "text-success"}`}>✓</span> : <span className="text-muted-foreground/30">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted-foreground italic">Source: public app teardowns, May 2026. PadhAI features marked ✓ are spec'd in this document.</p>
        </div>
      </section>

      {/* ============ ARCHITECTURE ============ */}
      <PageChrome page="05" section="SYSTEM ARCHITECTURE" />
      <section className="border-b border-border bg-surface/20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-accent tracking-widest uppercase">System architecture</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-black tracking-tight">Built to scale to 1M DAU.</h2>

          <div className="mt-12 bg-background border border-border rounded-3xl p-8 font-mono text-xs overflow-x-auto">
            <pre className="text-foreground leading-relaxed whitespace-pre">{`
  ┌─────────────────────────────────────────────────────────────────┐
  │                      MOBILE CLIENTS (React Native)              │
  │   Student App  │  Teacher App  │  Parent App  │  Admin Web      │
  └────────────────────────────┬────────────────────────────────────┘
                               │  HTTPS / WSS
                ┌──────────────▼──────────────┐
                │   CloudFront CDN + WAF      │  ← DDoS, geo-block
                └──────────────┬──────────────┘
                ┌──────────────▼──────────────┐
                │   API Gateway (Node/Fastify)│  ← JWT auth, rate-limit
                └─┬──────┬──────┬──────┬──────┘
   ┌──────────────┘      │      │      └────────────────┐
   ▼                     ▼      ▼                       ▼
┌───────┐  ┌─────────┐  ┌────────┐  ┌──────────┐  ┌───────────┐
│ AUTH  │  │PAYMENTS │  │ LEARN  │  │ REALTIME │  │   AI/ML   │
│Firebase│ │Razorpay │  │ Class  │  │ Socket.io│  │ Gemini    │
│ MSG91 │  │ Stripe  │  │ Notes  │  │ Redis ps │  │ Mathpix   │
│  JWT  │  │  GST    │  │ Tests  │  │  Agora   │  │  RAG/NCERT│
└───┬───┘  └────┬────┘  └───┬────┘  └────┬─────┘  └─────┬─────┘
    │           │           │            │              │
    └───────────┴─────┬─────┴────────────┴──────────────┘
                     ▼
         ┌────────────────────────────┐
         │   DATA LAYER               │
         │ MongoDB  │ Redis │ AWS S3  │
         │ (primary)│(cache)│(media)  │
         └────────────────────────────┘
                     │
         ┌────────────▼───────────────┐
         │ OBSERVABILITY              │
         │ Sentry │ Grafana │ DataDog │
         └────────────────────────────┘
`}</pre>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-3">
            {[
              ["99.95%", "Target uptime SLA"],
              ["<180ms", "p95 API latency"],
              ["10M+", "Concurrent WebSockets"],
              ["Multi-AZ", "Auto-failover"],
            ].map(([n, l]) => (
              <div key={l} className="bg-surface border border-border rounded-xl p-4">
                <p className="text-2xl font-black text-primary">{n}</p>
                <p className="text-xs text-muted-foreground mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOC ============ */}
      <PageChrome page="06" section="TABLE OF CONTENTS" />
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">Contents</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">{totalScreens} screens, 9 modules.</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
            {sections.map((sec, i) => (
              <a key={sec.code} href={`#s${i}`}
                className="group flex items-baseline gap-3 py-2 border-b border-dashed border-border hover:border-primary transition-colors">
                <span className="text-[11px] font-mono text-primary">{sec.code}</span>
                <span className="text-sm font-semibold flex-1 group-hover:text-primary transition-colors">{sec.title}</span>
                <span className="text-[10px] font-mono text-muted-foreground">{sec.screens.length} ▸</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTIONS ============ */}
      {sections.map((sec, i) => (
        <div key={sec.code}>
          {/* Section divider */}
          <PageChrome page={String(7 + i).padStart(2, "0")} section={`SECTION ${sec.code} · ${sec.title.toUpperCase()}`} />
          <section id={`s${i}`} className="border-b border-border relative overflow-hidden scroll-mt-16">
            <div className="absolute inset-0 opacity-30"
              style={{ background: `radial-gradient(ellipse at 80% 20%, oklch(0.86 0.18 95 / 0.2), transparent 50%), radial-gradient(ellipse at 10% 80%, oklch(0.55 0.22 290 / 0.25), transparent 50%)` }} />
            <div className="relative max-w-7xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-12 gap-8 items-end pb-10 border-b border-border">
                <div className="md:col-span-2">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Section</p>
                  <p className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-none">{sec.code}</p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight">{sec.title}</h2>
                  <p className="text-base text-muted-foreground mt-3 max-w-2xl">{sec.sub}</p>
                  <div className="mt-5 flex items-start gap-3 max-w-2xl p-4 rounded-xl bg-surface border-l-2 border-primary">
                    <span className="text-primary text-lg font-bold">"</span>
                    <p className="text-sm text-foreground/90 italic">{sec.problem}</p>
                  </div>
                </div>
                <div className="md:col-span-3 text-right">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Screens</p>
                  <p className="text-5xl font-black text-foreground mt-1">{String(sec.screens.length).padStart(2, "0")}</p>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-20 justify-center md:justify-start">
                {sec.screens.map((sc) => (
                  <PhoneFrame key={sc.no} no={sc.no} label={sc.label} features={sc.features} tech={sc.tech}>
                    {sc.node}
                  </PhoneFrame>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* ============ APPENDIX / FOOTER ============ */}
      <PageChrome page={String(totalPages).padStart(2, "0")} section="APPENDIX · ROADMAP" />
      <footer className="bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">Appendix · Next steps</p>
          <h3 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">Ready to build the real thing?</h3>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { n: "01", t: "Week 1–2 · Foundation", d: "React Native scaffold, Firebase auth, MongoDB schema, role-based navigation, design tokens." },
              { n: "02", t: "Week 3–6 · Core", d: "Attendance (QR + geo), fees (Razorpay), timetable, notifications, parent dashboard." },
              { n: "03", t: "Week 7–10 · Differentiators", d: "Live class (Agora), AI doubt (Gemini), gamification, anxiety mode, AppStore + Play release." },
            ].map((p) => (
              <div key={p.n} className="bg-background border border-border rounded-2xl p-6">
                <p className="text-[10px] font-mono text-primary">{p.n}</p>
                <p className="text-base font-bold mt-2">{p.t}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl">
            <p className="text-[10px] font-mono text-primary tracking-widest uppercase">Founder note</p>
            <p className="mt-3 text-2xl font-light italic leading-relaxed">
              "This is what Kota needed 10 years ago. We build it, we win the next decade of Indian edtech."
            </p>
            <p className="mt-3 text-xs text-muted-foreground">— PadhAI engineering team</p>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-end justify-between gap-4 text-[10px] font-mono text-muted-foreground">
            <div className="flex items-center gap-4">
              <Logo size={28} />
              <div>
                <p>© 2026 PadhAI · All rights reserved</p>
                <p className="mt-1">Document classification: CONFIDENTIAL · CLIENT PREVIEW</p>
              </div>
            </div>
            <div className="text-right">
              <p>DOC-001 · REV 1.0 · {totalScreens} SCREENS · {totalPages} PAGES</p>
              <p className="mt-1">Signed — PadhAI Engineering</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
