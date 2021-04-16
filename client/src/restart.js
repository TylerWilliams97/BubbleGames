App.js


import './App.css';
// import Login from './login.js'
import SwipeableTemporaryDrawer from './home.js'
import OutlinedCard from './gameCard1'
import OutlinedCard2 from './gameCard2'
import OutlinedCard3 from'./gameCard3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SwipeableTemporaryDrawer>
          </SwipeableTemporaryDrawer>
          
          <OutlinedCard></OutlinedCard>
          <OutlinedCard2></OutlinedCard2>
          <OutlinedCard3></OutlinedCard3>
          {/* <Login></Login> */}
      </header>
    </div>
  );
}

export default App;
