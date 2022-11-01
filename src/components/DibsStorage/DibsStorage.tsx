import Title from "components/Common/Title";
import * as Style from "./DibsStorage.style";
import { BsFillTrashFill } from "react-icons/bs";
import useWakeupSongDibs from "hooks/wakeupSongDibs/useWakeupSongDibs";

//서버 로직이 완성되지 않아서 뷰 구현은 됬지만 통신 로직이 안되어 있음. 그래서 사용안함
const DibsStorage = () => {

  const { dibsMusicLists } = useWakeupSongDibs();

  return (
    <Style.DibsStorageWrapContainer>
      <Title titleMent={"보관함"} subTitleMent={""} />
      <Style.DibsStorageWrap>

        <Style.InfoTitle>
          <Style.MusicName>곡명</Style.MusicName>
          <Style.ChannelName>채널명</Style.ChannelName>
          <Style.ApplyDay>신청일</Style.ApplyDay>
        </Style.InfoTitle>
        {dibsMusicLists.length !== 0 ? dibsMusicLists.map((item, idx) => {
          // const createdDate = item.createdDa/te.split(" ")[0];
          return (
            <Style.MusicInfoContainer key={idx + 1}>
              {/* <Style.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></Style.MusicThumbnailImg> */}
              <Style.ApplyRanking>{idx + 1}</Style.ApplyRanking>
              {/* <Style.VideoTitle>{item.videoTitle}</Style.VideoTitle> */}
              {/* <Style.ChannelNameData>{item.channelTitle}</Style.ChannelNameData> */}
              {/* <Style.ApplyDate>{ }</Style.ApplyDate> */}
              <BsFillTrashFill style={{ fontSize: "1.2rem", color: "#5c5c5c", cursor: "pointer" }} />
            </Style.MusicInfoContainer>
          )
        })
          :
          <Style.MusicNull>신청한 기상송이 없쓰껄</Style.MusicNull>
        }
      </Style.DibsStorageWrap>
    </Style.DibsStorageWrapContainer>
  );
};

export default DibsStorage;
