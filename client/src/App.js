//import './css/App.css';
import Login from './components/login.js'
import routeButtons from "./components/buttons"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>

        <routeButtons></routeButtons>
      </header>
    </div>
  );
}

export default App;
