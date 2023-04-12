 'use client'

import "../globals.css"
import {useTrackStatus} from "../categories/logic.jsx"


const tableContent = [
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


  export default function Table() {
     let add = false;
     const show = useTrackStatus();
    
    

     let classTest = '';
     //"text-sm md:text-base text-right "
//"p-2 text-right text-sm md:text-base text-gray-700 "
   return (
    //<>Test</>

    <table className=" table-auto divide-y divide-gray-300 mx-auto table-box mb-10 anime">
       
            <thead  className='table-head-box '>
            <tr  >
            <th className="text-sm md:text-base text-left p-3"> Items </th>
                <th className="text-sm md:text-base text-center p-3"> Results </th>

                {/* <th className ={`text-sm md:text-base text-right transition-all duration-200 ${ show[1] ? ' opacity-100' : 'opacity-0 hidden' }`}> Low FODMAP </th> */}

              { show[1] ==true ?  null : <th className = "text-sm md:text-base text-right "> Low FODMAP </th> } 
              { show[2] ==true ?  null : <th className="text-sm md:text-base text-right " > High PH </th> }
              { show[3] ==true ?  null : <th className="text-sm md:text-base text-right " > Low Fat </th> }
              
            </tr>
            </thead>
        <tbody className="divide-y divide-gray-200 bg-white ">

        {tableContent.map((val, key) => {
    return (
          <tr key={key} className=' tbody-items table-row'>
          <td className=" p-2 text-left pl-2 text-sm md:text-base"> {val.items}</td>
          <td className=" p-2 text-center text-sm text-gray-700 md:text-base">{val.results}</td>
{/* 
          <td className={`p-2 text-right text-sm md:text-base text-gray-700 transition-all duration-200  ${ show[1] ? 'opacity-100' : 'opacity-0 hidden' }`}>{val.group1}</td>  */}

          { show[1] == true ? null  : <td className="p-2 text-right text-sm md:text-base text-gray-700 "  >{val.group1}</td> }
          { show[2] == true ? null : <td className=" p-2 text-right text-sm md:text-base text-gray-700 ">{val.group2}</td> }
          { show[3] == true ? null : <td className=" p-2 text-right text-sm md:text-base text-gray-700 ">{val.group3}</td> }
          </tr> 
    )
  })}

        </tbody>
    </table>
   )
    
 
} 

