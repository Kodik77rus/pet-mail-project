export const Search = () => {
  return (
    <div className='input-group'>
      <input
        className='form-control'
        list='datalistOptions'
        id='exampleDataList'
        placeholder='Type to search...'
      />
      <span className='input-group-btn'>
        <button type='submit' name='search' className='btn_ btn-primary btn search'>
          <i className='fa fa-search'></i>
        </button>
      </span>
      <datalist id='datalistOptions'>
        <option value='San Francisco' />
        <option value='New York' />
        <option value='Seattle' />
        <option value='Los Angeles' />
        <option value='Chicago' />
      </datalist>
    </div>
  )
}
