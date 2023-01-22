import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "./buttonLink";

export default function CardList({ data, line, button }) {
  return (
    <div className="card lg:card-side bg-parrent border shadow-xl">
      <figure className="p-4 pr-0 lg:w-1/3">
        <img
          className="h-40 object-fill lg:h-auto"
          src={data.image}
          alt={data.name}
        />
      </figure>
      <div className="card-body lg:w-2/3 p-6">
        <h2 className="card-title">{data.name}</h2>
        <p className="line-clamp-3 text-left">{data.description}</p>
        <div className="card-actions justify-end">
          {button === "true" ? (
            <Link to={`/framework/${data.id}`}>
              <ButtonLink buttonText={"More"} />
            </Link>
          ) : (
            <ButtonLink />
          )}
        </div>
      </div>
    </div>
  );
}
