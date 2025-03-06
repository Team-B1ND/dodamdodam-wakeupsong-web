import * as S from "./style";

interface Props {
  id: number;
  rank: number;
  title: string;
  label: string;
  img: string;
  isAtv: boolean;
  handleClickWakeupSong?: (id: number) => void;
}

const PendingWakeupSong = ({ id, rank, title, label, img, isAtv, handleClickWakeupSong }: Props) => {
  return (
    <S.Container isAtv={isAtv} onClick={() => handleClickWakeupSong!(id)}>
      <S.VideoRank>{rank}</S.VideoRank>
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

export default PendingWakeupSong;
