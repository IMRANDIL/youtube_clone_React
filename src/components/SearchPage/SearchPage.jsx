import React from 'react'
import './SearchPage.css'
import Sidebar from '../Sidebar/Sidebar'
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';





const SearchPage = () => {
    return (
        <>
            <div className="app__page">
                <Sidebar />

                <div className='searchPage'>
                    <div className="searchPage__filter">
                        <TuneSharpIcon />
                        <h2>FILTER</h2>
                    </div>
                    <hr />

                    <ChannelRow
                        image='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                        Channel='Clever Programmer'
                        verified
                        subs='54K'
                        numberofvideos={256}
                        description='You can find an awesome projects here and practice those projects and you will learn a lot.'


                    />
                    <hr />

                    <VideoRow
                        views='1.5M'
                        subs='54K'
                        description='If you want to learn web development just watch this video and learn those all for free and You can find an awesome projects here and practice those projects and you will learn a lot.'
                        timestamp='15 seconds ago'
                        channel='Clever Programmer'
                        title="🎈Let's Build A YouTube Like App"
                        image='https://i.ytimg.com/vi/rhPSo4_Tgi0/maxresdefault.jpg'



                    />




                    <VideoRow
                        views='1.5M'
                        subs='54K'
                        description='If you want to learn web development just watch this video and learn those all for free and You can find an awesome projects here and practice those projects and you will learn a lot.'
                        timestamp='15 seconds ago'
                        channel='Clever Programmer'
                        title="🎈Let's Build A YouTube Like App"
                        image='https://i.ytimg.com/vi/rhPSo4_Tgi0/maxresdefault.jpg'



                    />





                    <VideoRow
                        views='1.5M'
                        subs='54K'
                        description='If you want to learn web development just watch this video and learn those all for free and You can find an awesome projects here and practice those projects and you will learn a lot.'
                        timestamp='15 seconds ago'
                        channel='Clever Programmer'
                        title="🎈Let's Build A YouTube Like App"
                        image='https://i.ytimg.com/vi/rhPSo4_Tgi0/maxresdefault.jpg'



                    />




                    <VideoRow
                        views='1.5M'
                        subs='54K'
                        description='If you want to learn web development just watch this video and learn those all for free and You can find an awesome projects here and practice those projects and you will learn a lot.'
                        timestamp='15 seconds ago'
                        channel='Clever Programmer'
                        title="🎈Let's Build A YouTube Like App"
                        image='https://i.ytimg.com/vi/rhPSo4_Tgi0/maxresdefault.jpg'



                    />

                </div>


            </div>

        </>
    )
}

export default SearchPage