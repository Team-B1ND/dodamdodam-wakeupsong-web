import * as S from "./style";

interface Props {
  title: string;
  label: string;
  date?: string;
  img: string;
}

const Video = ({ title, label, date, img }: Props) => {
  return (
    <S.Container>
      <S.VideoImg src={img} />
      <S.VideoInfo>
        <S.VideoTitle>{title}</S.VideoTitle>
        <S.VideoLabel>{label}</S.VideoLabel>
        <S.VideoDate>{date}</S.VideoDate>
      </S.VideoInfo>
    </S.Container>
  );
};

export default Video;
