import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
// import { IconButton, makeStyles, AppBar, Toolbar, } from '@material-ui/core';
import  MoreVert from '@material-ui/icons/MoreVert';
import  VideoCall from '@material-ui/icons/VideoCall';
import  Apps  from '@material-ui/icons/Apps';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TopSearchBar from './TopSearchBar';
import './topbar.scss';


// const Logo = 'https://https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg';

// const useStyles = makeStyles ({
//     menuButton: {
//         margin: 10,
//     },
//     logo : {
//         height: 25,
//         width: '100%',
//         cursor: 'pointer',
//         // object-fit: 'contain'
//     },
//     icons: {
//         paddingRight: 12,
//         // marginRight: 12,
//         color: '#606060'
//     },
//     // searchIcon: {
//     //     padding: theme.spacing(0, 2),
//     //     height: '100%',
//     //     // position: 'absolute',
//     //     pointerEvents: 'none',
//     //     display: 'flex',
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     // },
//     // search: {
//     //     position: 'relative',
//     //     borderRadius: theme.shape.borderRadius,
//     //     backgroundColor: fade(theme.palette.common.white, 0.15),
//     //     '&:hover': {
//     //         backgroundColor: fade(theme.palette.common.white, 0.25),
//     //     },
//     //     marginRight: theme.spacing(2),
//     //     marginLeft: 0,
//     //     width: '100%',
//     // },
//     appBar: {
//         position: 'sticky',
//         backgroundColor: '#fff',
//         color: 'inherit',
//         boxShadow: 'none',
//         font: '14px Roboto, Arial, sans-serif',
//         display: 'flex',
//         alignItems: 'center',

//     }
// });

function Header() {

    return (
        <div className='topbar'>
                    <div className='topbar-left'>
                            <MenuIcon className='icons'/>
                        <a href="/" > 
                            <img 
                                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                                className='logo' 
                                alt='logo' /> 
                        </a>
                    </div>
                    
                    <div className='topbar-center'>
                        <TopSearchBar />
                    </div>
                    <div className='topbar-right'>
                            <VideoCall  className='topbar-right_icons icons'/>
                            <Apps  className='topbar-right_icons icons'/>
                            <MoreVert  className='topbar-right_icons icons'/>
                            <a href='https://wwww.google.com' className=''>
                                <Button className='topbar_btn'>
                                    <AccountCircle color='primary' className='accnt_icon' /> 
                                    SIGN IN
                                </Button>
                            </a>
                    </div>
        </div>
    )
}

export default Header
