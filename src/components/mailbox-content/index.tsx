import { Search } from './search'
import { Pagination } from './pagination'
import { MessageTable } from './message-table'
import { DropDown } from './dropdown'

export const MailBoxContent = () => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-6'>
          <DropDown />
        </div>

        <div className='col-md-6 search-form'>
          <Search />
        </div>
      </div>

      <div className='padding'></div>

      <div className='table-responsive'>
        <MessageTable />
      </div>

      <nav aria-label='Page navigation example'>
        <Pagination />
      </nav>
    </>
  )
}
