import React, { useEffect } from 'react';
import axios from 'axios';

const Jokes = ({ close }) => {
    const [ joke, setJoke ] = React.useState();
    useEffect(() => {
        async function tellMeAJoke() {
            try {
                let { data } = await axios.get('https://official-joke-api.appspot.com/random_joke')
                setJoke(data);
            } catch (err) {
                console.warn(err);
                setJoke({setup: "What's worse than a bad joke?", punchline: "No jokes..."})
            }
        }

        tellMeAJoke()
        const stream = setInterval(tellMeAJoke, 10000)

        return () => clearInterval(stream)
    }, [])


    return (
        <>
        <span onClick={close} style={{cursor: "pointer"}}>x</span>
        { joke ?
            <>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            </>
        : <h2>Jokes are on their way!</h2> }
        </>
    )
}

export default Jokes;