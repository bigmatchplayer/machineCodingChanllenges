import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddChips from "./AddChipsMachineCoding/AddChips";
import MainFile from "./ProfileSections/MainFile";
import Main from "./AutoSearchBar/Main";
import Home from "./Home";
import FileExplorer from "./FileExplorer/FileExplorer";
import GridBox from "./GridLightGreen/GridBox";
import Progressbar from "./ProgressBar/Main";
import OTP from "./OTP_Input/Main";
import TODO from "./TODO/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddChips" element={<AddChips />} />

        <Route path="/profileSections" element={<MainFile />} />
        <Route path="/autoSearch" element={<Main />} />
        <Route path="/gridLight" element={<GridBox />} />
        <Route path="/progressBar" element={<Progressbar />} />
        <Route path="/otpInput" element={<OTP />} />
        <Route path="/todo" element={<TODO />} />

        {/* <Route path="/file" element={<FileExplorer />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
