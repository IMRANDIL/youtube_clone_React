import { Avatar } from '@mui/material'
import React from 'react'

import './Video.css'



const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className='videoCard'>
            <img src={image} alt="thumb-img" />

            <div className="videoCard__info">
                <Avatar className='video__avatar' alt={channel} src={channelImage} />

                <div className="videoCard__infoText">
                    <h4>{title}</h4>
                    <p>{channel}</p>

                    <p>
                        {views} * {timestamp}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Video