import { Activity } from "../types"

export type ActivityActions = 
    {type: "SAVE_ACTIVITY", payload: {newActivity: Activity}} |
    {type: "EDIT_ACTIVITY", payload: {id: Activity['id']}} |
    {type: "DELETE_ACTIVITY", payload: {id: Activity['id']}}


export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    if(activities) {
        return JSON.parse(activities)
    }
    return []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === "SAVE_ACTIVITY") {
        let updatedActivities: Activity[] = []

        if(state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity )
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === "EDIT_ACTIVITY") {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type === "DELETE_ACTIVITY") {
        let updatedActivities: Activity[] = []
        updatedActivities = state.activities.filter(activity => activity.id !== action.payload.id)
        return {
            ...state,
            activeId: '',
            activities: updatedActivities,
            
        }
    }


    return state;
}