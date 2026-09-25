// BPMN Level 1 - RESOURCE Process
export const resourceDiagram = `
<svg viewBox="0 0 1120 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr3" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#1E293B" />
            </marker>
            <filter id="bpmn-shadow3" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.08" />
            </filter>
          </defs>

          <!-- PROCESS POOL -->
          <rect x="15" y="15" width="1090" height="340" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.8"/>
          
          <!-- POOL HEADER -->
          <rect x="15" y="15" width="38" height="340" rx="8" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.8"/>
          <text x="-185" y="39" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5" font-weight="800" fill="#1E293B" text-anchor="middle" letter-spacing="1">RESOURCE ALLOCATION PROCESS</text>

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

          <!-- DEVMAN LANE: Start & Request -->
          <circle cx="115" cy="70" r="14" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <line x1="129" y1="70" x2="165" y2="70" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>
          <rect x="165" y="45" width="145" height="50" rx="7" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow3)"/>
          <text x="237" y="67" font-size="10" font-weight="700" fill="#0F172A" text-anchor="middle">Select Available Resource</text>
          <text x="237" y="81" font-size="8.5" fill="#64748B" text-anchor="middle">Pick skills & dates</text>
          <line x1="310" y1="70" x2="350" y2="70" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>

          <rect x="350" y="45" width="135" height="50" rx="7" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" filter="url(#bpmn-shadow3)"/>
          <text x="417" y="67" font-size="10" font-weight="700" fill="#0F172A" text-anchor="middle">Submit Request</text>
          <text x="417" y="81" font-size="8.5" fill="#64748B" text-anchor="middle">Assign, Extend, Release</text>

          <!-- Down to System for Schedule Validation -->
          <path d="M 485 70 L 530 70 L 530 295 L 560 295" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>

          <!-- SYSTEM LANE: Double-booking Validation -->
          <rect x="560" y="270" width="150" height="50" rx="7" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5" filter="url(#bpmn-shadow3)"/>
          <text x="635" y="292" font-size="10" font-weight="700" fill="#0F766E" text-anchor="middle">Check Overlap Clash</text>
          <text x="635" y="306" font-size="8.5" fill="#64748B" text-anchor="middle">Zero Double-Booking Check</text>
          <line x1="710" y1="295" x2="740" y2="295" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>

          <!-- Exclusive Gateway (Overlap?) -->
          <polygon points="755 277, 773 295, 755 313, 737 295" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <text x="755" y="299" font-size="10" font-weight="800" fill="#854D0E" text-anchor="middle">×</text>

          <!-- Conflict Detected -> Reject -->
          <line x1="755" y1="313" x2="755" y2="335" stroke="#1E293B" stroke-width="1.5"/>
          <line x1="755" y1="335" x2="790" y2="335" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>
          <text x="765" y="328" font-size="8" font-weight="700" fill="#DC2626">Conflict</text>
          <circle cx="802" cy="335" r="10" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>

          <!-- Clear -> Up to Admin Lane -->
          <path d="M 773 295 L 810 295 L 810 180 L 830 180" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>
          <text x="785" y="290" font-size="8" font-weight="700" fill="#16A34A">Valid</text>

          <!-- ADMIN LANE: Review & Sign-off -->
          <rect x="830" y="155" width="135" height="50" rx="7" fill="#FAF5FF" stroke="#7E22CE" stroke-width="1.5" filter="url(#bpmn-shadow3)"/>
          <text x="897" y="177" font-size="10" font-weight="700" fill="#7E22CE" text-anchor="middle">HR Admin Review</text>
          <text x="897" y="191" font-size="8.5" fill="#64748B" text-anchor="middle">Approve or Reject</text>
          <line x1="965" y1="180" x2="995" y2="180" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>

          <!-- Down to System: Lock Roster -->
          <path d="M 995 180 L 1005 180 L 1005 295 L 1015 295" fill="none" stroke="#1E293B" stroke-width="1.5" marker-end="url(#arr3)"/>
          <rect x="1015" y="270" width="85" height="50" rx="7" fill="#F0FDFA" stroke="#0F766E" stroke-width="1.5"/>
          <text x="1057" y="292" font-size="9" font-weight="700" fill="#0F766E" text-anchor="middle">Lock Roster</text>
          <text x="1057" y="306" font-size="8" fill="#64748B" text-anchor="middle">ASSIGNED</text>
        </svg>
`;
