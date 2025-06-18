import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div style={styles.appWrapper}>
        <div style={styles.pageArea}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            
          </Routes>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  pageArea: {
    width: '100%',
    maxWidth: '375px',
    paddingBottom: '100px', // NavBar 공간 확보
  },
};

export default App;