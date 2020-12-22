import React, { Component } from 'react';
import { Grid ,Dropdown} from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import block from "../css/query-table.css"
import { Icon, Label,Pagination, Menu ,Container} from 'semantic-ui-react'
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
            <Container  textAlign="left" >
                <QueryTableDivision />
            <Container styleName = "block.query-table" textAlign="left" >
        
        <Grid padded>
    
      <Grid.Row >
        <Grid.Column>  
            <Menu compact>
        <Dropdown   placeholder='Select App'  openOnFocus options={options} selection  />
    </Menu>
   
  </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <List divided relaxed>
          
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List> 
      </Grid.Row>
      <Grid.Row >
      <div styleName ="block.submit">
      <Pagination
      
    defaultActivePage={2}
    // ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='fast backward' />, icon: true }}
    lastItem={{ content: <Icon name='fast forward' />, icon: true }}
    prevItem={{ content: <Icon name='step backward' />, icon: true }}
    nextItem={{ content: <Icon name='step forward' />, icon: true }}
    // totalPages={10}
  />
  </div>
  </Grid.Row>
  </Grid>

        </Container>
        </Container>
           );
    }
}
 
export default QueryList;