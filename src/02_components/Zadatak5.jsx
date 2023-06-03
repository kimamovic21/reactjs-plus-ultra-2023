/*
Napraviti komponentu Zadatak5 u kojoj ce se nalaziti
dva dugmeta "+" i "-".
Izmedju dva dugmeta dodati paragraf
gdje ce ispisivati inicijalno broj 0.
Na svaki klik dugmeta povecati/smanjiti vrijednost za 1
i ispisati najnoviju vrijednost u paragrafu.
*/

import {useState, Fragment} from 'react';

const Zadatak5 = () => {
    const [myVariable, setMyVariable] = useState(0);

    return (
        <Fragment>
            <button onClick={() => setMyVariable((prevState) => prevState + 1 )}>+</button>
            <div>{myVariable}</div>
            <button onClick={() => setMyVariable((prevState) => prevState - 1)}>-</button>
        </Fragment>
    )
};

export default Zadatak5;