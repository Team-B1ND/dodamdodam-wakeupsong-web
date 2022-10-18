import Title from "components/Common/Title";
import useWakeupSongDibs from "hooks/wakeupSongDibs/useWakeupSongDibs";
import { useEffect } from "react";
import * as S from "./Storage.style";


const Storage = () => {

  const { getWakeupSongDibs, dibsMusicLists } = useWakeupSongDibs();

  useEffect(() => {
    getWakeupSongDibs();
  }, [])

  return (
    <S.StorageWrapContainer>
      <S.StorageListContainer>
        <Title titleMent={"보관함"} subTitleMent={""} />
        {dibsMusicLists && <div />}
      </S.StorageListContainer>
    </S.StorageWrapContainer>
  );
};

export default Storage;
