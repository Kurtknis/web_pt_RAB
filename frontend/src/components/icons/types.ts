import type { SVGProps } from 'react';

export type IconSize = number | string;

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: IconSize;
  strokeWidth?: number;
  color?: string;
  title?: string;
};

export type IconComponent = (props: IconProps) => React.ReactElement;

