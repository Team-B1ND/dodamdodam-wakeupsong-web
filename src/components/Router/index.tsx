import WakeupSongPage from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter basename="/wakesong">
      <Routes>
        <Route path="/" element={<WakeupSongPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
