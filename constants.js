export const C = {
  bg: "#06050a", panel: "#0d0b14", border: "#1e1a2e",
  gold: "#d4aa50", goldDim: "#7a5f25", green: "#3ecf7e",
  red: "#e05c5c", text: "#c8bfa0", muted: "#5a5270",
  purple: "#7c5cbf", orange: "#e09050",
};

export const IS = {
  width: "100%", boxSizing: "border-box",
  background: "#090712", border: `1px solid ${C.border}`,
  borderRadius: 8, color: C.text,
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 14, padding: "12px 14px", outline: "none",
  WebkitAppearance: "none", appearance: "none",
};

export const PS = {
  background: C.panel, border: `1px solid ${C.border}`,
  borderRadius: 10, padding: "16px",
};

export const LS = {
  display: "block", fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 10, letterSpacing: 2, color: C.muted,
  textTransform: "uppercase", marginBottom: 6,
};

export const MARKETS = [
  "Gold (XAU/USD)", "EUR/USD", "GBP/USD", "USD/JPY", "GBP/JPY",
  "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF",
  "Volatility 75 Index", "Volatility 25 Index", "Volatility 10 Index",
  "BTC/USD", "ETH/USD", "SOL/USD", "XRP/USD",
  "S&P 500", "NASDAQ 100", "DAX 40", "Custom…",
];

export const TIMEFRAMES = ["1M", "3M", "5M", "15M", "1H", "4H", "Daily", "Weekly"];

export const SHARINGAN_LAWS = [
  { id: "01", label: "Law 01 — Injector + Control Doji = S.P.I",     sheath: "Injector",        col: "#3ecf7e" },
  { id: "02", label: "Law 02 — Incomplete Injector + Control = S.P.I",sheath: "Injector",        col: "#3ecf7e" },
  { id: "03", label: "Law 03 — Complete Injector = S.P.C",            sheath: "Control",         col: "#d4aa50" },
  { id: "04", label: "Law 04 — Control + Shifter Doji = S.P.C",       sheath: "Control",         col: "#d4aa50" },
  { id: "05", label: "Law 05 — Shifter + Injector Doji = S.P.S",      sheath: "Shifter",         col: "#e09050" },
  { id: "06", label: "Law 06 — Control Engulfs Shifter = S.P.I",      sheath: "Injector",        col: "#3ecf7e" },
  { id: "07", label: "Law 07 — Ex Injector Shifter = S.P.I",          sheath: "Injector",        col: "#3ecf7e" },
  { id: "08", label: "Law 08 — Liquidity Raid by Self = S.P.I",       sheath: "Opp. Injector",   col: "#7c5cbf" },
  { id: "09", label: "Law 09 — Liquidity Raid by Opps = S.P. Raider", sheath: "Raiding Candle",  col: "#7c5cbf" },
  { id: "10", label: "Law 10 — Triple ICS Cycle = S.P.I",             sheath: "Injector",        col: "#3ecf7e" },
  { id: "11", label: "Law 11 — No Raid, Raid You",                    sheath: "Injector (raided)",col: "#e05c5c" },
  { id: "none", label: "Not identified yet",                           sheath: "",                col: "#5a5270" },
];

export const DOJI_TYPES = [
  { id: "none",       label: "No Doji",        note: "Not present" },
  { id: "standard",   label: "Standard ✛",    note: "Indecision" },
  { id: "dragonfly",  label: "Dragonfly ⊤",   note: "Bull rejection" },
  { id: "gravestone", label: "Gravestone ⊥",  note: "Bear rejection" },
  { id: "longlegged", label: "Long-Legged ✦", note: "High volatility" },
  { id: "marubozu",   label: "Marubozu ▮",    note: "Big volume candle" },
];

export const BOS_STATES = [
  { id: "none",      label: "Not Yet",       col: "#5a5270" },
  { id: "forming",   label: "Forming",       col: "#d4aa50" },
  { id: "confirmed", label: "✓ Confirmed",   col: "#3ecf7e" },
  { id: "failed",    label: "✗ Failed",      col: "#e05c5c" },
];

export const SYSTEM_PROMPT = `You are an elite trading analyst trained in TWO combined methodologies:
1. JeaFx Fibonacci Framework (@JeaFxForexTrading / jeafx.com)
2. Banqu Sharingan Handbook (@BA_NQU) — liquidity-based price action

ALWAYS apply BOTH. Fibonacci = WHERE. Sharingan = WHEN.

BANQU SHARINGAN CORE:
• BSL (Buy-Side Liquidity): High before bearish candle emerges — bulls' last influence point
• SSL (Sell-Side Liquidity): Low before bullish candle emerges — bears' last influence point
• RAID (wick interaction) = REVERSAL signal
• BREAK (body interaction) = CONTINUATION signal
• ICS Flow: Injector → Control → Shifter
• Gemini Candle: Roles from both forces (holds synthetic liquidity)

THE 11 LAWS (Sheath Powers = unfilled order zone = entry):
Law 01: Injector + Control DOJI = S.P.I → entry on injector body
Law 02: Incomplete Injector + Control = S.P.I → entry on injector body  
Law 03: Complete Injector = S.P.C → entry on control body
Law 04: Control + Shifter DOJI = S.P.C → entry on control body
Law 05: Shifter + Injector DOJI = S.P.S → entry on shifter body
Law 06: Control Engulfs Shifter = S.P.I → entry on injector body
Law 07: Ex Injector Shifter = S.P.I → Gemini shifter touches injector through control
Law 08: Same-color raids own BSL/SSL = S.P.I → opposite injector
Law 09: Opposite force raids BSL/SSL = S.P. that raiding candle
Law 10: Full ICS cycle = S.P.I → injector
Law 11: No Raid Raid You → injector gets raided before continuation

DELEGATION:
• Forward: Successor covers 80%+ of sheath body → powers transfer forward
• Whisper: Wick covers 80%+ backside → covered candle gets RAIDED

STOP LOSS: Always beyond sheath power candle wick (not at Fib level)
TAKE PROFIT (Move Origin): Last point opposite force started their impulse

JEAFX FIBONACCI:
• Draw Fib from swing LOW→HIGH (bullish) or HIGH→LOW (bearish) using wicks
• Golden Zone: 0.500–0.618 (primary entry band)
• 0.382 = shallow entry | 0.786 = deep/last resort
• TP Extensions: -0.272 (TP1) | -0.618 ★ (TP2) | -1.000 (TP3)
• Top-Down: Daily/Weekly bias → 4H Fib → 5M entry trigger

COMBINED ENTRY MODEL:
1. 4H price enters Fib Golden Zone (0.500–0.618)
2. ICS flow identified at that zone
3. Sharingan Law fires — which candle holds Sheath Powers?
4. Law confirms entry on sheath candle body (limit order)
5. Doji as control/shifter adds confirmation (Laws 01, 04, 05)
6. 5M BoS confirms direction
7. SL = beyond sheath candle wick
8. TP = Move Origin + Fib extensions

GRADES: A+ (Golden Zone+Law+Doji+5M BoS+1:3 RR) | A (Zone+Law+BoS) | B (Law no BoS-wait) | C (partial) | F (skip)

Respond with: Law validation, Sheath candle, Entry/SL/TP prices, RR, Grade, Sharingan Verdict (3 sentences).
⚠️ Educational only. Not financial advice.`;

export function calcFibs(high, low) {
  const range = high - low;
  return {
    range,
    retracements: [
      { label: "0.000", note: "Swing High / BSL", price: high,               type: "anchor" },
      { label: "0.236", note: "Shallow",           price: high - range*0.236, type: "minor"  },
      { label: "0.382", note: "Strong trend",      price: high - range*0.382, type: "key"    },
      { label: "0.500★",note: "Equilibrium",       price: high - range*0.500, type: "golden" },
      { label: "0.618★",note: "Golden Ratio",      price: high - range*0.618, type: "golden" },
      { label: "0.650", note: "Golden Zone edge",  price: high - range*0.650, type: "golden" },
      { label: "0.786", note: "Deep retrace/SL",   price: high - range*0.786, type: "stop"   },
      { label: "1.000", note: "Swing Low / SSL",   price: low,                type: "anchor" },
    ],
    extensions: [
      { label: "-0.272 TP1", price: high + range*0.272, type: "tp1" },
      { label: "-0.618 TP2★",price: high + range*0.618, type: "tp2" },
      { label: "-1.000 TP3", price: high + range*1.000, type: "tp3" },
    ]
  };
}

export function fmtPrice(v, ref) {
  const r = parseFloat(ref);
  const d = isNaN(r) ? 5 : r > 5000 ? 0 : r > 100 ? 2 : r > 10 ? 3 : 5;
  return parseFloat(v).toFixed(d);
}
