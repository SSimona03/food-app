'use client'


import React, {useEffect, useState} from 'react'
import {useContextShare, ACTIONS}  from "./Logic"
import useDebounce from "../hooks/useDebounce"


export default function Search() { 

  const [inputValue, setInputValue] = useState('');
  const updateContextShare = useContextShare();
  const debouncedKeyword = useDebounce(inputValue, 1000);

    function searchItem(e){ 
      let lowerCase = e.target.value.toLowerCase();
      setInputValue(lowerCase);
    }
    
    useEffect( () => {
      updateContextShare.dispatchObj({ type:ACTIONS.SEARCH, payload: debouncedKeyword })
    }, [debouncedKeyword])

    return (
        <input 
        className="search "
        key="search-bar"
        placeholder={"search item"}
        onChange={searchItem}
      />
          
    );
  }