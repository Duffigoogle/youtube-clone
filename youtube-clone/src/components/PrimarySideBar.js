import React from 'react';
import SideBarSection from './SideBarSection';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';



function PrimarySideBar() {
    return (
        <div className='primaryside'>
            <SideBarSection selected Icon={HomeIcon} title='Home'/>
            <SideBarSection Icon={WhatshotIcon} title='Trending'/>
            <SideBarSection Icon={SubscriptionsIcon} title='Subscriptions'/>
            <hr />
            <SideBarSection Icon={VideoLibraryIcon} title='Library'/>
            <SideBarSection Icon={HistoryIcon} title='History'/>
            <hr />        
        </div>
    )
}

export default PrimarySideBar
