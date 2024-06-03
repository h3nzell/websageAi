import type { FC } from 'react'

import type { TCardCloseProps } from './types'

const CardClose: FC<TCardCloseProps> = ({ className = '', onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
    className={className}
    width='55'
    height='55'
    viewBox='0 0 55 55'
    fill='none'
  >
    <g filter='url(#filter0_d_1_79)'>
      <circle cx='27.5' cy='23.5' r='23.5' fill='white' />
    </g>
    <path d='M20 29.4211L33.421 16L35 17.5789L21.5789 31L20 29.4211Z' fill='#C4C4C4' />
    <path d='M33.4211 31L20 17.5789L21.579 16L35 29.4211L33.4211 31Z' fill='#C4C4C4' />
    <defs>
      <filter
        id='filter0_d_1_79'
        x='0'
        y='0'
        width='55'
        height='55'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_79' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_79' result='shape' />
      </filter>
    </defs>
  </svg>
)

export default CardClose
