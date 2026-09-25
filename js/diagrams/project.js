// BPMN Level 1 - PROJECT Process
export const projectDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow4" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">PROJECT PROPOSAL & CREATION</text>

          <!-- SWIMLANE 1: DEVMAN -->
          <rect x="53" y="15" width="1052" height="110" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="15" width="28" height="110" fill="#F0FDF4" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-70" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" fill="#15803D" text-anchor="middle">PM</text>

          <!-- SWIMLANE 2: ADMIN -->
          <rect x="53" y="125" width="1052" height="110" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="125" width="28" height="110" fill="#FAF5FF" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-180" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" fill="#7E22CE" text-anchor="middle">Admin</text>

          <!-- SWIMLANE 3: SYSTEM -->
          <rect x="53" y="235" width="1052" height="120" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="235" width="28" height="120" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-295" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" fill="#0F766E" text-anchor="middle">System</text>

          <!-- Start in PM -->
          <circle cx="115" cy="70" r="14" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <line x1="129" y1="70" x2="175" y2="70" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>
          <rect x="175" y="45" width="160" height="50" rx="7" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow4)"/>
          <text x="255" y="67" font-size="10" font-weight="700" fill="#0F172A" text-anchor="middle">Propose New Project</text>
          <text x="255" y="81" font-size="8.5" fill="#64748B" text-anchor="middle">Timeline & Required Skills</text>

          <!-- Flow down to Admin Lane -->
          <path d="M 335 70 L 390 70 L 390 180 L 430 180" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>

          <!-- Admin Lane: Review Project -->
          <rect x="430" y="155" width="160" height="50" rx="7" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5" filter="url(#bpmn-shadow4)"/>
          <text x="510" y="177" font-size="10" font-weight="700" fill="#7E22CE" text-anchor="middle">Review Project Feasibility</text>
          <text x="510" y="191" font-size="8.5" fill="#64748B" text-anchor="middle">Staffing Capacity & Budget</text>
          <line x1="590" y1="180" x2="630" y2="180" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>

          <!-- Gateway Approval -->
          <polygon points="645 162, 663 180, 645 198, 627 180" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <text x="645" y="184" font-size="10" font-weight="800" fill="#854D0E" text-anchor="middle">×</text>

          <!-- Branch Reject -->
          <line x1="645" y1="162" x2="645" y2="140" stroke="#1E293B" stroke-width="1.5"/>
          <line x1="645" y1="140" x2="685" y2="140" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>
          <text x="650" y="153" font-size="8" font-weight="700" fill="#DC2626">Reject</text>
          <circle cx="698" cy="140" r="10" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>

          <!-- Branch Approve -> Assign Lead -->
          <line x1="663" y1="180" x2="710" y2="180" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>
          <text x="675" y="173" font-size="8" font-weight="700" fill="#16A34A">Approve</text>
          <rect x="710" y="155" width="160" height="50" rx="7" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5" filter="url(#bpmn-shadow4)"/>
          <text x="790" y="177" font-size="10" font-weight="700" fill="#7E22CE" text-anchor="middle">Assign PM Lead</text>
          <text x="790" y="191" font-size="8.5" fill="#64748B" text-anchor="middle">Designate Project Manager</text>

          <!-- Down to System: Activate Project -->
          <path d="M 870 180 L 920 180 L 920 295 L 945 295" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>
          <rect x="945" y="270" width="130" height="50" rx="7" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow4)"/>
          <text x="1010" y="292" font-size="10" font-weight="700" fill="#0F766E" text-anchor="middle">Activate Project</text>
          <text x="1010" y="306" font-size="8.5" fill="#64748B" text-anchor="middle">Open for Staffing</text>
          <line x1="1075" y1="295" x2="1090" y2="295" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr4)"/>
          <circle cx="1098" cy="295" r="8" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
        </svg>
`;
