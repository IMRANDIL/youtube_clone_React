import React from 'react'

import './VideoRow.css'



const VideoRow = ({ views, subs, description, timestamp, channel, title, image }) => {
    return (
        <div className='videoRow'>


            <img src={image} className='videoRow__thumbnail' alt={channel} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className='headline'>{channel} *{' '} <span className='videoRow__subs'> <span className='subsNumber'>{subs}</span> Subscribers</span>{' '} {views} * {timestamp}</p>
                <p className='description'>{description}</p>
            </div>

        </div>
    )
}

export default VideoRow