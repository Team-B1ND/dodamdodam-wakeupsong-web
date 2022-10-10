import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Header from "../Header"
import Main from "../Main";
import Nav from "../Nav";
import Storage from "components/Storage";
import { ToastContainer } from 'react-toastify';
import MyMusicStore from "components/MyMusicStore";


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
                <Route path="storage" element={<Storage />} />
                <Route path="mymusicstore" element={<MyMusicStore />} />
            </Routes>

            <Nav />
        </BrowserRouter>
    )
}

export default Router;