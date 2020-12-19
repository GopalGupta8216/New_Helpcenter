import React, { Component } from 'react';
import { Icon, Label, Menu } from 'semantic-ui-react'
class QueryTableDivision
 extends Component {
    state = {  }
    render() { 
        return (
            <Menu compact>
            <Menu.Item as='a'>
            <b>All Queries</b>
              <Label color='red' floating>
                22
              </Label>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon color = 'red'name='exclamation circle'  /> <b>Pending</b>
              <Label color='teal' floating>
                22
              </Label>
            </Menu.Item>
            <Menu.Item as='a'>
            
              <Icon  color = 'yellow'name='clock outline'  /> <b>In Progress</b>
              <Label color='red' floating>
                22
              </Label>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon color = "green" name='check' /><b> Solved</b>
              <Label color='teal' floating>
                22
              </Label>
              </Menu.Item>
          </Menu>
         );
    }
}
 
export default QueryTableDivision
;