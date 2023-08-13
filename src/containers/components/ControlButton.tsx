type ButtonsProps = {
    children: any;
    onClick?: () => void;
}



const ControlButton = ({children, onClick}: ButtonsProps) => {
    return (
        <button onClick={onClick} className="control-button">
            {children}
        </button>
    )
}

export default ControlButton;