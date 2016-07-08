import React from 'react'

export const Test = (props) => (
  <div>
    <h1>Some Test Information</h1>
    <button className='btn btn-default' onClick={props.LoadTestData}>
      Load
    </button>
  </div>
)

Test.propTypes = {
  LoadTestData: React.PropTypes.func.isRequired
}

export default Test
