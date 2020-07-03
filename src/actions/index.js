import {ADD_REMINDER} from '../types'
import {REMOVE_REMINDER} from '../types'
import {CLEAR_REMINDERS} from '../types'
import { act } from 'react-dom/test-utils'
export const add_reminder=(text,date)=>{
    const action={
        type:ADD_REMINDER,
        text:text,
        date:date
    }
    console.log("add",action)
    return action
}

export const remove_reminder=(id)=>{
    const action={
        type:REMOVE_REMINDER,
        id:id
    }
    return action
}
export const clear_reminders =()=>{
    const action={
        type:CLEAR_REMINDERS,
    }
    return action
}