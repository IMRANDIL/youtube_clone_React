import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';




const ChannelRow = ({ image, description, numberofvideos, verified, Channel, subs }) => {
    return (
        <div className='channelRow'>
            <Avatar src={image} className='channelRow__logo' alt={Channel} />
            <div className="channelRow__text">
                <h4>{Channel} {verified && <CheckCircleOutlineSharpIcon />}</h4>

                <p>{subs} subscribers * {numberofvideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow