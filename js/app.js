import { level0Diagram } from './diagrams/level0.js';
import { loginDiagram } from './diagrams/login.js';
import { dashboardDiagram } from './diagrams/dashboard.js';
import { resourceDiagram } from './diagrams/resource.js';
import { projectDiagram } from './diagrams/project.js';
import { activitiesDiagram } from './diagrams/activities.js';
import { notificationDiagram } from './diagrams/notification.js';
import { devmanDiagram } from './diagrams/devman.js';

const l1Diagrams = {
  login: loginDiagram,
  dashboard: dashboardDiagram,
  resource: resourceDiagram,
  project: projectDiagram,
  activities: activitiesDiagram,
  notification: notificationDiagram,
  devman: devmanDiagram,
};

let activeFeature = 'login';

export function switchPrimaryTab(tabName) {
  document.getElementById('btn-tab-l0')?.classList.toggle('active', tabName === 'l0');
  document.getElementById('btn-tab-l1')?.classList.toggle('active', tabName === 'l1');

  document.getElementById('pane-l0')?.classList.toggle('active', tabName === 'l0');
  document.getElementById('pane-l1')?.classList.toggle('active', tabName === 'l1');

  if (tabName === 'l1') {
    renderLevel1(activeFeature);
  }
}

export function drillDownToL1(featureKey) {
  activeFeature = featureKey;
  switchPrimaryTab('l1');
  switchSubTab(featureKey);
}

export function switchSubTab(featureKey) {
  activeFeature = featureKey;

  document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `sbtn-${featureKey}`);
  });

  renderLevel1(featureKey);
}

export function renderLevel1(featureKey) {
  const container = document.getElementById('l1-diagram-container');
  if (container) {
    container.innerHTML = l1Diagrams[featureKey] || l1Diagrams.login;
  }
}

export function renderLevel0() {
  const container = document.getElementById('l0-diagram-container');
  if (container) {
    container.innerHTML = level0Diagram;
  }
}

// Bind to window for inline onclick handlers inside SVGs (e.g. drillDownToL1)
window.switchPrimaryTab = switchPrimaryTab;
window.switchSubTab = switchSubTab;
window.drillDownToL1 = drillDownToL1;

document.addEventListener('DOMContentLoaded', () => {
  renderLevel0();
  renderLevel1('login');

  document.getElementById('btn-tab-l0')?.addEventListener('click', () => switchPrimaryTab('l0'));
  document.getElementById('btn-tab-l1')?.addEventListener('click', () => switchPrimaryTab('l1'));

  Object.keys(l1Diagrams).forEach(key => {
    document.getElementById(`sbtn-${key}`)?.addEventListener('click', () => switchSubTab(key));
  });
});
