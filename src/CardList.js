import React from 'react';
import Card from './Card';

function CardList({robots}){

    const cardComponent = robots.map((robot,index)=>{
        return <Card id={robots[index].id} name={robots[index].name} username={robots[index].username} email={robots[index].email}/>
    })
    return(
        <>
        {cardComponent}
        </>
    );
}

export default CardList;