import * as S from "./MyMusicList.style";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMy";
import Title from "components/Common/Title";
import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useGetMelonChartLists } from "querys/melonChart/melonChart.query";

const MyMusicList = () => {

  const { myData, getMyData } = useWakeupSongMyData();

  useMemo(() => {
    getMyData();
  }, [])

  return (
    <S.MyMusicListContainer>

      <S.TitleContainer>
        <Title titleMent={"마이뮤직"} subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"} />
        <Link className="seeMoreDetails" to={"/mymusicdetail"}>더보기</Link>
      </S.TitleContainer>

      <S.MyMusicListContents>
        {myData.length !== 0 ? myData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <S.MyMusicContainer key={idx}>
              <S.MyMusicThumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />
              <S.MyMusicThumbnailTitle>{item.videoTitle}</S.MyMusicThumbnailTitle>
              <S.CreatedDateContainer>
                <div style={{ color: "#c5c5c5" }}>신청일</div>
                <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
              </S.CreatedDateContainer>
            </S.MyMusicContainer>
          )
        }) : <S.MusicNull>신청한 기상송이 없쓰껄</S.MusicNull>}
      </S.MyMusicListContents>
    </S.MyMusicListContainer>
  );
};

export default MyMusicList;
