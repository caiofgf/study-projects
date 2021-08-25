import './SnackBar.css';
import Button from '../Button/Button';

const SnackBar = ({ text, snackBarButtonLabel, openButtonLabel, type, id, buttonFunction, time }) => {
    const timeoutList = [];
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

    function toggleSnackBar() {
        let elem = document.getElementById('my-snack-bar');
        let colorBar = document.getElementById('color-bar');
        elem.classList.add('visible');
        colorBar.style.animation = `close-color-bar ${time/1000}s .5s`;
        timeoutList.push(setTimeout(() => {
            elem.classList.remove('visible')
        }, time));
        elem.classList.add('close');
        timeoutList.push(setTimeout(() => {
            elem.classList.remove('close'); 
            colorBar.style.animation = "";
        }, time + 500));
    }

    function closeSnackBar() {
        let elem = document.getElementById('my-snack-bar');
        let colorBar = document.getElementById('color-bar');
        elem.classList.remove('visible');
        elem.classList.add('close');
        setTimeout(() => {
            elem.classList.remove('close'); 
            colorBar.style.animation = "";
            while (timeoutList.length) {
                clearTimeout(timeoutList.pop());
            }
        }, 500); 
    }


    return (
        <>
        <Button
            onClick={toggleSnackBar}
        >{openButtonLabel}</Button>
        <div className="snack-bar" id={id} >
            <div className="color-bar" id="color-bar" style={{backgroundColor: types[type].color}}></div>
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
        </>
    );
};

export default SnackBar;