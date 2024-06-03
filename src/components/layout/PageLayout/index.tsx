import type { FC } from 'react'

import { RoutesWrapper } from 'libraries/router'

import Header from '../Header'
import Footer from '../Footer'

const PageLayout: FC = () => (
  <main className='w-full flex flex-col h-screen max-md:h-auto '>
    <Header />
    <RoutesWrapper />
    <Footer />
  </main>
)

export default PageLayout
