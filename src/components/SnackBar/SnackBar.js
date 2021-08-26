import { useEffect, useRef, useState } from 'react';
import './SnackBar.css';

const SnackBar = ({ text, snackBarButtonLabel, type, id, time, open, onClose }) => {
    const types = {
        error: {
            icon: (() => (<svg className="MuiSvgIcon-root jss6" style={{color: types.error.color}} focusable="false" viewBox="0 0 24 24" color="inherit" aria-hidden="true" fill="none" aria-label="[object Object]"><path fill="currentColor" d="M12 13.2l4.05 4.05 1.2-1.2L13.2 12l4.05-4.05-1.2-1.2L12 10.8 7.95 6.75l-1.2 1.2L10.8 12l-4.05 4.05 1.2 1.2L12 13.2z"></path><path fill="currentColor" fill-rule="evenodd" d="M1.5 12C1.5 6.15 6.15 1.5 12 1.5S22.5 6.15 22.5 12 17.85 22.5 12 22.5 1.5 17.85 1.5 12zM3 12c0 4.95 4.05 9 9 9s9-4.05 9-9-4.05-9-9-9-9 4.05-9 9z" clip-rule="evenodd"></path></svg>)),
            color: "rgb(162, 63, 61)"
        },
        success: {
            icon: (() => (<svg className="MuiSvgIcon-root jss14 success-icon" style={{color: types.success.color}} focusable="false" viewBox="0 0 24 24" color="inherit" aria-hidden="true" fill="none" aria-label="[object Object]"><path fill="currentColor" d="M10.5 16.06l-3.75-3.75 1.06-1.06 2.69 2.69 5.689-5.69 1.061 1.061-6.75 6.75z"></path><path fill="currentColor" d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>)),
            color: "rgb(54, 128, 119)"
        },
        attention: {
            icon: (() => (<svg className="MuiSvgIcon-root jss6 attention-icon" style={{color: types.attention.color}} focusable="false" viewBox="0 0 24 24" color="inherit" aria-hidden="true" fill="none" aria-label="[object Object]"><path fill="currentColor" d="M12.75 10.5V18h-1.5v-7.5h1.5zM12 6a1.125 1.125 0 100 2.25A1.125 1.125 0 0012 6z"></path><path fill="currentColor" d="M12 22.5a10.5 10.5 0 110-21 10.5 10.5 0 010 21zM12 3a9 9 0 100 18 9 9 0 000-18z"></path></svg>)),
            color: "rgb(140, 116, 38)"
        }
    }

    const [snackBarClassName, setSnackBarClassName] = useState("");
    const timer = useRef();
     

    useEffect(() => {
        if (open) {
            setSnackBarClassName("visible up");
            timer.current = setTimeout(() => {
                closeSnackBar();
            }, time);
        }
    }, [open]);
    
    const closeSnackBar = () => {
        setSnackBarClassName("visible");
        clearTimeout(timer.current);
        setTimeout(() => {
            setSnackBarClassName("");
            onClose();
        }, 500);
    }

    return (
        <div className={`snack-bar ${snackBarClassName}`} id={id} >
            <div className="color-bar" id="color-bar" style={{backgroundColor: types[type].color, animation: open ? `close-color-bar ${time/1000}s .5s` : ""}}></div>
            <div className="container"> 
                <div className="content">
                    <div className="icon">
                        {types[type].icon()}
                    </div>
                    <span>{text}</span>
                </div>
                <div className="button-div">
                    <button className="action-button" onClick={closeSnackBar} >{snackBarButtonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default SnackBar;