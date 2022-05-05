import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../layout'
import { MailBoxContent } from '../mailbox-content'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <MailBoxContent />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default App
