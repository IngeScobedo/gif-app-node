import React from "react";
//import { GifGridItem } from "./GifGridItem";
 import getGifs from "../helpers/getGifs.js"
 import {useState, useEffect} from "react"
 import {GifGridItem} from "./GifGridItem.js";
import useFetchGifs from '../hooks/useFetchGifs';
import './GifGrid.css'

export const GifGrid = ({ category }) => {
   const [images, setImages] = useState([]);
  //let {loading} = useFetchGifs();
  //console.log(loading);

   useEffect(() => {
     getGifs(category).then(imgs => setImages(imgs) );
   }, [category]);

  

  return (
    <>
      <h1>{category}</h1>
    {
    //  loading ? 'Loading...' : 'Listo!'
    //}

       <div className="gif-grid" >
      {
           images.map( img =>(
               <GifGridItem 
               key={img.id}
               {...img}
               />
           ))
       }
      </div> }
      
    </>
  );
};
