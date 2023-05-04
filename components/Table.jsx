'use client'

import "../globals.css"
import {useContextShare, ACTIONS}  from "../../components/Logic"



export let tableContent = [
        {
            items: "Dark Green Vegetables",
            group1: 1,
            group2: 2,
            group3: 3,
            results: 0
        },
        {
            items: "Coconut",
            group1: 1,
            group2: 2,
            group3: 3,
            results: 0
        },
        {
            items: "Strawberry",
            group1: 1,
            group2: 2,
            group3: 3,
            results: 0
        }
]
export function searchInput(input){
  return( (input==undefined) ? tableContent : tableContent.filter(e => e.items.toLowerCase().includes(input)) )
}


  export default function Table() {
    const getContext = useContextShare(); 
    let search = searchInput(getContext.stateObj.searchbar)

   return (

    <table className=" table-auto divide-y divide-gray-300 mx-auto table-box mb-10 anime">
       
            <thead  className='table-head-box '>
            <tr  >
            <th className="text-sm md:text-base text-left p-3"> Items </th>
            <th className="text-sm md:text-base text-center p-3"> Results </th>

              { getContext.stateObj.btnOne == true ?  null : <th className = "text-sm md:text-base text-right "> Low FODMAP </th> } 
              { getContext.stateObj.btnTwo == true ?  null : <th className="text-sm md:text-base text-right " > High PH </th> }
              { getContext.stateObj.btnThree == true ?  null : <th className="text-sm md:text-base text-right " > Low Fat </th> }
              
            </tr>
            </thead>
        <tbody className="divide-y divide-gray-200 bg-white ">

        {search.map((val, key) => {
        return (
          <tr key={key} className=' tbody-items table-row'>
          <td className=" p-2 text-left pl-2 text-sm md:text-base"> {val.items}</td>
          <td className=" p-2 text-center text-sm text-gray-700 md:text-base">{val.results}</td>

          { getContext.stateObj.btnOne == true ? null  : <td className="p-2 text-right text-sm md:text-base text-gray-700 "  >{val.group1}</td> }
          { getContext.stateObj.btnTwo == true ? null : <td className=" p-2 text-right text-sm md:text-base text-gray-700 ">{val.group2}</td> }
          { getContext.stateObj.btnThree == true ? null : <td className=" p-2 text-right text-sm md:text-base text-gray-700 ">{val.group3}</td> }
          </tr> 
        )
        })}

        </tbody>
    </table>
   )
    
 
} 
