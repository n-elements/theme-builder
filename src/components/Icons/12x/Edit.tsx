import * as React from "react";

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M9 10H2V3h2V1H1a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8H9v2z"
        fill="currentColor"
      />
      <path
        d="M11.581.413a1.41 1.41 0 00-1.994 0L5 5 4 8l3-1 4.587-4.587a1.41 1.41 0 000-1.994l-.006-.006z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgEdit = React.memo(SvgEdit);
export default MemoSvgEdit;
