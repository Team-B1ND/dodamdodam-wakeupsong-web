import styled from "styled-components";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import { palette } from "style/palette";

const App = () => {
  return (
    <AppContainer>
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
      <Router />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${palette.gray[50]};
`;

export default App;
