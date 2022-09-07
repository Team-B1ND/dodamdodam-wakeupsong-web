import * as S from "./MyMusicPlayList.style";
import { useEffect } from "react";
import imgSrc from "assets/MusicImage/1 (1).jpg";
import useWakeupSongTodayData from "hooks/wakeupSongToday/useWakeupSongTodayData";

interface Props {

}

const MyPlayList = () => {

  const { todaySongData } = useWakeupSongTodayData();

  return (
    <S.MyMusicPlayListContainer>
      <S.MyMusicPlayListTitle>
        오늘의 기상송
      </S.MyMusicPlayListTitle>

      <S.MyMusicPlayListContents>
        {todaySongData && todaySongData.map((item, idx) => {
          return (
            <div key={idx}>
              <img style={{ width: "300px" }} src={item.thumbnailUrl} alt="" />
            </div>
          )
        })}
      </S.MyMusicPlayListContents>
    </S.MyMusicPlayListContainer>
  );
};

export default MyPlayList;
