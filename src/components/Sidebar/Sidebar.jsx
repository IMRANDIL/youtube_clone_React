import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';









const Sidebar = () => {
    return (
        <div className='sidebar' >


            <SidebarRow selected title='Home' Icon={HomeSharpIcon} />
            <SidebarRow title='Trending' Icon={WhatshotSharpIcon} />
            <SidebarRow title='Subscription' Icon={SubscriptionsSharpIcon} />
            <hr />
            <SidebarRow title='Library' Icon={VideoLibrarySharpIcon} />
            <SidebarRow title='History' Icon={HistorySharpIcon} />
            <SidebarRow title='Your videos' Icon={OndemandVideoSharpIcon} />
            <SidebarRow title='Watch Later' Icon={WatchLaterSharpIcon} />
            <SidebarRow title='Liked Videos' Icon={ThumbUpAltSharpIcon} />
            <SidebarRow title='Show more' Icon={ExpandMoreSharpIcon} />
        </div>
    )
}

export default Sidebar