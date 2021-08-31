import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import AttentionIcon from '../Icon/AttentionIcon';
import ErrorIcon from '../Icon/ErrorIcon';
import SuccessIcon from '../Icon/SuccessIcon';
import * as Styles from './SnackBar.styles';

const SnackBar = ({ text, snackBarButtonLabel, type, id, time, open, onClose }) => {
    const timer = useRef();
    const [showingState, setShowingState] = useState("hidden");

    useEffect(() => {
        if (open) {
            setShowingState("show");
            /* setSnackBarShow(true); */
            timer.current = setTimeout(() => {
                clearTimeout(timer.current);
                setShowingState("hidden");
                onClose();
            }, time + 500);
        }
    }, [open]);
    
    const closeSnackBar = () => {
        /* setSnackBarShow(false); */
        setShowingState("closing");
        clearTimeout(timer.current);
        setTimeout(() => {
            onClose();
            setShowingState("hidden");
        }, 50000);
    }

    return (
        <Styles.SnackBar state={showingState} time={time} >
            <Styles.ColorBar type={type} open={open} time={time} />
            <Styles.Container> 
                <Styles.Content>
                    {type === "error" &&
                        <ErrorIcon />
                    }
                    {type === "success" &&
                        <SuccessIcon />
                    }
                    {type === "attention" &&
                        <AttentionIcon />
                    }
                    <Styles.TextLeft>{text}</Styles.TextLeft>
                </Styles.Content>
                <Styles.BoxRight>
                    <Button
                        type="secundary"
                        onClick={closeSnackBar}
                    >{snackBarButtonLabel}</Button>
                </Styles.BoxRight>
            </Styles.Container>
        </Styles.SnackBar>
    );
};

export default SnackBar;