import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

import { DarkModeContext } from '../context/darkmode/DarkModeContext';
import bgLight from '../assets/images/bg-desktop-light.jpg';
import bgDark from '../assets/images/bg-desktop-dark.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg';

const useStyles = makeStyles((theme) => ({
    bgImageStyle: {
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundColor: darkmode => darkmode ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)',
        backgroundSize: '100%',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: darkmode => darkmode ? `url(${bgMobileDark})` : `url(${bgMobileLight})`
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: darkmode => darkmode ? `url(${bgDark})` : `url(${bgLight})`
        },
    },

}))

const BgContainer = (props) => {
    const { darkmode } = useContext(DarkModeContext);
    const classes = useStyles(darkmode);

    return (
        <div className={classes.bgImageStyle}>
            {props.children}
        </div>
    );
}

export default BgContainer;