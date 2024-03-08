import GlobalStyle from "style/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "style/theme";
import App from "components/App";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const Root = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
