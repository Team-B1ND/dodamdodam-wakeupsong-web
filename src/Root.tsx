import App from "components/App";
import { RecoilRoot } from "recoil";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProviderContainer from "components/Common/ThemeProviderContainer";

const Root = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer autoClose={3000} limit={1} />
        <ThemeProviderContainer>
          <App />
        </ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
