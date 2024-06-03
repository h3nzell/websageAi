import { type FC, useRef } from 'react'

import { useLockBodyScroll, useOutsideClick } from 'hooks'

import { TModalProps } from './types'
import classNames from 'classnames'

const Modal: FC<TModalProps> = ({ open = false, children, onClose, className }) => {
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(ref, () => onClose())
  useLockBodyScroll(!open)

  if (!open) return null

  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 z-[10] px-4  w-screen h-screen bg-gray20 bg-opacity-20 flex justify-center items-center'>
      <div
        ref={ref}
        className={classNames(
          'px-20 p-12 max-sm:p-9 max-w-[630px] w-full bg-white rounded-[36px] flex flex-col z-50 shadow-md',
          { [`${className}`]: className }
        )}
      >
        {children && children}
      </div>
    </div>
  )
}

export default Modal
