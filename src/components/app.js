import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container,Divider, Header } from 'semantic-ui-react'
// import Landing from "./landing"
import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'

// import { Container, Divider } from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <div className = "central">
       <center>
    <Container textAlign='center'>
    {/* <Container textAlign='left'> */}
   
      <b>Justified</b>
      <Divider />
      {/* </Container> */}
      
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
     
    </Container>
    </center>   
      </div>
    )
  }
}

export default connect(
  null,
  null
)(App)
