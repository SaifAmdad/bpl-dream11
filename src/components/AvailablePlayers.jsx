import React from "react";

import Card from "./Card";

function AvailablePlayers({
  players,
  setCount,
  count,
  selectedP,
  setSelectedP,
}) {
  let key = 0;
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {players.map((player) => {
        key++;
        return (
          <Card
            player={player}
            key={key}
            setCount={setCount}
            count={count}
            selectedP={selectedP}
            setSelectedP={setSelectedP}
          />
        );
      })}
    </div>
  );
}

export default AvailablePlayers;
