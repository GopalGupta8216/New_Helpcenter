import React, { Component } from 'react';
import dot from '../css/queryDetail.css'
import code from '../css/app.css'
import { Segment, Container,Divider, Checkbox, Header,Icon, Image,Button,Grid,Form,Comment } from 'semantic-ui-react'

class CommentSection extends Component {
    state = {  }
    render() { 
        const src = 'https://react.semantic-ui.com/images/wireframe/image.png' 
        return ( 
            <Grid columns='equal'>
            <Grid.Column>
              <Divider />
              <Container textAlign="left">
              <Comment.Group>
    

    <Comment>
      <Comment.Avatar src={src} />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={src} />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={src} />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src={src} />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Comment' labelPosition='left' icon='comment alternate outline' primary />
    </Form>
  </Comment.Group>
  </Container>
      
              
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment styleName="dot.queryInfo" textAlign="left">
                  <p>
                      AppName>query111
                </p>
                <p>
                    Opened:<br />
                    <b>
                    4:55 pm on 22 sept,2020
                </b>
                    
                </p>
                
                <p>
                    Opened by:
                </p>
                <Image src={src} size='mini' verticalAlign='middle' />{' '}
    <span>Sherlock holmes</span>
    <br />
    <br />
    <p>Allow maintainer to access your account?<Icon fitted name='question circle' /></p>
    <Form>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
              </Segment>

            </Grid.Column>
           
          </Grid>
         );
    }
}
 
export default CommentSection;