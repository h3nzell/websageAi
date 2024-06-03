import { type FC, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'

import logo from '../../../assets/images/logo.png'
import logoName from '../../../assets/images/name-logo.png'

import classNames from 'classnames'
import Modal from 'components/Modal'
import { useLockBodyScroll } from 'hooks'

const Header: FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  useLockBodyScroll(!isOpenSidebar)

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

  const openSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.left = '0'
      setIsOpenSidebar(true)
    }
  }

  const closeSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.left = '-100%'
      setIsOpenSidebar(false)
    }
  }

  return (
    <>
      <header
        className={classNames('flex items-center z-30 justify-between px-10 py-3 fixed top-0 w-full bg-transparent', {
          ['border-b border-gray-500']: isHeaderSticky,
        })}
      >
        <div
          className={classNames(
            'transition-colors delay-200 -z-[1] bg-transparent absolute w-full h-full, top-0 left-0 right-0 bottom-0',
            {
              ['!bg-[#F6F4EF]']: isHeaderSticky,
            }
          )}
        />
        <ul className='flex items-center gap-5 max-lg:hidden'>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/pricing'
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/use-cases'
            >
              Use Cases
            </Link>
          </li>
        </ul>

        <img width={40} height={40} src={logo} alt='Logo' />

        <Button onClick={() => setIsOpen(true)} className=' cursor-pointer max-lg:hidden'>
          Get Rewind
        </Button>

        <Button onClick={openSidebar} className='hidden max-lg:block'>
          Menu
        </Button>
      </header>
      <div
        ref={sidebarRef}
        className='bg-white -left-full top-0 z-[99] flex !h-screen  flex-col gap-8 transition-[2s] duration-1000 w-full p-5 absolute '
      >
        <div className='w-full flex items-center justify-between p-'>
          <img width={40} height={40} src={logo} alt='Logo' />
          <Button onClick={closeSidebar} className=''>
            X
          </Button>
        </div>
        <ul className='flex flex-col gap-5 '>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/pricing'
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-lg cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/use-cases'
            >
              Use Cases
            </Link>
          </li>
        </ul>
        <Button
          onClick={() => setIsOpen(true)}
          className='hover:text-base hover:border-base border border-gray-500  cursor-pointer max-w-32'
        >
          Get Rewind
        </Button>
      </div>
      <Modal className='relative' open={isOpen} onClose={() => setIsOpen(false)}>
        <Button className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
          X
        </Button>
        <div className='flex flex-col gap-5 w-full justify-center items-center px-6'>
          <img width={150} height={60} src={logoName} alt='Logo' />
          <p>Download Websage</p>
          <div className='relative flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Enter your email'
              className='border-2 border-gray-500 w-full bg-transparent pl-2 py-3 rounded-3xl focus:outline-[#414AB3]'
            />
            <Button className='absolute right-2 top-[4.5px] !rounded-[32px] bg-gradient-to-l transition-colors delay-300 from-purple-200 via-purple-400 to-purple-800 hover:bg-gradient-to-r hover:from-purple-200 hover:via-purple-400 hover:to-purple-800 text-white'>
              Get Rewind
            </Button>
            <p className='text-paragraphGray'>A download link will be sent to your email.</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Header
