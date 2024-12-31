import './App.css';
import Navigation from './components/map';
import NavbarMenu from './navbar';
import home from './components/home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <div className="appChildren">
        <Router>
          <Routes>
            <Route path="/" Component={home} />
            <Route path="/navigation" Component={Navigation} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
