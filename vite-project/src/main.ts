import "./style.css";

type Task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  owner: "Karl" | "Cleo";
  priority: "high" | "medium" | "low";
};

type ScheduleItem = {
  id: string;
  title: string;
  time: string;
  owner: string;
};

const tasks: Task[] = [
  {
    id: "1",
    title: "Build Mission Control UI",
    status: "doing",
    owner: "Cleo",
    priority: "high",
  },
  {
    id: "2",
    title: "Cold call Sydney roofers (30-50)",
    status: "todo",
    owner: "Karl",
    priority: "high",
  },
  {
    id: "3",
    title: "Document website product + script",
    status: "todo",
    owner: "Karl",
    priority: "medium",
  },
  {
    id: "4",
    title: "Zapier keyword automation",
    status: "doing",
    owner: "Cleo",
    priority: "medium",
  },
];

const schedule: ScheduleItem[] = [
  { id: "1", title: "Random check-in", time: "09:00", owner: "Cleo" },
  { id: "2", title: "Cold call block", time: "13:00", owner: "Karl" },
  { id: "3", title: "Automation build", time: "16:30", owner: "Cleo" },
];

function createTaskCard(task: Task) {
  const card = document.createElement("div");
  card.className = "task-card";
  card.innerHTML = `
    <div class="task-header">
      <span class="task-priority priority-${task.priority}">
        ${task.priority.toUpperCase()}
      </span>
      <span class="task-owner">${task.owner}</span>
    </div>
    <h4>${task.title}</h4>
  `;
  return card;
}

function renderTasks() {
  const lanes = {
    todo: document.querySelector(".lane[data-status='todo'] .lane-body")!,
    doing: document.querySelector(".lane[data-status='doing'] .lane-body")!,
    done: document.querySelector(".lane[data-status='done'] .lane-body")!,
  };

  Object.values(lanes).forEach((lane) => (lane.innerHTML = ""));

  tasks.forEach((task) => {
    lanes[task.status].appendChild(createTaskCard(task));
  });
}

function renderSchedule() {
  const scheduleList = document.querySelector(".schedule-list")!;
  scheduleList.innerHTML = schedule
    .map(
      (item) => `
        <div class="schedule-item">
          <div>
            <h4>${item.title}</h4>
            <p>${item.owner}</p>
          </div>
          <span>${item.time}</span>
        </div>
      `
    )
    .join("");
}

function init() {
  renderTasks();
  renderSchedule();
}

init();
