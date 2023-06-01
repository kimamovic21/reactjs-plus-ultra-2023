import './App.css';
import InputComponent from './components/InputComponent';
import NameComponent from './components/NameComponent';

function App() {
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
