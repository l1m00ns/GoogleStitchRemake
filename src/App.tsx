import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Code2,
  Download,
  Heart,
  Image as ImageIcon,
  LayoutGrid,
  Monitor,
  MoreHorizontal,
  Palette,
  Play,
  Plus,
  Share,
  Smartphone,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";

type Mode = "app" | "web";

const CHIPS = [
  "A browse tab for a mobile app for recipes",
  "Make me an app for people who love hiking",
  "Quiz page in a language learning app",
];

const PROMPTS = [
  "A mindful meditation app with daily sessions and sleep sounds",
  "A personal finance app with budgets, insights and savings goals",
  "A travel planner with itineraries, maps and shared trips",
];

function StitchMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="st-g" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.4" stopColor="#9B72CB" />
          <stop offset="0.72" stopColor="#D96570" />
          <stop offset="1" stopColor="#F2A93B" />
        </linearGradient>
      </defs>
      <path d="M12 2c.6 5.1 3.6 8.1 8.7 8.7-5.1.6-8.1 3.6-8.7 8.7-.6-5.1-3.6-8.1-8.7-8.7C8.4 10.1 11.4 7.1 12 2Z" fill="url(#st-g)" />
      <path d="M19 17.5c.2 1.6 1.1 2.5 2.7 2.7-1.6.2-2.5 1.1-2.7 2.7-.2-1.6-1.1-2.5-2.7-2.7 1.6-.2 2.5-1.1 2.7-2.7Z" fill="#fff" opacity="0.8" />
    </svg>
  );
}

function PhoneScreen({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="st-screen st-screen-focus">
        <div className="st-status"><span>9:41</span><span>▮▮▮</span></div>
        <div className="st-focus-top">
          <span className="st-focus-label">DAILY FOCUS</span>
          <h4>Breathe in,<br />let it go.</h4>
          <div className="st-orb"><i /><i /><i /></div>
        </div>
        <div className="st-focus-card">
          <span>Morning calm</span>
          <b>10 min</b>
          <div className="st-progress"><i style={{ width: "64%" }} /></div>
        </div>
        <div className="st-tabbar">
          {["Home", "Explore", "Sleep", "You"].map((t, i) => <span key={t} className={i === 0 ? "on" : ""}>{t}</span>)}
        </div>
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div className="st-screen st-screen-finance">
        <div className="st-status"><span>9:41</span><span>▮▮▮</span></div>
        <div className="st-fin-head">
          <div><span>Good morning</span><h4>Alex Rivera</h4></div>
          <span className="st-fin-avatar">A</span>
        </div>
        <div className="st-balance">
          <span>Total balance</span>
          <b>$24,860<span>.40</span></b>
          <div className="st-balance-pill">+8.2% this month</div>
        </div>
        <div className="st-fin-actions">
          {["Send", "Request", "Top up"].map((a) => <span key={a}>{a}</span>)}
        </div>
        <div className="st-fin-card">
          <div className="st-fin-card-head"><span>Spending</span><span>October</span></div>
          <div className="st-fin-bars">{[38, 52, 44, 68, 58, 74, 62, 80, 70, 88].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="st-fin-list">
          {[["Groceries", "-$86.20"], ["Design tools", "-$24.00"], ["Salary", "+$6,400"]].map(([l, v]) => (
            <div key={l}><span>{l}</span><b>{v}</b></div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="st-screen st-screen-travel">
      <div className="st-status light"><span>9:41</span><span>▮▮▮</span></div>
      <div className="st-travel-hero">
        <span className="st-travel-tag">KYOTO · JAPAN</span>
        <h4>Five days<br />of quiet.</h4>
        <p>Curated walks, gardens and late-night ramen.</p>
      </div>
      <div className="st-travel-body">
        <div className="st-travel-row"><span>Day 1</span><b>Arashiyama</b><i>→</i></div>
        <div className="st-travel-row"><span>Day 2</span><b>Gion at dusk</b><i>→</i></div>
        <div className="st-travel-row"><span>Day 3</span><b>Philosopher&apos;s Path</b><i>→</i></div>
        <div className="st-travel-cta">Open itinerary</div>
      </div>
    </div>
  );
}

function WebScreen({ variant }: { variant: number }) {
  return (
    <div className={`st-web st-web-${variant}`}>
      <div className="st-web-nav"><b>{variant === 0 ? "Aura" : variant === 1 ? "Ledger" : "Roam"}</b><div><span>Product</span><span>Pricing</span><span>About</span></div><i>Get started</i></div>
      <div className="st-web-hero">
        <span className="st-web-pill">{variant === 0 ? "MIND · BODY · SLEEP" : variant === 1 ? "PERSONAL FINANCE" : "SLOW TRAVEL"}</span>
        <h3>{variant === 0 ? "A calmer mind starts here." : variant === 1 ? "Your money, clearly." : "Go somewhere that matters."}</h3>
        <p>{variant === 0 ? "Daily practices, sleep stories and focus sessions designed by experts." : variant === 1 ? "Budgets, insights and goals in one quiet workspace." : "Handcrafted itineraries for people who travel to feel."}</p>
        <div className="st-web-buttons"><i>Start free</i><span>Learn more</span></div>
      </div>
      <div className="st-web-cards">
        {[0, 1, 2].map((i) => <div key={i}><span /><b /><em /></div>)}
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<"home" | "studio">("home");
  const [mode, setMode] = useState<Mode>("app");
  const [prompt, setPrompt] = useState("");
  const [sent, setSent] = useState("");
  const [quality, setQuality] = useState("Balanced");
  const [qualityOpen, setQualityOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [chat, setChat] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [tab, setTab] = useState<"design" | "code">("design");
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);

  const STEPS = ["Reading your prompt", "Sketching the layout", "Applying the design system", "Rendering screens"];

  useEffect(() => {
    if (view !== "studio") return;
    setStep(0);
    setDone(false);
    const timers = STEPS.map((_, i) => window.setTimeout(() => setStep(i + 1), 780 * (i + 1)));
    timers.push(window.setTimeout(() => setDone(true), 780 * STEPS.length + 500));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [view, sent]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [step, done]);

  function build(text?: string) {
    const p = (text ?? prompt).trim();
    if (!p) return;
    setSent(p);
    setPrompt("");
    setView("studio");
    setTab("design");
  }

  function refine() {
    if (!chat.trim()) return;
    const t = chat.trim();
    setChat("");
    setToast("Applying your changes…");
    window.setTimeout(() => setToast("Updated 3 screens with your feedback"), 1300);
    setDone(true);
  }

  if (view === "studio") {
    return (
      <div className="st-studio">
        <header className="st-studio-top">
          <button className="st-back" onClick={() => setView("home")} aria-label="Back"><ArrowLeft size={16} /></button>
          <div className="st-studio-brand"><StitchMark size={18} /> Stitch</div>
          <span className="st-studio-sep" />
          <button className="st-studio-project">Untitled project <ChevronDown size={12} /></button>
          <span className="st-studio-mode">{mode === "app" ? "Mobile app" : "Web"}</span>
          <div className="st-studio-actions">
            <button className="st-ghost" onClick={() => setToast("Share link copied to clipboard")}><Share size={14} /> Share</button>
            <button className="st-ghost" onClick={() => setToast("Exporting frames as PNG — demo only")}><Download size={14} /></button>
            <button className="st-white-btn" onClick={() => setToast("Prototype opened in a new tab — demo only")}><Play size={13} fill="currentColor" /> Preview</button>
          </div>
        </header>

        <div className="st-studio-body">
          <aside className="st-chat">
            <div className="st-chat-scroll" ref={scroller}>
              <div className="st-chat-prompt">
                <span className="st-chat-user">A</span>
                <p>{sent}</p>
              </div>
              <div className="st-chat-ai">
                <span className="st-chat-mark"><StitchMark size={16} /></span>
                <div>
                  <p>I&apos;ll design a {mode === "app" ? "native mobile app" : "responsive website"} for that. Here&apos;s my plan:</p>
                  <div className="st-steps">
                    {STEPS.map((s, i) => (
                      <div key={s} className={i < step ? "done" : i === step ? "active" : ""}>
                        <span>{i < step ? <Check size={9} /> : i === step ? <i /> : null}</span>{s}
                      </div>
                    ))}
                  </div>
                  {done && (
                    <div className="st-result">
                      <div className="st-result-head"><Check size={13} /> 3 screens generated</div>
                      <p>I used a warm, editorial direction with generous spacing and a clear hierarchy. Pick a screen to inspect it, or tell me what to change.</p>
                      <div className="st-result-tags"><span>Warm minimal</span><span>Editorial type</span><span>Rounded 16</span></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="st-chat-composer">
              <textarea
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); refine(); } }}
                rows={2}
                placeholder="Ask for changes, or describe another screen…"
              />
              <div className="st-chat-tools">
                <button aria-label="Add"><Plus size={15} /></button>
                <span className="st-chat-mode">{mode === "app" ? <Smartphone size={12} /> : <Monitor size={12} />} {mode === "app" ? "App" : "Web"}</span>
                <button className="st-chat-send" onClick={refine} disabled={!chat.trim()} aria-label="Send"><ArrowUp size={14} /></button>
              </div>
            </div>
          </aside>

          <main className="st-canvas">
            <div className="st-canvas-bar">
              <div className="st-canvas-tabs">
                <button className={tab === "design" ? "on" : ""} onClick={() => setTab("design")}><LayoutGrid size={13} /> Design</button>
                <button className={tab === "code" ? "on" : ""} onClick={() => setTab("code")}><Code2 size={13} /> Code</button>
              </div>
              <div className="st-canvas-right">
                <span>{mode === "app" ? "iPhone 16 Pro · 393 × 852" : "Desktop · 1440 × 900"}</span>
                <button onClick={() => setToast("Zoom controls — demo only")}>100%</button>
                <button aria-label="More"><MoreHorizontal size={15} /></button>
              </div>
            </div>
            {tab === "design" ? (
              <div className="st-canvas-scroll">
                {!done ? (
                  <div className="st-generating">
                    <div className={`st-gen-frame ${mode}`}>
                      <span className="st-shimmer a" /><span className="st-shimmer b" /><span className="st-shimmer c" />
                      <div className="st-gen-center"><StitchMark size={26} /><p>Designing your {mode === "app" ? "app" : "site"}…</p></div>
                    </div>
                    <div className="st-gen-side">
                      <span className="st-shimmer" /><span className="st-shimmer short" /><span className="st-shimmer" />
                    </div>
                  </div>
                ) : mode === "app" ? (
                  <div className="st-frames">
                    {[0, 1, 2].map((i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.4 }}
                        className={`st-device ${active === i ? "active" : ""}`}
                        onClick={() => setActive(i)}
                      >
                        <span className="st-device-notch" />
                        <PhoneScreen variant={i} />
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="st-webs">
                    {[0, 1, 2].map((i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.4 }}
                        className={`st-browser ${active === i ? "active" : ""}`}
                        onClick={() => setActive(i)}
                      >
                        <span className="st-browser-bar"><i /><i /><i /><em>preview.stitch.design</em></span>
                        <WebScreen variant={i} />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <pre className="st-code"><code>{`import { Hero, FeatureGrid } from "@/components";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#1b1a17]">
      <Nav />
      <Hero
        eyebrow="Daily practice"
        title="A calmer mind starts here."
        subtitle="Sessions, sleep stories and focus — designed by experts."
        cta="Start free"
      />
      <FeatureGrid columns={3} />
      <Footer />
    </main>
  );
}`}</code></pre>
            )}
          </main>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div className="st-toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
              <Check size={14} /> {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="st-page">
      <header className="st-header">
        <button className="st-header-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <StitchMark size={21} /> <span>Stitch</span>
        </button>
        <button className="st-try" onClick={() => document.getElementById("stitch-prompt")?.focus()}>Try now</button>
      </header>

      <main>
        <section className="st-hero">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Design at the<br />speed of AI
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            Transform ideas into UI designs for mobile and web applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="st-composer"
          >
            <textarea
              id="stitch-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); build(); } }}
              rows={4}
              placeholder={mode === "app" ? "What native mobile app shall we design?" : "What website shall we design?"}
            />
            <div className="st-composer-foot">
              <button className="st-plus" onClick={() => setToast("Attach a reference — demo only")} aria-label="Add"><Plus size={19} /></button>
              <div className="st-mode">
                <button className={mode === "app" ? "on" : ""} onClick={() => setMode("app")}><Smartphone size={14} /> App</button>
                <button className={mode === "web" ? "on" : ""} onClick={() => setMode("web")}><Monitor size={14} /> Web</button>
              </div>
              <div className="st-composer-right">
                <button className="st-round" onClick={() => setToast("Theme editor — demo only")} aria-label="Theme"><Palette size={17} /></button>
                <div className="st-quality-wrap">
                  <button className="st-quality" onClick={() => setQualityOpen(!qualityOpen)}>
                    <Sparkles size={14} /> {quality} <ChevronDown size={12} />
                  </button>
                  {qualityOpen && (
                    <div className="st-quality-menu">
                      {["Fast", "Balanced", "High quality"].map((q) => (
                        <button key={q} onClick={() => { setQuality(q); setQualityOpen(false); }}>{q} {q === quality && <Check size={12} />}</button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="st-round" onClick={() => setToast("Image prompt — demo only")} aria-label="Image"><ImageIcon size={17} /></button>
                <button className="st-build" onClick={() => build()} disabled={!prompt.trim()} aria-label="Generate"><ArrowUp size={17} /></button>
              </div>
            </div>
          </motion.div>

          <div className="st-chips">
            {CHIPS.map((c, i) => (
              <button key={c} onClick={() => build(PROMPTS[i])}>
                <Sparkles size={13} /> {c}
              </button>
            ))}
          </div>
        </section>

        <section className="st-showcase">
          <div className="st-showcase-head">
            <span>From prompt to polished UI</span>
            <h2>One idea. Every screen, instantly.</h2>
            <p>Stitch explores directions, applies a consistent design system and gives you production-ready UI to iterate on.</p>
          </div>
          <div className="st-showcase-grid">
            <div className="st-show-card large">
              <div className="st-show-phone"><PhoneScreen variant={0} /></div>
              <div className="st-show-phone second"><PhoneScreen variant={1} /></div>
              <h3>Generate complete flows</h3>
              <p>Describe the product and get coherent screens — not isolated mockups.</p>
            </div>
            <div className="st-show-card">
              <div className="st-show-palette">
                <span style={{ background: "#e8e0d3" }} /><span style={{ background: "#1f1d1a" }} /><span style={{ background: "#d97757" }} /><span style={{ background: "#8ba888" }} />
              </div>
              <h3>Consistent by design</h3>
              <p>Colors, type and spacing stay on-system as the app grows.</p>
            </div>
            <div className="st-show-card">
              <div className="st-show-icons">
                {[Wand2, Zap, Heart, Star].map((I, i) => <span key={i}><I size={16} /></span>)}
              </div>
              <h3>Iterate in plain language</h3>
              <p>Ask for a different mood, a new screen or a tighter layout.</p>
            </div>
          </div>
        </section>

        <section className="st-steps-section">
          <h2>How Stitch works</h2>
          <div className="st-how">
            {[
              ["01", "Describe", "Start with a sentence about the app or page you want to design."],
              ["02", "Generate", "Stitch proposes layouts, styles and complete screens in seconds."],
              ["03", "Refine", "Chat with Stitch to adjust details and explore new directions."],
              ["04", "Export", "Copy the code or hand off frames to your design tool."],
            ].map(([n, t, d]) => (
              <div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </section>

        <section className="st-cta">
          <StitchMark size={30} />
          <h2>What will you design today?</h2>
          <p>Turn your next idea into a real interface — no design tools required.</p>
          <button className="st-try big" onClick={() => document.getElementById("stitch-prompt")?.focus()}>Start designing <ArrowRight size={14} /></button>
        </section>
      </main>

      <footer className="st-footer">
        <div className="st-footer-brand"><StitchMark size={18} /> Stitch</div>
        <div className="st-footer-cols">
          {[
            { h: "Product", l: ["Overview", "Mobile", "Web", "Changelog"] },
            { h: "Resources", l: ["Documentation", "Guides", "Community", "Help"] },
            { h: "Company", l: ["About Google", "Privacy", "Terms", "Contact"] },
          ].map((c) => (
            <div key={c.h}><p>{c.h}</p>{c.l.map((x) => <a key={x} href="#footer">{x}</a>)}</div>
          ))}
        </div>
        <p className="st-footer-note">A faithful interface remake. Stitch is a Google Labs experiment.</p>
      </footer>

      <AnimatePresence>
        {toast && (
          <motion.div className="st-toast dark" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
            <Check size={14} /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
