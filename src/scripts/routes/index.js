import App from '../container'
import TestPage from 'pages/test'
import OtherPage from 'pages/other'

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
