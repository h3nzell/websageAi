import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'

const App: FC = () => (
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
)

export default App
