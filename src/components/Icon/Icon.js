import styled from 'styled-components';

const Icon = ({ color, children }) => {
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
        color: ${color};
    `;

    return (
        <Icon>
            {children}
        </Icon>
    )
};

export default Icon;