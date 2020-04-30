import * as React from "react";

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <g clipPath="url(#check_svg__check_svg__clip0)">
        <path
          d="M4 11a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414l2.2 2.2L10.21.386a1 1 0 011.58 1.228l-7 9a1 1 0 01-.728.386H4z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="check_svg__check_svg__clip0">
          <path d="M0 0h12v12H0V0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgCheck = React.memo(SvgCheck);
export default MemoSvgCheck;
