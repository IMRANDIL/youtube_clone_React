import React from 'react'
import Video from '../Video/Video'

import './Recommended.css'




const Recommended = () => {
    return (
        <div className='recommended'>

            <h2>Recommended</h2>
            <div className="recommended__videos">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>

        </div>
    )
}

export default Recommended