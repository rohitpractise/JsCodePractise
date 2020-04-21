import React from 'react';


const Card = ({id, name , email }) => {
return(
    <div className='bg-light-blue dib br4 w5 tc pa3 ma2 grow'>
        <img alt='robots' src={`https://robohash.org/${id}?20*20`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);

}


export default Card;
 