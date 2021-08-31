import * as Styles from './Button.styles'

const Button = ({ children, type, onClick }) => {
    
    return (
        <Styles.Button type={type} onClick={onClick}>{children}</Styles.Button>
    );
};

export default Button;