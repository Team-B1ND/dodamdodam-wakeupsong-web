import Title from "components/Common/Title";
import useWakeupSongDibs from "hooks/wakeupSongDibs/useWakeupSongDibs";
import { useEffect } from "react";
import * as Style from "./Storage.style";


const Storage = () => {

  const { getWakeupSongDibs, dibsMusicLists } = useWakeupSongDibs();

  useEffect(() => {
    getWakeupSongDibs();
  })

  return (
    <Style.StorageWrapContainer>
      <Style.StorageListContainer>
        <Title titleMent={"보관함"} subTitleMent={""} />
        {dibsMusicLists && <div />}
      </Style.StorageListContainer>
    </Style.StorageWrapContainer>
  );
};

export default Storage;
