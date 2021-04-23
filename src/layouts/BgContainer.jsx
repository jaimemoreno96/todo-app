import React from 'react';
import { makeStyles } from '@material-ui/core';

import bgLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';

const useStyles = makeStyles(theme => ({
    bgImage: {
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${bgMobileLight})`
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${bgLight})`
        },
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
}))

const BgContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.bgImage}>
            {props.children}
        </div>
    );
}

export default BgContainer;