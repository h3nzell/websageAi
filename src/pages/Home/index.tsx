import type { FC } from 'react'

import { stepsData } from 'utils'

const HomeContainer: FC = () => (
  <div className='mt-[70px] overflow-x-hidden w-full flex flex-col gap-6 py-4'>
    <div className=' h-auto relative py-8 w-full flex flex-col gap-3 justify-center items-center'>
      <div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 absolute top-0 bottom-0 left-0 right-0 -z-[1]' />
      <h3 className='max-w-lg  text-white text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-center'>
        Let us empower your website with AI assistance
      </h3>
      <p className='text-paragraphGray font-semibold text-center text-2xl max-lg:text-xl max-sm:text-lg'>
        Not a bot but AI assistance for your customers
      </p>
    </div>

    <div className='w-full px-4 flex flex-col gap-6'>
      <div className='px-6 py-8 h-auto bg-grayBg rounded-2xl w-full flex flex-col gap-8 justify-center items-center'>
        <h3 className='max-w-xl text-mediumGray text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-center'>
          3 easy step to have AI empowered website hereafter
        </h3>
        <div className='flex items-center gap-6 w-full max-md:flex-col'>
          {stepsData.map(element => (
            <div key={element.id} className='w-1/3 max-md:w-full flex flex-col justify-center items-center gap-2 '>
              <div className='relative border-2 border-paragraphGray rounded-md p-1'>
                <img width={24} height={24} src={element.img} alt={element.title} />
                <span className='absolute -right-2 -bottom-2 bg-list-bg text-white rounded-full w-4 h-4 max-w-4 max-h-4 min-w-4 min-h-4 text-xs flex items-center justify-center'>
                  {element.id}
                </span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='font-semibold  text-paragraphGray text-2xl max-lg:text-lg max-sm:text-base'>
                  {element.title}
                </p>
                <p className='text-center font-semibold text-paragraphGray text-base max-lg:text-xs'>{element.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='px-6 py-8 h-auto bg-[#e9edef] rounded-2xl w-full flex flex-col gap-8 justify-center'>
        <div className='flex flex-col gap-3 max-w-xl max-md:max-w-full'>
          <h4 className='text-3xl text-gray-600'>Trained by Your Website </h4>
          <div>
            <p className='text-[#6b727a] text-xl'>
              Personalized Experience: Trained on your website’s data, with a deep insight of your specific content,
              products, and services.
            </p>
            <p className='text-[#6b727a] text-xl'>
              Relevant Responses: More accurate and customized answers relying solely on your website data.
            </p>
            <p className='text-[#6b727a] text-xl'>
              Continuous Learning: Continually improving and adapting to user interactions and website content updates
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 max-w-xl max-md:max-w-full'>
          <h4 className='text-3xl text-gray-600'> Easy Integration </h4>
          <div>
            <p className='text-[#6b727a] text-xl'>
              Quick up: Simple and quick setup process with minimal coding needs.
            </p>
            <p className='text-[#6b727a] text-xl'>
              Compatibility: Compatible with various web platforms and technologies.
            </p>
            <p className='text-[#6b727a] text-xl'>Support: Step-by-step guides and support for seamless integration.</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 max-w-xl max-md:max-w-full'>
          <h4 className='text-3xl text-gray-600'> User-Friendly and Easy to Use</h4>
          <div>
            <p className='text-[#6b727a] text-xl'>
              Intuitive Interface: Simplified and engaging design for smooth customer use.
            </p>
            <p className='text-[#6b727a] text-xl'>
              Fast Access to Data: Enhanced user experience due to fast and responses.
            </p>
            <p className='text-[#6b727a] text-xl'>Support: Step-by-step guides and support for seamless integration.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeContainer
