import React from 'react';
import PrimarySideBar from './PrimarySideBar';
import SecondarySideBar from './SecondarySideBar';
import TertiarySideBar from './TertiarySideBar';
import './sidebar.scss';

function Sidebar() {
    return (
        <div className='sidebar'>
            <PrimarySideBar />
            <SecondarySideBar />
            <TertiarySideBar />
        </div>
    )
}

export default Sidebar
