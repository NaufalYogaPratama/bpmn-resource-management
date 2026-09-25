// BPMN Level 1 - NOTIFICATION Process
export const notificationDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr6" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow6" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">NOTIFICATION WORKFLOW</text>

          <!-- SWIMLANE 1: SYSTEM -->
          <rect x="53" y="15" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="15" width="28" height="170" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-100" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">System</text>

          <!-- SWIMLANE 2: ADMIN / DEVMAN -->
          <rect x="53" y="185" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="185" width="28" height="170" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-270" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Admin / Project Manager</text>

          <!-- SYSTEM: Start Event Triggered -->
          <circle cx="120" cy="100" r="16" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <line x1="136" y1="100" x2="185" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr6)"/>

          <rect x="185" y="70" width="170" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow6)"/>
          <text x="270" y="97" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Detect Status Change</text>
          <text x="270" y="113" font-size="9" fill="#64748B" text-anchor="middle">Approval, Expiry, Release</text>
          <line x1="355" y1="100" x2="410" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr6)"/>

          <rect x="410" y="70" width="170" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow6)"/>
          <text x="495" y="97" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Broadcast In-App Alert</text>
          <text x="495" y="113" font-size="9" fill="#64748B" text-anchor="middle">Target Role Notification</text>

          <!-- Flow down to User Lane -->
          <path d="M 580 100 L 640 100 L 640 270 L 680 270" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr6)"/>

          <!-- USER LANE: Receive Alert -->
          <rect x="680" y="240" width="165" height="60" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow6)"/>
          <text x="762" y="267" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Receive Badge & Alert</text>
          <text x="762" y="283" font-size="9" fill="#64748B" text-anchor="middle">Unread Indicator Updated</text>
          <line x1="845" y1="270" x2="895" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr6)"/>

          <!-- Click Notification to Open Record -->
          <rect x="895" y="240" width="165" height="60" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow6)"/>
          <text x="977" y="267" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Navigate to Record</text>
          <text x="977" y="283" font-size="9" fill="#64748B" text-anchor="middle">Mark Notification as Read</text>
          <line x1="1060" y1="270" x2="1080" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr6)"/>
          <circle cx="1090" cy="270" r="10" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        </svg>
`;
