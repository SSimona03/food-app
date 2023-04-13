'use client'


import React, {useState} from 'react'




export default function Searchbar({keyword}) { //onChange
  const [itemSearched, setItemSearched] = useState('')


     function searchItem(e){
      let lowerCase = e.target.value.toLowerCase();
      setItemSearched(lowerCase)
      }

      console.log(itemSearched)

    return (
        <input 
        className="search "
        key="search-bar"
        value={keyword}
        placeholder={"search item"}
        onChange={searchItem}
      />
    
    );
  }