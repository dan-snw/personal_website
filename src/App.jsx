import './App.css'
import Welcome from './components/Welcome.jsx'
import Portfolio from './components/Portfolio.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import Navigation from './components/Navigation.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  const mainBoxStyle = {
    marginTop: "20vh",
    maxWidth: "600px",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
  }
  return (
    <HashRouter>
      <div style={mainBoxStyle}>
      <Navigation />
        <h1>Hi, I'm Dan.</h1>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/getInTouch" element={<GetInTouch />} />
          </Routes>
        </div>
    </HashRouter>
  )
}

export default App;
