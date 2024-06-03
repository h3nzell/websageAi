import type { FC } from 'react'
import classNames from 'classnames'
import { noop } from 'lodash'

import type { TButtonProps } from './types'

const Button: FC<TButtonProps> = ({
  children = '',
  className = '',
  onClick = noop,
  type = 'button',
  LeftIcon = null,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(
      'flex items-center cursor-pointer justify-center gap-2 rounded-xl text-gray-500 font-semibold text-sm  bg-white py-[10px] px-4',
      { [className]: className }
    )}
  >
    {LeftIcon && LeftIcon}
    {children}
  </button>
)

export default Button
