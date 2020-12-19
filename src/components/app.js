import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container,Divider, Header } from 'semantic-ui-react'
import Landing from "./landing"
import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'
import code from '../css/app.css'
import main from 'formula_one/src/css/app.css'

// import { Container, Divider } from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <Landing />
    )
  }
}

export default connect(
  null,
  null
)(App)
