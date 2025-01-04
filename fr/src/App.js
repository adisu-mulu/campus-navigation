import './App.css';
import Navigation from './components/map';
import NavbarMenu from './navbar';
import home from './components/home'
import OfficeDirectories from './components/office-directories';
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
            <Route path="/office&directories" Component={OfficeDirectories} /> 
          </Routes>
        </Router>
      </div>
      {/* Footer */}
      <footer className="footer text-center py-3">
          <p>&copy; 2024 Dilla University Campus Navigation. All Rights Reserved.</p>
        </footer>
    </div>
  );
}
export default App;
