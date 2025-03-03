import * as S from "./style";

interface Props {
  num: number;
  title: string;
  label: string;
  img: string;
}

const VideoRank = ({ num, title, label, img }: Props) => {
  return (
    <S.Container>
      <S.VideoNum>{num}</S.VideoNum>
      <S.Wrap>
        <S.VideoImg src={img} />
        <S.VideoInfo>
          <S.VideoTitle>{title}</S.VideoTitle>
          <S.VideoLabel>{label}</S.VideoLabel>
        </S.VideoInfo>
      </S.Wrap>
    </S.Container>
  );
};

export default VideoRank;
