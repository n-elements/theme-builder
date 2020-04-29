import * as React from "react";

function SvgSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M9 0H7v2h2V0zm5.294 3.052L12.88 1.637 11.465 3.05l1.414 1.414 1.415-1.413zM16 7h-2v2h2V7zm-4.465 6.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414zM9 14H7v2h2v-2zm-7.434-1.052l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413zM2 7H0v2h2V7zm2.465-3.88L3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12zM8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgSun = React.memo(SvgSun);
export default MemoSvgSun;
