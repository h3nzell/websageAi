import type { FC } from 'react'
import { stepsData } from 'utils'

const HomeContainer: FC = () => {
  return (
    <div className='mt-[70px] overflow-x-hidden w-full flex flex-col gap-6 p-4'>
      <div className='px-6 h-[calc(100vh-89px)] max-sm:h-auto rounded-2xl bg-paragraphGray bg-center bg-blend-overlay bg-opacity-30 bg-no-repeat py-8 w-full flex flex-col gap-3 justify-center items-center'>
        <h3 className='max-w-lg text-mediumGray text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-center'>
          Let us empower your website with AI assistance
        </h3>
        <p className='text-paragraphGray font-semibold text-2xl max-lg:text-xl max-sm:text-lg'>
          Not a bot but AI assistance for your customers
        </p>
      </div>

      <div className='px-6 py-8 h-[calc(100vh-89px)] max-sm:h-auto bg-grayBg rounded-2xl w-full flex flex-col gap-8 justify-center items-center'>
        <h3 className='max-w-lg text-mediumGray text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-center'>
          3 easy step to have AI empowered website hereafter
        </h3>
        <div className='flex flex-col gap-6 max-w-lg'>
          {stepsData.map(element => (
            <div key={element.id} className='flex items-center gap-2 '>
              <span className='bg-list-bg text-white rounded-full w-8 h-8 max-w-8 max-h-8 min-w-8 min-h-8 flex items-center justify-center'>
                {element.id}
              </span>
              <div className='flex flex-col'>
                <p className='font-medium text-paragraphGray text-xl max-lg:text-lg max-sm:text-base'>
                  {element.title}
                </p>
                <p className='font-normal text-paragraphGray text-sm max-lg:text-xs'>{element.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='px-6 py-8 h-[calc(100vh-89px)] max-sm:h-auto bg-grayBg rounded-2xl w-full flex flex-col gap-8 justify-center'>
        <div className='flex flex-col gap-3'>
          <h4>• Trained by Your Website </h4>
          <ul className='list-disc pl-6'>
            <li>
              <span className='font-bold'>Personalized Experience:</span>
              Trained on your website’s data, with a deep insight of your specific content, products, and services.
            </li>
            <li>
              <span className='font-bold'>Relevant Responses:</span>
              More accurate and customized answers relying solely on your website data.
            </li>
            <li>
              <span className='font-bold'>Continuous Learning:</span>
              Continually improving and adapting to user interactions and website content updates
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h4>• Easy Integration </h4>
          <ul className='list-disc pl-6'>
            <li>
              <span className='font-bold'>Quick Setup:</span>
              Simple and quick setup process with minimal coding needs.{' '}
            </li>
            <li>
              <span className='font-bold'>Compatibility:</span>
              Compatible with various web platforms and technologies.
            </li>
            <li>
              <span className='font-bold'>Support:</span>
              Step-by-step guides and support for seamless integration.
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h4>• User-Friendly and Easy to Use</h4>
          <ul className='list-disc pl-6'>
            <li>
              <span className='font-bold'>Intuitive Interface:</span>
              Simplified and engaging design for smooth customer use.
            </li>
            <li>
              <span className='font-bold'>Fast Access to Data:</span>
              Enhanced user experience due to fast and responses.
            </li>
            <li>
              <span className='font-bold'>Support:</span>
              Step-by-step guides and support for seamless integration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
