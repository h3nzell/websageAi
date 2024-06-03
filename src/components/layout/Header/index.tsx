import { type FC, useEffect, useState } from 'react'

import Button from 'components/Button'

import logo from '../../../assets/images/logo.png'
import logoName from '../../../assets/images/name-logo.png'

import classNames from 'classnames'
import Modal from 'components/Modal'

const Header: FC = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 60
      setIsHeaderSticky(isSticky)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={classNames(
          'flex items-center z-30 justify-between px-36 max-lg:px-32 max-sm:px-20 py-3 fixed top-0 w-full bg-transparent',
          {
            ['border-b border-gray-500']: isHeaderSticky,
          }
        )}
      >
        <div
          className={classNames(
            'transition-colors delay-200 -z-[1] bg-transparent absolute w-full h-full, top-0 left-0 right-0 bottom-0',
            {
              ['!bg-[#F6F4EF]']: isHeaderSticky,
            }
          )}
        />

        <img width={50} height={50} src={logo} alt='Logo' />

        <Button onClick={() => setIsOpen(true)} className=' cursor-pointer'>
          Get Start
        </Button>
      </header>

      <Modal className='relative' open={isOpen} onClose={() => setIsOpen(false)}>
        <Button className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
          <svg
            className='hover:fill-black cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='16'
            height='16'
            viewBox='0 0 50 50'
          >
            <path d='M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z'></path>
          </svg>
        </Button>
        <div className='flex flex-col gap-5 w-full justify-center items-center px-6'>
          <img width={150} height={60} src={logoName} alt='Logo' />
          <div className='relative flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Enter your email'
              className='border-2 border-gray-500 w-full bg-transparent pl-2 py-3 rounded-3xl focus:outline-[#414AB3]'
            />
            <Button className='absolute right-2 top-[4.5px] !rounded-[32px] bg-gradient-to-l transition-colors delay-300 from-purple-200 via-purple-400 to-purple-800 hover:bg-gradient-to-r hover:from-purple-200 hover:via-purple-400 hover:to-purple-800 text-white'>
              Send
            </Button>
            <p className='text-center text-paragraphGray'>Get you JS code in your email.</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Header
