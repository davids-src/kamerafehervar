/** Static system diagram — max 5 nodes, no animated flow. */
export function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 720 220"
      role="img"
      aria-labelledby="diagram-title"
      className="w-full h-auto max-w-3xl mx-auto"
    >
      <title id="diagram-title">Egy tipikus kamerarendszer felépítése</title>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#647383" />
        </marker>
      </defs>

      {/* Main chain */}
      <rect x="16" y="70" width="120" height="56" rx="8" fill="#F5F8FB" stroke="#0E2238" strokeWidth="1.5" />
      <text x="76" y="103" textAnchor="middle" fill="#17202A" fontSize="14" fontFamily="Source Sans 3, sans-serif">
        Kamerák
      </text>

      <line x1="136" y1="98" x2="168" y2="98" stroke="#647383" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="172" y="70" width="120" height="56" rx="8" fill="#F5F8FB" stroke="#0E2238" strokeWidth="1.5" />
      <text x="232" y="103" textAnchor="middle" fill="#17202A" fontSize="13" fontFamily="Source Sans 3, sans-serif">
        PoE / hálózat
      </text>

      <line x1="292" y1="98" x2="324" y2="98" stroke="#647383" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="328" y="70" width="120" height="56" rx="8" fill="#F5F8FB" stroke="#0E2238" strokeWidth="1.5" />
      <text x="388" y="103" textAnchor="middle" fill="#17202A" fontSize="14" fontFamily="Source Sans 3, sans-serif">
        NVR / DVR
      </text>

      <line x1="448" y1="98" x2="480" y2="98" stroke="#647383" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="484" y="70" width="120" height="56" rx="8" fill="#F5F8FB" stroke="#0E2238" strokeWidth="1.5" />
      <text x="544" y="103" textAnchor="middle" fill="#17202A" fontSize="13" fontFamily="Source Sans 3, sans-serif">
        Helyi monitor
      </text>

      {/* Optional remote branch */}
      <line x1="388" y1="126" x2="388" y2="158" stroke="#647383" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="318" y="162" width="140" height="44" rx="8" fill="#FFFFFF" stroke="#0068F0" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="388" y="189" textAnchor="middle" fill="#0068F0" fontSize="12" fontFamily="Source Sans 3, sans-serif">
        Opcionális távoli elérés
      </text>
    </svg>
  );
}
