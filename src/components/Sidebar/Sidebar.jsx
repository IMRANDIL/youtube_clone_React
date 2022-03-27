import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';






const Sidebar = () => {
    return (
        <div className='sidebar'>


            <SidebarRow title='Home' icon={<HomeSharpIcon />} />
            <SidebarRow title='Trending' icon={<WhatshotSharpIcon />} />
            <SidebarRow title='Subscription' icon={<SubscriptionsSharpIcon />} />


        </div>
    )
}

export default Sidebar