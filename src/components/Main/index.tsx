import { MainContainer } from "./style";
import ApproveMusicList from "./ApproveMusicList";
import MusicList from "./MusicList";
import MyMusicList from "./MyMusicList";

const Main = () => {
  return (
    <MainContainer>
      <ApproveMusicList />
      <MusicList />
      <MyMusicList />
    </MainContainer>
  );
};

export default Main;
