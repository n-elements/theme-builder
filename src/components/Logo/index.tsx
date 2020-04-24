import React from "react";

export interface ILogoProps {
  width?: number;
  height?: number;
}

export const Logo = function (props: ILogoProps) {
  return (
    <svg
      width={props.width}
      height={props.height || props.width}
      viewBox={`0 0 180 180`}
      aria-label="Native Elements Logo"
      fill="none"
      {...props}
    >
      <path
        d="M50.625 11.25h-33.75a5.625 5.625 0 00-5.625 5.625v146.25a5.625 5.625 0 005.625 5.625h33.75a5.625 5.625 0 005.625-5.625V16.875a5.625 5.625 0 00-5.625-5.625z"
        fill="#0057FF"
      />
      <path
        d="M163.125 64.688h-33.75a5.625 5.625 0 00-5.625 5.624v92.813a5.624 5.624 0 005.625 5.625h33.75a5.624 5.624 0 005.625-5.625V70.312a5.625 5.625 0 00-5.625-5.624zM163.125 11.25h-90a5.625 5.625 0 00-5.625 5.625v30.938a5.625 5.625 0 005.625 5.624h90a5.625 5.625 0 005.625-5.624V16.875a5.625 5.625 0 00-5.625-5.625z"
        fill="#000"
      />
    </svg>
  );
};

Logo.defaultProps = {
  width: 180,
} as Partial<ILogoProps>;
