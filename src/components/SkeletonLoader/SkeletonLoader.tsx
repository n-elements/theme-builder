import React from "react";
import Skeleton, { SkeletonTheme, SkeletonProps } from "react-loading-skeleton";

export interface ISkeletonLoaderProps extends SkeletonProps {
  height?: number;
  width?: number;
  circle?: boolean;
  count?: number;
}
export const SkeletonLoader = ({
  height,
  width,
  circle,
  count,
}: ISkeletonLoaderProps) => {
  return (
    <SkeletonTheme
      color={`var(--skeleton-loader-background)`}
      highlightColor={`var(--skeleton-loader-highlight)`}
    >
      <Skeleton width={width} height={height} circle={circle} count={count} />
    </SkeletonTheme>
  );
};
