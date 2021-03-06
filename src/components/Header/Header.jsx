import React, { useState } from 'react'
import './Header.css'

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Avatar, IconButton } from '@mui/material';

import logo from '../../img/youtube.gif'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';

import { Link } from 'react-router-dom';















const Header = () => {


    const [searchInput, setSearchInput] = useState('')




    return (
        <div className='header'>

            <div className="header__left">
                <IconButton>
                    <MenuSharpIcon fontSize='large' />

                </IconButton>
                <Link to='/'>

                    <img draggable='false' src={logo} alt="logo-img" className='header__logo' />
                </Link>


            </div>

            <div className="header__middle">
                <input type="text" placeholder='Search...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <Link to={`/search/${searchInput}`}>

                    <SearchSharpIcon className='input__search' />
                </Link>

            </div>


            <div className="header__right">
                <IconButton>

                    <VideoCallSharpIcon className='header__icon' />
                </IconButton>
                <IconButton>

                    <AppsSharpIcon className='header__icon' />
                </IconButton>

                <IconButton>
                    <NotificationsActiveSharpIcon className='header__icon' />
                </IconButton>

                <IconButton>
                    <Avatar src='https://avatars.githubusercontent.com/u/71559091?s=400&u=261c7198a75f868c1d0c5deda860c96ad06d8820&v=4' alt='profile-img' />
                </IconButton>


            </div>


        </div>
    )
}

export default Header