import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FolderOrProduct from "./FolderOrProduct";
import { useState } from "react";
import SearchContext from "./SearchContext";
import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchContext.Provider value={search}>
        <Routes>
          <Route path="/" element={<Navigate to="/0" />} />
          <Route path="/:id/*" element={<FolderOrProduct />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
