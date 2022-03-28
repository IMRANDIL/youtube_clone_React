import React from 'react'
import './SearchPage.css'
import Sidebar from '../Sidebar/Sidebar'
import TuneSharpIcon from '@mui/icons-material/TuneSharp';





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

                </div>


            </div>

        </>
    )
}

export default SearchPage