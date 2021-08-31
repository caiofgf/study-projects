import Icon from "./Icon";

const ErrorIcon = () => {
    return(
        <Icon color="rgb(162, 63, 61)">
            <path fill="currentColor" d="M12 13.2l4.05 4.05 1.2-1.2L13.2 12l4.05-4.05-1.2-1.2L12 10.8 7.95 6.75l-1.2 1.2L10.8 12l-4.05 4.05 1.2 1.2L12 13.2z"></path><path fill="currentColor" fill-rule="evenodd" d="M1.5 12C1.5 6.15 6.15 1.5 12 1.5S22.5 6.15 22.5 12 17.85 22.5 12 22.5 1.5 17.85 1.5 12zM3 12c0 4.95 4.05 9 9 9s9-4.05 9-9-4.05-9-9-9-9 4.05-9 9z" clip-rule="evenodd"></path>
        </Icon>
    );
};

export default ErrorIcon;