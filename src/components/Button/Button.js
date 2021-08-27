import './Button.css';

const Button = ({ children, type, onClick }) => {
    return (
        <button className={`button ${type}`} onClick={onClick}> {children} </button>
    );
};

export default Button;