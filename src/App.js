/* --- App.js --- */

import './App.css';
import Header from './components/header/Header'
import Search from './components/Search/Search'
import initialDetails from './api/data.json'

function App() {
  return (
    <div className="App">
      <Header />
      <Search details={initialDetails} />
    </div>
  );
}

export default App;
