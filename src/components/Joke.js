import React from "react";
import Button from './Button';
import './Joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");


    return(
        <div className="joke">
            <Button/>
            <p></p>
        </div>
    );
}

export default Joke;