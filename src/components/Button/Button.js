import styled from 'styled-components';

const Button = ({ children, type, onClick }) => {
    const styleTypes = {
        primary: {
            padding: "16px 32px",
            backgroundColor: "#5063F8",
            lineHeight: "16px",
            color: "white",
            hover: {
                backgroundColor: "#2138EA"
            }
        },
        secundary: {
            padding: "8px 16px",
            backgroundColor: "#FFFFFF",
            lineHeight: "24px",
            color: "#5063F8",
            hover: {
                backgroundColor: "#F0F0FF"
            }
        }
    }

    const Button = styled.button`
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        padding: ${styleTypes[type].padding};
        background-color: ${styleTypes[type].backgroundColor};
        line-height: ${styleTypes[type].lineHeight};
        color: ${styleTypes[type].color};
        &:hover {
            background-color: ${styleTypes[type].hover.backgroundColor};
        }
    `;
    return (
        // <button className={`button ${type}`} onClick={onClick}> {children} </button>
        <Button onClick={onClick}>{children}</Button>
    );
};

export default Button;