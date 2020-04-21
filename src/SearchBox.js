import React from 'react';

const SearchBox = ({ searchChange})=> {
    return (
    <div className=''>
    <input 
    className='pa2 ba b--green bg-lightest-blue' 
    type='search' 
    placeholder='Search Robots'
    onChange={searchChange}
    ></input>
    </div>
    );
}


export default SearchBox;