import React from 'react';


const SearchBox =({searchChange})=>{
    return(
        <div className='pa2'>
        <input type='search' placeholder='Please Search Your Buddy' onChange={searchChange} />
        </div>
    )
}

export default SearchBox;