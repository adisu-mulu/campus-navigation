import './App.css';
import Navigation from './components/map';
import NavbarMenu from './navbar';
import Home from './components/home'
import OfficeDirectories from './components/office-directories';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './components/sign_in';
import Libraries from './components/libraries';
import AdminOffice from './components/adminoffice';
import SportComplex from './components/sportcomplexes';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <div className="appChildren">
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/navigation" Component={Navigation} />
            <Route path="/office&directories" Component={OfficeDirectories} />
            <Route path="/sign_in" Component={SignIn} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/admin-offices" element={<AdminOffice />} />
            <Route path="/sports-complex" element={<SportComplex />} />
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
