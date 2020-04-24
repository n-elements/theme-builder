import * as React from "react";

function SvgRename(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M6.75 3c0-.827.673-1.5 1.5-1.5H9V0h-.75C7.35 0 6.55.406 6 1.036A2.981 2.981 0 003.75 0H3v1.5h.75c.827 0 1.5.673 1.5 1.5v3.75H3v1.5h2.25V9c0 .827-.673 1.5-1.5 1.5H3V12h.75c.9 0 1.7-.406 2.25-1.037.55.63 1.35 1.037 2.25 1.037H9v-1.5h-.75c-.827 0-1.5-.673-1.5-1.5v-.75H9v-1.5H6.75V3z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgRename = React.memo(SvgRename);
export default MemoSvgRename;
