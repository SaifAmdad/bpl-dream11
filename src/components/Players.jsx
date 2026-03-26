import React, { use } from "react";
import AvailablePlayers from "./AvailablePlayers";

function Players({ data, setCount, count }) {
  console.log(data);
  const buyPlayer = (price) => {
    setCount(count - price);
  };
  return (
    <div className="container mx-auto">
      <h1>Players {data.length} </h1>
      <AvailablePlayers players={data} />
      <button className="btn btn-success" onClick={() => buyPlayer(20)}>
        Success
      </button>
    </div>
  );
}

export default Players;
