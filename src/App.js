import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './hompage/pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}>

      </Route>

      </Routes>
    </div>
  );
}

export default App;
