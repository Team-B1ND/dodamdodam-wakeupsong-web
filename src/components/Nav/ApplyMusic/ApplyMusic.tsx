import Title from "components/Common/Title";
import useApplyWakeupSong from "hooks/applyWakeupSong/useApplyWakeupSong";
import * as Style from "./ApplyMusic.style";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isApplyMusicBtn } from "store/reducer";
import { Suspense } from "react";
import ErrorBoundary from "components/Common/Errorboundary/Errordata";

const ApplyMusic = () => {
  const [applyUrl, setApplyUrl] = useState<string>("");
  const { isApply } = useRecoilValue(isApplyMusicBtn);
  const { postApplyWakeupSong, usePostApplyMusicMutation } =
    useApplyWakeupSong();

  return (
    <Style.ApplyMusicContainer>
      <Title
        titleMent={"기상송 신청"}
        subTitleMent={"원하는 곡의 링크를 올려주세요!"}
      />
      <Style.ApplyContainer
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Style.ApplyUrlInput
          type={"text"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setApplyUrl(e.target.value)
          }
          placeholder="https://www.youtube.com/watch?v="
        />
        <Style.ApplyUrlSubmitBtn
          disabled={isApply}
          isLoading={isApply}
          onClick={() => postApplyWakeupSong(applyUrl)}
        >
          신청하기
        </Style.ApplyUrlSubmitBtn>
      </Style.ApplyContainer>
    </Style.ApplyMusicContainer>
  );
};

export default ApplyMusic;
