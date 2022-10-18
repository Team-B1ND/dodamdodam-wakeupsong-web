import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../Header"
import Main from "../Main";
import Nav from "../Nav";
import DibsStorage from "components/DibsStorage";
import MyMusicStore from "components/MyMusicDetail";
import TodayMusicDetail from "components/TodayMusicDetail";
import PendingMusicDetail from "components/PendingMusicDetail";

const Router = () => {
    return (
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/wakesong" element={<Main />} />
                <Route path="/dibsstorage" element={<DibsStorage />} />
                <Route path="/mymusicdetail" element={<MyMusicStore />} />
                <Route path="/todaymusicdetail" element={<TodayMusicDetail />} />
                <Route path="/pendingmusicdetail" element={<PendingMusicDetail />} />
            </Routes>
            <Nav />
        </BrowserRouter >
    )
}

export default Router;