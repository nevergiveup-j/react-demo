
export default {
  path: 'm',
  getIndexRoute(nextState, callback) {
    require.ensure([], require => {
      callback(null, require('./routes/home'))
    })
  },
  getChildRoutes(nextState, callback) {
    require.ensure([], require => {
      callback(null, [
        require('./routes/list')
      ])
    })
  }
}
