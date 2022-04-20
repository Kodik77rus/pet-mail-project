export const Sidebar = () => (
  <>
    <h2 className='grid-title'>
      <i className='fa fa-inbox'></i> Mailbox
    </h2>
    <a
      className='btn btn-block btn-primary'
      data-toggle='modal'
      data-target='#compose-modal'
    >
      <i className='fa fa-pencil'></i>&nbsp;&nbsp;NEW MESSAGE
    </a>

    <hr />

    <div>
      <ul className='nav nav-pills nav-stacked' style={{ display: 'block' }}>
        <li className='header'>Folders</li>
        <li className='active'>
          <a href='#'>
            <i className='fa fa-inbox'></i> Inbox (14)
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-star'></i> Starred
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-bookmark'></i> Important
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-mail-forward'></i> Sent
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-pencil-square-o'></i> Drafts
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-folder'></i> Spam (217)
          </a>
        </li>
      </ul>
    </div>
  </>
)
