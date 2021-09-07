import {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import "./GifApp.css";

function GifApp() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="gif-app">
      <h2 className="title-app">GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
          {
          categories.map(category => (
          <GifGrid 
            category={category}
            key={category}
            />
          ))
          }
      </ol>
    </div>
  );
}

export default GifApp;
