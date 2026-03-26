import React from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
function Card({ player }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={player.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.name}
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{player.country}</p>
          </div>
          <button className="btn btn-ghost">Batter</button>
        </div>
        <div className="divider"></div>
        <p>Rating : {player.rating}</p>
        <div className="flex justify-between font-bold">
          <h2>{player.batting_style}</h2>
          <h2>{player.bowling_style}</h2>
        </div>

        <div className="flex justify-between">
          <h1 className="flex items-center gap-1 font-bold">
            Price : <SiBitcoinsv /> {player.price}
          </h1>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
