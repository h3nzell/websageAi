import type { FC } from 'react'

import type { TIconProps } from 'types'

const InfoIcon: FC<TIconProps> = ({ color = '', size }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 2C6.47301 2 2 6.4725 2 12C2 17.5269 6.4725 22 12 22C17.527 22 22 17.5275 22 12C22 6.47309 17.5275 2 12 2ZM13.0269 15.9696C13.0269 16.2855 12.5662 16.6014 12.0002 16.6014C11.4079 16.6014 10.9867 16.2855 10.9867 15.9696V10.9545C10.9867 10.5859 11.4079 10.3357 12.0002 10.3357C12.5662 10.3357 13.0269 10.5859 13.0269 10.9545V15.9696ZM12.0002 9.12484C11.3947 9.12484 10.9209 8.6773 10.9209 8.17707C10.9209 7.67687 11.3948 7.2425 12.0002 7.2425C12.5926 7.2425 13.0665 7.67687 13.0665 8.17707C13.0665 8.6773 12.5925 9.12484 12.0002 9.12484Z'
      fill={color}
    />
  </svg>
)

export default InfoIcon
