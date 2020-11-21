import React from 'react';
import SideBarSection from './SideBarSection';
// import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Icon } from 'semantic-ui-react';
import {FaMusic} from 'react-icons/fa';




function SecondarySideBar() {
    return (
        <div className='secondaryside'>
            <h3> Best of Youtube</h3>
            <SideBarSection selected Icon={<FaMusic />} title='Music'/>
            <SideBarSection Icon={SportsSoccerIcon} title='Sports'/>
            <SideBarSection Icon={<Icon bordered inverted color='black' name='gamepad'/>} title='Gaming'/>
            <SideBarSection Icon={<Icon bordered inverted color='black' name='newspaper'/>} title='News'/>
            {/* <SideBarSection Icon={SubscriptionsIcon} title='Live'/>
            <SideBarSection Icon={SubscriptionsIcon} title='360 Video'/> */}
            <hr />
            <SideBarSection Icon={AddCircleIcon} title='Browse channels'/>
            <hr />        
        </div>
    )
}

export default SecondarySideBar
