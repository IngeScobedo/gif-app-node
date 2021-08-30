import React from 'react'
import './GifGridItem.css'

const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="gif-card animate__animated animate__backInDown" >
            <img 
                src={url} 
                alt={title}
                className="gif-card-image"
                />
            <p className='gif-title'>{title}</p>
        </div>
    )
}
export default GifGridItem