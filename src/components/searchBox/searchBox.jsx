import { useState } from 'react';
import './searchBox.css';
import { LuSearch } from "react-icons/lu";

function SearchBox() {
    const [input, setInput] = useState("");

    return (
        <div className='input-wrapper'>          
            <LuSearch id='search-icon'/>
            <input 
                placeholder="Search name Pokémon ..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
        </div>
    );
}

export default SearchBox;
