import * as React from "react";

function SvgDrag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M11 9H1a1 1 0 000 2h10a1 1 0 000-2zm0-8H1a1 1 0 000 2h10a1 1 0 100-2zm0 4H1a1 1 0 000 2h10a1 1 0 100-2z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgDrag = React.memo(SvgDrag);
export default MemoSvgDrag;
