import * as React from "react";

function SvgUndo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M2.502 12.333a6.996 6.996 0 01-1.405-3.168l1.973-.331a4.982 4.982 0 001.003 2.26l-1.571 1.239zm4.332 2.57a7.015 7.015 0 01-2.976-1.259l1.186-1.611c.624.459 1.358.77 2.122.898l-.332 1.972zm2.331 0l-.33-1.973a4.99 4.99 0 002.209-.964l1.219 1.586a6.996 6.996 0 01-3.098 1.351zM8 1c-1.873 0-3.65.759-4.948 2.052L.9.9.2 7.3l6.4-.7-2.135-2.135A5.023 5.023 0 018 3c2.757 0 5 2.243 5 5 0 1.06-.327 2.072-.947 2.928l1.621 1.173A6.96 6.96 0 0015 8c0-3.86-3.141-7-7-7z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgUndo = React.memo(SvgUndo);
export default MemoSvgUndo;
