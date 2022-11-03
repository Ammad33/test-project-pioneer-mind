import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gender from '../src/containers/gender/index';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="" element={<Gender/>} />
        <Route path="/dashboard" element={<Dashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
