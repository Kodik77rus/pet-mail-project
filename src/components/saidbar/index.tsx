import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../store'
import { SideBarProps } from '../../types'

export const SidebarComponent = ({
  userfolders,
}: SideBarProps) => {
  const [folderName, setfolderName] = useState('')

  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
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
          <div className='input-group input-group-sm mb-3'>
            <input
              type='text'
              className='form-control'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'
              value={folderName}
              onChange={(e) => setfolderName(e.target.value)}
            />
            <div
              className='input-group input-group-sm mb-3'
              style={{ display: 'grid' }}
            >
              <button
                className='btn btn-primary btn-sm'
                type='button'
                onClick={onSave}
              >
                Button
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  userfolders: state.user.folders,
})

const mapDispatchToProps = {}

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarComponent)
