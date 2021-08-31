import styled from "styled-components";

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
    padding: ${props => styleTypes[props.type].padding};
    background-color: ${props => styleTypes[props.type].backgroundColor};
    line-height: ${props => styleTypes[props.type].lineHeight};
    color: ${props => styleTypes[props.type].color};
    &:hover {
        background-color: ${props => styleTypes[props.type].hover.backgroundColor};
    }
`;

export {Button};