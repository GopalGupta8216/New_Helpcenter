import React, { Component } from 'react';
import code from '../css/app.css'
import Heading from './heading'
import ProjectList from './project-list'
import QueryList from './query-list'
// import { Divider} from 'semantic-ui-react';
import { Segment, Container,Divider, Header } from 'semantic-ui-react'
class Landing extends Component {
   
    render() { 
        return ( 

        <Container styleName= "code.central">
            <Heading />
       <ProjectList />
       <Container textAlign='left'>
       <h1>Previously Asked Queries</h1>
       <QueryList />
       </Container>
       
      </Container>
      )
        
    }
}
 
export default Landing;