import Header from './components/Header';
import Homepage from './components/Homepage';
import DetailsPage from './components/DetailsPage';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage  />} />
          <Route exact path="/movies/:id" element={<DetailsPage />} />
        </Routes >
      </Router >
    </>
  );
}

export default App;
