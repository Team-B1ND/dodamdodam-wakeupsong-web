import styled from "styled-components";
import Router from "./Router";

const App = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default App;
