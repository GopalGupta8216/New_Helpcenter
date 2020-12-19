import React, { Component } from 'react';
import _ from 'lodash'
//use lodash _chunk for rendering apps 
import { Grid, Image } from 'semantic-ui-react'
import code from '../css/app.css'

class ProjectList extends Component {
    
    render() { 
        let apps = 10;
        const rows = apps/5;
        const columns = _.times(5, (i) => (
            // <Grid.rows key={j}>
            <Grid.Column key={i}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            // </Grid.rows>
          ))
        return ( 
            <React.Fragment>
            <center styleName= "code.heading" >Which App do you want help with?</center>
            <Grid divided='vertically'>
                {/* {rows} */}
                <Grid.Row columns={5}>
      {columns}
    </Grid.Row>
    <Grid.Row columns={5}>
      {columns}
    </Grid.Row>
          
          </Grid>
          </React.Fragment>
         );
    }
}
 
export default ProjectList;