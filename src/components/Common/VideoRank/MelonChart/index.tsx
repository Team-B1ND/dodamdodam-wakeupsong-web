import textTransform from "utils/Text/textTransform";
import * as S from "./style";

interface Props {
  rank: number;
  title: string;
  label: string;
  img: string;
  isAtv: boolean;
  onClick?: (id: number, title: string, label: string) => void;
}

const MelonChart = ({ rank, title, label, img, isAtv, onClick }: Props) => {
  return (
    <S.Container isAtv={isAtv} onClick={() => onClick!(rank, title, label)}>
      <S.VideoRank>{rank}</S.VideoRank>
      <S.Wrap>
        <S.VideoImg src={img} />
        <S.VideoInfo>
          <S.VideoTitle>{textTransform.ellipsis(title, 50)}</S.VideoTitle>
          <S.VideoLabel>{label}</S.VideoLabel>
        </S.VideoInfo>
      </S.Wrap>
    </S.Container>
  );
};

export default MelonChart;
