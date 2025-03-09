import App from "components/App";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProviderContainer from "components/Common/ThemeProviderContainer";

const Root = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProviderContainer>
          <App />
        </ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
