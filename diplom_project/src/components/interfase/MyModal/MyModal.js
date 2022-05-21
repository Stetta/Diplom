import React from 'react';
import cl from './MyModal.module.css';
import './MyModal.module.css';

const myModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active);
        document.body.style.overflow = "hidden";
        if(document.getElementById("App")) document.getElementById("App").style.overflow="hidden";
    } else {
        document.body.style.overflow="unset";
        if(document.getElementById("App")) document.getElementById("App").style.overflow="unset";
    }

    

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default myModal;