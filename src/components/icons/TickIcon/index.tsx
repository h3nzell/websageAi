import type { FC } from 'react'

import type { TIconProps } from 'types'

const TickIcon: FC<TIconProps> = ({ color = '', size }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 2C6.48622 2 2 6.48622 2 12C2 17.5138 6.48622 22 12 22C17.5138 22 22 17.5138 22 12C22 6.48622 17.5138 2 12 2ZM17.589 9.36842L11.198 15.7093C10.8221 16.0852 10.2206 16.1103 9.81955 15.7343L6.43609 12.6516C6.03509 12.2757 6.01003 11.6491 6.3609 11.2481C6.73684 10.8471 7.36341 10.8221 7.76441 11.198L10.4461 13.6541L16.1604 7.93985C16.5614 7.53885 17.188 7.53885 17.589 7.93985C17.99 8.34085 17.99 8.96742 17.589 9.36842Z'
      fill={color}
    />
  </svg>
)

export default TickIcon
