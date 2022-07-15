import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Routes from './components/Routes'
import Header from './components/Header'


function App() {
  return (
    <body>
    <Router>
        <Header />
        <Navigation />
        <main>
          <Routes />
        </main>
    </Router>
    </body>
  );
}

export default App;
