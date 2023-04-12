'use client'
import React from "react"
import '../app/globals.css'
import {useUpdate, useTrackStatus} from "./LogicButtons"

export default function Categories(clickStatus){
   
    const update = useUpdate();
    const track = useTrackStatus();

    const styles = {
        one : {
            backgroundColor: track[1] ? '#5F8D4E' : '#1D660F'
        },
        two :{
            backgroundColor: track[2] ? '#5F8D4E' : '#1D660F'
        },
        three:{
            backgroundColor: track[3] ? '#5F8D4E' : '#1D660F'
        }
       
    }

    return(
        <div className="container-nav">
            <div className=" mobile-menu ">Choose any</div>

            <div className=" mobile-nav" >

                <button className="item " type="button" style={styles["one"]}
                 onClick={ ()=> update(1) }
                >Low FODMAP</button>
                <button className="item " type="button" style={styles["two"]}
                 onClick={ ()=> update(2)}
                >High PH</button>
                <button className="item " type="button" style={styles["three"]}
                 onClick={ ()=> update(3)}
                >Low Fat</button>
            </div>
            
        </div>
        
    )
}