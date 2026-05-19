import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
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
  screens: Screen[];
};

const sections: Section[] = [
  {
    code: "01",
    title: "Onboarding",
    sub: "Pehla impression — sub-3-second cold start, multi-role auth",
    screens: [
      {
        no: "1.1",
        label: "Splash — brand reveal",
        features: [
          "Animated logo + tagline",
          "Auto session check (Firebase)",
          "App-update gate (Play store)",
        ],
        tech: ["React Native", "Reanimated 3", "Firebase Auth"],
        node: <S.SplashScreen />,
      },
      {
        no: "1.2",
        label: "Phone OTP login",
        features: [
          "+91 only, autoread OTP",
          "MSG91 SMS fallback if Firebase fails",
          "30-sec resend lock, 3 attempts",
        ],
        tech: ["Firebase Auth", "MSG91", "SMS Retriever API"],
        node: <S.OtpScreen />,
      },
      {
        no: "1.3",
        label: "Role selection",
        features: [
          "4 roles — Student / Teacher / Parent / Admin",
          "Role saved in JWT claim",
          "Different home stack per role",
        ],
        tech: ["JWT", "AsyncStorage", "React Navigation"],
        node: <S.RoleScreen />,
      },
    ],
  },
  {
    code: "02",
    title: "Daily core",
    sub: "Roz kaam aane wale screens — Zomato-grade polish",
    screens: [
      {
        no: "2.1",
        label: "Student home dashboard",
        features: [
          "Next class CTA with join button",
          "4 quick actions, continue-learning card",
          "Live streak ribbon, push-noti badge",
        ],
        tech: ["FCM", "Zustand", "MMKV cache"],
        node: <S.HomeScreen />,
      },
      {
        no: "2.2",
        label: "Profile + settings",
        features: [
          "Stats: attend %, rank, XP",
          "ID card, bonafide, refer & earn",
          "Hindi/English toggle, dark mode",
        ],
        tech: ["i18next", "react-native-paper"],
        node: <S.ProfileScreen />,
      },
      {
        no: "2.3",
        label: "Weekly timetable",
        features: [
          "Horizontal day picker",
          "Live class indicator (red dot)",
          "Color-coded per subject",
        ],
        tech: ["date-fns", "FlashList"],
        node: <S.TimetableScreen />,
      },
      {
        no: "2.4",
        label: "Notifications centre",
        features: [
          "Grouped: fee / class / result / streak",
          "Swipe to mark read, deep links",
          "Silent push for badge counts",
        ],
        tech: ["FCM topics", "Notifee"],
        node: <S.NotificationsScreen />,
      },
      {
        no: "2.5",
        label: "Announcements",
        features: [
          "Admin pinned notices",
          "Attach PDF / image",
          "Read receipts to admin",
        ],
        tech: ["MongoDB", "S3 signed URLs"],
        node: <S.AnnouncementsScreen />,
      },
    ],
  },
  {
    code: "03",
    title: "Attendance — QR + Geo-fence",
    sub: "Teacher generates → Student scans → Backend verifies location & expiry",
    screens: [
      {
        no: "3.1",
        label: "Teacher — live QR",
        features: [
          "Rotating QR every 10 sec (anti-share)",
          "Live scan list with avatars",
          "End-session generates Excel report",
        ],
        tech: ["JWT signed QR", "Socket.io", "ExcelJS"],
        node: <S.QrTeacherScreen />,
      },
      {
        no: "3.2",
        label: "Student — scan + geo-fence",
        features: [
          "100m radius geo-check (Haversine)",
          "Blocks emulator + screenshot",
          "Haptic + sound on success",
        ],
        tech: ["expo-location", "vision-camera", "PlayIntegrity"],
        node: <S.QrStudentScreen />,
      },
      {
        no: "3.3",
        label: "My attendance",
        features: [
          "Overall + subject-wise %",
          "Warning below 75% threshold",
          "Calendar heatmap (GitHub style)",
        ],
        tech: ["Recharts", "MongoDB aggregation"],
        node: <S.AttendanceScreen />,
      },
    ],
  },
  {
    code: "04",
    title: "Fees & documents",
    sub: "Razorpay + auto PDF receipt + digital ID card",
    screens: [
      {
        no: "4.1",
        label: "Fee payment",
        features: [
          "UPI / Card / Netbanking via Razorpay",
          "EMI option for >₹10,000",
          "Auto WhatsApp receipt to parent",
        ],
        tech: ["Razorpay SDK", "Twilio WhatsApp"],
        node: <S.FeesScreen />,
      },
      {
        no: "4.2",
        label: "PDF receipt (auto-generated)",
        features: [
          "GST-compliant invoice",
          "QR for verification",
          "Email + download",
        ],
        tech: ["Puppeteer", "Nodemailer"],
        node: <S.ReceiptScreen />,
      },
      {
        no: "4.3",
        label: "Digital ID card",
        features: [
          "Add to Apple/Google Wallet",
          "QR for gate entry",
          "Auto-expiry on session end",
        ],
        tech: ["PassKit", "Google Wallet API"],
        node: <S.IdCardScreen />,
      },
      {
        no: "4.4",
        label: "Leave application",
        features: [
          "Date range + reason + proof upload",
          "Parent approval flow",
          "Auto-deduct attendance % preview",
        ],
        tech: ["S3", "Workflow state machine"],
        node: <S.LeaveScreen />,
      },
    ],
  },
  {
    code: "05",
    title: "Learning",
    sub: "Live class, notes, homework — full Vedantu/PW experience",
    screens: [
      {
        no: "5.1",
        label: "Live class",
        features: [
          "Raise hand, polls, reactions",
          "Auto-recorded to S3 for replay",
          "Bandwidth-adaptive (240p–720p)",
        ],
        tech: ["Agora SDK", "S3 + CloudFront"],
        node: <S.LiveClassScreen />,
      },
      {
        no: "5.2",
        label: "Notes & study material",
        features: [
          "Searchable PDF library",
          "Offline download with DRM",
          "Highlight + note in PDF",
        ],
        tech: ["react-native-pdf", "MMKV"],
        node: <S.NotesScreen />,
      },
      {
        no: "5.3",
        label: "Homework submission",
        features: [
          "Camera scan → auto PDF",
          "Plagiarism flag (text match)",
          "Teacher rubric grading",
        ],
        tech: ["ML Kit OCR", "S3"],
        node: <S.HomeworkScreen />,
      },
      {
        no: "5.4",
        label: "Teacher chat",
        features: [
          "1-1 + group chats per batch",
          "Typing indicator, read receipts",
          "Voice notes, image, file share",
        ],
        tech: ["Socket.io", "Redis pub/sub"],
        node: <S.ChatScreen />,
      },
    ],
  },
  {
    code: "06",
    title: "AI features",
    sub: "Doubtnut-killer — handwritten doubt → instant solution",
    screens: [
      {
        no: "6.1",
        label: "AI Doubt camera",
        features: [
          "Snap handwritten question",
          "Auto-crop + denoise",
          "OCR → LaTeX equation",
        ],
        tech: ["vision-camera", "ML Kit", "Mathpix"],
        node: <S.DoubtCameraScreen />,
      },
      {
        no: "6.2",
        label: "Step-by-step AI solution",
        features: [
          "Gemini 2.5 reasoning chain",
          "Hindi + English explanation",
          "Similar practice problems",
        ],
        tech: ["Gemini API", "RAG on NCERT corpus"],
        node: <S.DoubtAnswerScreen />,
      },
    ],
  },
  {
    code: "07",
    title: "Tests & analytics",
    sub: "MCQ engine + auto grading + weak topic detection",
    screens: [
      {
        no: "7.1",
        label: "Online test",
        features: [
          "Countdown timer, +4/−1 marking",
          "Tab-switch detection (anti-cheat)",
          "Auto-save every 5 sec",
        ],
        tech: ["AppState API", "MongoDB"],
        node: <S.TestScreen />,
      },
      {
        no: "7.2",
        label: "Results breakdown",
        features: [
          "Subject-wise rank",
          "Topper comparison",
          "Time-per-question chart",
        ],
        tech: ["Victory charts"],
        node: <S.ResultsScreen />,
      },
      {
        no: "7.3",
        label: "Progress + weak topics",
        features: [
          "12-week trend line",
          "AI detects weak chapters",
          "Auto-suggests revision plan",
        ],
        tech: ["Gemini", "Cron jobs"],
        node: <S.ProgressScreen />,
      },
    ],
  },
  {
    code: "08",
    title: "Gamification (Duolingo-style)",
    sub: "Yahi feature daily retention 10x karta hai",
    screens: [
      {
        no: "8.1",
        label: "Leaderboard",
        features: [
          "Podium top-3 + scrollable rest",
          "Batch / city / India filters",
          "Weekly reset, prize pool",
        ],
        tech: ["Redis sorted sets"],
        node: <S.LeaderboardScreen />,
      },
      {
        no: "8.2",
        label: "Badges, level, XP",
        features: [
          "20+ unlockable badges",
          "Level progression with perks",
          "Share badge to Instagram",
        ],
        tech: ["react-native-share"],
        node: <S.BadgesScreen />,
      },
      {
        no: "8.3",
        label: "Streak system",
        features: [
          "Daily login + lesson combo",
          "Streak freeze (2/month)",
          "Milestone rewards: 7/30/100",
        ],
        tech: ["Cron + FCM"],
        node: <S.StreakScreen />,
      },
      {
        no: "8.4",
        label: "Virtual study room",
        features: [
          "Pomodoro timer with peers",
          "Camera-on focus mode",
          "Background lo-fi music",
        ],
        tech: ["Agora", "WebRTC"],
        node: <S.StudyRoomScreen />,
      },
    ],
  },
  {
    code: "09",
    title: "Parent & wellbeing",
    sub: "Trust & emotional intelligence — koi competitor nahi karta",
    screens: [
      {
        no: "9.1",
        label: "Parent dashboard",
        features: [
          "Daily auto-summary (8 PM)",
          "Teacher note + fee status",
          "WhatsApp digest option",
        ],
        tech: ["Cron", "WhatsApp Business API"],
        node: <S.ParentScreen />,
      },
      {
        no: "9.2",
        label: "Exam anxiety mode",
        features: [
          "4-7-8 breathing animation",
          "Hides leaderboard & ranks",
          "Calming sounds + affirmations",
        ],
        tech: ["Reanimated", "Audio API"],
        node: <S.AnxietyScreen />,
      },
    ],
  },
];

function Showcase() {
  const totalScreens = sections.reduce((a, s) => a + s.screens.length, 0);

  return (
    <main className="min-h-screen">
      {/* ============ COVER PAGE ============ */}
      <header className="relative overflow-hidden border-b border-border min-h-screen flex flex-col">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 15% 20%, oklch(0.55 0.22 290 / 0.4), transparent 55%), radial-gradient(ellipse at 85% 30%, oklch(0.86 0.18 95 / 0.25), transparent 50%), radial-gradient(ellipse at 50% 90%, oklch(0.7 0.2 30 / 0.15), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Doc top bar */}
        <div className="relative border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>PADHAI / PRODUCT / MOBILE-APP</span>
            <span>CONFIDENTIAL · CLIENT PREVIEW</span>
            <span>DOC-001 · REV 1.0</span>
          </div>
        </div>

        <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8 py-16 items-center">
          {/* Left: title */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-muted-foreground">
                OFFICIAL PRODUCT DOCUMENT · v1.0
              </span>
            </div>

            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              PadhAI
              <span className="text-primary">.</span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              The tuition app{" "}
              <span className="text-foreground font-semibold">Kota</span>,{" "}
              <span className="text-foreground font-semibold">PhysicsWallah</span> &{" "}
              <span className="text-foreground font-semibold">Allen</span> should have built.
            </p>

            <div className="mt-10 h-px w-24 bg-primary" />

            <p className="mt-6 max-w-xl text-sm text-muted-foreground leading-relaxed">
              A {totalScreens}-screen, production-grade mobile experience —
              engineered to the same bar as{" "}
              <span className="text-foreground">Zomato, Swiggy, Flipkart</span> &
              PhysicsWallah. Every screen below is a real-world spec: stack,
              flow, edge-cases & retention loops included.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-4 max-w-md">
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Prepared by
                </p>
                <p className="text-sm font-bold mt-1">PadhAI Engineering</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Prepared for
                </p>
                <p className="text-sm font-bold mt-1">Founder & Client</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Date
                </p>
                <p className="text-sm font-bold mt-1">May 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Status
                </p>
                <p className="text-sm font-bold mt-1 text-success">
                  ● Ready for review
                </p>
              </div>
            </div>
          </div>

          {/* Right: spec sheet */}
          <div className="md:col-span-5">
            <div className="bg-surface/80 backdrop-blur border border-border rounded-3xl p-6 shadow-2xl">
              <p className="text-[10px] font-mono text-primary tracking-widest uppercase">
                At a glance
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  [totalScreens.toString(), "Screens"],
                  ["9", "Modules"],
                  ["4", "User roles"],
                  ["12+", "Integrations"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="bg-background border border-border rounded-2xl p-4"
                  >
                    <p className="text-4xl font-black text-primary">{n}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    "React Native",
                    "Node.js",
                    "MongoDB",
                    "Redis",
                    "Firebase",
                    "Razorpay",
                    "Agora",
                    "Socket.io",
                    "Gemini AI",
                    "Mathpix",
                    "MSG91",
                    "AWS S3",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 rounded-md bg-surface-2 border border-border text-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Hero retention loop
                </p>
                <p className="mt-2 text-sm leading-snug">
                  AI Buddy + Competitive Mode + Parent Daily Report + Anxiety
                  Mode →{" "}
                  <span className="text-primary font-semibold">
                    word-of-mouth virality
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-[10px] font-mono text-center text-muted-foreground">
              ↓ scroll for the {totalScreens} screens ↓
            </p>
          </div>
        </div>
      </header>

      {/* ============ TABLE OF CONTENTS ============ */}
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-[10px] font-mono text-primary tracking-widest uppercase">
            Contents
          </p>
          <h2 className="text-3xl font-black mt-2">Table of contents</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
            {sections.map((sec, i) => (
              <a
                key={sec.code}
                href={`#s${i}`}
                className="group flex items-baseline gap-3 py-2 border-b border-dashed border-border hover:border-primary transition-colors"
              >
                <span className="text-[11px] font-mono text-primary">
                  {sec.code}
                </span>
                <span className="text-sm font-semibold flex-1 group-hover:text-primary transition-colors">
                  {sec.title}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  {sec.screens.length} ▸
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTIONS ============ */}
      <div className="max-w-[1400px] mx-auto px-6 py-20 space-y-28">
        {sections.map((sec, i) => (
          <section key={sec.code} id={`s${i}`} className="scroll-mt-8">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-10 pb-6 border-b border-border">
              <div>
                <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
                  Section {sec.code}
                </p>
                <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">
                  {sec.title}
                </h2>
                <p className="text-base text-muted-foreground mt-2 max-w-2xl">
                  {sec.sub}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Screens in section
                </p>
                <p className="text-3xl font-black text-primary mt-1">
                  {String(sec.screens.length).padStart(2, "0")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-16 justify-center md:justify-start">
              {sec.screens.map((sc) => (
                <PhoneFrame
                  key={sc.no}
                  no={sc.no}
                  label={sc.label}
                  features={sc.features}
                  tech={sc.tech}
                >
                  {sc.node}
                </PhoneFrame>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ============ APPENDIX / FOOTER ============ */}
      <footer className="border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            Appendix · Next steps
          </p>
          <h3 className="text-3xl md:text-4xl font-black mt-2 tracking-tight">
            Ready to build the real thing?
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                t: "Week 1–2 · Foundation",
                d: "React Native scaffold, Firebase auth, MongoDB schema, role-based navigation, design tokens.",
              },
              {
                n: "02",
                t: "Week 3–6 · Core",
                d: "Attendance (QR + geo), fees (Razorpay), timetable, notifications, parent dashboard.",
              },
              {
                n: "03",
                t: "Week 7–10 · Differentiators",
                d: "Live class (Agora), AI doubt (Gemini), gamification, anxiety mode, AppStore + Play release.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="bg-surface border border-border rounded-2xl p-5"
              >
                <p className="text-[10px] font-mono text-primary">{p.n}</p>
                <p className="text-sm font-bold mt-2">{p.t}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-end justify-between gap-4 text-[10px] font-mono text-muted-foreground">
            <div>
              <p>© 2026 PadhAI · All rights reserved</p>
              <p className="mt-1">
                Document classification: CONFIDENTIAL · CLIENT PREVIEW
              </p>
            </div>
            <div className="text-right">
              <p>DOC-001 · REV 1.0 · {totalScreens} SCREENS</p>
              <p className="mt-1">Signed — PadhAI Engineering</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
