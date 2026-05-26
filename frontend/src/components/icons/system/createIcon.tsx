import type { IconComponent, IconProps } from '../types';

type IconNode = ReadonlyArray<React.ReactElement<SVGElement>>;

export function createIcon(displayName: string, paths: IconNode): IconComponent {
  function InternalIcon({
    size = 24,
    strokeWidth = 2,
    color = 'currentColor',
    title,
    role,
    'aria-hidden': ariaHidden,
    ...props
  }: IconProps) {
    const isDecorative = title == null;

    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        role={role ?? (isDecorative ? undefined : 'img')}
        aria-hidden={ariaHidden ?? isDecorative}
        focusable="false"
      >
        {title ? <title>{title}</title> : null}
        {paths}
      </svg>
    );
  }

  InternalIcon.displayName = displayName;

  return InternalIcon;
}

