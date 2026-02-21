import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Mission control root element not found");
}

app.innerHTML = `
  <main class="dashboard">
    <header>
      <div>
        <p class="eyebrow">Cluo Mission Control</p>
        <h1>Autonomous Ops Overview</h1>
        <p class="subtitle">
          Live status of tasks, schedule, and priorities for Cluo. Task board shows
          who owns what, calendar shows scheduled automations and check-ins.
        </p>
      </div>
      <div class="header-card">
        <p>Current Focus</p>
        <strong>Mission Control MVP</strong>
        <p>Task board + schedule ? real data next.</p>
      </div>
    </header>

    <section class="mission-card">
      <h2>Mission Statement</h2>
      <p>
        Build a self-fixing Google ops machine: AI agents + human operators running
        revenue, delivery, and automation 24/7.
      </p>
      <div class="pill-grid">
        <span class="pill">Google consulting + software</span>
        <span class="pill">Portal overlay</span>
        <span class="pill">BNI-ready offer</span>
      </div>
    </section>

    <section>
      <h2>Task Board</h2>
      <div class="task-board">
        <article class="lane" data-status="todo">
          <h3>Backlog</h3>
          <div class="lane-body">
            <div class="task-card">
              <div class="task-header">
                <span class="task-priority priority-high">HIGH</span>
                <span class="task-owner">Karl</span>
              </div>
              <h4>Cold call Sydney roofers (30–50)</h4>
            </div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-priority priority-medium">MEDIUM</span>
                <span class="task-owner">Karl</span>
              </div>
              <h4>Document website product + script</h4>
            </div>
          </div>
        </article>

        <article class="lane" data-status="doing">
          <h3>In Progress</h3>
          <div class="lane-body">
            <div class="task-card">
              <div class="task-header">
                <span class="task-priority priority-high">HIGH</span>
                <span class="task-owner">Cleo</span>
              </div>
              <h4>Build Mission Control UI</h4>
            </div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-priority priority-medium">MEDIUM</span>
                <span class="task-owner">Cleo</span>
              </div>
              <h4>Zapier keyword automation</h4>
            </div>
          </div>
        </article>

        <article class="lane" data-status="done">
          <h3>Complete</h3>
          <div class="lane-body">
            <p class="empty">Ready for first data sync</p>
          </div>
        </article>
      </div>
    </section>

    <section class="schedule-card">
      <h2>Schedule / Automations</h2>
      <div class="schedule-list">
        <div class="schedule-item">
          <div>
            <h4>Random check-in cadence</h4>
            <p>Cleo</p>
          </div>
          <span>09:00 / 13:00 / 18:00</span>
        </div>
        <div class="schedule-item">
          <div>
            <h4>Cold call block</h4>
            <p>Karl</p>
          </div>
          <span>13:00</span>
        </div>
        <div class="schedule-item">
          <div>
            <h4>Automation build window</h4>
            <p>Cleo</p>
          </div>
          <span>16:30</span>
        </div>
      </div>
    </section>
  </main>
`;
