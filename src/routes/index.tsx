import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import * as S from "@/components/screens/AllScreens";

export const Route = createFileRoute("/")({
  component: Showcase,
  head: () => ({
    meta: [
      { title: "PadhAI — Tuition app demo (30 screens)" },
      { name: "description", content: "Senior-engineer-grade tuition app concept: 30 mobile screens covering attendance, fees, live class, AI doubt, parent view & more." },
    ],
  }),
});

type Section = {
  title: string;
  sub: string;
  screens: { label: string; node: React.ReactNode }[];
};

const sections: Section[] = [
  {
    title: "01 · Onboarding",
    sub: "Pehla impression — fast, frictionless, multi-role",
    screens: [
      { label: "Splash — brand reveal", node: <S.SplashScreen /> },
      { label: "Phone OTP login (Firebase)", node: <S.OtpScreen /> },
      { label: "Role selection — Student / Teacher / Parent / Admin", node: <S.RoleScreen /> },
    ],
  },
  {
    title: "02 · Daily core",
    sub: "Roz kaam aane wale screens — Zomato-grade polish",
    screens: [
      { label: "Student home — next class, streak, quick actions", node: <S.HomeScreen /> },
      { label: "Profile — stats, ID card, settings", node: <S.ProfileScreen /> },
      { label: "Timetable — week view, live indicator", node: <S.TimetableScreen /> },
      { label: "Notifications — fee, results, class, streak", node: <S.NotificationsScreen /> },
      { label: "Announcements — pinned notices", node: <S.AnnouncementsScreen /> },
    ],
  },
  {
    title: "03 · Attendance (QR + location)",
    sub: "Teacher generates → Student scans → Backend verifies location & expiry",
    screens: [
      { label: "Teacher — live QR with countdown & scan list", node: <S.QrTeacherScreen /> },
      { label: "Student — camera scan with geo-fence", node: <S.QrStudentScreen /> },
      { label: "My attendance — subject-wise + warnings", node: <S.AttendanceScreen /> },
    ],
  },
  {
    title: "04 · Fees & documents",
    sub: "Razorpay + auto PDF receipt + ID card download",
    screens: [
      { label: "Fees — UPI / Card payment", node: <S.FeesScreen /> },
      { label: "Auto-generated PDF receipt", node: <S.ReceiptScreen /> },
      { label: "Digital ID card", node: <S.IdCardScreen /> },
      { label: "Leave application — parent approval flow", node: <S.LeaveScreen /> },
    ],
  },
  {
    title: "05 · Learning",
    sub: "Live class, notes, homework — full Vedantu/PW experience",
    screens: [
      { label: "Live class — raise hand, polls, recording", node: <S.LiveClassScreen /> },
      { label: "Notes & study material — searchable, offline", node: <S.NotesScreen /> },
      { label: "Homework — submit with file upload", node: <S.HomeworkScreen /> },
      { label: "Teacher chat — Socket.io real-time", node: <S.ChatScreen /> },
    ],
  },
  {
    title: "06 · AI features",
    sub: "Doubtnut-killer — handwritten doubt → instant solution",
    screens: [
      { label: "AI Doubt camera — snap handwritten Q", node: <S.DoubtCameraScreen /> },
      { label: "Step-by-step AI solution (Gemini)", node: <S.DoubtAnswerScreen /> },
    ],
  },
  {
    title: "07 · Tests & analytics",
    sub: "MCQ engine + auto grading + weak topic detection",
    screens: [
      { label: "Online test — timer, +4/−1 marking", node: <S.TestScreen /> },
      { label: "Results — grade, rank, subject breakdown", node: <S.ResultsScreen /> },
      { label: "Progress trend + weak topic alerts", node: <S.ProgressScreen /> },
    ],
  },
  {
    title: "08 · Gamification (Duolingo-style)",
    sub: "Yahi feature daily retention 10x karta hai",
    screens: [
      { label: "Leaderboard — podium + batch ranks", node: <S.LeaderboardScreen /> },
      { label: "Badges, level, XP system", node: <S.BadgesScreen /> },
      { label: "Streak — don't break it!", node: <S.StreakScreen /> },
      { label: "Virtual study room — focus with peers", node: <S.StudyRoomScreen /> },
    ],
  },
  {
    title: "09 · Parent & wellbeing",
    sub: "Trust & emotional intelligence — koi competitor nahi karta",
    screens: [
      { label: "Parent dashboard — daily summary + teacher note", node: <S.ParentScreen /> },
      { label: "Exam anxiety mode — breathe, only essentials", node: <S.AnxietyScreen /> },
    ],
  },
];

function Showcase() {
  const totalScreens = sections.reduce((a, s) => a + s.screens.length, 0);

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, oklch(0.55 0.22 290 / 0.35), transparent 50%), radial-gradient(ellipse at 80% 30%, oklch(0.86 0.18 95 / 0.2), transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-border text-xs">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-muted-foreground">CLIENT DEMO · v1.0</span>
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            PadhAI<span className="text-primary">.</span>
            <br />
            <span className="text-muted-foreground font-light">Tuition app concept</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            {totalScreens} screens · Engineered like <span className="text-foreground font-semibold">Zomato, Swiggy, PhysicsWallah, Flipkart</span> & Kota apps.
            React Native · Node · MongoDB · Firebase · Razorpay · Socket.io · Gemini AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Firebase OTP", "Razorpay UPI", "QR + Geo attendance", "Live class", "AI Doubt", "Gamification", "Parent view", "MSG91 WhatsApp"].map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground font-mono">{t}</span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
            {[
              ["30", "Screens"],
              ["9", "Modules"],
              ["4", "User roles"],
              ["100%", "Real-world spec"],
            ].map(([n, l]) => (
              <div key={l} className="bg-surface border border-border rounded-2xl p-4">
                <p className="text-3xl font-black text-primary">{n}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {sections.map((sec, i) => (
          <section key={sec.title} id={`s${i}`}>
            <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
              <div>
                <p className="text-xs font-mono text-primary tracking-widest uppercase">Section {String(i + 1).padStart(2, "0")}</p>
                <h2 className="text-3xl md:text-4xl font-black mt-1">{sec.title.replace(/^\d+\s·\s/, "")}</h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-xl">{sec.sub}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {sec.screens.length} screen{sec.screens.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center md:justify-start">
              {sec.screens.map((sc, j) => (
                <PhoneFrame key={j} label={sc.label}>{sc.node}</PhoneFrame>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-xl font-bold">Ready to build the real thing?</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            Ye sirf visual demo hai — agla step: React Native codebase, MongoDB schema, Node API routes, Razorpay test mode, aur Firebase project setup.
          </p>
          <p className="mt-6 text-xs text-muted-foreground font-mono">
            © 2026 PadhAI demo · designed for client preview
          </p>
        </div>
      </footer>
    </main>
  );
}
