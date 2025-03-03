import * as S from "./style";
import Img from "assets/img/image 74.svg";
import VideoRank from "components/Common/VideoRank";

interface Props {
  title: string;
  description: string;
}

const WakeupSongList = ({ title, description }: Props) => {
  return (
    <S.Container>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
      <S.VideoWrap>
        {Array.from({ length: 5 }).map((_, idx) => (
          <VideoRank
            num={idx + 1}
            title="TWS (투어스) '첫 만남은 계획대로 되"
            label="HYBE LABELS"
            img={Img}
          />
        ))}
      </S.VideoWrap>
    </S.Container>
  );
};

export default WakeupSongList;
