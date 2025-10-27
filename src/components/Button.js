import React from "react";
import './Button.css';

const Button = (props) => {
    return <Button onClick={props.callApi}>
            Click to generate a joke.
        </Button>;
}

export default Button;