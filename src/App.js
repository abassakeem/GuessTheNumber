import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage';
import Start from './components/Start';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Homepage /> */}
     {/* <Start /> */}
     <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/start" element={<Start />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
