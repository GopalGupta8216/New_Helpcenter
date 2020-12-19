import React, { Component } from 'react';
import { Segment, Container,Divider, Header } from 'semantic-ui-react'
class Heading extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <Header as='h2' textAlign="left">Helpcenter</Header>
        
        <Divider/>
        </React.Fragment>
         );
    }
}
 
export default Heading;