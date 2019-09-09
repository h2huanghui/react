import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import OrderPage from './views/order/HomePage'
import DetailPage from './views/order/DetailPage'

import './index.scss'

class App extends Component {
    render() {
        // return <h1 className="title">Hello UED!</h1>
        return <Router basename = '/order'>
            <Route path="/" exact component={OrderPage} />
            <Route path="/detail" component={DetailPage} />
        </Router>
    }
}

ReactDOM.render(<App />,document.getElementById('root'))
