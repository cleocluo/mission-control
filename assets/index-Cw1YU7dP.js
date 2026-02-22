(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const w="2026-02-22T06:15:12.002Z",k=[{summary:"30 min - Cluo (Eric Yip)",start:"2026-02-23T00:30:00.000Z",end:"2026-02-23T01:00:00.000Z",location:null,description:`<b>Booked by</b>
Eric Yip
eric@eyxl.com.au

Join with Google Meet: https://meet.google.com/xdz-rtad-qrs
Or dial: (AU) +61 3 8594 5334 PIN: 949031093#
More phone numbers: https://tel.meet/xdz-rtad-qrs?pin=9707933403448&hs=7

Learn more about Meet at: https://support.google.com/a/users/answer/9282720`,link:null},{summary:"30 min - Cluo (truusje matthews)",start:"2026-02-24T00:30:00.000Z",end:"2026-02-24T01:00:00.000Z",location:null,description:`<b>Booked by</b>
truusje matthews
truusjematthews78@gmail.com

Join with Google Meet: https://meet.google.com/fix-auai-iws
Or dial: (AU) +61 2 9051 3700 PIN: 382884493#
More phone numbers: https://tel.meet/fix-auai-iws?pin=4441413845686&hs=7

Learn more about Meet at: https://support.google.com/a/users/answer/9282720`,link:null},{summary:"Cancel Audible",start:"2026-04-07T14:00:00.000Z",end:"2026-04-08T14:00:00.000Z",location:null,description:null,link:null}],f={generatedAt:w,events:k},b=document.querySelector("#app");if(!b)throw new Error("Mission control root element not found");const $=new Intl.DateTimeFormat("en-AU",{weekday:"long",day:"numeric",month:"short"}).format(new Date),o=30,c=0,T=Math.min(c/o*100,100),h=55,r=[36,38,35,42,44,48,52.5],p=140,l=40,A=Math.max(...r),g=Math.min(...r),M=r.map((t,a)=>{const i=r.length===1?0:a/(r.length-1)*p,n=A-g||1,e=l-(t-g)/n*l;return`${i},${e}`}).join(" "),u=52.5,S=70,m=Math.min(u/S*100,100),x=f.events??[],y=x.slice(0,3),D=new Intl.DateTimeFormat("en-AU",{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZone:"Australia/Sydney"}),P=new Intl.DateTimeFormat("en-AU",{weekday:"short",hour:"numeric",minute:"2-digit",timeZone:"Australia/Sydney"}),v=P.format(new Date(f.generatedAt)),I=y.length?y.map(t=>{const a=D.format(new Date(t.start)),i=t.description?.match(/https?:\/\/[^\s<]+/i),n=t.link||i?.[0]||null;return`
          <article class="meeting-card">
            <div>
              <p class="meeting-time">${a}</p>
              <h3>${t.summary}</h3>
              ${t.location?`<p class="meeting-location">${t.location}</p>`:""}
            </div>
            ${n?`<a class="meeting-link" href="${n}" target="_blank" rel="noreferrer">Join</a>`:""}
          </article>
        `}).join(""):'<p class="empty-state">No upcoming meetings scheduled.</p>';b.innerHTML=`
  <div class="dashboard-shell">
    <header class="top-bar">
      <div>
        <p class="eyebrow">${$} · Sydney</p>
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
          <strong>${c} / ${o}</strong>
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
          <div class="radial-meter" style="--value: ${T};">
            <div class="radial-content">
              <strong>${c}</strong>
              <span>${o} target</span>
            </div>
          </div>
          <p class="radial-caption">Calls today</p>
        </div>
        <div>
          <p class="eyebrow">Automation Track</p>
          <div class="radial-meter dual" style="--value: ${h};">
            <div class="radial-content">
              <strong>${h}%</strong>
              <span>Track 2</span>
            </div>
          </div>
          <p class="radial-caption">Industry strat → keywords</p>
        </div>
        <div>
          <p class="eyebrow">Spend Guardrail</p>
          <div class="token-meter">
            <div class="token-meter-track">
              <div class="token-meter-fill" style="width: ${m}%;"></div>
            </div>
            <div class="token-meter-labels">
              <strong>${u.toFixed(1)}K tokens</strong>
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
            <span>Dial target: ${o}/day</span>
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
              <div class="gauge-fill" style="width: ${m}%;"></div>
            </div>
            <div class="gauge-value">
              <strong>${u.toFixed(1)}K tokens today</strong>
              <span>Tracking against 70K hard stop</span>
            </div>
          </div>
          <div class="sparkline">
            <p class="eyebrow">7-day trend</p>
            <svg width="${p}" height="${l}" viewBox="0 0 ${p} ${l}">
              <defs>
                <linearGradient id="trendGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stop-color="#22d3ee" />
                  <stop offset="100%" stop-color="#f97316" />
                </linearGradient>
              </defs>
              <polyline points="${M}" fill="none" stroke="url(#trendGradient)" stroke-width="3" />
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

    <section class="panel calendar-panel">
      <div class="panel-heading">
        <h2>Next Meetings</h2>
        ${v?`<span class="badge badge-sync">Synced ${v}</span>`:""}
      </div>
      <div class="calendar-list">
        ${I}
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
