import * as React from "react";

function SvgMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6.5 2C3.875 2.675 2 5.075 2 7.925A6.05 6.05 0 008.075 14c2.85 0 5.175-1.875 5.925-4.5C9.425 10.775 5.225 6.575 6.5 2z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMoon = React.memo(SvgMoon);
export default MemoSvgMoon;
