import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Test from 'components/test'
import * as ActionCreators from '../modules/test'
// import { LoadTestData } from '../modules/test'

const mapStateToProps = (state) => ({ test: state.test })
const mapActionCreators = (dispatch) => bindActionCreators(ActionCreators, dispatch)

// const mapActionCreators = (dispatch) => ({ LoadTestData: () => LoadTestData() })

export default connect(mapStateToProps, mapActionCreators)(Test)
