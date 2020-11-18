import React from 'react';
import SideBarSection from './SideBarSection';
// import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Footer from './Footer';



function TertiarySideBar() {
    return (
        <div className='tertiaryside'>
            <h3> More From Youtube</h3>
            <SideBarSection Icon={YouTubeIcon} title='Youtube Premium'/>
            <SideBarSection Icon={WhatshotIcon} title='Live'/>
            <hr />
            <SideBarSection Icon={SettingsIcon} title='Setting'/>
            <SideBarSection Icon={FlagIcon} title='Report history'/>
            <SideBarSection Icon={HelpIcon} title='Help'/>
            <SideBarSection Icon={AnnouncementIcon} title='Send feedback'/>
            <hr />
            <Footer />
                   
        </div>
    )
}

export default TertiarySideBar
