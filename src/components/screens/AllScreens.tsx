/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";

/* ---------- helpers ---------- */
const Row = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`flex items-center ${className}`}>{children}</div>
);
const Pill = ({ children, tone = "y" }: { children: ReactNode; tone?: "y" | "v" | "g" | "r" | "b" }) => {
  const map = {
    y: "bg-[#ffd60a] text-[#1a1f3a]",
    v: "bg-[#7c3aed] text-white",
    g: "bg-[#10b981] text-white",
    r: "bg-[#ef4444] text-white",
    b: "bg-[#1e3a8a] text-white",
  } as const;
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold ${map[tone]}`}>{children}</span>;
};
const Header = ({ title, sub, dark }: { title: string; sub?: string; dark?: boolean }) => (
  <div className={`px-4 py-3 ${dark ? "bg-[#1a1f3a] text-white" : ""}`}>
    <p className="text-[15px] font-bold leading-tight">{title}</p>
    {sub && <p className={`text-[10px] mt-0.5 ${dark ? "text-white/60" : "text-black/50"}`}>{sub}</p>}
  </div>
);
const BottomNav = ({ active = 0 }: { active?: number }) => {
  const items = ["Home", "Class", "Doubt", "Tests", "Me"];
  const icons = ["🏠", "🎓", "💡", "📝", "👤"];
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t border-black/5 flex justify-around items-center">
      {items.map((it, i) => (
        <div key={it} className={`flex flex-col items-center text-[8px] ${i === active ? "text-[#7c3aed] font-bold" : "text-black/50"}`}>
          <span className="text-sm leading-none">{icons[i]}</span>
          <span className="mt-0.5">{it}</span>
        </div>
      ))}
    </div>
  );
};
const Avatar = ({ ch, color = "#ffd60a" }: { ch: string; color?: string }) => (
  <div className="h-8 w-8 rounded-full grid place-items-center text-[11px] font-bold" style={{ background: color, color: "#1a1f3a" }}>
    {ch}
  </div>
);

/* ============ 1. SPLASH / LOGIN ============ */
export const SplashScreen = () => (
  <div className="h-full bg-pw flex flex-col items-center justify-center text-white relative overflow-hidden">
    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#ffd60a]/20 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#7c3aed]/30 blur-3xl" />
    <div className="h-20 w-20 rounded-3xl bg-[#ffd60a] grid place-items-center text-3xl shadow-2xl shadow-[#ffd60a]/30">📚</div>
    <h1 className="text-2xl font-black mt-5 tracking-tight">PadhAI</h1>
    <p className="text-[11px] text-white/60 mt-1">Tuition reimagined</p>
    <div className="absolute bottom-8 flex gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
    </div>
  </div>
);

/* ============ 2. PHONE OTP LOGIN ============ */
export const OtpScreen = () => (
  <div className="h-full bg-soft flex flex-col px-5 pt-6">
    <div className="h-10 w-10 rounded-xl bg-[#1a1f3a] grid place-items-center text-white text-lg">📚</div>
    <h2 className="text-lg font-bold mt-6 leading-tight">Verify your<br/>number</h2>
    <p className="text-[10px] text-black/50 mt-1">OTP sent to +91 98765 43210</p>
    <Row className="gap-2 mt-5">
      {["4", "8", "2", "1", "", ""].map((d, i) => (
        <div key={i} className={`h-11 w-9 rounded-xl border-2 grid place-items-center text-base font-bold ${d ? "border-[#7c3aed] bg-white" : "border-black/10 bg-white"}`}>{d}</div>
      ))}
    </Row>
    <p className="text-[10px] text-black/40 mt-3">Resend in 0:23</p>
    <button className="mt-auto mb-6 h-11 rounded-xl bg-[#1a1f3a] text-white font-bold text-xs">Verify & Continue</button>
  </div>
);

/* ============ 3. ROLE SELECT ============ */
export const RoleScreen = () => (
  <div className="h-full bg-soft px-4 pt-6">
    <h2 className="text-base font-bold">I am a...</h2>
    <p className="text-[10px] text-black/50 mt-0.5">Choose your role to continue</p>
    {[
      { e: "🎓", t: "Student", s: "Attend classes, give tests", c: "#ffd60a" },
      { e: "👨‍🏫", t: "Teacher", s: "Take classes, mark attendance", c: "#a78bfa" },
      { e: "👪", t: "Parent", s: "Track your child's progress", c: "#fb923c" },
      { e: "🛡️", t: "Admin", s: "Manage batches & fees", c: "#6ee7b7" },
    ].map((r) => (
      <div key={r.t} className="mt-3 p-3 bg-white rounded-2xl border border-black/5 flex items-center gap-3 shadow-sm">
        <div className="h-10 w-10 rounded-xl grid place-items-center text-lg" style={{ background: r.c }}>{r.e}</div>
        <div className="flex-1">
          <p className="text-xs font-bold">{r.t}</p>
          <p className="text-[9px] text-black/50">{r.s}</p>
        </div>
        <span className="text-[#7c3aed]">›</span>
      </div>
    ))}
  </div>
);

/* ============ 4. STUDENT HOME DASHBOARD ============ */
export const HomeScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <div className="bg-pw px-4 pt-3 pb-6 rounded-b-3xl text-white relative">
      <Row className="justify-between">
        <div>
          <p className="text-[10px] text-white/60">Good morning</p>
          <p className="text-sm font-bold">Ramesh Kumar 👋</p>
        </div>
        <div className="relative">
          <span className="text-lg">🔔</span>
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#ef4444]" />
        </div>
      </Row>
      <div className="mt-4 bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/10">
        <Row className="justify-between">
          <div>
            <p className="text-[9px] text-white/60">NEXT CLASS</p>
            <p className="text-xs font-bold mt-0.5">Physics — Optics</p>
            <p className="text-[9px] text-white/60">10:30 AM • Sir Yadav</p>
          </div>
          <button className="bg-[#ffd60a] text-[#1a1f3a] text-[10px] font-bold px-3 py-1.5 rounded-lg">Join</button>
        </Row>
      </div>
    </div>
    <div className="px-3 -mt-3">
      <div className="grid grid-cols-4 gap-2">
        {[["📅","Timetable"],["✅","Attend"],["💳","Fees"],["📊","Results"]].map(([e,t])=>(
          <div key={t} className="bg-white rounded-xl p-2 flex flex-col items-center shadow-sm">
            <span className="text-lg">{e}</span>
            <span className="text-[8px] font-semibold mt-1">{t}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="px-4 mt-4">
      <Row className="justify-between"><p className="text-[11px] font-bold">Continue learning</p><span className="text-[9px] text-[#7c3aed] font-bold">See all</span></Row>
      <div className="mt-2 bg-white rounded-2xl p-3 shadow-sm">
        <Row className="gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] grid place-items-center text-white">⚛️</div>
          <div className="flex-1">
            <p className="text-[11px] font-bold">Newton's Laws</p>
            <p className="text-[9px] text-black/50">Chapter 5 • 60% done</p>
            <div className="h-1 bg-black/5 rounded-full mt-1.5"><div className="h-1 w-3/5 bg-[#10b981] rounded-full"/></div>
          </div>
        </Row>
      </div>
    </div>
    <div className="px-4 mt-3">
      <div className="bg-gradient-to-r from-[#ffd60a] to-[#fb923c] rounded-2xl p-3 flex items-center gap-2">
        <span className="text-2xl">🔥</span>
        <div className="flex-1">
          <p className="text-[10px] font-black text-[#1a1f3a]">14 day streak!</p>
          <p className="text-[8px] text-[#1a1f3a]/70">Don't break it today</p>
        </div>
      </div>
    </div>
    <BottomNav active={0} />
  </div>
);

/* ============ 5. STUDENT PROFILE ============ */
export const ProfileScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <div className="bg-pw h-32 rounded-b-3xl" />
    <div className="px-4 -mt-14">
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <div className="-mt-12 h-16 w-16 rounded-2xl bg-[#ffd60a] grid place-items-center text-2xl font-black mx-auto">R</div>
        <p className="text-center text-sm font-bold mt-2">Ramesh Kumar</p>
        <p className="text-center text-[10px] text-black/50">Class 10 • Batch A2</p>
        <Row className="justify-around mt-3 pt-3 border-t border-black/5">
          <div className="text-center"><p className="text-sm font-black text-[#7c3aed]">92%</p><p className="text-[8px] text-black/50">Attend</p></div>
          <div className="text-center"><p className="text-sm font-black text-[#10b981]">#3</p><p className="text-[8px] text-black/50">Rank</p></div>
          <div className="text-center"><p className="text-sm font-black text-[#fb923c]">1240</p><p className="text-[8px] text-black/50">XP</p></div>
        </Row>
      </div>
      <div className="mt-3 bg-white rounded-2xl divide-y divide-black/5">
        {["📇 My ID Card","📜 Bonafide certificate","🎁 Refer & earn","🌙 Dark mode","🌐 भाषा / Language","⚙️ Settings","🚪 Logout"].map(t=>(
          <Row key={t} className="px-3 py-2.5 justify-between">
            <span className="text-[11px]">{t}</span><span className="text-black/30">›</span>
          </Row>
        ))}
      </div>
    </div>
    <BottomNav active={4} />
  </div>
);

/* ============ 6. QR ATTENDANCE (TEACHER) ============ */
export const QrTeacherScreen = () => (
  <div className="h-full bg-pw text-white px-4 pt-4 pb-3 flex flex-col">
    <Row className="justify-between">
      <div><p className="text-[10px] text-white/60">Live attendance</p><p className="text-sm font-bold">Batch A2 • Physics</p></div>
      <Pill tone="r">LIVE</Pill>
    </Row>
    <div className="mt-4 bg-white rounded-3xl p-4 mx-auto">
      <div className="h-32 w-32 grid place-items-center" style={{
        background: "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 8px 8px",
      }}>
        <div className="h-6 w-6 bg-white grid place-items-center"><span className="text-[9px]">📚</span></div>
      </div>
    </div>
    <p className="text-center text-[10px] text-white/60 mt-3">Expires in</p>
    <p className="text-center text-2xl font-black text-[#ffd60a]">08:32</p>
    <div className="mt-3 bg-white/10 rounded-xl p-2.5 border border-white/10">
      <Row className="justify-between"><p className="text-[10px]">Scanned</p><p className="text-[10px] font-bold">22 / 28</p></Row>
      <div className="h-1.5 bg-white/10 rounded-full mt-1.5"><div className="h-1.5 w-4/5 bg-[#10b981] rounded-full" /></div>
      <div className="mt-2 flex -space-x-1.5">
        {["R","A","P","S","K","+17"].map((c,i)=>(
          <div key={i} className="h-6 w-6 rounded-full bg-[#ffd60a] text-[#1a1f3a] text-[9px] font-bold grid place-items-center border-2 border-[#1a1f3a]">{c}</div>
        ))}
      </div>
    </div>
    <button className="mt-auto h-10 rounded-xl bg-[#ffd60a] text-[#1a1f3a] text-xs font-bold">End attendance</button>
  </div>
);

/* ============ 7. QR SCAN (STUDENT) ============ */
export const QrStudentScreen = () => (
  <div className="h-full bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-44 w-44 border-2 border-[#ffd60a] rounded-3xl relative">
        <div className="absolute -top-0.5 -left-0.5 h-6 w-6 border-t-4 border-l-4 border-[#ffd60a] rounded-tl-3xl" />
        <div className="absolute -top-0.5 -right-0.5 h-6 w-6 border-t-4 border-r-4 border-[#ffd60a] rounded-tr-3xl" />
        <div className="absolute -bottom-0.5 -left-0.5 h-6 w-6 border-b-4 border-l-4 border-[#ffd60a] rounded-bl-3xl" />
        <div className="absolute -bottom-0.5 -right-0.5 h-6 w-6 border-b-4 border-r-4 border-[#ffd60a] rounded-br-3xl" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ffd60a] shadow-[0_0_12px_#ffd60a] animate-pulse" />
      </div>
    </div>
    <div className="absolute top-10 left-0 right-0 text-center">
      <p className="text-sm font-bold">Scan classroom QR</p>
      <p className="text-[10px] text-white/60 mt-0.5">Point camera at teacher's screen</p>
    </div>
    <div className="absolute bottom-8 left-0 right-0 text-center">
      <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-[10px]">
        📍 You're inside classroom
      </div>
    </div>
  </div>
);

/* ============ 8. ATTENDANCE % ============ */
export const AttendanceScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="My attendance" sub="Semester 2 • 2025" />
    <div className="px-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#10b981]/10" />
        <p className="text-[10px] text-black/50">Overall</p>
        <p className="text-3xl font-black text-[#10b981]">87.5%</p>
        <p className="text-[10px] text-black/60 mt-0.5">Need 6 more classes for 90% target</p>
        <div className="mt-3 h-2 bg-black/5 rounded-full"><div className="h-2 w-[87%] bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full" /></div>
      </div>
      <div className="mt-3 bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-2.5">
        <p className="text-[10px] font-bold text-[#92400e]">⚠️ Maths attendance is 71% — below 75%</p>
      </div>
      <p className="text-[11px] font-bold mt-3 mb-2">Subject wise</p>
      {[["Physics","92%","g"],["Chemistry","88%","g"],["Maths","71%","r"],["English","85%","g"],["Biology","79%","b"]].map(([s,p,c])=>(
        <div key={s} className="bg-white rounded-xl px-3 py-2.5 mb-2 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[11px] font-semibold">{s}</p>
            <div className="h-1 bg-black/5 rounded-full mt-1"><div className="h-1 rounded-full" style={{width:p,background: c==="r"?"#ef4444":c==="b"?"#3b82f6":"#10b981"}} /></div>
          </div>
          <p className="text-[11px] font-bold" style={{color:c==="r"?"#ef4444":c==="b"?"#3b82f6":"#10b981"}}>{p}</p>
        </div>
      ))}
    </div>
    <BottomNav active={4} />
  </div>
);

/* ============ 9. TIMETABLE ============ */
export const TimetableScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Timetable" sub="This week" />
    <div className="px-3">
      <Row className="gap-1.5 overflow-x-auto pb-2">
        {[["Mon","19"],["Tue","20"],["Wed","21"],["Thu","22"],["Fri","23"]].map(([d,n],i)=>(
          <div key={d as string} className={`min-w-[44px] rounded-xl p-2 text-center ${i===2?"bg-[#1a1f3a] text-white":"bg-white"}`}>
            <p className="text-[9px] opacity-70">{d}</p><p className="text-sm font-bold">{n}</p>
          </div>
        ))}
      </Row>
      <div className="mt-2 space-y-2">
        {[
          {t:"8:00",e:"9:30",sub:"Physics",ch:"Optics — Refraction",col:"#7c3aed",live:true},
          {t:"10:00",e:"11:30",sub:"Maths",ch:"Trigonometry",col:"#fb923c"},
          {t:"12:00",e:"1:00",sub:"Chemistry",ch:"Lab — Acids & Bases",col:"#10b981"},
          {t:"3:00",e:"4:30",sub:"Doubt class",ch:"All subjects",col:"#3b82f6"},
        ].map((c,i)=>(
          <div key={i} className="flex gap-2">
            <div className="w-12 text-right pt-1">
              <p className="text-[10px] font-bold">{c.t}</p>
              <p className="text-[8px] text-black/40">{c.e}</p>
            </div>
            <div className="flex-1 bg-white rounded-xl p-2.5 border-l-4 shadow-sm" style={{borderColor:c.col}}>
              <Row className="justify-between">
                <p className="text-[11px] font-bold">{c.sub}</p>
                {c.live && <Pill tone="r">LIVE</Pill>}
              </Row>
              <p className="text-[9px] text-black/50">{c.ch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav active={1} />
  </div>
);

/* ============ 10. FEE PAYMENT ============ */
export const FeesScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Fees & Payments" />
    <div className="px-4">
      <div className="bg-gradient-to-br from-[#1a1f3a] to-[#3730a3] rounded-2xl p-4 text-white">
        <p className="text-[10px] text-white/60">Pending amount</p>
        <p className="text-3xl font-black">₹ 4,500</p>
        <p className="text-[10px] text-[#fbbf24] mt-1">Due in 5 days • 24 May</p>
        <button className="mt-3 w-full h-9 rounded-xl bg-[#ffd60a] text-[#1a1f3a] text-xs font-bold">Pay now via UPI</button>
        <Row className="gap-2 mt-2">
          {["GPay","PhonePe","Paytm","Card"].map(p=>(
            <div key={p} className="flex-1 text-center text-[9px] bg-white/10 rounded-lg py-1.5 backdrop-blur">{p}</div>
          ))}
        </Row>
      </div>
      <p className="text-[11px] font-bold mt-4 mb-2">Payment history</p>
      {[
        {m:"April 2025",a:"4,500",s:"Paid",d:"02 Apr"},
        {m:"March 2025",a:"4,500",s:"Paid",d:"03 Mar"},
        {m:"Feb 2025",a:"4,500",s:"Paid",d:"01 Feb"},
      ].map((p,i)=>(
        <div key={i} className="bg-white rounded-xl px-3 py-2.5 mb-2 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold">{p.m}</p>
            <p className="text-[9px] text-black/50">{p.d} • Razorpay</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold">₹{p.a}</p>
            <Pill tone="g">{p.s}</Pill>
          </div>
        </div>
      ))}
    </div>
    <BottomNav />
  </div>
);

/* ============ 11. FEE RECEIPT PDF ============ */
export const ReceiptScreen = () => (
  <div className="h-full bg-soft pb-12 px-3 pt-3 overflow-y-auto">
    <div className="bg-white rounded-2xl shadow-md p-3.5">
      <Row className="justify-between">
        <div>
          <p className="text-[11px] font-bold">PadhAI Academy</p>
          <p className="text-[8px] text-black/50">Kota, Rajasthan</p>
        </div>
        <div className="h-9 w-9 rounded-lg bg-[#ffd60a] grid place-items-center">📚</div>
      </Row>
      <div className="border-t border-dashed my-3" />
      <p className="text-[9px] text-black/50">RECEIPT #INV-2025-0423</p>
      <p className="text-[10px] font-semibold mt-0.5">Ramesh Kumar • Class 10</p>
      <div className="mt-3 space-y-1.5">
        {[["Tuition fee","₹ 4,000"],["Study material","₹ 500"],["GST (0%)","₹ 0"]].map(([a,b])=>(
          <Row key={a} className="justify-between text-[10px]"><span>{a}</span><span className="font-semibold">{b}</span></Row>
        ))}
      </div>
      <div className="border-t border-dashed my-3" />
      <Row className="justify-between">
        <span className="text-[11px] font-bold">Total paid</span>
        <span className="text-[14px] font-black text-[#10b981]">₹ 4,500</span>
      </Row>
      <div className="mt-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-2 text-center">
        <p className="text-[10px] font-bold text-[#10b981]">✓ Payment successful</p>
        <p className="text-[8px] text-black/50">Txn: pay_LxK29mNqo • 02 Apr 2025</p>
      </div>
      <div className="mt-3 h-12 bg-[length:8px_8px] rounded" style={{backgroundImage:"repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)"}} />
    </div>
    <Row className="gap-2 mt-3">
      <button className="flex-1 h-9 rounded-xl bg-[#1a1f3a] text-white text-[10px] font-bold">⬇ Download PDF</button>
      <button className="flex-1 h-9 rounded-xl bg-white border text-[10px] font-bold">📤 Share</button>
    </Row>
  </div>
);

/* ============ 12. MARKS / RESULTS ============ */
export const ResultsScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="My results" sub="Monthly test • May 2025" />
    <div className="px-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
        <p className="text-[10px] text-black/50">Total score</p>
        <p className="text-3xl font-black text-[#7c3aed]">428<span className="text-base text-black/40">/500</span></p>
        <Row className="justify-center gap-3 mt-2">
          <div className="text-center"><p className="text-[10px] font-bold text-[#10b981]">85.6%</p><p className="text-[8px] text-black/50">Percentage</p></div>
          <div className="h-6 w-px bg-black/10" />
          <div className="text-center"><p className="text-[10px] font-bold text-[#fb923c]">#3</p><p className="text-[8px] text-black/50">Class rank</p></div>
          <div className="h-6 w-px bg-black/10" />
          <div className="text-center"><p className="text-[10px] font-bold text-[#3b82f6]">A+</p><p className="text-[8px] text-black/50">Grade</p></div>
        </Row>
      </div>
      <p className="text-[11px] font-bold mt-3 mb-2">Subject breakdown</p>
      {[
        {s:"Physics",m:92,t:100,g:"A+"},
        {s:"Chemistry",m:88,t:100,g:"A"},
        {s:"Maths",m:78,t:100,g:"B+"},
        {s:"English",m:85,t:100,g:"A"},
        {s:"Biology",m:85,t:100,g:"A"},
      ].map(s=>(
        <div key={s.s} className="bg-white rounded-xl p-2.5 mb-2">
          <Row className="justify-between">
            <p className="text-[11px] font-semibold">{s.s}</p>
            <p className="text-[11px] font-bold">{s.m}<span className="text-[9px] text-black/40">/{s.t}</span></p>
          </Row>
          <div className="h-1.5 bg-black/5 rounded-full mt-1.5">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]" style={{width:`${s.m}%`}} />
          </div>
        </div>
      ))}
    </div>
    <BottomNav active={3} />
  </div>
);

/* ============ 13. PROGRESS CHART ============ */
export const ProgressScreen = () => {
  const bars = [60,65,72,68,80,85,88];
  return (
    <div className="h-full bg-soft pb-12 overflow-y-auto">
      <Header title="My progress" sub="Last 7 tests" />
      <div className="px-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Row className="justify-between">
            <p className="text-[11px] font-bold">Score trend</p>
            <Pill tone="g">↑ 28%</Pill>
          </Row>
          <div className="h-32 flex items-end gap-2 mt-3">
            {bars.map((b,i)=>(
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-md bg-gradient-to-t from-[#7c3aed] to-[#a78bfa]" style={{height:`${b}%`}} />
                <span className="text-[8px] text-black/40">T{i+1}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[11px] font-bold mt-3 mb-2">⚠️ Weak topics — focus here</p>
        {[
          {t:"Trigonometry — Identities",s:"Maths",p:42},
          {t:"Organic — Hydrocarbons",s:"Chem",p:55},
          {t:"Modern Physics — Atom",s:"Phy",p:61},
        ].map(w=>(
          <div key={w.t} className="bg-white rounded-xl p-2.5 mb-2">
            <Row className="justify-between">
              <p className="text-[10px] font-semibold">{w.t}</p>
              <Pill tone="r">{w.p}%</Pill>
            </Row>
            <p className="text-[9px] text-black/50 mt-0.5">{w.s} • Tap to practice</p>
          </div>
        ))}
      </div>
      <BottomNav active={4} />
    </div>
  );
};

/* ============ 14. LIVE CLASS ============ */
export const LiveClassScreen = () => (
  <div className="h-full bg-[#0a0a0f] text-white relative overflow-hidden">
    <div className="h-full w-full bg-gradient-to-br from-[#1a1f3a] via-[#3730a3] to-[#7c3aed] relative">
      <div className="absolute top-3 left-3 flex gap-1.5 items-center">
        <Pill tone="r">● LIVE</Pill>
        <span className="text-[10px] bg-black/40 backdrop-blur px-2 py-0.5 rounded-full">142 watching</span>
      </div>
      <div className="absolute top-3 right-3 h-20 w-16 rounded-lg bg-black/60 border border-white/20 grid place-items-center text-[9px]">You</div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="h-16 w-16 mx-auto rounded-full bg-[#ffd60a] grid place-items-center text-2xl">👨‍🏫</div>
          <p className="text-xs font-bold mt-2">Sir Yadav</p>
          <p className="text-[10px] text-white/60">Optics — Refraction</p>
        </div>
      </div>
      <div className="absolute bottom-16 left-3 right-3 bg-black/40 backdrop-blur rounded-xl p-2 border border-white/10">
        <p className="text-[9px] text-[#ffd60a] font-bold">QUIZ • 12s left</p>
        <p className="text-[10px] mt-1">Speed of light in vacuum?</p>
        <Row className="gap-1 mt-1.5">
          {["3×10⁸","3×10⁶","2×10⁸"].map(o=>(<div key={o} className="flex-1 text-center text-[9px] bg-white/10 rounded py-1">{o}</div>))}
        </Row>
      </div>
      <Row className="absolute bottom-3 left-0 right-0 justify-center gap-2.5">
        {["🎤","📹","✋","💬","⋯"].map(i=>(
          <div key={i} className="h-9 w-9 rounded-full bg-white/15 backdrop-blur grid place-items-center text-sm">{i}</div>
        ))}
        <div className="h-9 w-9 rounded-full bg-[#ef4444] grid place-items-center text-sm">📞</div>
      </Row>
    </div>
  </div>
);

/* ============ 15. AI DOUBT CAMERA ============ */
export const DoubtCameraScreen = () => (
  <div className="h-full bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
    <div className="absolute inset-x-6 top-20 bottom-32 bg-white rounded-xl p-3 text-black text-[10px] font-serif rotate-[-2deg] shadow-2xl">
      <p>Q. If sin θ + cos θ = 1, find sin θ · cos θ</p>
      <p className="mt-1 text-black/60 italic">handwritten doubt...</p>
      <div className="mt-2 h-8 border-b-2 border-dashed" />
    </div>
    <div className="absolute inset-0 border-[40px] border-black/40 rounded-3xl pointer-events-none" />
    <div className="absolute top-4 left-4 right-4 flex justify-between">
      <span className="text-[10px] bg-black/50 px-2 py-1 rounded-full">📷 Snap your doubt</span>
      <span className="text-[10px] bg-[#ffd60a] text-black font-bold px-2 py-1 rounded-full">✨ AI</span>
    </div>
    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-6">
      <span className="text-base">🖼️</span>
      <div className="h-14 w-14 rounded-full border-4 border-white grid place-items-center">
        <div className="h-10 w-10 rounded-full bg-white" />
      </div>
      <span className="text-base">🔄</span>
    </div>
  </div>
);

/* ============ 16. AI DOUBT ANSWER ============ */
export const DoubtAnswerScreen = () => (
  <div className="h-full bg-soft overflow-y-auto pb-3">
    <div className="bg-[#1a1f3a] text-white px-4 py-3">
      <Row className="justify-between">
        <p className="text-xs font-bold">✨ AI solution</p>
        <Pill tone="y">3 sec</Pill>
      </Row>
    </div>
    <div className="px-4 pt-3">
      <div className="bg-white rounded-xl p-2.5 border-l-4 border-[#7c3aed]">
        <p className="text-[10px] font-bold">Question</p>
        <p className="text-[10px] mt-0.5">sin θ + cos θ = 1, find sin θ · cos θ</p>
      </div>
      <div className="mt-3 bg-white rounded-xl p-3 shadow-sm">
        <p className="text-[10px] font-bold text-[#7c3aed]">Step 1 — Square both sides</p>
        <div className="mt-1 bg-black/[0.03] rounded px-2 py-1.5 font-mono text-[10px]">(sin θ + cos θ)² = 1²</div>
        <p className="text-[10px] font-bold text-[#7c3aed] mt-2.5">Step 2 — Expand</p>
        <div className="mt-1 bg-black/[0.03] rounded px-2 py-1.5 font-mono text-[10px]">sin²θ + 2 sin θ cos θ + cos²θ = 1</div>
        <p className="text-[10px] font-bold text-[#7c3aed] mt-2.5">Step 3 — Use sin² + cos² = 1</p>
        <div className="mt-1 bg-[#10b981]/10 border border-[#10b981]/30 rounded px-2 py-1.5 font-mono text-[10px] font-bold text-[#065f46]">∴ sin θ · cos θ = 0</div>
      </div>
      <Row className="gap-2 mt-3">
        <button className="flex-1 h-9 rounded-xl bg-white border text-[10px] font-bold">👍 Helpful</button>
        <button className="flex-1 h-9 rounded-xl bg-[#7c3aed] text-white text-[10px] font-bold">Ask teacher</button>
      </Row>
    </div>
  </div>
);

/* ============ 17. TEACHER CHAT ============ */
export const ChatScreen = () => (
  <div className="h-full bg-soft flex flex-col">
    <div className="bg-white px-3 py-2.5 border-b flex items-center gap-2 shadow-sm">
      <Avatar ch="Y" color="#a78bfa" />
      <div className="flex-1">
        <p className="text-[11px] font-bold">Sir Yadav</p>
        <p className="text-[9px] text-[#10b981]">● online</p>
      </div>
      <span className="text-base">📞</span>
    </div>
    <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto">
      <div className="text-center text-[8px] text-black/40">Today</div>
      <div className="max-w-[75%] bg-white rounded-2xl rounded-tl-sm px-2.5 py-1.5 text-[10px] shadow-sm">
        Sir, kal ke test mein chapter 5 included hai?
        <p className="text-[8px] text-black/40 text-right mt-0.5">9:12</p>
      </div>
      <div className="max-w-[75%] ml-auto bg-[#7c3aed] text-white rounded-2xl rounded-tr-sm px-2.5 py-1.5 text-[10px]">
        Haan beta, chapter 5 aur 6 dono.
        <p className="text-[8px] text-white/60 text-right mt-0.5">9:14 ✓✓</p>
      </div>
      <div className="max-w-[75%] ml-auto bg-[#7c3aed] text-white rounded-2xl rounded-tr-sm px-2.5 py-1.5 text-[10px]">
        Aur revision notes share kar raha hu 📎
      </div>
      <div className="max-w-[75%] ml-auto bg-[#7c3aed] text-white rounded-2xl px-2.5 py-2 text-[10px]">
        <Row className="gap-2"><span className="text-lg">📄</span><div><p className="font-bold">Revision_Ch5.pdf</p><p className="text-[8px] opacity-70">2.4 MB</p></div></Row>
      </div>
      <div className="max-w-[75%] bg-white rounded-2xl rounded-tl-sm px-2.5 py-1.5 text-[10px] shadow-sm">
        Thank you sir! 🙏
      </div>
    </div>
    <div className="bg-white px-2 py-2 border-t flex items-center gap-2">
      <span className="text-base">😊</span>
      <div className="flex-1 bg-black/5 rounded-full px-3 py-1.5 text-[10px] text-black/40">Message...</div>
      <span className="text-base">📎</span>
      <div className="h-7 w-7 rounded-full bg-[#7c3aed] grid place-items-center text-white text-xs">➤</div>
    </div>
  </div>
);

/* ============ 18. HOMEWORK ============ */
export const HomeworkScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Homework" sub="3 pending • 12 submitted" />
    <div className="px-3">
      <Row className="gap-1.5 mb-2">
        {["Pending","Submitted","Graded"].map((t,i)=>(
          <div key={t} className={`px-2.5 py-1 rounded-full text-[9px] font-bold ${i===0?"bg-[#1a1f3a] text-white":"bg-white border"}`}>{t}</div>
        ))}
      </Row>
      {[
        {s:"Physics",t:"NCERT Ch 5 — Q 1-15",d:"Due tomorrow",c:"#ef4444"},
        {s:"Maths",t:"Trigonometry worksheet",d:"Due in 3 days",c:"#fb923c"},
        {s:"English",t:"Essay — My Hero (500 words)",d:"Due in 5 days",c:"#10b981"},
      ].map((h,i)=>(
        <div key={i} className="bg-white rounded-xl p-3 mb-2 shadow-sm">
          <Row className="justify-between">
            <Pill tone="v">{h.s}</Pill>
            <p className="text-[9px] font-bold" style={{color:h.c}}>{h.d}</p>
          </Row>
          <p className="text-[11px] font-bold mt-1.5">{h.t}</p>
          <Row className="gap-1.5 mt-2">
            <button className="flex-1 h-8 rounded-lg bg-black/5 text-[10px] font-bold">📎 Attach</button>
            <button className="flex-1 h-8 rounded-lg bg-[#1a1f3a] text-white text-[10px] font-bold">Submit</button>
          </Row>
        </div>
      ))}
    </div>
    <BottomNav active={2} />
  </div>
);

/* ============ 19. ANNOUNCEMENTS ============ */
export const AnnouncementsScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Announcements" />
    <div className="px-3">
      {[
        {t:"🎉 Holiday on 23 May",d:"Buddha Purnima — no classes",time:"2h ago",pin:true},
        {t:"📝 Monthly test — 25 May",d:"All subjects, syllabus shared",time:"1d ago"},
        {t:"💳 Fee due reminder",d:"Pay by 24 May to avoid late fee",time:"2d ago"},
        {t:"📚 New batch starting",d:"Class 11 — Physics, register by 30 May",time:"3d ago"},
      ].map((a,i)=>(
        <div key={i} className={`rounded-xl p-3 mb-2 shadow-sm ${a.pin?"bg-gradient-to-br from-[#ffd60a]/20 to-[#fb923c]/10 border border-[#ffd60a]":"bg-white"}`}>
          {a.pin && <Pill tone="y">📌 PINNED</Pill>}
          <p className="text-[11px] font-bold mt-1">{a.t}</p>
          <p className="text-[10px] text-black/60 mt-0.5">{a.d}</p>
          <p className="text-[9px] text-black/40 mt-1.5">{a.time}</p>
        </div>
      ))}
    </div>
    <BottomNav />
  </div>
);

/* ============ 20. ONLINE TEST / MCQ ============ */
export const TestScreen = () => (
  <div className="h-full bg-soft flex flex-col">
    <div className="bg-[#1a1f3a] text-white px-4 py-3">
      <Row className="justify-between">
        <div><p className="text-[10px] text-white/60">Question 7 of 20</p><p className="text-xs font-bold">Physics Mock #4</p></div>
        <div className="text-right"><p className="text-[9px] text-white/60">Time left</p><p className="text-sm font-black text-[#ffd60a]">14:32</p></div>
      </Row>
      <div className="h-1 bg-white/10 rounded-full mt-2"><div className="h-1 w-[35%] bg-[#ffd60a] rounded-full" /></div>
    </div>
    <div className="px-4 pt-3 flex-1">
      <Pill tone="v">+4 / −1</Pill>
      <p className="text-[12px] font-semibold mt-2 leading-snug">A body of mass 2 kg moves with velocity 10 m/s. Its kinetic energy is:</p>
      <div className="mt-3 space-y-1.5">
        {[["A","50 J"],["B","100 J",true],["C","200 J"],["D","20 J"]].map(([k,v,sel])=>(
          <div key={k as string} className={`flex items-center gap-2 p-2.5 rounded-xl ${sel?"bg-[#7c3aed]/10 border-2 border-[#7c3aed]":"bg-white border border-black/5"}`}>
            <div className={`h-5 w-5 rounded-full grid place-items-center text-[9px] font-bold ${sel?"bg-[#7c3aed] text-white":"bg-black/5"}`}>{k}</div>
            <span className="text-[11px]">{v}</span>
          </div>
        ))}
      </div>
    </div>
    <Row className="px-3 py-2 gap-2 border-t bg-white">
      <button className="flex-1 h-9 rounded-xl bg-black/5 text-[10px] font-bold">← Prev</button>
      <button className="flex-1 h-9 rounded-xl bg-[#1a1f3a] text-white text-[10px] font-bold">Next →</button>
    </Row>
  </div>
);

/* ============ 21. LEADERBOARD ============ */
export const LeaderboardScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <div className="bg-gradient-to-br from-[#fb923c] to-[#ef4444] text-white px-4 pt-4 pb-8 rounded-b-3xl">
      <p className="text-xs font-bold">🏆 Leaderboard</p>
      <p className="text-[10px] text-white/70">Batch A2 • This week</p>
    </div>
    <div className="px-3 -mt-5">
      <Row className="justify-center items-end gap-2">
        {[
          {n:"Aman",r:"2",h:"h-14",c:"#cbd5e1",m:"1280"},
          {n:"Priya",r:"1",h:"h-20",c:"#ffd60a",m:"1450"},
          {n:"Ramesh",r:"3",h:"h-12",c:"#fb923c",m:"1190"},
        ].map((p,i)=>(
          <div key={i} className="flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-white border-2 grid place-items-center text-xs font-bold" style={{borderColor:p.c}}>{p.n[0]}</div>
            <p className="text-[10px] font-bold mt-1">{p.n}</p>
            <p className="text-[9px] text-black/50">{p.m} XP</p>
            <div className={`${p.h} w-14 rounded-t-lg mt-1 grid place-items-center text-white text-base font-black`} style={{background:p.c}}>{p.r}</div>
          </div>
        ))}
      </Row>
      <div className="mt-3 space-y-1.5">
        {[[4,"Kavya",1080],[5,"Vikas",990],[6,"Neha",870],[7,"Raj",810]].map(([r,n,xp],i)=>(
          <div key={i} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2.5">
            <span className="text-[10px] font-bold text-black/40 w-4">{r}</span>
            <div className="h-7 w-7 rounded-full bg-[#a78bfa] grid place-items-center text-white text-[10px] font-bold">{(n as string)[0]}</div>
            <p className="flex-1 text-[11px] font-semibold">{n}</p>
            <p className="text-[10px] font-bold text-[#fb923c]">{xp} XP</p>
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </div>
);

/* ============ 22. GAMIFICATION / BADGES ============ */
export const BadgesScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <div className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white px-4 pt-4 pb-6 rounded-b-3xl text-center">
      <p className="text-[10px] text-white/60">YOUR LEVEL</p>
      <p className="text-2xl font-black">⚡ Scholar</p>
      <p className="text-[10px] text-white/70">1,240 / 2,000 XP to next</p>
      <div className="h-2 bg-white/20 rounded-full mt-2"><div className="h-2 w-3/5 bg-[#ffd60a] rounded-full" /></div>
    </div>
    <div className="px-3 mt-3">
      <p className="text-[11px] font-bold mb-2">🏅 Earned (8)</p>
      <div className="grid grid-cols-4 gap-2">
        {[["🔥","Streak"],["💯","Perfect"],["⭐","Topper"],["📚","Reader"],["🎯","Sniper"],["⚡","Quick"],["🦉","Night"],["🚀","Booster"]].map(([e,t])=>(
          <div key={t} className="bg-white rounded-xl p-2 flex flex-col items-center shadow-sm">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#fb923c] grid place-items-center text-lg">{e}</div>
            <span className="text-[8px] font-semibold mt-1">{t}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold mt-4 mb-2">🔒 Locked (3)</p>
      <div className="grid grid-cols-4 gap-2">
        {[["💎","Diamond","Top 1"],["👑","King","100 days"],["🧠","Genius","All A+"]].map(([e,t,h])=>(
          <div key={t as string} className="bg-white rounded-xl p-2 flex flex-col items-center opacity-50">
            <div className="h-9 w-9 rounded-full bg-black/10 grid place-items-center text-lg grayscale">{e}</div>
            <span className="text-[8px] font-semibold mt-1">{t}</span>
            <span className="text-[7px] text-black/50">{h}</span>
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </div>
);

/* ============ 23. STREAK ============ */
export const StreakScreen = () => (
  <div className="h-full bg-gradient-to-br from-[#fb923c] to-[#ef4444] text-white pb-12 overflow-y-auto">
    <div className="px-4 pt-4 text-center">
      <p className="text-[10px] text-white/80">YOUR STREAK</p>
      <p className="text-6xl font-black mt-1">14</p>
      <p className="text-xs font-bold">🔥 days in a row</p>
      <p className="text-[10px] text-white/70 mt-1">Don't break it — open app today</p>
    </div>
    <div className="px-3 mt-4">
      <div className="bg-white/15 backdrop-blur rounded-2xl p-3 border border-white/20">
        <p className="text-[10px] font-bold mb-2">This week</p>
        <Row className="justify-between">
          {["M","T","W","T","F","S","S"].map((d,i)=>(
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`h-7 w-7 rounded-full grid place-items-center text-[10px] font-bold ${i<5?"bg-[#ffd60a] text-[#1a1f3a]":i===5?"bg-white text-[#fb923c]":"bg-white/20"}`}>
                {i<5?"🔥":i===5?"·":""}
              </div>
              <span className="text-[8px]">{d}</span>
            </div>
          ))}
        </Row>
      </div>
      <div className="mt-3 bg-white/15 backdrop-blur rounded-2xl p-3 border border-white/20">
        <p className="text-[10px] font-bold">🏆 Milestones</p>
        {[["7 days","✓","#10b981"],["14 days","NOW","#ffd60a"],["30 days","🔒","#ffffff40"],["100 days","🔒","#ffffff40"]].map(([t,s,c],i)=>(
          <Row key={i} className="justify-between mt-2"><span className="text-[10px]">{t}</span><span className="text-[10px] font-bold" style={{color:c as string}}>{s}</span></Row>
        ))}
      </div>
    </div>
  </div>
);

/* ============ 24. STUDY ROOM (VIRTUAL) ============ */
export const StudyRoomScreen = () => (
  <div className="h-full bg-[#0f172a] text-white pb-12 overflow-y-auto">
    <div className="px-4 pt-4">
      <p className="text-xs font-bold">🤫 Study Room</p>
      <p className="text-[10px] text-white/50">Silent focus session • 18 studying</p>
    </div>
    <div className="px-3 mt-3">
      <div className="bg-gradient-to-br from-[#7c3aed] to-[#3730a3] rounded-2xl p-4 text-center">
        <p className="text-[10px] text-white/70">YOUR SESSION</p>
        <p className="text-3xl font-black tabular-nums">01:23:45</p>
        <Row className="justify-center gap-2 mt-3">
          <button className="px-3 py-1.5 rounded-lg bg-white/15 text-[10px] font-bold">Pause</button>
          <button className="px-3 py-1.5 rounded-lg bg-[#ef4444] text-[10px] font-bold">End</button>
        </Row>
      </div>
      <p className="text-[10px] text-white/50 mt-3 mb-2">Live with you</p>
      <div className="grid grid-cols-3 gap-2">
        {[
          {n:"Priya",t:"2:14:00",c:"#ffd60a"},
          {n:"Aman",t:"1:45:22",c:"#a78bfa"},
          {n:"Kavya",t:"0:58:11",c:"#fb923c"},
          {n:"Vikas",t:"0:32:09",c:"#10b981"},
          {n:"Neha",t:"3:01:55",c:"#ef4444"},
          {n:"Raj",t:"0:18:40",c:"#3b82f6"},
        ].map((s,i)=>(
          <div key={i} className="bg-white/5 rounded-xl p-2 text-center border border-white/10">
            <div className="h-8 w-8 mx-auto rounded-full grid place-items-center text-[10px] font-bold" style={{background:s.c,color:"#1a1f3a"}}>{s.n[0]}</div>
            <p className="text-[9px] font-bold mt-1">{s.n}</p>
            <p className="text-[8px] text-white/50 tabular-nums">{s.t}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ============ 25. PARENT DASHBOARD ============ */
export const ParentScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <div className="bg-[#1a1f3a] text-white px-4 pt-3 pb-5 rounded-b-3xl">
      <p className="text-[10px] text-white/60">PARENT VIEW</p>
      <Row className="justify-between mt-1">
        <p className="text-sm font-bold">Ramesh (Class 10) 👦</p>
        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">Switch child</span>
      </Row>
    </div>
    <div className="px-3 -mt-3">
      <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl p-3">
        <p className="text-[10px]">Today's summary</p>
        <p className="text-[11px] font-bold mt-1">✓ Attended Physics & Maths<br/>✓ Studied 1h 45min in-app<br/>⚠ Maths homework pending</p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="bg-white rounded-xl p-2.5 shadow-sm">
          <p className="text-[9px] text-black/50">Attendance</p>
          <p className="text-lg font-black text-[#10b981]">87%</p>
        </div>
        <div className="bg-white rounded-xl p-2.5 shadow-sm">
          <p className="text-[9px] text-black/50">Last test</p>
          <p className="text-lg font-black text-[#7c3aed]">85.6%</p>
        </div>
        <div className="bg-white rounded-xl p-2.5 shadow-sm">
          <p className="text-[9px] text-black/50">Class rank</p>
          <p className="text-lg font-black text-[#fb923c]">#3</p>
        </div>
        <div className="bg-white rounded-xl p-2.5 shadow-sm">
          <p className="text-[9px] text-black/50">Fees due</p>
          <p className="text-lg font-black text-[#ef4444]">₹4500</p>
        </div>
      </div>
      <div className="mt-3 bg-white rounded-2xl p-3">
        <p className="text-[11px] font-bold mb-2">📩 Teacher's note</p>
        <p className="text-[10px] text-black/70 italic">"Ramesh ki Maths mein improvement chahiye. Extra doubt class attend karein."</p>
        <p className="text-[9px] text-black/40 mt-1">— Sir Yadav, today</p>
      </div>
    </div>
    <BottomNav />
  </div>
);

/* ============ 26. EXAM ANXIETY MODE ============ */
export const AnxietyScreen = () => (
  <div className="h-full bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#831843] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{background:"radial-gradient(circle at 30% 30%, #fff, transparent 50%)"}}/>
    <div className="px-5 pt-6 relative">
      <p className="text-[10px] text-white/60">🫧 CALM MODE</p>
      <p className="text-lg font-bold mt-1 leading-tight">Tomorrow is your exam.<br/>Take a breath. 🌸</p>
    </div>
    <div className="px-4 mt-5">
      <div className="bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/15 text-center">
        <p className="text-[10px] text-white/70">Breathe with us</p>
        <div className="my-3 h-20 w-20 mx-auto rounded-full bg-white/20 grid place-items-center animate-pulse">
          <div className="h-12 w-12 rounded-full bg-white/40" />
        </div>
        <p className="text-[11px] font-bold">Inhale ... 4s</p>
      </div>
      <div className="mt-3 bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/15">
        <p className="text-[10px] font-bold">💛 Sir Yadav says</p>
        <p className="text-[10px] mt-1 italic">"Beta, tu mehnat se padha hai. Bharosa rakh apne aap pe."</p>
      </div>
      <div className="mt-3 bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/15">
        <p className="text-[10px] font-bold">⭐ Only the essentials</p>
        <p className="text-[10px] mt-1">5 must-revise topics — 22 min total</p>
        <button className="mt-2 w-full h-8 rounded-lg bg-[#ffd60a] text-[#1a1f3a] text-[10px] font-bold">Start light revision</button>
      </div>
    </div>
  </div>
);

/* ============ 27. NOTIFICATIONS ============ */
export const NotificationsScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Notifications" />
    <div className="px-3">
      {[
        {e:"💳",t:"Fee reminder",d:"₹4500 due in 5 days",time:"now",c:"#ef4444"},
        {e:"📝",t:"Test results out",d:"Physics Mock #4 — 92/100",time:"1h",c:"#10b981"},
        {e:"🎥",t:"Live class starting",d:"Maths — Trigonometry in 10 min",time:"3h",c:"#7c3aed"},
        {e:"🔥",t:"Don't break your streak",d:"Open app today to keep 14 days",time:"6h",c:"#fb923c"},
        {e:"💬",t:"Sir Yadav replied",d:"To your doubt on Optics",time:"1d",c:"#3b82f6"},
        {e:"🎉",t:"New badge earned",d:"⭐ Topper — Top 3 in batch",time:"2d",c:"#ffd60a"},
      ].map((n,i)=>(
        <div key={i} className="bg-white rounded-xl p-2.5 mb-1.5 flex items-start gap-2 shadow-sm">
          <div className="h-8 w-8 rounded-lg grid place-items-center text-base" style={{background:`${n.c}22`}}>{n.e}</div>
          <div className="flex-1">
            <Row className="justify-between"><p className="text-[11px] font-bold">{n.t}</p><span className="text-[8px] text-black/40">{n.time}</span></Row>
            <p className="text-[10px] text-black/60">{n.d}</p>
          </div>
        </div>
      ))}
    </div>
    <BottomNav />
  </div>
);

/* ============ 28. ID CARD ============ */
export const IdCardScreen = () => (
  <div className="h-full bg-gradient-to-br from-[#1a1f3a] to-[#3730a3] grid place-items-center px-5">
    <div className="bg-white rounded-2xl shadow-2xl w-full p-3.5">
      <div className="bg-gradient-to-r from-[#ffd60a] to-[#fb923c] h-1.5 rounded-full mb-3" />
      <Row className="justify-between">
        <div>
          <p className="text-[8px] text-black/50">PADHAI ACADEMY</p>
          <p className="text-[10px] font-bold">Student ID Card</p>
        </div>
        <div className="h-8 w-8 rounded-lg bg-[#1a1f3a] grid place-items-center text-white">📚</div>
      </Row>
      <Row className="mt-3 gap-3">
        <div className="h-20 w-16 rounded-lg bg-gradient-to-br from-[#ffd60a] to-[#fb923c] grid place-items-center text-2xl font-black">R</div>
        <div className="flex-1 text-[10px] space-y-1">
          <div><p className="text-black/40 text-[8px]">NAME</p><p className="font-bold">Ramesh Kumar</p></div>
          <Row className="gap-3">
            <div><p className="text-black/40 text-[8px]">CLASS</p><p className="font-bold">10 • A2</p></div>
            <div><p className="text-black/40 text-[8px]">ROLL</p><p className="font-bold">PA2-024</p></div>
          </Row>
          <div><p className="text-black/40 text-[8px]">VALID TILL</p><p className="font-bold">Mar 2026</p></div>
        </div>
      </Row>
      <div className="mt-3 h-9 bg-[length:6px_100%]" style={{backgroundImage:"repeating-linear-gradient(90deg,#000 0 1.5px,#fff 1.5px 4px)"}} />
      <p className="text-[7px] text-black/40 text-center mt-1">If found, return to PadhAI Academy, Kota</p>
    </div>
    <button className="mt-4 px-5 h-9 rounded-xl bg-[#ffd60a] text-[#1a1f3a] text-[10px] font-bold">⬇ Save to phone</button>
  </div>
);

/* ============ 29. LEAVE APPLICATION ============ */
export const LeaveScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Apply for leave" />
    <div className="px-4 space-y-2.5">
      <div>
        <p className="text-[9px] font-bold text-black/60 mb-1">FROM</p>
        <div className="bg-white rounded-xl p-2.5 text-[11px] font-semibold">📅 22 May 2025</div>
      </div>
      <div>
        <p className="text-[9px] font-bold text-black/60 mb-1">TO</p>
        <div className="bg-white rounded-xl p-2.5 text-[11px] font-semibold">📅 24 May 2025</div>
      </div>
      <div>
        <p className="text-[9px] font-bold text-black/60 mb-1">REASON</p>
        <div className="bg-white rounded-xl p-2.5 text-[10px] min-h-[60px]">Fever and weakness, doctor advised rest for 3 days.</div>
      </div>
      <div>
        <p className="text-[9px] font-bold text-black/60 mb-1">ATTACH (optional)</p>
        <div className="bg-white rounded-xl p-2.5 border-2 border-dashed border-black/15 text-center">
          <p className="text-base">📎</p>
          <p className="text-[9px] text-black/50">Medical certificate</p>
        </div>
      </div>
      <button className="w-full h-11 rounded-xl bg-[#1a1f3a] text-white text-xs font-bold">Submit application</button>
      <p className="text-[9px] text-black/50 text-center">Parent will be notified for approval</p>
    </div>
  </div>
);

/* ============ 30. NOTES / STUDY MATERIAL ============ */
export const NotesScreen = () => (
  <div className="h-full bg-soft pb-12 overflow-y-auto">
    <Header title="Study material" sub="Physics • Class 10" />
    <div className="px-3">
      <div className="bg-[#7c3aed] text-white rounded-xl p-2.5 mb-2 flex items-center gap-2">
        <span className="text-base">🔍</span>
        <p className="text-[10px] text-white/70">Search notes, videos, formulas...</p>
      </div>
      <Row className="gap-1.5 mb-2 overflow-x-auto">
        {["All","Notes","Videos","PDFs","Formulas"].map((t,i)=>(
          <div key={t} className={`px-2.5 py-1 rounded-full text-[9px] font-bold whitespace-nowrap ${i===0?"bg-[#1a1f3a] text-white":"bg-white border"}`}>{t}</div>
        ))}
      </Row>
      {[
        {e:"📄",t:"Ch 5 — Light Reflection",s:"Notes • 12 pages",c:"#7c3aed",size:"2.4 MB",dl:true},
        {e:"🎬",t:"Refraction explained",s:"Video • 24 min",c:"#ef4444",size:"HD",dl:false},
        {e:"📐",t:"Lens formula cheat sheet",s:"PDF • 1 page",c:"#10b981",size:"412 KB",dl:true},
        {e:"📝",t:"Previous year — 2024",s:"Question paper",c:"#fb923c",size:"1.8 MB",dl:false},
        {e:"🔢",t:"Numerical practice set",s:"PDF • 25 questions",c:"#3b82f6",size:"3.1 MB",dl:false},
      ].map((n,i)=>(
        <div key={i} className="bg-white rounded-xl p-2.5 mb-1.5 flex items-center gap-2.5 shadow-sm">
          <div className="h-9 w-9 rounded-lg grid place-items-center text-base" style={{background:`${n.c}22`,color:n.c}}>{n.e}</div>
          <div className="flex-1">
            <p className="text-[11px] font-bold">{n.t}</p>
            <p className="text-[9px] text-black/50">{n.s} • {n.size}</p>
          </div>
          <span className="text-base">{n.dl?"✓":"⬇"}</span>
        </div>
      ))}
    </div>
    <BottomNav active={1} />
  </div>
);
