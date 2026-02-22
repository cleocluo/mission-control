import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Mission control root element not found");
}

app.innerHTML = `
  <main class="dashboard">
    <header class="hero">
      <div>
        <p class="eyebrow">Cluo Mission Control</p>
        <h1>Ops Dashboard — 22 Feb 2026</h1>
        <p class="subtitle">
          Tactical picture of runway, sales pressure, automation build, and spend. This is the single source of truth
          for what needs force today.
        </p>
      </div>
      <div class="stat-card">
        <div>
          <p class="stat-label">Days to Kudo Exit</p>
          <p class="stat-value">37</p>
        </div>
        <div>
          <p class="stat-label">Sprint Week</p>
          <p class="stat-value">3 / 9 (First Sale)</p>
        </div>
        <div>
          <p class="stat-label">Calls Today</p>
          <p class="stat-value">0 / 30</p>
        </div>
      </div>
    </header>

    <section class="mission-card">
      <h2>Mission Pulse</h2>
      <div class="pulse-grid">
        <article class="pulse-tile">
          <header>
            <span class="badge badge-amber">Revenue Track</span>
          </header>
          <p>Need 100+ Sydney roofers in pipe + close first Lovable rebuild this week.</p>
        </article>
        <article class="pulse-tile">
          <header>
            <span class="badge badge-green">Foundation Track</span>
          </header>
          <p>Core files synced; documenting product + script next for hand-off readiness.</p>
        </article>
        <article class="pulse-tile">
          <header>
            <span class="badge badge-yellow">Automation Track</span>
          </header>
          <p>Industry strategy Zap mid-build; keyword workflow queued.</p>
        </article>
        <article class="pulse-tile">
          <header>
            <span class="badge badge-orange">Energy & Ops</span>
          </header>
          <p>Token burn creeping up — mornings reserved for deep work + dashboards.</p>
        </article>
      </div>
    </section>

    <section class="command-stack">
      <h2>Today’s Command Stack</h2>
      <ol>
        <li><strong>Deep Work (AM):</strong> Polish dashboard visuals, prep lead expansion list, tighten talk track.</li>
        <li><strong>Dial Block (PM):</strong> 30–50 calls targeting Sydney roofers. Log objections + demos.</li>
        <li><strong>Reset (Evening):</strong> Lock tomorrow’s target + next automation step before shutdown.</li>
      </ol>
    </section>

    <section class="workstreams">
      <h2>Active Workstreams</h2>
      <div class="workstream-grid">
        <article>
          <p class="eyebrow">Critical</p>
          <h3>First Website Sale</h3>
          <p>30–50 cold calls/day until first Lovable win. Pipeline review nightly.</p>
        </article>
        <article>
          <p class="eyebrow">Build</p>
          <h3>Mission Control UI</h3>
          <p>Vite/Tailwind shell live — wire real data pipes + owner filters next.</p>
        </article>
        <article>
          <p class="eyebrow">Automation</p>
          <h3>65-Day Track 2</h3>
          <p>Industry strategy workflow → keyword enrichment → reporting hook.</p>
        </article>
      </div>
    </section>

    <section class="usage-card">
      <div class="usage-header">
        <h2>API & Token Usage</h2>
        <span class="badge badge-alert">Monitor daily burn</span>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Today</th>
              <th>7-day Avg</th>
              <th>Guardrail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI (Cleo)</td>
              <td><strong>52.5K tokens</strong> ≈ <strong>$0.53</strong></td>
              <td>38K tokens</td>
              <td>Alert at 50K/day — compress prompts + reuse outputs.</td>
            </tr>
            <tr>
              <td>Anthropic (Karl)</td>
              <td>n/a today</td>
              <td>&lt;10K tokens</td>
              <td>Idle until first sale unlocks $200/mo budget.</td>
            </tr>
            <tr>
              <td>Zapier AI Tasks</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>Will log once keyword automation fires (hook to Zap runs table).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="gauge">
        <div class="gauge-labels">
          <span>0K</span>
          <span>50K alert</span>
          <span>70K hard stop</span>
        </div>
        <div class="gauge-track">
          <div class="gauge-fill" style="width: 75%">
            <span>52.5K tokens</span>
          </div>
        </div>
      </div>
      <ul class="usage-playbook">
        <li>Snapshot session usage whenever blocks exceed 10K tokens.</li>
        <li>Pause/review when daily total hits ~50K to avoid runaway billing.</li>
        <li>Prefer local files / cached answers before re-querying models.</li>
      </ul>
    </section>

    <section class="reminders">
      <h2>Upcoming / Reminders</h2>
      <ul>
        <li>Stealth until 31 Mar (Kudo exit) — no public Cluo content yet.</li>
        <li>Thursday nights hard stop so Friday BNI isn’t torched.</li>
        <li>Post-first sale unlock: beefier Claude plan or website manager (funded by revenue).</li>
      </ul>
    </section>
  </main>
`;
