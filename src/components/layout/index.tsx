import { Sidebar } from '../saidbar'
import { Props } from '../../types'

export const Layout = ({ children }: Props) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='grid'>
            <div className='grid-body'>
              <div className='row'>
                <div className='col-md-2'>
                  <Sidebar />
                </div>
                <div className='col-md-9'>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
