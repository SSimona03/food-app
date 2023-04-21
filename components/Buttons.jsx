'use client'
import React from "react"
import '../app/globals.css'
import {useContextShare, ACTIONS}  from "./Logic"


export default function Buttons(){
   
    const getContext = useContextShare();
    //console.log(getContext.stateObj.btnOne)

    const styles = {
        one : {
            backgroundColor: getContext.stateObj.btnOne ? '#5F8D4E' : '#1D660F'
        },
        two :{
            backgroundColor: getContext.stateObj.btnTwo ? '#5F8D4E' : '#1D660F'
        },
        three:{
            backgroundColor: getContext.stateObj.btnThree ? '#5F8D4E' : '#1D660F'
        }
       
    }

    return(
        <div className="container-nav">
            <div className=" mobile-menu ">Choose any</div>

            <div className=" mobile-nav" > {/* each btn style */}

                <button className="item " type="button" style={styles["one"]}
                 onClick={ ()=> getContext.dispatchObj({type:ACTIONS.BTN_ONE}) }
                >Low FODMAP</button>
                <button className="item " type="button" style={styles["two"]}
                 onClick={ ()=> getContext.dispatchObj({type:ACTIONS.BTN_TWO})}
                >High PH</button>
                <button className="item " type="button" style={styles["three"]}
                 onClick={ ()=> getContext.dispatchObj({type:ACTIONS.BTN_THREE})}
                >Low Fat</button>
            </div>
            
        </div>
        
    )
}