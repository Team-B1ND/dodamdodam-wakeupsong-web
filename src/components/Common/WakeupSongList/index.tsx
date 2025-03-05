import { DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import VideoRank from "components/Common/VideoRank";
import {
  MelonChartListType,
  MelonKeyword,
} from "repository/MelonChart/melonChart.param";

interface Props {
  title: string;
  description: string;
  wakeupSongList: MelonChartListType[];
  melonChartInfo?: MelonKeyword;
  handleClickWakeupSong?: (id: number, title: string, label: string) => void;
  handleClickMelonChartApply?: () => void;
}

const WakeupSongList = ({
  title,
  description,
  melonChartInfo,
  wakeupSongList,
  handleClickWakeupSong,
  handleClickMelonChartApply,
}: Props) => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        {melonChartInfo?.title && melonChartInfo?.artist && (
          <DodamFilledButton
            size="Small"
            text="신청"
            width={80}
            textTheme="staticWhite"
            typography={["Label", "Bold"]}
            customStyle={{ minHeight: "37px" }}
            onClick={handleClickMelonChartApply}
          />
        )}
      </S.Wrap>
      <S.VideoWrap>
        {wakeupSongList.map((item) => (
          <VideoRank
            key={item.rank}
            rank={item.rank}
            title={item.name}
            label={item.artist}
            img={item.thumbnail}
            isAtv={item.isAtv}
            onClick={handleClickWakeupSong}
          />
        ))}
      </S.VideoWrap>
    </S.Container>
  );
};

export default WakeupSongList;
