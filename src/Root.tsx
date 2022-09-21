import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "style/theme"
import App from 'components/App';

const Root = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    )

}

export default Root;