import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from '../../store'
import { getUserFoldersRequest } from '../../services'
import { setUserFolder } from '../../actions'
import { localStorageData } from '../../utils'

import { Layout } from '../layout'
import { MailBoxContent } from '../mailbox-content'

//load initial state
;(async () => {
  if (!localStorage.user) {
    const data = await getUserFoldersRequest()
    localStorageData.userFolder = data
    store.dispatch(setUserFolder(data))
  }
  const folders = localStorageData.userFolder
  store.dispatch(setUserFolder(folders))
})()

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
