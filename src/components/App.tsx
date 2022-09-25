import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav/index";
import { toast, ToastContainer } from 'react-toastify';


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
      <Header />
      <Main />
      <Nav />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export default App;
