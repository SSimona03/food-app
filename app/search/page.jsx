
export default function Searchbar({keyword}) { //onChange
   
    return (
      <input 
        className="search "
        key="search-bar"
        value={keyword}
        placeholder={"search item"}
       //onChange={(e) => onChange(e.target.value)}
      />
    );
  }