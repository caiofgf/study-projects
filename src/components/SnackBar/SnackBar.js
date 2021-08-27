import { Fragment, useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../Button/Button';
import './SnackBar.css';

const SnackBar = ({ text, snackBarButtonLabel, type, id, time, open, onClose }) => {
    const [snackBarShow, setSnackBarShow] = useState(false);
    const timer = useRef();
    const showingState = useRef("hidden");

    const types = {
        error: {
            icon: (() => (<Fragment><path fill="currentColor" d="M12 13.2l4.05 4.05 1.2-1.2L13.2 12l4.05-4.05-1.2-1.2L12 10.8 7.95 6.75l-1.2 1.2L10.8 12l-4.05 4.05 1.2 1.2L12 13.2z"></path><path fill="currentColor" fill-rule="evenodd" d="M1.5 12C1.5 6.15 6.15 1.5 12 1.5S22.5 6.15 22.5 12 17.85 22.5 12 22.5 1.5 17.85 1.5 12zM3 12c0 4.95 4.05 9 9 9s9-4.05 9-9-4.05-9-9-9-9 4.05-9 9z" clip-rule="evenodd"></path></Fragment>)),
            color: "rgb(162, 63, 61)"
        },
        success: {
            icon: (() => (<Fragment><path fill="currentColor" d="M10.5 16.06l-3.75-3.75 1.06-1.06 2.69 2.69 5.689-5.69 1.061 1.061-6.75 6.75z"></path><path fill="currentColor" d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM12 21a9 9 0 110-18 9 9 0 010 18z"></path></Fragment>)),
            color: "rgb(54, 128, 119)"
        },
        attention: {
            icon: (() => (<Fragment><path fill="currentColor" d="M12.75 10.5V18h-1.5v-7.5h1.5zM12 6a1.125 1.125 0 100 2.25A1.125 1.125 0 0012 6z"></path><path fill="currentColor" d="M12 22.5a10.5 10.5 0 110-21 10.5 10.5 0 010 21zM12 3a9 9 0 100 18 9 9 0 000-18z"></path></Fragment>)),
            color: "rgb(140, 116, 38)"
        }
    }

    const openEffect = keyframes`
        from {bottom: -100px}
        to {bottom: 28px}
    `;

    const closeEffect = keyframes`
        from {bottom: 28px}
        to {bottom: -100px}
    `;

    const applyOpeningEffect = css`
        ${openEffect} .5s, ${closeEffect} .5s ${time}ms
    `;

    const applyClosingEffect = css`
        ${closeEffect} .5s
    `

    const SnackBar = styled.div.attrs(props => ({
        style: {
            animation: (props.state === "show" ? applyOpeningEffect : (props.state === "closing" ? applyClosingEffect : "")),
        }
    }))`
        visibility: ${open ? 'visible' : 'hidden'};
        display: flex;
        flex-wrap: wrap;
        padding: 0px 16px 8px;
        width: 325px;
        box-shadow:
            0px 3px 5px -1px rgba(0, 0, 0, .2),
            0px 6px 10px 0px rgba(0, 0, 0, .14),
            0px 1px 18px 0px rgba(0, 0, 0, .12);
        border-radius: 8px;
        position: fixed;
        left: calc(50% - 162.5px);
        animation: ${() => (open && applyOpeningEffect)};
        bottom: ${open ? '28px' : '-100px'};
        /* bottom: ${props => snackBarShow ? '28px' : '-100px'}; */
        /* transition: bottom .5s; */
        /* ${(props) => {
            open && css`
                bottom: 28px;
            `
            !(open) && css`
                bottom: -100px;
            `
        }}; */
    `;

    // const SnackBar = styled.div.attrs(props => ({
    //     style: {
    //         bottom: open ? '28px' : '-100px',
    //         transition: 'bottom .5s'
    //     }
    // }))`
    //     visibility: ${open ? 'visible' : 'hidden'};
    //     display: flex;
    //     flex-wrap: wrap;
    //     padding: 0px 16px 8px;
    //     width: 325px;
    //     box-shadow:
    //         0px 3px 5px -1px rgba(0, 0, 0, .2),
    //         0px 6px 10px 0px rgba(0, 0, 0, .14),
    //         0px 1px 18px 0px rgba(0, 0, 0, .12);
    //     border-radius: 8px;
    //     position: fixed;
    //     left: calc(50% - 162.5px);
    //     /* bottom: ${open ? '28px' : '-100px'}; */
    //     transition: bottom .5s;
    // `;

    const colorBarEffect = keyframes`
        from {width: 100%}
        to {width: 0%}
    `;

    const applyColorBarEffect = css`
        ${colorBarEffect} ${time/1000}s .5s
    `;

    const ColorBar = styled.div`
        height: 3px;
        width: 100%;
        margin: 0 auto;
        background-color: ${types[type].color};
        animation: ${open ? applyColorBarEffect : ''};
    `;

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 325px;
        padding-top: 8px;
    `;

    const Content = styled.div`
        display: flex;
        padding: 8px 0;
    `;

    const TextLeft = styled.span`
        text-align: left;
    `;

    const BoxRight = styled.div`
        margin-left: auto;
    `;

    const Icon = styled.svg.attrs(props => ({
        focusable: false,
        viewBox: "0 0 24 24",
        color: "inherit",
        'aria-hidden': true,
        fill: "none",
        'aria-label':"[object Object]"
    }))`
        height: 20px;
        width: 20px;
        margin-right: 9px;
        color: ${types[type].color}
    `;

    /* const [snackBarClassName, setSnackBarClassName] = useState(""); */     

    useEffect(() => {
        if (open) {
            showingState.current = "show";
            /* setSnackBarShow(true); */
            timer.current = setTimeout(() => {
                setSnackBarShow(false);
                clearTimeout(timer.current);
                showingState.current = "hidden";
                onClose();
            }, time + 500);
        }
    }, [open]);
    
    const closeSnackBar = () => {
        /* setSnackBarShow(false); */
        showingState.current = "closing"
        clearTimeout(timer.current);
        onClose();
        setTimeout(() => {
            showingState.current = "hidden";
        }, 500);
    }

    return (
        <SnackBar state={showingState}>
        {/* <div className={`snack-bar ${snackBarClassName}`} id={id} > */}
            <ColorBar />
            <Container> 
                <Content>
                    <Icon>{types[type].icon()}</Icon>
                    <TextLeft>{text}</TextLeft>
                </Content>
                <BoxRight>
                    <Button
                        type="secundary"
                        onClick={closeSnackBar}
                    >{snackBarButtonLabel}</Button>
                </BoxRight>
            </Container>
        {/* </div> */}
        </SnackBar>
    );
};

export default SnackBar;