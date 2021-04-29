
import './App.css';
import Greet from './components/Greet';
import Welcome from'./components/Welcome';
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
<Greet name="alice" heroname="rishi"></Greet>
<Greet name="mark" heroname="he is hero"></Greet>
<Greet name="joe" heroname="he is "></Greet>
    </div>
  );
}

export default App;
