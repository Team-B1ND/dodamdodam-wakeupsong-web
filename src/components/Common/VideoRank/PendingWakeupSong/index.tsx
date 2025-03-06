import * as S from "./style";

interface Props {
  id: number;
  rank: number;
  title: string;
  label: string;
  img: string;
  isAtv: boolean;
  isBroadCast: boolean;
  handleClickWakeupSong?: (id: number) => void;
}

const PendingWakeupSong = ({
  id,
  rank,
  title,
  label,
  img,
  isAtv,
  isBroadCast,
  handleClickWakeupSong,
}: Props) => {
  return (
    <S.Container
      isAtv={isAtv}
      isBroadCast={isBroadCast}
      onClick={() => handleClickWakeupSong!(id)}>
      <S.VideoRank isAtv={isAtv} isBroadCast={isBroadCast}>{rank}</S.VideoRank>
      <S.Wrap>
        <S.VideoImg src={img} />
        <S.VideoInfo>
          <S.VideoTitle isAtv={isAtv} isBroadCast={isBroadCast}>{title}</S.VideoTitle>
          <S.VideoLabel isAtv={isAtv} isBroadCast={isBroadCast}>{label}</S.VideoLabel>
        </S.VideoInfo>
      </S.Wrap>
    </S.Container>
  );
};

export default PendingWakeupSong;
