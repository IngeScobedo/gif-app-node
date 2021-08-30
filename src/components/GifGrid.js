import React from "react";
//import { GifGridItem } from "./GifGridItem";
// import getGifs from "../helpers/getGifs.js"
import useFetchGifs from "../hooks/useFetchGifs";
import "./GifGrid.css";
import GifGridItem from "./GifGridItem";
export const GifGrid = ({ category }) => {
  let { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {loading && "Loading..."}

      <div className="gif-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
