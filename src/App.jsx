import './App.css'
import Welcome from './components/Welcome.jsx'
import AboutMe from './components/AboutMe.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import Navigation from './components/Navigation.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  const mainBoxStyle = {
    marginTop: "5vw",
    marginLeft: "20px",
    marginRight: "20px",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
  }
  return (
    <HashRouter>
      <div style={mainBoxStyle}>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/aboutMe" element={<AboutMe />} />
          <Route exact path="/getInTouch" element={<GetInTouch />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
