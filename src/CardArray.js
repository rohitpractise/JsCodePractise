import React from 'react';
import Card from './Card';



const CardArray = ({ robots }) =>
{ if(true){throw Error("Error in Card")}
    return (
    <div>
    {
    // robots.map((user,i) => { 
    //     return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>})
    
        robots.map((user) => { 
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>})
    }
  </div>
);
}


export default CardArray;

