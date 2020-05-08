import * as React from "react";

function SvgAuto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm2.625-3.5H9.36l-.422-1.698H6.977l-.43 1.698H5.375l1.938-7h1.374l1.938 7zM7.998 5.921h-.07l-.7 2.785h1.463L7.998 5.92z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgAuto = React.memo(SvgAuto);
export default MemoSvgAuto;
