import React from 'react'
import Sidebar from '../Sidebar/Sidebar';

import Recommended from '../RecommendedVideos/Recommended';
import Header from '../Header/Header';





const AppPage = () => {
    return (
        <>
            <Header />
            <div className='app__page'>
                <Sidebar />
                <Recommended />
            </div>
        </>
    )
}

export default AppPage