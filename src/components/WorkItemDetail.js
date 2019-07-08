import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text,Touchable,View,LayoutAnimation} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common'
import {completeStageChanged,initialStageChanged,ongoingStageChanged,workItemChanged,subjectChanged} from '../actions'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };



class WorkItemDetail extends Component{
    constructor(props) {
        super(props);
        LayoutAnimation.spring();
    }
    onSubjectChange(text) {
        this.props.subjectChanged(text);
    }
    onInitialStageChange(text){
        
        console.log(text)        
 
          
    }
    render() {
        const { titleStyle } = styles;
        return (
          <Card>
            <CardSection>
              <Input
                label="标题"
                placeholder="12345 福州市台江区井盖修复"
                onChangeText={this.onSubjectChange.bind(this)}
                value={this.props.subject}
              />
            </CardSection>  
            <CardSection>
                <Text style={titleStyle}>
                    施工前照片
                </Text>
                <Button onPress={this.onInitialStageChange.bind(this)}>
                    <Text>+</Text>
                </Button>
            </CardSection>  
    

          </Card>
        );
      }

      
}
const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15
    },
    descriptionStyle: {
      paddingLeft: 10,
      paddingRight: 10
    }
  };
const mapStateToProps = ({ worklogDetail }) => {
    const { subject, initial_pics, ongoing_pics, final_pics,workitems } = worklogDetail;
  
    return { subject, initial_pics, ongoing_pics, final_pics,workitems };
  };
  
  export default connect(mapStateToProps, {
    completeStageChanged,initialStageChanged,ongoingStageChanged,workItemChanged,subjectChanged
  })(WorkItemDetail);