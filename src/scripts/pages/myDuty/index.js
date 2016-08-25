export default {
    path: '/myDuty',
    getComponent(nextState, cb) {
        require.ensure(['pages/myDuty/container/App.js'], (require) => {
            cb(null, require('pages/myDuty/container/App.js').default)
        })
    }
}
