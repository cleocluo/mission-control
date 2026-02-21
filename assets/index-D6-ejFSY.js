(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=[{id:"1",title:"Build Mission Control UI",status:"doing",owner:"Cleo",priority:"high"},{id:"2",title:"Cold call Sydney roofers (30-50)",status:"todo",owner:"Karl",priority:"high"},{id:"3",title:"Document website product + script",status:"todo",owner:"Karl",priority:"medium"},{id:"4",title:"Zapier keyword automation",status:"doing",owner:"Cleo",priority:"medium"}],l=[{id:"1",title:"Random check-in",time:"09:00",owner:"Cleo"},{id:"2",title:"Cold call block",time:"13:00",owner:"Karl"},{id:"3",title:"Automation build",time:"16:30",owner:"Cleo"}];function c(r){const e=document.createElement("div");return e.className="task-card",e.innerHTML=`
    <div class="task-header">
      <span class="task-priority priority-${r.priority}">
        ${r.priority.toUpperCase()}
      </span>
      <span class="task-owner">${r.owner}</span>
    </div>
    <h4>${r.title}</h4>
  `,e}function a(){const r={todo:document.querySelector(".lane[data-status='todo'] .lane-body"),doing:document.querySelector(".lane[data-status='doing'] .lane-body"),done:document.querySelector(".lane[data-status='done'] .lane-body")};Object.values(r).forEach(e=>e.innerHTML=""),d.forEach(e=>{r[e.status].appendChild(c(e))})}function u(){const r=document.querySelector(".schedule-list");r.innerHTML=l.map(e=>`
        <div class="schedule-item">
          <div>
            <h4>${e.title}</h4>
            <p>${e.owner}</p>
          </div>
          <span>${e.time}</span>
        </div>
      `).join("")}function p(){a(),u()}p();
