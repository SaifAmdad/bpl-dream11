import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

function Players({ data, setCount, count }) {
  const [activeBtn, setActiveBtn] = useState("available");
  const [selectedP, setSelectedP] = useState([]);
  const buyPlayer = (price) => {
    setCount(count - price);
  };
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between font-bold">
        <h1>
          {activeBtn === "available"
            ? "Available Players"
            : `Selected Players ${selectedP.length}/${data.length}`}
        </h1>
        <div>
          <button
            onClick={() => setActiveBtn("available")}
            className={`btn rounded-r-none rounded-l-xl ${activeBtn === "available" ? "bg-yellow-300" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveBtn("selected")}
            className={` btn rounded-l-none rounded-r-xl ${activeBtn === "selected" ? "bg-yellow-300" : ""}`}
          >
            Selected {selectedP.length}
          </button>
        </div>
      </div>
      {activeBtn === "available" ? (
        <AvailablePlayers
          players={data}
          setCount={setCount}
          count={count}
          selectedP={selectedP}
          setSelectedP={setSelectedP}
        />
      ) : (
        <SelectedPlayers selectedP={selectedP} />
      )}
    </div>
  );
}

export default Players;
