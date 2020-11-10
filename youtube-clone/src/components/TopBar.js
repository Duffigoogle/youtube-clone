import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { IconButton, makeStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { InputBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    icons: {
        paddingRight: 10,
        color: '#606060'
    },
}));

function TopBar() {
    const classes = useStyles();
    return (
        <div>
            <IconButton edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='open drawer'>
                <MenuIcon />
            </IconButton>
            <img src={theme.palette.background.logo} className={classes.logo} alt='logo' />
            <div className={classes.search}>
                <InputBase 
                    placeholder='Search' 
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                />
                <SearchIcon />
            </div>
            <IconButton className={classes.icons} style={{color: }}>
                <VideoCall />
            </IconButton>
            <IconButton className={classes.icons} style={{color: }}>
                <Apps />
            </IconButton>
            <IconButton >
                <MoreVert />
            </IconButton>
            <Button 
                color='secondary' 
                variant='outlined' 
                className={classes.button}
                startIcon={<AccountCircle/>}> SIGN IN
            </Button>
        </div>
    )
}

export default TopBar
