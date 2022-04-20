import { Sidebar } from '../saidbar'
import { MailBoxContent } from '../mailbox-content'

const App = () => (
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-md-12'>
        <div className='grid'>
          <div className='grid-body'>
            <div className='row'>
              <div className='col-md-2'>
                <Sidebar />
              </div>
              <div className='col-md-9'>
                <MailBoxContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
