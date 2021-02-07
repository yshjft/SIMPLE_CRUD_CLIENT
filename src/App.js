import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {MainPage, ReadPage, UpdatePage, WritePage} from './pages'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import './styles/index.scss'

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/post/:id" component={ReadPage} />
        <Route path="/update/:id" component={UpdatePage} />
        <Route path="/write" component={WritePage} />
      </Switch>
      <Footer />
    </Router>
  </div>
)

export default App
