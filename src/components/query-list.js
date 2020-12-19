import React, { Component } from 'react';
import { Grid ,Dropdown} from 'semantic-ui-react'

import block from "../css/query-table.css"
import { Icon, Label, Menu ,Container} from 'semantic-ui-react'
import QueryTableDivision from './query-table-division'

class QueryList extends Component {
    state = {  }
    render() { 
        const colors = [
            'red',
            'orange',
            'yellow',
            'olive',
            'green',
            
          ]
          const options = [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 },
          ]
          
        return ( 
            <Container styleName = "block.query-table" >
        <QueryTableDivision />
        <Grid padded>
    
      <Grid.Row >
        <Grid.Column>  <Menu compact>
    <Dropdown   placeholder='Select App'  openOnFocus options={options} selection  />
  </Menu></Grid.Column>
        
      </Grid.Row>
 
  </Grid>

        </Container>
           );
    }
}
 
export default QueryList;