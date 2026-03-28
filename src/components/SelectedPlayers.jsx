import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function SelectedPlayers({ selectedP }) {
  return (
    <div>
      {selectedP.length === 0
        ? "Not Selected Players!"
        : selectedP.map((player) => {
            return (
              <>
                <div className=" bg-base-100 shadow-sm flex">
                  <img src={player.img} alt="Movie" className="h-40" />

                  <div className="card-body">
                    <h2 className="card-title">
                      {" "}
                      <FaUser /> {player.name}
                    </h2>
                    <p>
                      {player.batting_style} / {player.bowling_style}{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-end mr-20">
                    <button className="btn bg-red-700">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
    </div>
  );
}

export default SelectedPlayers;
