// BPMN Level 1 - LOGIN Process
export const loginDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="11" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">AUTHENTICATION PROCESS</text>

          <!-- SWIMLANE 1: ADMIN / DEVMAN -->
          <rect x="53" y="15" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="15" width="28" height="170" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-100" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Admin / Project Manager</text>

          <!-- SWIMLANE 2: SYSTEM -->
          <rect x="53" y="185" width="1052" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
          <rect x="53" y="185" width="28" height="170" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1"/>
          <text x="-270" y="71" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">System</text>

          <!-- ================= LANE 1 ELEMENTS ================= -->
          <!-- Start Event -->
          <circle cx="120" cy="100" r="16" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="120" y="130" font-size="9" font-weight="600" fill="#475569" text-anchor="middle">Start</text>
          <line x1="136" y1="100" x2="175" y2="100" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>

          <!-- Task 1: Input Credentials -->
          <rect x="175" y="70" width="150" height="60" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow)"/>
          <text x="250" y="97" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Input Credentials</text>
          <text x="250" y="113" font-size="9" fill="#64748B" text-anchor="middle">Enter Email & Password</text>

          <!-- Flow to System Lane -->
          <path d="M 325 100 L 375 100 L 375 270 L 405 270" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>

          <!-- ================= LANE 2 (SYSTEM) ELEMENTS ================= -->
          <!-- Task 2: Validate Credentials -->
          <rect x="405" y="240" width="155" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow)"/>
          <text x="482" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Validate Credentials</text>
          <text x="482" y="283" font-size="9" fill="#64748B" text-anchor="middle">Check Account & Password</text>
          <line x1="560" y1="270" x2="600" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>

          <!-- Exclusive Gateway: Valid? -->
          <polygon points="625 248, 647 270, 625 292, 603 270" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <text x="625" y="274" font-size="11" font-weight="800" fill="#854D0E" text-anchor="middle">×</text>
          <text x="625" y="238" font-size="9" font-weight="700" fill="#475569" text-anchor="middle">Valid?</text>

          <!-- Branch Invalid (No) -> Show Error -->
          <line x1="625" y1="292" x2="625" y2="330" stroke="#1E293B" stroke-width="1.5"/>
          <line x1="625" y1="330" x2="675" y2="330" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="635" y="312" font-size="8.5" font-weight="700" fill="#DC2626">No</text>
          <rect x="675" y="310" width="130" height="40" rx="6" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.3"/>
          <text x="740" y="327" font-size="9.5" font-weight="700" fill="#B91C1C" text-anchor="middle">Display Error</text>
          <text x="740" y="340" font-size="8" fill="#7F1D1D" text-anchor="middle">Invalid Credentials</text>
          <line x1="805" y1="330" x2="835" y2="330" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <circle cx="850" cy="330" r="14" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
          <text x="850" y="356" font-size="8" font-weight="600" fill="#991B1B" text-anchor="middle">End</text>

          <!-- Branch Valid (Yes) -> Identify Role -->
          <line x1="647" y1="270" x2="700" y2="270" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="665" y="263" font-size="8.5" font-weight="700" fill="#16A34A">Yes</text>
          <rect x="700" y="240" width="150" height="60" rx="8" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow)"/>
          <text x="775" y="267" font-size="10.5" font-weight="700" fill="#0F766E" text-anchor="middle">Resolve User Role</text>
          <text x="775" y="283" font-size="9" fill="#64748B" text-anchor="middle">Admin or PM</text>

          <!-- Flow back to Lane 1 (Role Routing) -->
          <path d="M 850 270 L 890 270 L 890 100 L 920 100" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>

          <!-- ================= LANE 1 ROLE PORTALS ================= -->
          <!-- Exclusive Gateway: Role Fork -->
          <polygon points="938 82, 956 100, 938 118, 920 100" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <text x="938" y="104" font-size="11" font-weight="800" fill="#854D0E" text-anchor="middle">×</text>

          <!-- Branch Admin -->
          <path d="M 938 82 L 938 55 L 970 55" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="948" y="47" font-size="8.5" font-weight="700" fill="#7E22CE">Admin</text>
          <rect x="970" y="35" width="85" height="40" rx="6" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5"/>
          <text x="1012" y="52" font-size="9" font-weight="700" fill="#7E22CE" text-anchor="middle">Admin Portal</text>
          <text x="1012" y="65" font-size="8" fill="#6B21A8" text-anchor="middle">Full HR Mgmt</text>
          <line x1="1055" y1="55" x2="1075" y2="55" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <circle cx="1085" cy="55" r="10" fill="#FAF5FF" stroke="#7E22CE" stroke-width="2.5"/>

          <!-- Branch PM -->
          <path d="M 938 118 L 938 145 L 970 145" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="948" y="138" font-size="8.5" font-weight="700" fill="#15803D">PM</text>
          <rect x="970" y="125" width="85" height="40" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/>
          <text x="1012" y="142" font-size="9" font-weight="700" fill="#15803D" text-anchor="middle">PM Space</text>
          <text x="1012" y="155" font-size="8" fill="#166534" text-anchor="middle">Project & Available</text>
          <line x1="1055" y1="145" x2="1075" y2="145" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr)"/>
          <circle cx="1085" cy="145" r="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2.5"/>
        </svg>
`;
