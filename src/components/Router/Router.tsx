import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Header from "../Header"
import Main from "../Main";
import Nav from "../Nav";
import DibsStorage from "components/DibsStorage";
import { ToastContainer } from 'react-toastify';
import MyMusicStore from "components/MyMusicDetail";
import TodayMusicDetail from "components/TodayMusicDetail";


const Router = () => {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="dibsstorage" element={<DibsStorage />} />
                <Route path="mymusicdetail" element={<MyMusicStore />} />
                <Route path="todaymusicdetail" element={<TodayMusicDetail />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default Router;