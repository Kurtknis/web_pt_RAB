import { createIcon } from './createIcon';

export const ClockIcon = createIcon('ClockIcon', [
  <circle key="face" cx="12" cy="12" r="9" />,
  <path key="hand" d="M12 7v5l3 2" />,
]);

