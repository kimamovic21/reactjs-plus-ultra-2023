/*
Napraviti komponentu Zadatak4 u kojoj ce se nalaziti
jedan input i paragraf ispod inputa.
Ispisivati vrijednost inputa u paragrafu.
Koristiti useState hook.
*/
import {useState, Fragment} from 'react';

const Zadatak4 = () => {
    const [input, setInput] = useState('');

    return (
        <Fragment>
            <input
             type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <p>{input}</p>
        </Fragment>
    )

};

export default Zadatak4;