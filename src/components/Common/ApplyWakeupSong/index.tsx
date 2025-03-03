import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";

const ApplyWakeupSong = () => {
  return (
    <S.Container>
      <S.Title>기상송 신청</S.Title>
      <S.Input placeholder="제목, 아티스트 혹은 링크"></S.Input>
      <DodamFilledButton
        size="Large"
        textTheme="staticWhite"
        customStyle={{ userSelect: "none" }}
        onClick={() => console.log("기상송 신청")}>
        신청
      </DodamFilledButton>
    </S.Container>
  );
};

export default ApplyWakeupSong;
