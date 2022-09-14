import Title from "components/Common/Title";
import * as S from "./ApplyMusic.style";

const ApplyMusic = () => {
  return (
    <S.ApplyMusicContainer>
      <Title titleMent={"기상송 신청"} subTitleMent={"원하는 곡의 링크를 올려주세요!"} />

      <S.ApplyContainer onSubmit={(e) => {
        e.preventDefault();
        console.log("신청");
      }}>
        <S.ApplyUrlInput type={"text"} placeholder="https://www.youtube.com/watch?v=" />
        <S.ApplyUrlSubmitBtn>신청하기</S.ApplyUrlSubmitBtn>
      </S.ApplyContainer>

    </S.ApplyMusicContainer >
  );
};

export default ApplyMusic;
