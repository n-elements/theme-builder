import * as React from "react";

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M10 5H9V3a3 3 0 10-6 0v2H2a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1zM7 5H5V3a1 1 0 012 0v2z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgLock = React.memo(SvgLock);
export default MemoSvgLock;
