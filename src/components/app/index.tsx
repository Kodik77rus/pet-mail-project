import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { Layout } from '../layout'
import { MailBoxContent } from '../mailbox-content'

const App = () => (
  <Provider store={store}>
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
  </Provider>
)

export default App
