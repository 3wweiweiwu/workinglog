import * as ActionTypes from '../actions/type'

const InitialState = {
    subject:'',
    initial_pics:[],
    ongoing_pics:[],
    final_pics:[],
    workitems:[]
}

export default (state = InitialState,action)=>{
    switch (action.type){
        case ActionTypes.SUBJECT_CHANGE:
            return {...state,subject:action.payload}
        default:
            return state
    }
}