import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from '../../store'
import { UserFolder } from '../../types'
import { getUserFoldersRequest } from '../../services'
import { setUserFolder } from '../../actions'

import { Layout } from '../layout'
import { MailBoxContent } from '../mailbox-content'

//load initial state
;(async () => {
  if (!localStorage.user) {
    const data = await getUserFoldersRequest()
    localStorage.setItem('user_folders', JSON.stringify(data))
    store.dispatch(setUserFolder(data))
  }
  // @ts-ignore
  const folders: UserFolder[] = JSON.parse(localStorage.getItem('user_folders'))
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
