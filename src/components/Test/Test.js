import React from 'react'

export const Test = (props) => (
  <div>
  {console.log(props)}
    <h1>Some Test Information</h1>
    <button className='btn btn-default' onClick={props.loadTestData}>
      Load
    </button>
    {props.isLoading ? (<div>loading</div>) : (<div>{props.data}</div>)}
  </div>
)

Test.propTypes = {
  loadTestData: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.string
}

export default Test
