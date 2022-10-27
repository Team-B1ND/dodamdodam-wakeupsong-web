import { MainContainer, } from "./Main.style";
import MusicList from "./MusicList";
import MyMusicList from "./MyMusicList";
import TodayMusicList from "./TodayMusicList";

const Main = () => {
  return (
    <MainContainer>
      <TodayMusicList />
      <MusicList />
      <MyMusicList />
    </MainContainer>
  );
};

export default Main;
