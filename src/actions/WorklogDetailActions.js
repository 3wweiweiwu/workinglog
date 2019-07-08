import * as ActionTypes from './type'

export const expandViewChanged = (viewId)=>{
    return {
        type: ActionTypes.VIEW_ID_CHANGE,
        payload: viewId
    }
}
export const subjectChanged = (text)=>{
    return {
        type: ActionTypes.SUBJECT_CHANGE,
        payload: text
    }
}
export const initialStageChanged = (text)=>{
    return {
        type: ActionTypes.INITIAL_STAGE_CHANGE,
        payload: text
    }
}
export const ongoingStageChanged = (text)=>{
    return {
        type: ActionTypes.ONGOING_STAGE_CHANGE,
        payload: text
    }
}
export const completeStageChanged = (text)=>{
    return {
        type: ActionTypes.COMPLETE_STAGE_CHANGE,
        payload: text
    }
}
export const workItemChanged = (text)=>{
    return {
        type: ActionTypes.WORKITEM_CHAGNE,
        payload: text
    }
}


