import React from 'react'
import './GifGridItem.css'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="gif-card" >
            <img 
                src={url} 
                alt={title}
                className="gif-card-image"
                />
            <p className='gif-title'>{title}</p>
        </div>
    )
}
