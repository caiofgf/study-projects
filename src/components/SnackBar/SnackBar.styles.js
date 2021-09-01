import styled, { css, keyframes } from "styled-components";

const types = {
    error: {
        color: "rgb(162, 63, 61)"
    },
    success: {
        color: "rgb(54, 128, 119)"
    },
    attention: {
        color: "rgb(140, 116, 38)"
    }
}

const openEffectKeyframe = keyframes`
    from {bottom: -100px}
    to {bottom: 28px}
`;

const closeEffectKeyframe = keyframes`
    from {bottom: 28px}
    to {bottom: -100px}
`;

const openingEffect = (time) => css`
    ${openEffectKeyframe} .5s, ${closeEffectKeyframe} .5s ${time}ms
`;

const SnackBar = styled.div`
    visibility: ${props => (props.state !== "hidden" ? 'visible' : 'hidden')};
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
    animation: ${props => (props.state === "show" && openingEffect(props.time))};
    transition: ${props => (props.state === "closing" && 'bottom .5s')};
    bottom: ${props=> props.state === "show" ? '28px' : '-100px'};
`; 

const colorBarKeyframe = keyframes`
    from {width: 100%}
    to {width: 0%}
`;

const colorBarEffect = (time) => css`
    ${colorBarKeyframe} ${time/1000}s .5s
`;

const ColorBar = styled.div`
    height: 3px;
    width: 100%;
    margin: 0 auto;
    background-color: ${props => types[props.type].color};
    animation: ${props => (props.open ? colorBarEffect(props.time) : '')};
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

export { SnackBar, ColorBar, Container, Content, TextLeft, BoxRight };