'use client'

import React, {useContext, useState} from 'react'

const TrackStatus = React.createContext();
const Update = React.createContext();

export function useTrackStatus(){
    return(
        useContext(TrackStatus)
    )
}

export function useUpdate(){
    return(
        useContext(Update)
    )
}

export default function Logic({children}){
    const [clickStatus, setClickStatus] = useState({
        1: false,
        2: false,
        3: false
    })
   

    function changeClickStatus(x){
        setClickStatus(prevClick => ({
            ...prevClick,
            [x]: !prevClick[x]
        }))
    }
   console.log(clickStatus)

    return(
        <TrackStatus.Provider value={clickStatus}>
          
                <Update.Provider value={changeClickStatus}>
                           {children}
                </Update.Provider>
                    
           
        </TrackStatus.Provider>
    )
   
}