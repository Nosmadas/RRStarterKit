import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'test',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const test = require('./containers/TestContainer').default
      const reducer = require('./modules/test').default

      injectReducer(store, { key: 'test', reducer })

      /*  Return getComponent   */
      cb(null, test)

    /* Webpack named bundle   */
    }, 'test')
  }
})
