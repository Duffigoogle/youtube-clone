import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { IconButton, makeStyles, fade, AppBar, Toolbar, useTheme } from '@material-ui/core';
import  MoreVert from '@material-ui/icons/MoreVert';
import  VideoCall from '@material-ui/icons/VideoCall';
import  Apps  from '@material-ui/icons/Apps';
import { Search as SearchIcon } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import InputBase from '@material-ui/core/InputBase';
import TopBarSearch from './TopBarSearch';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        margin: theme.spacing(1),
    },
    logo : {
        height: 30,
        cursor: 'pointer'
    },
    icons: {
        paddingRight: 10,
        color: '#606060'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        // position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
    },
    appBar: {
        position: 'fixed',
        backgroundColor: 'grey',
        color: 'inherit',
        boxShadow: 'none',
        font: '14px Roboto, Arial, sans-serif'

    }
}));

function TopBar() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <AppBar position='static'
                    className={classes.AppBar}
                    style={{ backgroundColor: theme.palette.background.drawer, color: theme.palette.background.text}}>
                <Toolbar>
                    <IconButton edge='start'
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='open drawer'>
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.background.logo} className={classes.logo} alt='logo' />
                    <div className={classes.search}>
                        {/* <InputBase 
                            placeholder='Search' 
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                        /> */}
                        <TopBarSearch />
                    </div>
                    <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
                        <MoreVert />
                    </IconButton>
                    <Button 
                        // onClick={handleLogin}
                        color='secondary' 
                        variant='outlined' 
                        className={classes.menuButton}
                        startIcon={<AccountCircle/>}> SIGN IN
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
