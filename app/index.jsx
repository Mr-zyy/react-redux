import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// 性能测试
import Perf from 'react-addons-perf'
if (__DEV__) {
    window.Perf = Perf
    // Perf.start()
    // Perf.stop()
    // Perf.printWasted()
}

import configStore from './store/configStore.js'
import './static/css/common.less'

// 引用并执行 redux-demo
import fn from './redux-demo.js'
fn()

// class Hello extends React.Component {
//     render() {
//         return (
//             <p>hello world</p>
//         )
//     }
// }
import Hello from './containers/Hello.jsx'
let store = configStore()
render(
		<Provider store={store}>
       <Hello/>
    </Provider>,
    document.getElementById('root')
)
