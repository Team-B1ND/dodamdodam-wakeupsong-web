import { DodamNotFoundPage } from "@b1nd/dds-web";
import PageTemplate from "components/Common/PageTemplate";
import WakeupSongPage from "pages/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter basename="/wakesong">
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<WakeupSongPage />} />
        </Route>
        <Route path="*" element={<DodamNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
