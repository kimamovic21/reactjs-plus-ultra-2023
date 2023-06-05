import './App.css';
import InputComponent from './InputComponent';
import NameComponent from './NameComponent';

const App = () => {
  return (
    <div className="App">
        <h1>Our first demo application</h1>
        <NameComponent 
            name='Kerim' 
            age={26} 
            city='Sarajevo' 
        />
        <InputComponent />
    </div>
  );
};

export default App;
