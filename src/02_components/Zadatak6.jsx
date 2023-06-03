/*
useEffect primjeri
*/

import {useState, useEffect} from 'react';

const Zadatak6 = () => {
    const [name, setName] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if(name.length > 5) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name]);

    return (
        <div>
            <div>Zadatak 6</div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <h3>{name}</h3>
            <button disabled={isDisabled} onClick={() => alert(`Ovo je nova vrijednost ${name}`)}>Submit</button>
            {isDisabled? <h4 className="error-text">Tekst mora imati vise od 5 karaktera</h4> : <h4 className="green-text">Mozes submitati</h4>}
        </div>
    )
};

export default Zadatak6;