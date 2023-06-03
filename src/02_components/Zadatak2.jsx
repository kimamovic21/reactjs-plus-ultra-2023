/* 
Napraviti komponentu Zadatak2 u kojoj ce se nalaziti
jedan div sa tekstom "Moje ime je {firstName} {lastName}".
firstName i lastName varijable proslijediti kao prop.
Prikazati komponentu na web stranici.
*/

const Zadatak2 = ({ firstName, lastName }) => {

    return (
        <div>Moje ime je {firstName} {lastName}</div>
    )
}

export default Zadatak2;