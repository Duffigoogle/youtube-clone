import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { IconButton, makeStyles, AppBar, Toolbar, } from '@material-ui/core';
import  MoreVert from '@material-ui/icons/MoreVert';
import  VideoCall from '@material-ui/icons/VideoCall';
import  Apps  from '@material-ui/icons/Apps';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TopBarSearch from './TopBarSearch';


const Logo = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xda-developers.com%2Fgoogle-talks-about-youtubes-new-logo-recent-changes-and-future-ideas%2F&psig=AOvVaw2EWKmumx-xbKoviKqtQnqR&ust=1605275288366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDWwbSS_ewCFQAAAAAdAAAAABAD';

const useStyles = makeStyles ({
    menuButton: {
        margin: 10,
    },
    logo : {
        height: 30,
        width: '100%',
        cursor: 'pointer',
        // object-fit: Contain,
    },
    icons: {
        paddingRight: 12,
        // marginRight: 12,
        color: '#606060'
    },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     // position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100%',
    // },
    appBar: {
        position: 'sticky',
        backgroundColor: '#5a5a5a',
        color: 'inherit',
        boxShadow: 'none',
        font: '14px Roboto, Arial, sans-serif'

    }
});

function TopBar() {
    const classes = useStyles();
    
    // const theme = useTheme();

    return (
        <div className='topbar'>
            <AppBar 
                    className={classes.AppBar}>
                <Toolbar>
                    <div className='topbar-left'>
                        <IconButton edge='start'
                                    className={classes.menuButton}
                                    color='inherit'
                                    aria-label='open drawer'>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    
                    <div>
                        <a href="/" > <img src={Logo} className={classes.logo} alt='logo' /> </a>
                    </div>
                    
                    <div className='topbar-center'>
                        <TopBarSearch />
                    </div>
                    <div className='topbar-right'>
                        <IconButton className={classes.icons}>
                            <VideoCall />
                        </IconButton>
                        <IconButton className={classes.icons}>
                            <Apps />
                        </IconButton>
                        <IconButton className={classes.icons}>
                            <MoreVert />
                        </IconButton>
                        <Button 
                            // onClick={handleLogin}
                            color='secondary' 
                            variant='outlined' 
                            className={classes.menuButton}
                            startIcon={<AccountCircle/>}> SIGN IN
                        </Button>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
