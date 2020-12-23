import React, { Component } from 'react';
import code from '../css/app.css'
import { Segment, Container,Divider, Header } from 'semantic-ui-react'
class Heading extends Component {
    state = {  }
    render() { 
        return ( 
            <Container styleName="code.heading">
        <Header as='h2' textAlign="left" >Helpcenter</Header>
        
        <Divider/>
        </Container>
         );
    }
}
 
export default Heading;