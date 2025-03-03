import * as S from "./style";
import Video from "components/Common/Video/index";
import Img from "assets/img/image 74.svg";

const ApproveWakeupSong = () => {
  return (
    <S.Container>
      <S.Title>기상송</S.Title>
      <S.ContentWrap>
        <S.ContentTitle>내일의 기상송</S.ContentTitle>
        <S.VideoWrap>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Video
              title="TWS (투어스) '첫 만남은 계획대로 되"
              label="HYBE LABELS"
              img={Img}
              key={idx}
            />
          ))}
        </S.VideoWrap>
      </S.ContentWrap>
    </S.Container>
  );
};

export default ApproveWakeupSong;
