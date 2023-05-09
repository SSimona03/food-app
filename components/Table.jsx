'use client'

import '../app/globals.css'
import {useContextShare, ACTIONS}  from "./Logic"

 const no = <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b21f1f" stroke-width="0.12000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#b21f1f"></path> </g></svg>

const yes = <svg width="25px" height="25px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#1d660f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

const redDot = <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#b22020"></circle> </g></svg>;

const greenDot = <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#1d660f"></circle> </g></svg>

// export let tableContent = [
//         {
//             items: "Dark Green Vegetables",
//             group1: 1,
//             group2: 2,
//             group3: 3,
//             results: 0
//         },
//         {
//             items: "Coconut",
//             group1: 1,
//             group2: 2,
//             group3: 3,
//             results: 0
//         },
//         {
//             items: "Strawberry",
//             group1: 1,
//             group2: 2,
//             group3: 3,
//             results: 0
//         }
// ]


export function searchInput(input, items){
  return( (input==undefined) ? items : items.filter(e => e.item.toLowerCase().includes(input)) )
}


export default function Table({items}) { 
    const getContext = useContextShare(); 
    
    let search = searchInput(getContext.stateObj.searchbar, items)

   return (
<div className="max-h-vh80 overflow-scroll block md:max-h-vh65 lg:max-h-vh60">
    <table className=" table-auto divide-y  divide-gray-300 mx-auto table-box mb-10 anime">
  
            <thead  className='table-head-box'>
            <tr >
            <th className="text-sm md:text-base text-left p-3"> Items </th>
            <th className="text-sm md:text-base text-center p-3"> Results </th>

              { getContext.stateObj.btnOne == true ?  null : <th className = "text-sm md:text-base text-right "> Low FODMAP </th> } 
              { getContext.stateObj.btnTwo == true ?  null : <th className="text-sm md:text-base text-right " > High PH </th> }
              { getContext.stateObj.btnThree == true ?  null : <th className="text-sm md:text-base text-right " > Low Fat </th> }
              
            </tr>
            </thead >
         
        <tbody className="divide-y divide-gray-200 bg-white ">

        {search.map((val, key) => {
            const res = () => {
              if(
                getContext.stateObj.btnOne==false && val.lowFODMAP==0 ||
                getContext.stateObj.btnTwo==false && val.highPH==0 ||
                getContext.stateObj.btnThree==false && val.lowFat==0
              ) return 0
              else return 1
            }
            
        return (
          <tr key={key} className=' tbody-items table-row '>
          <td className=" text-left pl-2 text-sm md:text-base "> {val.item}</td>
          <td className=" mx-auto text-center text-gray-700 md:text-base  result-icon"> { ( res() == 0 ) ? no : yes}</td>

          { getContext.stateObj.btnOne == true ? null  : <td className="text-right text-sm md:text-base text-gray-700 align-top result-icon-l">{ (val.lowFODMAP ==0)? redDot : greenDot}</td> }
          { getContext.stateObj.btnTwo == true ? null : <td className=" text-right text-sm md:text-base text-gray-700 align-top result-icon-l">{(val.highPH ==0)? redDot : greenDot }</td> }
          { getContext.stateObj.btnThree == true ? null : <td className=" text-right text-sm md:text-base text-gray-700 align-top result-icon-l">{(val.lowFat ==0)? redDot : greenDot}</td> }
          </tr> 
        )
        })}

        </tbody>
      
    </table>
</div>    
   )
    
 
} 


