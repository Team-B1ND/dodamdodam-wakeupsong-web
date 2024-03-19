import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Main from "../Main";
import Nav from "../common/Nav";
import MyMusic from "components/MyMusic";
import TodayMusic from "components/TodayMusic";
import PendingMusic from "components/PendingMusic";

const Router = () => {
  return (
    <BrowserRouter basename="/wakeupsong">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mymusic" element={<MyMusic />} />
        <Route path="/todaymusic" element={<TodayMusic />} />
        <Route path="/pendingmusic" element={<PendingMusic />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
