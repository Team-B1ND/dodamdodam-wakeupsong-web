import { DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import MelonChart from "components/Common/VideoRank/MelonChart";
import PendingWakeupSong from "components/Common/VideoRank/PendingWakeupSong";
import {
  MelonChartListType,
  MelonKeyword,
} from "repository/MelonChart/melonChart.param";
import { WakeupSongMusicType } from "types/WakeupSong/wakeupSong.type";
import { BroadcastClubMemberResponse } from "types/Member/member.type";
import ToolTip from "components/Common/ToolTip";
import { useRecoilValue } from "recoil";
import { VisitCount } from "store/ToolTip/toolTip.store";
import { TOOL_TIP_KEY } from "constants/ToolTip/toolTip.constants";
import { useEffect } from "react";
import token from "libs/Token/token";
import { April_Fools_Day_Theme } from "style/theme";

interface Props {
  title: string;
  description: string;
  isEnabled: boolean;
  wakeupSongList: MelonChartListType[] | WakeupSongMusicType[];

  // melonChart
  isHideToolTip?: boolean;
  melonChartInfo?: MelonKeyword;
  handleClickMelonChart?: (id: number, title: string, label: string) => void;
  handleClickMelonChartApply?: () => void;

  // pendingWakeupSong
  musicInfoId?: number;
  isBroadcastClubMember?: BroadcastClubMemberResponse;
  handleClickWakeupSong?: (id: number) => void;
  hanldeWakeupSongAllow?: () => void;
  hanldeWakeupSongDeny?: () => void;
}

const WakeupSongList = ({
  title,
  description,
  isEnabled,
  isHideToolTip,
  melonChartInfo,
  musicInfoId,
  wakeupSongList,
  isBroadcastClubMember,
  handleClickMelonChart,
  handleClickWakeupSong,
  handleClickMelonChartApply,
  hanldeWakeupSongAllow,
  hanldeWakeupSongDeny,
}: Props) => {
  const visitCount = useRecoilValue(VisitCount);

  // 로딩될때마다 방문한 수 증가
  useEffect(() => {
    token.setToken(TOOL_TIP_KEY, (visitCount + 1).toString());
  }, [visitCount]);

  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        {title === "멜론 차트" && !visitCount && (
          <ToolTip isHideToolTip={isHideToolTip!} />
        )}
        {title === "멜론 차트"
          ? melonChartInfo?.title &&
            melonChartInfo?.artist && (
              <DodamFilledButton
                size="Small"
                text="신청"
                width={80}
                enabled={isEnabled}
                textTheme="staticWhite"
                typography={["Label", "Bold"]}
                customStyle={{
                  minHeight: "37px",
                  backgroundColor: April_Fools_Day_Theme.primaryNormal,
                }}
                onClick={handleClickMelonChartApply}
              />
            )
          : isBroadcastClubMember?.data &&
            musicInfoId !== undefined && (
              <S.ButtonWrap>
                <DodamFilledButton
                  size="Small"
                  text="승인"
                  width={70}
                  enabled={isEnabled}
                  textTheme="staticWhite"
                  typography={["Label", "Bold"]}
                  customStyle={{
                    minHeight: "37px",
                    backgroundColor: April_Fools_Day_Theme.primaryNormal,
                  }}
                  onClick={hanldeWakeupSongAllow}
                />
                <DodamFilledButton
                  size="Small"
                  text="거절"
                  width={70}
                  enabled={isEnabled}
                  textTheme="staticWhite"
                  backgroundColorType="Negative"
                  typography={["Label", "Bold"]}
                  customStyle={{
                    minHeight: "37px",
                    backgroundColor: April_Fools_Day_Theme.primaryAlternative,
                  }}
                  onClick={hanldeWakeupSongDeny}
                />
              </S.ButtonWrap>
            )}
      </S.Wrap>
      <S.VideoWrap>
        {wakeupSongList.map((item, idx) => {
          if (title === "멜론 차트") {
            const MelonChartItem = item as MelonChartListType;
            return (
              <MelonChart
                key={MelonChartItem.rank}
                rank={MelonChartItem.rank}
                title={MelonChartItem.name}
                label={MelonChartItem.artist}
                img={MelonChartItem.thumbnail}
                isAtv={MelonChartItem.isAtv}
                onClick={handleClickMelonChart}
              />
            );
          } else {
            const PendingWakeupSongItem = item as WakeupSongMusicType;
            return (
              <PendingWakeupSong
                key={PendingWakeupSongItem.id}
                id={PendingWakeupSongItem.id}
                rank={idx + 1}
                title={PendingWakeupSongItem.videoTitle}
                label={PendingWakeupSongItem.channelTitle}
                url={PendingWakeupSongItem.videoUrl}
                img={PendingWakeupSongItem.thumbnail}
                isAtv={PendingWakeupSongItem.isAtv}
                isBroadCast={isBroadcastClubMember?.data!}
                handleClickWakeupSong={handleClickWakeupSong}
              />
            );
          }
        })}
      </S.VideoWrap>
    </S.Container>
  );
};

export default WakeupSongList;
