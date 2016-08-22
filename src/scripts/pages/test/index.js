export default {
    path: '/test',
    getComponent(nextState, cb) {
        require.ensure(['pages/test/container/App.js'], (require) => {
            cb(null, require('pages/test/container/App.js').default)
        })
    }
}
