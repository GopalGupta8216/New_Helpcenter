import React, { Component } from 'react';
import Heading from './heading'
import dot from '../css/queryDetail.css'
import CommentSection from './comments'
import code from '../css/app.css'
import { Segment, Container,Divider, Headerr,Icon, Image,Button,Grid } from 'semantic-ui-react'
class QueryDetail extends Component {
    state = {  }
    render() {
        const src = 'https://react.semantic-ui.com/images/wireframe/image.png' 
        return (
             <Container styleName= "code.central">
                <Heading />
                <Container textAlign='left' styleName="code.top-bottom-1rem-m">
                    <div styleName="code.top-bottom-1rem-m ">
                <Image src={src} size='tiny' verticalAlign='middle' />
            <span styleName ="dot.app-name">
                AppName 
            </span>
            </div>
            <Grid columns='equal'>
                <Grid.Row>
    <Grid.Column >
      <p styleName="code.font-24">Subject:</p>
    </Grid.Column>
    <Grid.Column width={14}>
      <b><p styleName="code.font-24" >kya pareshani h ji9van m bta do dsfh87hdsfu j8cijdjicmidjc8i </p></b>
    </Grid.Column> 
    </Grid.Row>
  </Grid>
            
    <div styleName="code.top-bottom-1rem-m " verticalAlign='middle'>
    <Button color='orange'>
      <Icon name='clock outline' /> In progress
    </Button>
    <span styleName="dot.fadded">sherlock holmes opened the query 45 minutes ago in Forminator</span>
   
    </div>
    {/* <Divider /> */}
                </Container>
                <CommentSection />
                
                
        </Container>
         );
    }
}
 
export default QueryDetail;