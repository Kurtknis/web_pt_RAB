import { ArrowRightIcon } from './system/ArrowRightIcon';
import { ArrowUpRightIcon } from './system/ArrowUpRightIcon';
import { CalendarIcon } from './system/CalendarIcon';
import { CheckIcon } from './system/CheckIcon';
import { ClockIcon } from './system/ClockIcon';
import { CloseIcon } from './system/CloseIcon';
import { MailIcon } from './system/MailIcon';
import { MaximizeIcon } from './system/MaximizeIcon';
import { MenuIcon } from './system/MenuIcon';
import { MessageCircleIcon } from './system/MessageCircleIcon';
import { MoveHorizontalIcon } from './system/MoveHorizontalIcon';
import { SearchIcon } from './system/SearchIcon';
import { SlidersHorizontalIcon } from './system/SlidersHorizontalIcon';
import { UserIcon } from './system/UserIcon';
import type { IconProps } from './types';

export const iconRegistry = {
  'arrow-right': ArrowRightIcon,
  'arrow-up-right': ArrowUpRightIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  clock: ClockIcon,
  close: CloseIcon,
  mail: MailIcon,
  maximize: MaximizeIcon,
  menu: MenuIcon,
  'message-circle': MessageCircleIcon,
  'move-horizontal': MoveHorizontalIcon,
  search: SearchIcon,
  'sliders-horizontal': SlidersHorizontalIcon,
  user: UserIcon,
} as const;

export type IconName = keyof typeof iconRegistry;

export type RegistryIconProps = IconProps & {
  name: IconName;
};

export function Icon({ name, ...props }: RegistryIconProps) {
  const Component = iconRegistry[name];
  return <Component {...props} />;
}

