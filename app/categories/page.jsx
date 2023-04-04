'use client'
import React from "react"
import '../globals.css'
import {useUpdate} from "./logic"

export default function Categories(){

    const update = useUpdate();

    return(
        <div className="container-nav">
            <div className=" mobile-menu ">Choose any</div>

            <div className=" mobile-nav" >

                <button className="item " type="button"
                 onClick={ ()=> update(1) }
                >Low FODMAP</button>
                <button className="item " type="button"
                 onClick={ ()=> update(2)}
                >High PH</button>
                <button className="item " type="button"
                 onClick={ ()=> update(3)}
                >Low Fat</button>
            </div>
            
        </div>
        
    )
}