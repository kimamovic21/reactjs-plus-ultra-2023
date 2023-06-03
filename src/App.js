import './App.css';
import InputComponent from './01_components/InputComponent';
import NameComponent from './01_components/NameComponent';

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
