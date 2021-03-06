import styled from 'styled-components';

const Icon = styled.svg.attrs((props) => ({
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
    color: ${props => props.color};
`;

export { Icon };