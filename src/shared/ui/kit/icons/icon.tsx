import { type SVGProps } from 'react';

import { type IconName } from '../../../../../types/name';

export { IconName };

export function Icon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  return (
    <svg {...props}>
      <use href={`icons/sprite.svg#${name}`} />
    </svg>
  );
}
