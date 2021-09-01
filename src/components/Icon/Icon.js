import * as Styles from './Icon.styles';

const Icon = ({ color, children }) => {
    return (
        <Styles.Icon color={color} >
            {children}
        </Styles.Icon>
    )
};

export default Icon;