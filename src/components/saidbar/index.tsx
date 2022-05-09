import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { RootState } from '../../store'
import { createUserFolder } from '../../actions'

const SidebarComponent = ({ userfolders, createUserFolder }: Props) => {
  const onSave = (e: React.MouseEvent) => {
    e.preventDefault()

    const folderName = prompt()
    if (folderName === null) {
      return
    }

    createUserFolder(folderName)
  }

  return (
    <>
      <h2 className='grid-title'>
        <i className='fa fa-inbox'></i> Mailbox
      </h2>
      <Link to='/'>
        <i className='fa fa-pencil'></i>&nbsp;&nbsp;NEW MESSAGE
      </Link>
      <hr />
      <div>
        <ul className='nav nav-pills nav-stacked' style={{ display: 'block' }}>
          <li className='header'>Folders</li>
          <li>
            <Link to={'/folder/inbox'}>
              <i className='fa fa-inbox' key={'inbox'}></i> Inbox ()
            </Link>
          </li>
          <li>
            <Link to={'/folder/starred'} key={'starred'}>
              <i className='fa fa-star'></i> Starred ()
            </Link>
          </li>
          <li>
            <Link to={'/folder/important'} key={'important'}>
              <i className='fa fa-bookmark'></i> Important ()
            </Link>
          </li>
          <li>
            <Link to={'/folder/sent'} key={'sent'}>
              <i className='fa fa-mail-forward'></i> Sent ()
            </Link>
          </li>
          <li>
            <Link to={'/folder/spam'} key={'spam'}>
              <i className='fa fa-folder'></i> Spam ()
            </Link>
          </li>
          {userfolders.length > 0 &&
            userfolders.map((e) => (
              <li key={e.name}>
                <Link to={'/folder/' + e.name} key={e.name}>
                  <i className='fa fa-folder'></i>
                  {' ' + e.name + ' (' + e.messagesId.length + ')'}
                </Link>
              </li>
            ))}
          <div className='input-group input-group-sm mt-2'>
            <button
              className='btn btn-primary btn-sm'
              type='button'
              onClick={onSave}
            >
              Add folder
            </button>
          </div>
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  userfolders: state.user.folders,
})

const mapDispatchToProps = {
  createUserFolder,
}

export const Sidebar = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarComponent)


type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps 
