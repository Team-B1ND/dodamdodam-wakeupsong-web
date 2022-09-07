import styled from "styled-components";
import Main from "./Main";
import Nav from "./Nav/index";

const App = () => {
  return (
    <AppContainer>
      <Nav />
      <Main />
    </AppContainer>
  );
}

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
`;

export default App;
