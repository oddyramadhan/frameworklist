import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "./buttonLink";

export default function Card({ data }) {
  return (
    <div className="card border-2 shadow-xl">
      <figure className="p-4 h-48 m-auto">
        <img src={data.image} alt={data.name} />
      </figure>
      <div className="card-body p-6 pt-0 text-justify">
        <h2 className="card-title">{data.name}</h2>
        <p className="line-clamp-3">{data.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/framework/${data.id}`}>
            <ButtonLink buttonText={"More"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
