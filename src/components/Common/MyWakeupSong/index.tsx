import * as S from "./style";
import Video from "components/Common/Video";
import Img from "assets/img/image 74.svg";

const MyWakeupSong = () => {
  return (
    <S.Container>
      <S.Title>내가 신청한 기상송</S.Title>
      <S.VideoWrap>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Video
            title="TWS (투어스) '첫 만남은 계획대로 되"
            label="HYBE LABELS"
            date="2024.03.18"
            img={Img}
          />
        ))}
      </S.VideoWrap>
    </S.Container>
  );
};

export default MyWakeupSong;
