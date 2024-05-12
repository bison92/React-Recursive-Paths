import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './App.css'
import FolderOrProduct from './FolderOrProduct';

function App() {
  return (

    <Router>
      <Routes  >
        <Route path="/" element={<Navigate to="/0" />} />
        <Route path="/:id/*" element={<FolderOrProduct />} />
      </Routes>
    </Router>
  )
}

export default App
