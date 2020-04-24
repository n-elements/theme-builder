import * as React from "react";

function SvgBin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M8 0H4v2H1v2h10V2H8V0zm0 10H4V6H2v5a1 1 0 001 1h6a1 1 0 001-1V6H8v4z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgBin = React.memo(SvgBin);
export default MemoSvgBin;
