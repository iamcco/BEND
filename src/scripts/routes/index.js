import App from '../container'
import TestPage from 'pages/myDuty'
import OtherPage from 'pages/subDuty'

export default {
    childRoutes: [ {
        path: '/',
        component: App,
        childRoutes: [
            TestPage,
            OtherPage
        ]
    } ]
}
