import Title from "components/common/Title";
import * as S from "./style";
import ErrorBoundary from "components/common/ErrorBoundary";
import { Suspense } from "react";
import Loading from "components/common/Loading";
import ApproveMusicStore from "./ApproveMusicStore";
import { useRecoilState } from "recoil";
import { WakeupSongDate } from "store/reducer";

const ApproveMusic = () => {
  const [date, setDate] = useRecoilState(WakeupSongDate);

  const onChangeDate = () => {
    setDate((prev) => (prev === "today" ? "tomorrow" : "today"));
  };

  return (
    <S.ApproveMusicContainer>
      <S.TitleWrap>
        {date === "today" ? (
          <Title
            titleMent={"오늘의 기상송"}
            subTitleMent={"오늘 나온 기상송은 어땠나요?"}
          />
        ) : (
          <Title
            titleMent={"내일의 기상송"}
            subTitleMent={"내일 나올 기상송은 어떤가요?"}
          />
        )}
        <S.MusicChangeButton nowDate={date} onClick={onChangeDate}>
          {date === "today" ? "오늘의 기상송" : "내일의 기상송"}
        </S.MusicChangeButton>
      </S.TitleWrap>
      <ErrorBoundary fallback={<div>error...</div>}>
        <Suspense fallback={<Loading />}>
          <ApproveMusicStore />
        </Suspense>
      </ErrorBoundary>
    </S.ApproveMusicContainer>
  );
};

export default ApproveMusic;
