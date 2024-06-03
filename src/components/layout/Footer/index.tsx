import type { FC } from 'react'
import logo from '../../../assets/images/name-logo.png'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <div className='w-full p-6 border-t flex justify-between items-center border-gray-500'>
      <div className='flex flex-col gap-2'>
        <img width={120} height={50} src={logo} alt='Logo' />
        <p>A truly personalized AI</p>
        <Button className='mt-3 border-gray-500 hover:border-black hover:text-black max-w-28'>Get Rewind</Button>
      </div>

      <div className='mt-5'>
        <h4 className='uppercase text-paragraphGray'>Company</h4>
        <br />
        <ul className='flex flex-col gap-5 '>
          <li>
            <Link
              className='font-semibold text-base cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-base cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/pricing'
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className='font-semibold text-base cursor-pointer text-gray-500 delay-150 transition-[color] hover:text-black'
              to='/use-cases'
            >
              Use Cases
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
