import * as React from "react";

function SvgElements(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18.5 13a5 5 0 100-10 5 5 0 000 10z" fill="#364563" />
      <path
        d="M13.5 13.5h-8a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5z"
        fill="#00D1FF"
      />
      <path
        d="M11.435 10.246a.499.499 0 00-.007-.504l-4.5-7.5a.52.52 0 00-.856 0l-4.5 7.5A.5.5 0 002 10.5h9a.5.5 0 00.435-.254z"
        fill="#0057FF"
      />
    </svg>
  );
}

export default SvgElements;
