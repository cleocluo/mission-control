(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=document.querySelector("#app");if(!y)throw new Error("Mission control root element not found");const f=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"short"}).format(new Date),n=30,d=0,m=Math.min(d/n*100,100),g=55,t=[36,38,35,42,44,48,52.5],c=140,i=40,b=Math.max(...t),u=Math.min(...t),k=t.map((h,a)=>{const o=t.length===1?0:a/(t.length-1)*c,r=b-u||1,e=i-(h-u)/r*i;return`${o},${e}`}).join(" "),p=52.5,w=70,v=Math.min(p/w*100,100);y.innerHTML=`
  <div class="dashboard-shell">
    <header class="top-bar">
      <div>
        <p class="eyebrow">${f} · Sydney</p>
        <h1>Cluo Ops Mission Control</h1>
        <p class="subtitle">
          One glance view of runway, sales pressure, automation build, and spend. Designed for fast standups and solo execution.
        </p>
      </div>
      <div class="top-bar-stats">
        <article>
          <p>Days to Kudo Exit</p>
          <strong>37</strong>
        </article>
        <article>
          <p>Sprint Week</p>
          <strong>3 / 9 · First Sale</strong>
        </article>
        <article>
          <p>Calls Logged</p>
          <strong>${d} / ${n}</strong>
        </article>
      </div>
    </header>

    <section class="hero-grid">
      <article class="panel hero-card">
        <div class="hero-header">
          <div class="hero-pills">
            <span>Lovable demos on deck</span>
            <span>BNI offer locked</span>
            <span>Automation-first delivery</span>
          </div>
          <p class="eyebrow">Mission Brief</p>
          <h2>Ship the first Lovable win in 7 days</h2>
          <p>
            100+ Sydney roofers sourced, 30–50 calls per day, demo reel ready. Automation track hums quietly in the background.
          </p>
        </div>
      </article>
      <article class="panel meters-card">
        <div>
          <p class="eyebrow">Dial Pressure</p>
          <div class="radial-meter" style="--value: ${m};">
            <div class="radial-content">
              <strong>${d}</strong>
              <span>${n} target</span>
            </div>
          </div>
          <p class="radial-caption">Calls today</p>
        </div>
        <div>
          <p class="eyebrow">Automation Track</p>
          <div class="radial-meter dual" style="--value: ${g};">
            <div class="radial-content">
              <strong>${g}%</strong>
              <span>Track 2</span>
            </div>
          </div>
          <p class="radial-caption">Industry strat → keywords</p>
        </div>
        <div>
          <p class="eyebrow">Spend Guardrail</p>
          <div class="token-meter">
            <div class="token-meter-track">
              <div class="token-meter-fill" style="width: ${v}%;"></div>
            </div>
            <div class="token-meter-labels">
              <strong>${p.toFixed(1)}K tokens</strong>
              <span>70K hard stop</span>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="split-grid">
      <article class="panel mission-pulse">
        <div class="panel-heading">
          <h2>Mission Pulse</h2>
          <span class="badge badge-live">LIVE</span>
        </div>
        <div class="pulse-grid">
          <article class="pulse-tile">
            <span class="badge badge-amber">Revenue</span>
            <h3>Dial + Demo</h3>
            <p>Need 100+ Sydney roofers in pipe + close first Lovable rebuild this week.</p>
          </article>
          <article class="pulse-tile">
            <span class="badge badge-green">Foundation</span>
            <h3>Docs & Scripts</h3>
            <p>Core files synced; documenting product + talk track for hand-offs.</p>
          </article>
          <article class="pulse-tile">
            <span class="badge badge-yellow">Automation</span>
            <h3>Strategy Zap</h3>
            <p>Industry strategy workflow mid-build; keyword enrichment queued.</p>
          </article>
          <article class="pulse-tile">
            <span class="badge badge-orange">Energy</span>
            <h3>Deep Work</h3>
            <p>Mornings ringfenced for dashboard + system polish; watch token burn.</p>
          </article>
        </div>
      </article>
      <article class="panel command-stack">
        <h2>Today’s Command Stack</h2>
        <ol>
          <li>
            <header>
              <span>Deep Work · AM</span>
              <strong>Focus</strong>
            </header>
            Polish dashboard visuals, prep lead expansion list, tighten talk track.
          </li>
          <li>
            <header>
              <span>Dial Block · PM</span>
              <strong>Revenue</strong>
            </header>
            30–50 calls targeting Sydney roofers. Log objections + demos.
          </li>
          <li>
            <header>
              <span>Reset · Evening</span>
              <strong>Systems</strong>
            </header>
            Lock tomorrow’s target + next automation step before shutdown.
          </li>
        </ol>
      </article>
    </section>

    <section class="panel workstreams">
      <div class="panel-heading">
        <h2>Active Workstreams</h2>
        <span class="badge">Owner tagged</span>
      </div>
      <div class="workstream-grid">
        <article>
          <header>
            <p class="eyebrow">Critical</p>
            <span class="chip chip-critical">Karl</span>
          </header>
          <h3>First Website Sale</h3>
          <p>30–50 cold calls/day until first Lovable win. Pipeline review nightly.</p>
          <footer>
            <span>Dial target: ${n}/day</span>
            <span>Demo reel ready</span>
          </footer>
        </article>
        <article>
          <header>
            <p class="eyebrow">Build</p>
            <span class="chip">Cleo</span>
          </header>
          <h3>Mission Control UI</h3>
          <p>Vite/Tailwind shell live — wiring live data + owner filters next.</p>
          <footer>
            <span>UI polish sprint</span>
            <span>Data hooks pending</span>
          </footer>
        </article>
        <article>
          <header>
            <p class="eyebrow">Automation</p>
            <span class="chip">Cleo</span>
          </header>
          <h3>65-Day Track 2</h3>
          <p>Industry strategy workflow → keyword enrichment → reporting hook.</p>
          <footer>
            <span>Zapier AI</span>
            <span>Reporting scope</span>
          </footer>
        </article>
      </div>
    </section>

    <section class="panel usage-panel">
      <div class="panel-heading">
        <h2>API & Token Usage</h2>
        <span class="badge badge-alert">Monitor daily burn</span>
      </div>
      <div class="usage-layout">
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
                <td>Idle until first sale unlocks $200/mo upgrade.</td>
              </tr>
              <tr>
                <td>Zapier AI Tasks</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>Log once keyword automation fires (Zap runs table).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="usage-insights">
          <div class="gauge">
            <div class="gauge-labels">
              <span>0K</span>
              <span>50K alert</span>
              <span>70K stop</span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill" style="width: ${v}%;"></div>
            </div>
            <div class="gauge-value">
              <strong>${p.toFixed(1)}K tokens today</strong>
              <span>Tracking against 70K hard stop</span>
            </div>
          </div>
          <div class="sparkline">
            <p class="eyebrow">7-day trend</p>
            <svg width="${c}" height="${i}" viewBox="0 0 ${c} ${i}">
              <defs>
                <linearGradient id="trendGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stop-color="#22d3ee" />
                  <stop offset="100%" stop-color="#f97316" />
                </linearGradient>
              </defs>
              <polyline points="${k}" fill="none" stroke="url(#trendGradient)" stroke-width="3" />
            </svg>
          </div>
          <ul class="usage-playbook">
            <li>Snapshot session usage whenever blocks exceed 10K tokens.</li>
            <li>Pause/review when daily total hits ~50K to avoid runaway billing.</li>
            <li>Prefer local files / cached answers before re-querying models.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="panel reminders">
      <div class="panel-heading">
        <h2>Upcoming / Reminders</h2>
        <span class="badge">Stay disciplined</span>
      </div>
      <ul>
        <li>Stealth until 31 Mar (Kudo exit) — no public Cluo content yet.</li>
        <li>Thursday nights hard stop so Friday BNI isn’t torched.</li>
        <li>Post-first sale unlock: beefier Claude plan or website manager (funded by revenue).</li>
      </ul>
    </section>
  </div>
`;
