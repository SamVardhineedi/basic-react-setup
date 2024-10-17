import React from "react";

const Card = ({id,name,email} ) => {
  return (
  <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}?100x100`} alt="Robot"></img>
    <p>{name}</p>
    <p>{email}</p>
  </div>);
};

export default Card;
