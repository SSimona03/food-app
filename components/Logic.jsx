'use client'

import React, {useContext, useReducer} from 'react'

export const ACTIONS = {
    BTN_ONE: 'lowFodmap',
    BTN_TWO: 'highPH',
    BTN_THREE: 'lowFat',
    SEARCH : 'search',
}
const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.BTN_ONE:
            return {...state, btnOne: !state.btnOne};
        case ACTIONS.BTN_TWO:
            return {...state, btnTwo: !state.btnTwo};
        case ACTIONS.BTN_THREE:
            return {...state, btnThree: !state.btnThree};
        case ACTIONS.SEARCH:
            return {...state, searchbar: action.payload };
        default:
            console.log("Not FOUND!")
    }
}


const contextShare = React.createContext();

export function useContextShare() {
    return(
        useContext(contextShare)
    )
}

export default function Logic({children}){
    
const [state, dispatch] = useReducer(reducer, {btnOne: false, btnTwo: false, btnThree: false, searchbar: ''})
    return(
        <contextShare.Provider value={ { stateObj: state,  dispatchObj: dispatch} }>
            {children}
        </contextShare.Provider>
          
    )
}