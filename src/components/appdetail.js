import React, { Component } from 'react';
import block from "../css/query-table.css"
import QueryList from "./query-list"
import code from '../css/app.css'
import { Segment,Grid, Pagination, Container,Divider,Form, Header,Image, Item,List, Button,Icon } from 'semantic-ui-react'
import QueryTableDivision from './query-table-division';
class AppDetail extends Component {
    state = {  }
    render() { 
        const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        return ( 
        <React.Fragment>
            <Container styleName= "code.central">
            <Header as='h2' textAlign="left">Helpcenter > AppName</Header>
            
            <Divider/>
            <Item.Group >
            <Item >
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Helpcenter</Item.Header>
        <Item.Meta content='Maintained by Gopal Gupta' />
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
        
  </Item.Group>
             
            <Grid columns='equal' >
                <Grid.Row>
                <Grid.Column width ={6} styleName="block.faq-container">
               
                    </Grid.Column>
                    <Grid.Column width={10} textAlign='left'>
                   
                    </Grid.Column>
                </Grid.Row>
    <Grid.Column width ={6} styleName="block.faq-container">
    <Container textAlign='left'>
      <center><h1><b>Frequently Asked Questions</b></h1></center>
      <List>
          <p styleName="block.faq">1. How can we help you please tell??</p>
          {/* <p > i have a doubt please help</p>
          <p styleName="block.faq">2. How can we help you please tells??</p>
          <p > i have a doubt please help</p>
          <p styleName="block.faq">3. How can we help you please tell??</p>
          <p > i have a doubt please help</p>
          <p styleName="block.faq">4. How can we help you please tell??</p>
          <p > i have a doubt please help</p> */}
         <Pagination
      
      defaultActivePage={2}
      // ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={{ content: <Icon name='fast backward' />, icon: true }}
      lastItem={{ content: <Icon name='fast forward' />, icon: true }}
      prevItem={{ content: <Icon name='step backward' />, icon: true }}
      nextItem={{ content: <Icon name='step forward' />, icon: true }}
      // totalPages={10}
    />


    
  </List>

      </Container>
    </Grid.Column >
    
    <Grid.Column width={10} textAlign='left' >
    <center><h1><b>Still facing Issues? drop in a Query!</b></h1></center>
    <Container styleName="block.query-form" >
      <Form >
      <Form.Field label='Subject' placeholder = 'Subject'control='textarea' rows='2' />
      <Form.Field label='Query' placeholder = 'Query' control='textarea' rows='6' />

      <Form.Field>
              <h3>To attach more than one file, upload a .zip archive.</h3>
              <input
                type="file"
                name="media_uploads"
                icon='upload'
                content='Upload'
                // onChange={this.handleChange.bind(this)}
                // onChange={(event) => {
                //   const data = { ...this.state.data };
                //   data.media_uploads[this.state.data.media_uploads.length] =
                //     event.target.files[0];

                //   const media_uploads = { ...this.state.data.media_uploads };
                //   console.log(event.target.files[0]);
                //   media_uploads[this.state.data.media_uploads.length] =
                //     event.target.files[0];
                //   this.setState({
                //     data,
                //   });

                //   console.log(this.state.data.media_uploads);
                //   alert(
                //     this.state.data.media_uploads.length +
                //       " Image/s Uploaded till now "
                //   );
                // }}
                accept="image/png, image/jpeg"
              />
            </Form.Field>
            <div styleName="block.submit">
            <Button as='div' labelPosition='right' >
      <Button color='blue'>
        <Icon name='send' />
        Submit
      </Button>
     
      </Button>
      </div>    
      </Form>
      </Container>
    </Grid.Column>
    
  </Grid>

<QueryList />
            </Container>
        </React.Fragment>
             );
    }
}
 
export default AppDetail;