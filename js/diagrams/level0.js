// BPMN Level 0 - Process Navigation Map
export const level0Diagram = `
<svg id="svg-l0" viewBox="0 0 1140 370" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity="0.06" />
            </filter>
          </defs>

          <!-- MAIN POOL -->
          <rect x="15" y="15" width="1110" height="340" rx="8" fill="#FFFFFF" stroke="#334155" stroke-width="1.8" />

          <!-- POOL HEADER (VERTICAL) -->
          <rect x="15" y="15" width="42" height="340" rx="8" fill="#F1F5F9" stroke="#334155" stroke-width="1.8" />
          <text x="-185" y="42" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="11" font-weight="800"
            fill="#1E293B" text-anchor="middle" letter-spacing="1.2">RESOURCE MANAGEMENT SYSTEM</text>

          <!-- ================= LANE 1: USER (ADMIN & DEVMAN) ================= -->
          <rect x="57" y="15" width="1068" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
          <rect x="57" y="15" width="30" height="170" fill="#FAF5FF" stroke="#CBD5E1" stroke-width="1" />
          <text x="-100" y="76" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5"
            font-weight="700" fill="#7E22CE" text-anchor="middle">User (Admin / Project Manager)</text>

          <!-- 1. Login -->
          <g class="bpmn-box" onclick="drillDownToL1('login')">
            <rect class="box-bg" x="97" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="165" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Login</text>
            <text x="165" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="158" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="165" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 2. Dashboard -->
          <g class="bpmn-box" onclick="drillDownToL1('dashboard')">
            <rect class="box-bg" x="244" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="312" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Dashboard</text>
            <text x="312" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="305" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="312" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 3. Resource -->
          <g class="bpmn-box" onclick="drillDownToL1('resource')">
            <rect class="box-bg" x="391" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="459" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Resource</text>
            <text x="459" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="452" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="459" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 4. Project -->
          <g class="bpmn-box" onclick="drillDownToL1('project')">
            <rect class="box-bg" x="538" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="606" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Project</text>
            <text x="606" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="599" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="606" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 5. Activities -->
          <g class="bpmn-box" onclick="drillDownToL1('activities')">
            <rect class="box-bg" x="685" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="753" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Activities</text>
            <text x="753" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="746" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="753" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 6. Notification -->
          <g class="bpmn-box" onclick="drillDownToL1('notification')">
            <rect class="box-bg" x="832" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="900" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">Notification</text>
            <text x="900" y="108" font-size="8.5" fill="#64748B" text-anchor="middle">Admin & PM</text>
            <rect x="893" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="900" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>

          <!-- 7. PM -->
          <g class="bpmn-box" onclick="drillDownToL1('devman')">
            <rect class="box-bg" x="979" y="62" width="136" height="76" rx="8" fill="#FFFFFF" stroke="#0284C7"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="1047" y="94" font-size="11" font-weight="700" fill="#0F172A"
              text-anchor="middle">PM</text>
            <text x="1047" y="108" font-size="8.5" fill="#7E22CE" font-weight="600" text-anchor="middle">Admin
              Only</text>
            <rect x="1040" y="118" width="14" height="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" />
            <text x="1047" y="126" font-size="9" font-weight="800" fill="#0284C7" text-anchor="middle">+</text>
          </g>


          <!-- ================= LANE 2: SYSTEM (AUTOMATION SERVICES) ================= -->
          <rect x="57" y="185" width="1068" height="170" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
          <rect x="57" y="185" width="30" height="170" fill="#F0FDFA" stroke="#CBD5E1" stroke-width="1" />
          <text x="-270" y="76" transform="rotate(-90)" font-family="Plus Jakarta Sans" font-size="10.5"
            font-weight="700" fill="#0F766E" text-anchor="middle">System (Engine)</text>

          <g class="bpmn-box" onclick="drillDownToL1('resource')">
            <rect class="box-bg" x="150" y="232" width="260" height="76" rx="8" fill="#FFFFFF" stroke="#0D9488"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="280" y="264" font-size="11.5" font-weight="700" fill="#0F766E"
              text-anchor="middle">Double-Booking Validation</text>
            <text x="280" y="278" font-size="8.5" fill="#64748B" text-anchor="middle">Conflict & Overlap
              Prevention</text>
            <rect x="273" y="288" width="14" height="10" fill="#FFFFFF" stroke="#0D9488" stroke-width="1" />
            <text x="280" y="296" font-size="9" font-weight="800" fill="#0D9488" text-anchor="middle">+</text>
          </g>

          <g class="bpmn-box" onclick="drillDownToL1('resource')">
            <rect class="box-bg" x="460" y="232" width="260" height="76" rx="8" fill="#FFFFFF" stroke="#0D9488"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="590" y="264" font-size="11.5" font-weight="700" fill="#0F766E"
              text-anchor="middle">Auto-Release Engine</text>
            <text x="590" y="278" font-size="8.5" fill="#64748B" text-anchor="middle">Automatic Available Return on
              Expiry</text>
            <rect x="583" y="288" width="14" height="10" fill="#FFFFFF" stroke="#0D9488" stroke-width="1" />
            <text x="590" y="296" font-size="9" font-weight="800" fill="#0D9488" text-anchor="middle">+</text>
          </g>

          <g class="bpmn-box" onclick="drillDownToL1('activities')">
            <rect class="box-bg" x="770" y="232" width="260" height="76" rx="8" fill="#FFFFFF" stroke="#0D9488"
              stroke-width="1.5" filter="url(#shadow)" />
            <text class="box-title" x="900" y="264" font-size="11.5" font-weight="700" fill="#0F766E"
              text-anchor="middle">Audit History Logger</text>
            <text x="900" y="278" font-size="8.5" fill="#64748B" text-anchor="middle">Immutable Decision Logs &
              Timestamps</text>
            <rect x="893" y="288" width="14" height="10" fill="#FFFFFF" stroke="#0D9488" stroke-width="1" />
            <text x="900" y="296" font-size="9" font-weight="800" fill="#0D9488" text-anchor="middle">+</text>
          </g>
        </svg>
`;
