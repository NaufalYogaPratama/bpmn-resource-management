// BPMN Level 1 - DASHBOARD Process
export const dashboardDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow2" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="11" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">DASHBOARD MONITORING PROCESS</text>

          <!-- SWIMLANE 1: ADMIN / DEVMAN -->
          <rect x="53" y="15" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="15" width="28" height="170" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-100" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Admin / Project Manager</text>

          <!-- SWIMLANE 2: SYSTEM -->
          <rect x="53" y="185" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="185" width="28" height="170" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-270" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">System</text>

          <!-- Start Event -->
          <circle cx="120" cy="100" r="16" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="120" y="130" font-size="9" font-weight="600" fill="#475569" text-anchor="middle">Start</text>
          <line x1="136" y1="100" x2="185" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr2)"/>

          <!-- Task 1: Open Dashboard -->
          <rect x="185" y="70" width="160" height="60" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow2)"/>
          <text x="265" y="97" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Select Dashboard View</text>
          <text x="265" y="113" font-size="9" fill="#64748B" text-anchor="middle">Filter Department / Scope</text>

          <!-- Down to System -->
          <path d="M 345 100 L 400 100 L 400 270 L 440 270" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr2)"/>

          <!-- Task 2: Aggregate Stats -->
          <rect x="440" y="240" width="170" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow2)"/>
          <text x="525" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Aggregate Headcount</text>
          <text x="525" y="283" font-size="9" fill="#64748B" text-anchor="middle">Total, Available & Assigned</text>
          <line x1="610" y1="270" x2="660" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr2)"/>

          <!-- Task 3: Detect Expiry Alerts -->
          <rect x="660" y="240" width="180" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow2)"/>
          <text x="750" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Scan Expiring Allocations</text>
          <text x="750" y="283" font-size="9" fill="#64748B" text-anchor="middle">Contract Ending in &lt; 30 Days</text>

          <!-- Up to User Lane -->
          <path d="M 840 270 L 890 270 L 890 100 L 920 100" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr2)"/>

          <!-- Task 4: Render KPI Panels -->
          <rect x="920" y="70" width="140" height="60" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow2)"/>
          <text x="990" y="97" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Display KPI Panels</text>
          <text x="990" y="113" font-size="9" fill="#64748B" text-anchor="middle">Utilization & Alert Badges</text>
          <line x1="1060" y1="100" x2="1080" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr2)"/>

          <!-- End Event -->
          <circle cx="1090" cy="100" r="12" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
        </svg>
`;
