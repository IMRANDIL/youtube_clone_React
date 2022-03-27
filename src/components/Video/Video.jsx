import React from 'react'

import './Video.css'



const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className='videoCard'>
            <img src={image} alt="thumb-img" />

            <div className="videoCard__info">

            </div>

        </div>
    )
}

export default Video