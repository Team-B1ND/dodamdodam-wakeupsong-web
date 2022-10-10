import Title from "components/Common/Title";
import * as S from "./DibsStorage.style";
import { BsFillTrashFill } from "react-icons/bs";
import useWakeupSongDibs from "hooks/wakeupSongDibs/useWakeupSongDibs";


const DibsStorage = () => {

  const { dibsMusicLists } = useWakeupSongDibs();


  return (
    <S.DibsStorageWrapContainer>
      <Title titleMent={"보관함"} subTitleMent={""} />
      <S.DibsStorageWrap>

        <S.InfoTitle>
          <S.MusicName>곡명</S.MusicName>
          <S.ChannelName>채널명</S.ChannelName>
          <S.ApplyDay>신청일</S.ApplyDay>
        </S.InfoTitle>
        {dibsMusicLists.length !== 0 ? dibsMusicLists.map((item, idx) => {
          // const createdDate = item.createdDa/te.split(" ")[0];
          return (
            <S.MusicInfoContainer key={idx + 1}>
              {/* <S.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></S.MusicThumbnailImg> */}
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              {/* <S.VideoTitle>{item.videoTitle}</S.VideoTitle> */}
              {/* <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData> */}
              {/* <S.ApplyDate>{ }</S.ApplyDate> */}
              <BsFillTrashFill style={{ fontSize: "1.2rem", color: "#5c5c5c", cursor: "pointer" }} />
            </S.MusicInfoContainer>
          )
        })
          :
          <S.MusicNull>신청한 기상송이 없쓰껄</S.MusicNull>
        }
      </S.DibsStorageWrap>
    </S.DibsStorageWrapContainer>
  );
};

export default DibsStorage;
