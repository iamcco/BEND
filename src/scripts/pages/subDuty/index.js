export default {
    path: '/subDuty',
    getComponent(nextState, cb) {
        require.ensure(['pages/subDuty/container'], (require) => {
            cb(null, require('pages/subDuty/container').default)
        })
    }
}
