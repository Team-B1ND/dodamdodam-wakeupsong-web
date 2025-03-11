import * as S from "./style";
import { DodamFilledButton, DodamFilledTextField } from "@b1nd/dds-web";
import useApplyWakeupSong from "hooks/ApplyWakeupSong/useApplyWakeupSong";

const ApplyWakeupSong = () => {
  const { ...applyWakeupSong } = useApplyWakeupSong();

  return (
    <S.Container>
      <S.Title>기상송 신청</S.Title>
      <DodamFilledTextField
        type="text"
        label=""
        value={applyWakeupSong.value}
        isError={applyWakeupSong.isError}
        onChange={applyWakeupSong.handleChangeValue}
        onKeyDown={applyWakeupSong.handleKeyDown}
        onRemoveClick={applyWakeupSong.handleRemoveClick}
        placeholder="제목, 아티스트 혹은 링크"
        customStyle={{ height: "62px" }}
      />
      <DodamFilledButton
        size="Large"
        textTheme="staticWhite"
        customStyle={{ userSelect: "none" }}
        onClick={() => applyWakeupSong.handleClickPostWakeupSong()}>
        신청
      </DodamFilledButton>
    </S.Container>
  );
};

export default ApplyWakeupSong;
