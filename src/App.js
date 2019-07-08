import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import WorkItemDetail from './components/WorkItemDetail'



class App extends Component{
    constructor(props) {
        super(props);
      
    }     
    
    render(){
        return (
            <Provider store = {createStore(reducers)}>
                <View style = {{flex:1}}>
                    <WorkItemDetail/>
                </View>
            </Provider>
        )
    }
}
export default App