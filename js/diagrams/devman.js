// BPMN Level 1 - DEVMAN Process
export const devmanDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr7" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow7" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">PROJECT MANAGER MANAGEMENT (ADMIN ONLY)</text>

          <!-- SWIMLANE 1: ADMIN -->
          <rect x="53" y="15" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="15" width="28" height="170" fill="#FAF5FF" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-100" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#7E22CE" text-anchor="middle">Admin</text>

          <!-- SWIMLANE 2: SYSTEM -->
          <rect x="53" y="185" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="185" width="28" height="170" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-270" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">System</text>

          <!-- ADMIN: Start & Add PM -->
          <circle cx="120" cy="100" r="16" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <line x1="136" y1="100" x2="185" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr7)"/>

          <rect x="185" y="70" width="170" height="60" rx="8" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5" filter="url(#bpmn-shadow7)"/>
          <text x="270" y="97" font-size="10.5" font-weight="700" fill="#7E22CE" text-anchor="middle">Input Project Manager Details</text>
          <text x="270" y="113" font-size="9" fill="#64748B" text-anchor="middle">Name, Email, Managed Project</text>

          <!-- Down to System: Validate Email & Create -->
          <path d="M 355 100 L 410 100 L 410 270 L 450 270" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr7)"/>

          <rect x="450" y="240" width="170" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow7)"/>
          <text x="535" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Validate Email & Role</text>
          <text x="535" y="283" font-size="9" fill="#64748B" text-anchor="middle">Ensure Unique Project Manager Account</text>
          <line x1="620" y1="270" x2="670" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr7)"/>

          <rect x="670" y="240" width="170" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow7)"/>
          <text x="755" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Provision PM Access</text>
          <text x="755" y="283" font-size="9" fill="#64748B" text-anchor="middle">Grant Project Lead Privileges</text>

          <!-- Up to Admin: Show Active PM in Roster -->
          <path d="M 840 270 L 890 270 L 890 100 L 920 100" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr7)"/>

          <rect x="920" y="70" width="140" height="60" rx="8" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5" filter="url(#bpmn-shadow7)"/>
          <text x="990" y="97" font-size="10.5" font-weight="700" fill="#7E22CE" text-anchor="middle">Update PM List</text>
          <text x="990" y="113" font-size="9" fill="#64748B" text-anchor="middle">PM Active in Roster</text>
          <line x1="1060" y1="100" x2="1080" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr7)"/>
          <circle cx="1090" cy="100" r="10" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        </svg>
`;
