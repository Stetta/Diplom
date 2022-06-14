import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({...props}) => {
    return (
        <select {...props} className={classes.MySel}>

        </select>
    );
};

export default MySelect;