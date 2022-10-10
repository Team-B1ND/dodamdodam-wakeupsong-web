import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "style/theme"
import App from 'components/App';
import { RecoilRoot } from "recoil";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </RecoilRoot>
    )

}

export default Root;