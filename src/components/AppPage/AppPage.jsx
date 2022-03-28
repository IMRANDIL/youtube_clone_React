import React from 'react'
import Sidebar from '../Sidebar/Sidebar';

import Recommended from '../RecommendedVideos/Recommended';






const AppPage = () => {
    return (
        <>

            <div className='app__page'>
                <Sidebar />
                <Recommended />
            </div>
        </>
    )
}

export default AppPage