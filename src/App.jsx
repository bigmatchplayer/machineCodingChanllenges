import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddChips from "./AddChipsMachineCoding/AddChips";
import MainFile from "./ProfileSections/MainFile";
import Main from "./AutoSearchBar/Main";
import Home from "./Home";
import FileExplorer from "./FileExplorer/FileExplorer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddChips" element={<AddChips />} />

        <Route path="/profileSections" element={<MainFile />} />
        <Route path="/autoSearch" element={<Main />} />
        <Route path="/file" element={<FileExplorer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
