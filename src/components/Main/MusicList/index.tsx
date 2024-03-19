import * as S from "./style";
import Title from "components/common/Title";
import { useRecoilState } from "recoil";
import { allowMusicInfoIdAtom } from "store/reducer";
import useWakeupSongDecision from "hooks/wakeupSongDecision/useWakeupSongDecision";
import { useGetPendingMusicListQuery } from "queries/wakeupSong/wakeupSong.query";
import { toast } from "react-toastify";
import { useGetBroadcastClubMemberCheckQuery } from "queries/Member/member.query";

const MusicList = () => {
  const [musicInfoId, setMusicInfoId] = useRecoilState(allowMusicInfoIdAtom);
  const { handleWakeupSongDecision } = useWakeupSongDecision();

  const PendingMusicListData = useGetPendingMusicListQuery().data?.data.slice(
    0,
    16
  );

  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberCheckQuery();

  return (
    <S.MusicListContainer>
      <S.TitleContainer>
        <Title
          titleMent={"신청 현황"}
          subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
        />
        <S.SeeMore to={"/pendingmusic"}>더보기</S.SeeMore>
      </S.TitleContainer>

      <S.MusicListWrapper>
        {PendingMusicListData?.length! > 0 &&
          PendingMusicListData?.map((item, idx) => {
            const createdDate = item.createdAt.split(" ")[0];

            return (
              <S.MusicContainer
                key={idx}
                onClick={() => setMusicInfoId(item.id)}
              >
                <S.MusicTumbnailImg
                  src={item.thumbnailUrl}
                  onClick={() => window.open(item.videoUrl)}
                />

                <S.TitleWrap>
                  <S.TitleTopContainer>
                    <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
                  </S.TitleTopContainer>

                  <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
                  <S.CreatedDateContainer>
                    <S.ApplyDayAndDateText type="DAY">
                      신청일
                    </S.ApplyDayAndDateText>
                    <S.ApplyDayAndDateText type="DATE">
                      {createdDate}
                    </S.ApplyDayAndDateText>
                  </S.CreatedDateContainer>
                </S.TitleWrap>
              </S.MusicContainer>
            );
          })}
      </S.MusicListWrapper>

      {isBroadcastClubMember?.data && (
        <S.ApplyBtnContainer>
          <S.AllowAndDenyBtn
            buttonType="ALLOW"
            onClick={() =>
              handleWakeupSongDecision({ musicInfoId, decisionType: "ALLOW" })
            }
          >
            승인
          </S.AllowAndDenyBtn>
          <S.AllowAndDenyBtn
            buttonType="DENY"
            onClick={() =>
              handleWakeupSongDecision({ musicInfoId, decisionType: "DENY" })
            }
          >
            거절
          </S.AllowAndDenyBtn>
        </S.ApplyBtnContainer>
      )}
    </S.MusicListContainer>
  );
};

export default MusicList;
