 //'use client'


import Table from '../components/Table.jsx'
import Search from '../components/Search.jsx'
import Buttons from '../components/Buttons.jsx'


  export default function HomeTable() {
   return (

      <div>
          <div className="items-btn-search">
                  <Buttons />
                  <Search />  
          </div>

                <Table />
      
      </div>
   )
 } 

