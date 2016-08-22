export default {
    path: '/other',
    getComponent(nextState, cb) {
        require.ensure(['pages/other/container'], (require) => {
            cb(null, require('pages/other/container').default)
        })
    }
}
