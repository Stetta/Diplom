import React from 'react';
import classes from './Loader.module.css';

const MyLoader = ({children, ...props}) => {

    return (
        <div className={classes.loader}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
        </div>
    );
};

export default MyLoader;