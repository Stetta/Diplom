import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({children, ...props}) => {

    return (
        <input {...props} className={classes.MyInp}>
            {children}
        </input>
    );
};

export default MyInput;